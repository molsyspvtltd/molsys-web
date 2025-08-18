import React from 'react';
import '../styles/CancerTestCard.css';

const CancerTestCard = ({ test, isExpanded, onToggleExpand }) => {
  const testId = test['Test Name'].replace(/\s+/g, '-').toLowerCase();
  const cancerTypes = test['Target Cancer Type(s)'].split(',').map(type => type.trim()).filter(type => type.length > 0);

  const handleCardClick = () => {
    onToggleExpand(testId);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardClick();
    }
  };

  return (
    <div
      className={`test-card ${isExpanded ? 'expanded' : ''}`}
      tabIndex="0"
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
    >
      <button
        className={`expand-btn ${isExpanded ? 'expanded' : ''}`}
        aria-label={isExpanded ? 'Collapse test details' : 'Expand test details'}
        onClick={(e) => {
          e.stopPropagation();
          handleCardClick();
        }}
      >
        {isExpanded ? '−' : '+'}
      </button>

      <div className="test-card-header">
        <h3 className="test-name">{test['Test Name']}</h3>
        <div className="test-meta">
          <span className="test-type">{test['Type of test']}</span>
          <span className="test-cost">₹{test.Cost}</span>
        </div>
      </div>

      <div className="test-card-body">
        <div className="test-summary">
          <h4>Clinical Utility</h4>
          <p>{test['Clinical Utility']}</p>
        </div>

        <div className="test-meta-additional">
          {test['Turnaround Time'] && (
            <div className="meta-item">
              <span className="meta-label">Turnaround:</span>
              <span className="meta-value">{test['Turnaround Time']}</span>
            </div>
          )}
        </div>

        <div className="cancer-types">
          {cancerTypes.map((type, index) => (
            <span key={index} className="cancer-type">{type}</span>
          ))}
        </div>

        <div className={`test-details ${isExpanded ? 'expanded' : ''}`}>
          <div className="detail-section">
            <h5>Best Fit Oncologist</h5>
            <p>{test['Best Fit Oncologist'].split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}</p>
          </div>

          <div className="detail-section">
            <h5>Genetic Information Analyzed</h5>
            <p>{test['Genetic Information Analyzed']}</p>
          </div>

          <div className="detail-section">
            <h5>Use Case Scenario</h5>
            <p>{test['Use Case Scenario'].split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancerTestCard;