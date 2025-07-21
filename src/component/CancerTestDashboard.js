import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import CancerTestStats from './CancerTestStats';
import CancerTestFilters from './CancerTestFilters';
import CancerTestCard from './CancerTestCard';
import '../styles/CancerTestDashboard.css';

const testData = [
    {
        "Test Name": "BRACAnalysis CDx",
        "Type of test": "Germline Diagnostic",
        "Best Fit Oncologist": "Medical Oncologist (for treatment selection)\nSurgical Oncologist (for risk assessment in early breast/ovarian cancer)",
        "Genetic Information Analyzed": "BRCA1/2 mutations (germline and/or somatic)",
        "Clinical Utility": "Guides selection of PARP inhibitor therapy.",
        "Use Case Scenario": "Identifying cancer patients for PARP inhibitor treatment (specific targeted therapies).",
        "Target Cancer Type(s)": "Ovarian Cancer, Breast, Pancreatic, Prostate",
        "Cost": "3.1 L"
    },
    {
        "Test Name": "EndoPredict",
        "Type of test": "Tumor Prognostic",
        "Best Fit Oncologist": "Medical Oncologist\nSurgical Oncologist (for adjuvant therapy planning)",
        "Genetic Information Analyzed": "12-gene molecular score combined with tumor stage and nodal status (EPclin score).",
        "Clinical Utility": "Predicts recurrence risk up to 15 years; identifies low-risk patients who can safely avoid unnecessary chemotherapy/extended endocrine therapy.",
        "Use Case Scenario": "Whether you need extra treatments like chemotherapy or hormone therapy\nHow long these extra treatments should continue\nWhich patients might be able to get by with less intensive treatment",
        "Target Cancer Type(s)": "ER+, HER2– Breast Cancer (Node-negative and Node-positive)",
        "Cost": "3.1 L"
    },
    {
        "Test Name": "myChoice CDx",
        "Type of test": "Tumor Diagnostic (HRD)",
        "Best Fit Oncologist": "Medical Oncologist",
        "Genetic Information Analyzed": "BRCA1/2 (sequence variants, large rearrangements) and Genomic Instability Score (GIS: LOH, TAI, LST).",
        "Clinical Utility": "Identifies HRD+ patients (including those with non-BRCA HRD) who benefit from PARP inhibitors; recognized by ASCO guidelines.",
        "Use Case Scenario": "determine Homologous Recombination Deficiency (HRD) status for PARP inhibitor eligibility",
        "Target Cancer Type(s)": "Ovarian Cancer",
        "Cost": "5.1 L"
    },
    {
        "Test Name": "MyRisk Germline Test",
        "Type of test": "Germline Multi-Gene Panel",
        "Best Fit Oncologist": "Medical Oncologist (for treatment and surveillance)\nSurgical Oncologist (for risk-reducing surgeries)\nRadiation Oncologist (for treatment planning)",
        "Genetic Information Analyzed": "48 clinically actionable genes; includes VUS classification, RNA analysis, and for breast cancer, a polygenic risk score (RiskScore).",
        "Clinical Utility": "Guides treatment decisions (e.g., PARP inhibitor eligibility for germline BRCA)\nIdentifies risk for secondary cancers\nInforms personalized surveillance/prevention strategies\nFacilitates family risk assessment",
        "Use Case Scenario": "Diagnosed patients: treatment guidance, secondary cancer risk. Undiagnosed patients with family history: personalized risk assessment, prevention planning.",
        "Target Cancer Type(s)": "Breast, Ovarian, Prostate, Pancreatic, Uterine, Colorectal, Skin, Gastric, Renal, Lung, Endocrine, and other cancers",
        "Cost": "3.1 L"
    },
    {
        "Test Name": "MyRisk Hereditary Cancer Risk Test",
        "Type of test": "Germline Multi-Gene Panel",
        "Best Fit Oncologist": "Medical Oncologist (for risk management)\nSurgical Oncologist (for risk-reducing procedures)\nGenetic Counselor",
        "Genetic Information Analyzed": "Same 48-gene panel as myRisk Germline.\nRiskScore for personalized 5-year and lifetime breast cancer risk",
        "Clinical Utility": "Hereditary cancer risk assessment for individuals with a family history of cancer or personal history of certain cancers (assess second primary risk). Guides personalized screening, prevention, and risk management strategies",
        "Use Case Scenario": "Comprehensive germline test for hereditary cancer risk assessment and management",
        "Target Cancer Type(s)": "Breast, Ovarian, Prostate, Pancreatic, Uterine, Colorectal, Skin, Gastric, Renal, Lung, Endocrine, and other cancers",
        "Cost": "3.1 L"
    },
    {
        "Test Name": "Prolaris",
        "Type of test": "Tumor Prognostic",
        "Best Fit Oncologist": "Urologist\nRadiation Oncologist\nMedical Oncologist (for systemic therapy decisions)",
        "Genetic Information Analyzed": "Genomic Cell Cycle Progression (CCP) (measure of tumor aggressiveness) score combined with clin-path features.\n2x more prognostic than PSA/Gleason alone",
        "Clinical Utility": "Predicts prostate cancer aggressiveness\nIdentifies candidates for active surveillance\nGuides decisions on single-modal vs. multi-modal therapy\nInforms ADT discussions",
        "Use Case Scenario": "Determining appropriateness of active surveillance (aggressiveness); guiding intensity of primary treatment (surgery/radiation); assessing benefit of ADT.",
        "Target Cancer Type(s)": "Prostate Cancer",
        "Cost": "4.1 L"
    }
];

const CancerTestDashboard = () => {
    const [filteredTests, setFilteredTests] = useState([...testData]);
    const [expandedCards, setExpandedCards] = useState(new Set());
    const [isLoading, setIsLoading] = useState(true);
    const history = useHistory();

    useEffect(() => {
        // Simulate loading data
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const handleRequestClick = () => {
        if (history.location.pathname !== '/request-test') {
            history.push('/request-test');
        }
    };

    const toggleCardExpansion = (testId) => {
        setExpandedCards(prev => {
            const newSet = new Set(prev);
            if (newSet.has(testId)) {
                newSet.delete(testId);
            } else {
                newSet.add(testId);
            }
            return newSet;
        });
    };

    const handleFilterChange = (newFilteredTests) => {
        setFilteredTests(newFilteredTests);
    };

    if (isLoading) {
        return (
            <div className="loading-overlay">
                <div className="dna-loader">
                    <div className="dna-strand"></div>
                    <div className="dna-strand"></div>
                </div>
                <p className="loading-text">Loading Genetic Tests...</p>
            </div>
        );
    }

    return (
        <div className="cancer-test-dashboard">
            <header className="dashboard-header">
                <div className="header-content">
                    <div className="header-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
                        </svg>
                    </div>
                    <div className="header-text">
                        <h1>Cancer Genetic Services</h1>
                        <p className="subtitle">Precision oncology through advanced genetic testing</p>
                    </div>
                </div>
                <div className="header-actions">
                    <button
                        className="btn btn--primary"
                        onClick={handleRequestClick}
                    >
                        Request Test Consultation
                    </button>
                </div>
            </header>

            <main className="dashboard-main">
                <CancerTestStats totalTests={testData.length} shownTests={filteredTests.length} />

                <CancerTestFilters
                    testData={testData}
                    onFilterChange={handleFilterChange}
                />

                <section className="tests-section">
                    {filteredTests.length === 0 ? (
                        <div className="no-results">
                            <div className="no-results-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                </svg>
                            </div>
                            <h3>No Tests Found</h3>
                            <p>Try adjusting your search or filter criteria</p>
                            <button
                                className="btn btn--primary"
                                onClick={() => history.push('/cancer')}
                            >
                                Reset Filters
                            </button>
                        </div>
                    ) : (
                        <div className="tests-grid">
                            {filteredTests.map(test => (
                                <CancerTestCard
                                    key={test['Test Name']}
                                    test={test}
                                    isExpanded={expandedCards.has(test['Test Name'].replace(/\s+/g, '-').toLowerCase())}
                                    onToggleExpand={toggleCardExpansion}
                                />
                            ))}
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
};

export default CancerTestDashboard;