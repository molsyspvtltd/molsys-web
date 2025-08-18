import React, { useState, useEffect } from 'react';
import '../styles/CancerTestFilters.css';

const CancerTestFilters = ({ testData, onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTestType, setSelectedTestType] = useState('');
  const [selectedCancerType, setSelectedCancerType] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [testTypes, setTestTypes] = useState([]);
  const [cancerTypes, setCancerTypes] = useState([]);
  const [selectedTurnaround, setSelectedTurnaround] = useState('');
  const [uniqueTurnaroundTimes, setUniqueTurnaroundTimes] = useState([]);

  useEffect(() => {
    // Initialize filter options
    const uniqueTestTypes = [...new Set(testData.map(test => test['Type of test']))];
    setTestTypes(uniqueTestTypes);

    const turnaroundTimes = [...new Set(testData
      .map(test => test['Turnaround Time'])
      .filter(time => time && time.trim() !== '')
    )].sort();
    setUniqueTurnaroundTimes(turnaroundTimes);

    const allCancerTypes = new Set();
    testData.forEach(test => {
      const types = test['Target Cancer Type(s)'].split(',')
        .map(type => type.trim())
        .filter(type => type.length > 0);
      types.forEach(type => allCancerTypes.add(type));
    });
    setCancerTypes([...allCancerTypes].sort());
  }, [testData]);

  useEffect(() => {
    filterTests();
  }, [searchTerm, selectedTestType, selectedCancerType, sortBy, selectedTurnaround]);

  const parseCost = (costStr) => {
    if (!costStr) return 0;

    if (costStr.includes(' L')) {
      return parseFloat(costStr.replace(' L', '')) * 100000;
    }

    const numericStr = costStr.replace(/,/g, '');
    return parseFloat(numericStr) || 0;
  };

  const filterTests = () => {
    let filtered = [...testData];

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(test =>
        Object.values(test).some(
          value => value &&
            value.toString().toLowerCase().includes(term)
        )
      );
    }

    if (selectedTestType) {
      filtered = filtered.filter(test =>
        test['Type of test'] === selectedTestType
      );
    }

    if (selectedCancerType) {
      filtered = filtered.filter(test => {
        const testCancerTypes = test['Target Cancer Type(s)']
          .split(',')
          .map(type => type.trim().toLowerCase());
        return testCancerTypes.includes(selectedCancerType.toLowerCase());
      });
    }

    if (selectedTurnaround) {
      filtered = filtered.filter(test =>
        test['Turnaround Time'] === selectedTurnaround
      );
    }

    // Improved sorting with secondary criteria
    filtered.sort((a, b) => {
      let primarySort = 0;
      switch (sortBy) {
        case 'name':
          primarySort = a['Test Name'].localeCompare(b['Test Name']);
          if (primarySort === 0) {
            return a['Type of test'].localeCompare(b['Type of test']);
          }
          return primarySort;
        case 'cost-low':
          return parseCost(a.Cost) - parseCost(b.Cost) ||
            a['Test Name'].localeCompare(b['Test Name']);
        case 'cost-high':
          return parseCost(b.Cost) - parseCost(a.Cost) ||
            a['Test Name'].localeCompare(b['Test Name']);
        case 'type':
          primarySort = a['Type of test'].localeCompare(b['Type of test']);
          if (primarySort === 0) {
            return a['Test Name'].localeCompare(b['Test Name']);
          }
          return primarySort;
        default:
          return 0;
      }
    });

    onFilterChange(filtered);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedTestType('');
    setSelectedCancerType('');
    setSelectedTurnaround('');
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
            placeholder="Search tests..."
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
          <label className="filter-label">Turnaround Time</label>
          <select
            className="filter-select"
            value={selectedTurnaround}
            onChange={(e) => setSelectedTurnaround(e.target.value)}
          >
            <option value="">Any Time</option>
            {uniqueTurnaroundTimes.map((time, index) => (
              <option key={index} value={time}>{time}</option>
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