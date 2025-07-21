import React from 'react';
import '../styles/CancerTestStats.css';

const CancerTestStats = ({ totalTests, shownTests }) => {
  const testCategories = [
    { name: 'Germline Diagnostic', count: 2 },
    { name: 'Tumor Prognostic', count: 2 },
    { name: 'Tumor Diagnostic', count: 1 },
    { name: 'Germline Multi-Gene', count: 2 }
  ];

  return (
    <div className="stats-dashboard">
      <div className="stat-card">
        <div className="stat-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M8 17l4 4 4-4m-4-5v9" />
            <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29" />
          </svg>
        </div>
        <div className="stat-content">
          <div className="stat-number">{totalTests}</div>
          <div className="stat-label">Total Tests</div>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M21 21l-6-6m6 6v-4.8m0 4.8h-4.8" />
            <path d="M3 16.2V21m0 0h4.8M3 21l6-6" />
            <path d="M21 7.8V3m0 0h-4.8M21 3l-6 6" />
            <path d="M3 7.8V3m0 0h4.8M3 3l6 6" />
          </svg>
        </div>
        <div className="stat-content">
          <div className="stat-number">{shownTests}</div>
          <div className="stat-label">Matching Tests</div>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
          </svg>
        </div>
        <div className="stat-content">
          <div className="stat-number">{testCategories.length}</div>
          <div className="stat-label">Test Categories</div>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
          </svg>
        </div>
        <div className="stat-content">
          <div className="stat-number">6+</div>
          <div className="stat-label">Cancer Types</div>
        </div>
      </div>
    </div>
  );
};

export default CancerTestStats;