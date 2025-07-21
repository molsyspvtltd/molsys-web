import React, { useState, useEffect } from 'react';
import '../styles/CancerTestFilters.css';

const CancerTestFilters = ({ testData, onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTestType, setSelectedTestType] = useState('');
  const [selectedCancerType, setSelectedCancerType] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [testTypes, setTestTypes] = useState([]);
  const [cancerTypes, setCancerTypes] = useState([]);

  useEffect(() => {
    // Initialize filter options
    const uniqueTestTypes = [...new Set(testData.map(test => test['Type of test']))];
    setTestTypes(uniqueTestTypes);

    const allCancerTypes = new Set();
    testData.forEach(test => {
      test['Target Cancer Type(s)'].split(',').map(type => type.trim()).forEach(type => {
        if (type) allCancerTypes.add(type);
      });
    });
    setCancerTypes([...allCancerTypes].sort());
  }, [testData]);

  useEffect(() => {
    filterTests();
  }, [searchTerm, selectedTestType, selectedCancerType, sortBy, testData]);

  const parseCost = (costStr) => parseFloat(costStr.replace(' L', ''));

  const filterTests = () => {
    let filtered = [...testData];
    
    // Apply filters
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(test => 
        test['Test Name'].toLowerCase().includes(term) ||
        test['Type of test'].toLowerCase().includes(term) ||
        test['Clinical Utility'].toLowerCase().includes(term) ||
        test['Target Cancer Type(s)'].toLowerCase().includes(term) ||
        test['Use Case Scenario'].toLowerCase().includes(term) ||
        test['Best Fit Oncologist'].toLowerCase().includes(term) ||
        test['Genetic Information Analyzed'].toLowerCase().includes(term)
      );
    }

    if (selectedTestType) {
      filtered = filtered.filter(test => test['Type of test'] === selectedTestType);
    }

    if (selectedCancerType) {
      filtered = filtered.filter(test => 
        test['Target Cancer Type(s)'].toLowerCase().includes(selectedCancerType.toLowerCase())
      );
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name': return a['Test Name'].localeCompare(b['Test Name']);
        case 'cost-low': return parseCost(a.Cost) - parseCost(b.Cost);
        case 'cost-high': return parseCost(b.Cost) - parseCost(a.Cost);
        case 'type': return a['Type of test'].localeCompare(b['Type of test']);
        default: return 0;
      }
    });

    onFilterChange(filtered);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedTestType('');
    setSelectedCancerType('');
    setSortBy('name');
  };

  return (
    <div className="controls-section">
      <div className="search-container">
        <div className="search-input-wrapper">
          <div className="search-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </div>
          <input
            type="text"
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button 
              className="search-clear visible"
              onClick={() => setSearchTerm('')}
              aria-label="Clear search"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      <div className="filters-container">
        <div className="filter-group">
          <label className="filter-label">Test Type</label>
          <select
            className="filter-select"
            value={selectedTestType}
            onChange={(e) => setSelectedTestType(e.target.value)}
          >
            <option value="">All Types</option>
            {testTypes.map((type, index) => (
              <option key={index} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label className="filter-label">Cancer Type</label>
          <select
            className="filter-select"
            value={selectedCancerType}
            onChange={(e) => setSelectedCancerType(e.target.value)}
          >
            <option value="">All Types</option>
            {cancerTypes.map((type, index) => (
              <option key={index} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label className="filter-label">Sort By</label>
          <select
            className="filter-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="name">Name (A-Z)</option>
            <option value="cost-low">Cost (Low to High)</option>
            <option value="cost-high">Cost (High to Low)</option>
            <option value="type">Test Type</option>
          </select>
        </div>

        <div className="filter-actions">
          <button 
            className="btn btn--secondary"
            onClick={clearFilters}
          >
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default CancerTestFilters;