import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import CancerTestStats from './CancerTestStats';
import CancerTestFilters from './CancerTestFilters';
import CancerTestCard from './CancerTestCard';
import '../styles/CancerTestDashboard.css';

const testData = [
    // {
    //     "Test Name": "BRACAnalysis CDx",
    //     "Type of test": "Germline Diagnostic",
    //     "Best Fit Oncologist": "Medical Oncologist (for treatment selection)\nSurgical Oncologist (for risk assessment in early breast/ovarian cancer)",
    //     "Genetic Information Analyzed": "BRCA1/2 mutations (germline and/or somatic)",
    //     "Clinical Utility": "Guides selection of PARP inhibitor therapy.",
    //     "Use Case Scenario": "Identifying cancer patients for PARP inhibitor treatment (specific targeted therapies).",
    //     "Target Cancer Type(s)": "Ovarian Cancer, Breast, Pancreatic, Prostate",
    //     "Cost": "3.1 L"
    // },
    // {
    //     "Test Name": "EndoPredict",
    //     "Type of test": "Tumor Prognostic",
    //     "Best Fit Oncologist": "Medical Oncologist\nSurgical Oncologist (for adjuvant therapy planning)",
    //     "Genetic Information Analyzed": "12-gene molecular score combined with tumor stage and nodal status (EPclin score).",
    //     "Clinical Utility": "Predicts recurrence risk up to 15 years; identifies low-risk patients who can safely avoid unnecessary chemotherapy/extended endocrine therapy.",
    //     "Use Case Scenario": "Whether you need extra treatments like chemotherapy or hormone therapy\nHow long these extra treatments should continue\nWhich patients might be able to get by with less intensive treatment",
    //     "Target Cancer Type(s)": "ER+, HER2– Breast Cancer (Node-negative and Node-positive)",
    //     "Cost": "3.1 L"
    // },
    // {
    //     "Test Name": "myChoice CDx",
    //     "Type of test": "Tumor Diagnostic (HRD)",
    //     "Best Fit Oncologist": "Medical Oncologist",
    //     "Genetic Information Analyzed": "BRCA1/2 (sequence variants, large rearrangements) and Genomic Instability Score (GIS: LOH, TAI, LST).",
    //     "Clinical Utility": "Identifies HRD+ patients (including those with non-BRCA HRD) who benefit from PARP inhibitors; recognized by ASCO guidelines.",
    //     "Use Case Scenario": "determine Homologous Recombination Deficiency (HRD) status for PARP inhibitor eligibility",
    //     "Target Cancer Type(s)": "Ovarian Cancer",
    //     "Cost": "5.5 L"
    // },
    // {
    //     "Test Name": "MyRisk Germline Test",
    //     "Type of test": "Germline Multi-Gene Panel",
    //     "Best Fit Oncologist": "Medical Oncologist (for treatment and surveillance)\nSurgical Oncologist (for risk-reducing surgeries)\nRadiation Oncologist (for treatment planning)",
    //     "Genetic Information Analyzed": "48 clinically actionable genes; includes VUS classification, RNA analysis, and for breast cancer, a polygenic risk score (RiskScore).",
    //     "Clinical Utility": "Guides treatment decisions (e.g., PARP inhibitor eligibility for germline BRCA)\nIdentifies risk for secondary cancers\nInforms personalized surveillance/prevention strategies\nFacilitates family risk assessment",
    //     "Use Case Scenario": "Diagnosed patients: treatment guidance, secondary cancer risk. Undiagnosed patients with family history: personalized risk assessment, prevention planning.",
    //     "Target Cancer Type(s)": "Breast, Ovarian, Prostate, Pancreatic, Uterine, Colorectal, Skin, Gastric, Renal, Lung, Endocrine, and other cancers",
    //     "Cost": "3.1 L"
    // },
    // {
    //     "Test Name": "MyRisk Hereditary Cancer Risk Test",
    //     "Type of test": "Germline Multi-Gene Panel",
    //     "Best Fit Oncologist": "Medical Oncologist (for risk management)\nSurgical Oncologist (for risk-reducing procedures)\nGenetic Counselor",
    //     "Genetic Information Analyzed": "Same 48-gene panel as myRisk Germline.\nRiskScore for personalized 5-year and lifetime breast cancer risk",
    //     "Clinical Utility": "Hereditary cancer risk assessment for individuals with a family history of cancer or personal history of certain cancers (assess second primary risk). Guides personalized screening, prevention, and risk management strategies",
    //     "Use Case Scenario": "Comprehensive germline test for hereditary cancer risk assessment and management",
    //     "Target Cancer Type(s)": "Breast, Ovarian, Prostate, Pancreatic, Uterine, Colorectal, Skin, Gastric, Renal, Lung, Endocrine, and other cancers",
    //     "Cost": "3.1 L"
    // },
    // {
    //     "Test Name": "Prolaris",
    //     "Type of test": "Tumor Prognostic",
    //     "Best Fit Oncologist": "Urologist\nRadiation Oncologist\nMedical Oncologist (for systemic therapy decisions)",
    //     "Genetic Information Analyzed": "Genomic Cell Cycle Progression (CCP) (measure of tumor aggressiveness) score combined with clin-path features.\n2x more prognostic than PSA/Gleason alone",
    //     "Clinical Utility": "Predicts prostate cancer aggressiveness\nIdentifies candidates for active surveillance\nGuides decisions on single-modal vs. multi-modal therapy\nInforms ADT discussions",
    //     "Use Case Scenario": "Determining appropriateness of active surveillance (aggressiveness); guiding intensity of primary treatment (surgery/radiation); assessing benefit of ADT.",
    //     "Target Cancer Type(s)": "Prostate Cancer",
    //     "Cost": "4.5 L"
    // },
    {
        "Test Name": "Positive Select Flex (Solid biopsy)",
        "Type of test": "NGS Panel",
        "Best Fit Oncologist": "Medical Oncologist",
        "Genetic Information Analyzed": "45 genes NCCN hotspot panel for all solid cancers",
        "Clinical Utility": "Comprehensive genomic profiling for targeted therapy selection",
        "Use Case Scenario": "Identifying actionable mutations in solid tumors for precision therapy",
        "Target Cancer Type(s)": "All Solid Cancers",
        "Cost": "30,000",
        "Turnaround Time": "2 weeks"
    },
    {
        "Test Name": "Positive Select Flex (Liquid biopsy)",
        "Type of test": "NGS Panel",
        "Best Fit Oncologist": "Medical Oncologist",
        "Genetic Information Analyzed": "45 genes NCCN hotspot panel for all solid cancers",
        "Clinical Utility": "Non-invasive comprehensive genomic profiling",
        "Use Case Scenario": "When tissue biopsy is not feasible or for monitoring treatment response",
        "Target Cancer Type(s)": "All Solid Cancers",
        "Cost": "40,000",
        "Turnaround Time": "2 weeks"
    },
    {
        "Test Name": "Positive Select Lite (Solid/Liquid biopsy)",
        "Type of test": "NGS Panel",
        "Best Fit Oncologist": "Medical Oncologist",
        "Genetic Information Analyzed": "206 genes NGS panel for all solid cancers",
        "Clinical Utility": "Extended genomic profiling for targeted therapy selection",
        "Use Case Scenario": "Comprehensive mutation analysis for advanced solid tumors",
        "Target Cancer Type(s)": "All Solid Cancers",
        "Cost": "50,000",
        "Turnaround Time": "2 weeks"
    },
    {
        "Test Name": "Positive Select Plus (Solid biopsy)",
        "Type of test": "Comprehensive NGS Panel",
        "Best Fit Oncologist": "Medical Oncologist",
        "Genetic Information Analyzed": "590 genes NGS panel + RNA fusions + TMB + MSI + PDL1",
        "Clinical Utility": "Most comprehensive genomic profiling for advanced cancer cases",
        "Use Case Scenario": "When maximum genomic information is needed for treatment decisions",
        "Target Cancer Type(s)": "All Solid Cancers",
        "Cost": "1,00,000",
        "Turnaround Time": "2 weeks"
    },
    {
        "Test Name": "Positive Select Single Gene (Solid biopsy)",
        "Type of test": "Single Gene Analysis",
        "Best Fit Oncologist": "Medical Oncologist",
        "Genetic Information Analyzed": "Per gene cost in the 45 gene panel of the test 'Positive Select Flex'",
        "Clinical Utility": "Targeted analysis of specific genes",
        "Use Case Scenario": "When only specific gene testing is required",
        "Target Cancer Type(s)": "Various Cancers",
        "Cost": "17,000",
        "Turnaround Time": "2 weeks"
    },
    {
        "Test Name": "TMB",
        "Type of test": "NGS",
        "Best Fit Oncologist": "Medical Oncologist",
        "Genetic Information Analyzed": "Tumour Mutation Burden by NGS",
        "Clinical Utility": "Predicts response to immunotherapy",
        "Use Case Scenario": "Identifying patients likely to benefit from immune checkpoint inhibitors",
        "Target Cancer Type(s)": "Various Cancers",
        "Cost": "55,000",
        "Turnaround Time": "2 weeks"
    },
    {
        "Test Name": "MSI",
        "Type of test": "NGS",
        "Best Fit Oncologist": "Medical Oncologist",
        "Genetic Information Analyzed": "Microsatellite Instability by NGS",
        "Clinical Utility": "Identifies mismatch repair deficiency for immunotherapy eligibility",
        "Use Case Scenario": "Screening for Lynch syndrome and immunotherapy response prediction",
        "Target Cancer Type(s)": "Colorectal, Endometrial, and other cancers",
        "Cost": "17,000",
        "Turnaround Time": "2 weeks"
    },
    {
        "Test Name": "HRR (Solid biopsy)",
        "Type of test": "NGS",
        "Best Fit Oncologist": "Medical Oncologist",
        "Genetic Information Analyzed": "Homologous Recombination Repair genes",
        "Clinical Utility": "Identifies HRD+ patients who may benefit from PARP inhibitors",
        "Use Case Scenario": "Determining eligibility for PARP inhibitor therapy",
        "Target Cancer Type(s)": "Ovarian, Breast, Prostate, Pancreatic cancers",
        "Cost": "30,000",
        "Turnaround Time": "2 weeks"
    },
    {
        "Test Name": "PDL1 (Solid biopsy)",
        "Type of test": "IHC",
        "Best Fit Oncologist": "Medical Oncologist",
        "Genetic Information Analyzed": "PD-L1 protein expression by immunohistochemistry",
        "Clinical Utility": "Predicts response to immune checkpoint inhibitors",
        "Use Case Scenario": "Determining eligibility for immunotherapy",
        "Target Cancer Type(s)": "Lung, Bladder, and other cancers",
        "Cost": "12,500",
        "Turnaround Time": "2 weeks"
    },
    {
        "Test Name": "HER2 (Solid biopsy)",
        "Type of test": "IHC",
        "Best Fit Oncologist": "Medical Oncologist",
        "Genetic Information Analyzed": "HER2 protein expression by immunohistochemistry",
        "Clinical Utility": "Guides HER2-targeted therapy decisions",
        "Use Case Scenario": "Determining eligibility for HER2-targeted therapies",
        "Target Cancer Type(s)": "Breast, Gastric cancers",
        "Cost": "7,500",
        "Turnaround Time": "1 week"
    },
    {
        "Test Name": "ER & PR (Solid biopsy)",
        "Type of test": "IHC",
        "Best Fit Oncologist": "Medical Oncologist",
        "Genetic Information Analyzed": "Estrogen and Progesterone receptor status",
        "Clinical Utility": "Guides hormone therapy decisions",
        "Use Case Scenario": "Determining eligibility for endocrine therapy",
        "Target Cancer Type(s)": "Breast cancer",
        "Cost": "7,500",
        "Turnaround Time": "1 week"
    },
    {
        "Test Name": "MMR (Solid biopsy)",
        "Type of test": "IHC",
        "Best Fit Oncologist": "Medical Oncologist",
        "Genetic Information Analyzed": "Mismatch repair protein expression",
        "Clinical Utility": "Identifies mismatch repair deficiency",
        "Use Case Scenario": "Screening for Lynch syndrome and immunotherapy eligibility",
        "Target Cancer Type(s)": "Colorectal, Endometrial, and other cancers",
        "Cost": "12,500",
        "Turnaround Time": "1 week"
    },
    {
        "Test Name": "HER2-(Solid biopsy)",
        "Type of test": "FISH",
        "Best Fit Oncologist": "Medical Oncologist",
        "Genetic Information Analyzed": "HER2 gene amplification by fluorescence in situ hybridization",
        "Clinical Utility": "Confirms HER2 status when IHC is equivocal",
        "Use Case Scenario": "Confirmatory testing for HER2 status",
        "Target Cancer Type(s)": "Breast, Gastric cancers",
        "Cost": "6,500",
        "Turnaround Time": "1 week"
    },
    {
        "Test Name": "Clinical Exome",
        "Type of test": "NGS",
        "Best Fit Oncologist": "Medical Oncologist, Genetic Counselor",
        "Genetic Information Analyzed": "Clinical exome sequencing",
        "Clinical Utility": "Comprehensive analysis of clinically relevant genes",
        "Use Case Scenario": "When broad genetic analysis is needed for diagnosis or treatment",
        "Target Cancer Type(s)": "Various Cancers",
        "Cost": "65,000",
        "Turnaround Time": "4 weeks"
    },
    {
        "Test Name": "Whole Exome",
        "Type of test": "NGS",
        "Best Fit Oncologist": "Medical Oncologist, Genetic Counselor",
        "Genetic Information Analyzed": "Whole exome sequencing",
        "Clinical Utility": "Most comprehensive analysis of protein-coding regions",
        "Use Case Scenario": "When maximum genetic information is needed for complex cases",
        "Target Cancer Type(s)": "Various Cancers",
        "Cost": "90,000",
        "Turnaround Time": "4 weeks"
    },
    {
        "Test Name": "Whole Genome",
        "Type of test": "NGS",
        "Best Fit Oncologist": "Medical Oncologist, Genetic Counselor",
        "Genetic Information Analyzed": "Complete genome sequencing",
        "Clinical Utility": "Most comprehensive genomic analysis including non-coding regions",
        "Use Case Scenario": "Research or complex diagnostic cases requiring full genome analysis",
        "Target Cancer Type(s)": "Various Cancers",
        "Cost": "2,20,000",
        "Turnaround Time": "4 weeks"
    },
    {
        "Test Name": "MLH1 Promoter Methylation",
        "Type of test": "PCR",
        "Best Fit Oncologist": "Medical Oncologist",
        "Genetic Information Analyzed": "MLH1 promoter methylation status",
        "Clinical Utility": "Identifies epigenetic silencing of MLH1",
        "Use Case Scenario": "Distinguishing sporadic from hereditary MSI tumors",
        "Target Cancer Type(s)": "Colorectal, Endometrial cancers",
        "Cost": "17,000",
        "Turnaround Time": "2 weeks"
    },
    {
        "Test Name": "MGMT Methylation",
        "Type of test": "PCR",
        "Best Fit Oncologist": "Medical Oncologist",
        "Genetic Information Analyzed": "MGMT promoter methylation status",
        "Clinical Utility": "Predicts response to alkylating chemotherapy",
        "Use Case Scenario": "Guiding treatment decisions for glioblastoma",
        "Target Cancer Type(s)": "Glioblastoma",
        "Cost": "17,000",
        "Turnaround Time": "2 weeks"
    },
    {
        "Test Name": "ALL",
        "Type of test": "NGS",
        "Best Fit Oncologist": "Hematologist",
        "Genetic Information Analyzed": "Acute Lymphoblastic Leukemia panel",
        "Clinical Utility": "Comprehensive genomic profiling for ALL",
        "Use Case Scenario": "Diagnosis and risk stratification of ALL",
        "Target Cancer Type(s)": "Acute Lymphoblastic Leukemia",
        "Cost": "31,000",
        "Turnaround Time": "2 weeks"
    },
    {
        "Test Name": "CLI",
        "Type of test": "NGS",
        "Best Fit Oncologist": "Hematologist",
        "Genetic Information Analyzed": "Chronic Lymphocytic Leukemia panel",
        "Clinical Utility": "Comprehensive genomic profiling for CLL",
        "Use Case Scenario": "Diagnosis and risk stratification of CLL",
        "Target Cancer Type(s)": "Chronic Lymphocytic Leukemia",
        "Cost": "31,000",
        "Turnaround Time": "2 weeks"
    },
    {
        "Test Name": "AML",
        "Type of test": "NGS",
        "Best Fit Oncologist": "Hematologist",
        "Genetic Information Analyzed": "Acute Myeloid Leukemia panel",
        "Clinical Utility": "Comprehensive genomic profiling for AML",
        "Use Case Scenario": "Diagnosis and risk stratification of AML",
        "Target Cancer Type(s)": "Acute Myeloid Leukemia",
        "Cost": "25,000",
        "Turnaround Time": "2 weeks"
    },
    {
        "Test Name": "MDS",
        "Type of test": "NGS",
        "Best Fit Oncologist": "Hematologist",
        "Genetic Information Analyzed": "Myelodysplastic Syndrome panel",
        "Clinical Utility": "Comprehensive genomic profiling for MDS",
        "Use Case Scenario": "Diagnosis and risk stratification of MDS",
        "Target Cancer Type(s)": "Myelodysplastic Syndrome",
        "Cost": "25,000",
        "Turnaround Time": "2 weeks"
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

    const EndoPredictDetails = () => {
        return (
            <section className="test-details-section" id="endo-predict-details">
                <div className="test-details-container">
                    <h2 className="test-details-title">EndoPredict Test Details</h2>

                    <div className="test-details-card">
                        <h3>1. What is the EndoPredict test?</h3>
                        <p>EndoPredict®️ is a genomic test for early breast cancer that estimates the chance of the cancer spreading (distant recurrence) and helps your team decide whether adding chemotherapy to hormone therapy is likely to help. It provides risk estimates not only for the first 10 years but also for "late" recurrence (years 5–15) after diagnosis.</p>
                    </div>

                    <div className="test-details-card">
                        <h3>2. Who EndoPredict is for</h3>
                        <p>EndoPredict is considered for people who:</p>
                        <ul>
                            <li>Have early-stage invasive breast cancer that is oestrogen-receptor positive (ER+) and HER2-negative, and</li>
                            <li>Will receive at least 5 years of endocrine (hormone) therapy.</li>
                        </ul>
                        <p>It can be used when lymph nodes are negative and in some cases with 1–3 positive lymph nodes, particularly to inform the value of chemotherapy. Evidence supports use in both post-menopausal and pre-menopausal groups. Decisions remain individualized with your oncology team.</p>

                        <h4>When it's commonly offered</h4>
                        <p><strong>Node-negative (pN0) or micrometastases:</strong> often used when overall clinical risk is not clearly low or high (for example, "intermediate" risk), to clarify whether chemotherapy adds benefit.</p>
                        <p><strong>1–3 positive nodes (pN1):</strong> may be used—especially in post-menopausal patients—to refine chemotherapy decisions by identifying those with sufficiently low genomic risk who may not gain from chemotherapy.</p>
                    </div>

                    <div className="test-details-card">
                        <h3>3. Why it's used</h3>
                        <p>Whether chemotherapy is recommended after surgery depends on many factors (tumor size, grade, lymph-node status, ER/HER2 status). For some people the benefit is clear; for others it isn't. EndoPredict brings genomic evidence into that discussion, helping estimate:</p>
                        <ul>
                            <li>Risk of distant recurrence with endocrine therapy alone</li>
                            <li>Who is more (or less) likely to benefit from adding chemotherapy</li>
                        </ul>
                        <p>In multiple studies, patients with low EPclin scores had very low 10-year distant-recurrence rates on endocrine therapy alone, while those with high EPclin scores derived a disproportionately larger benefit from chemotherapy. Guideline bodies (e.g., ESMO) recognize multigene signatures like EndoPredict to help tailor adjuvant therapy in ER+/HER2- early breast cancer.</p>
                    </div>

                    <div className="test-details-card">
                        <h3>4. How it works</h3>
                        <p><strong>What's tested:</strong> The laboratory analyzes expression of 12 cancer-related genes from your tumor (typically from formalin-fixed paraffin-embedded tissue already collected during biopsy or surgery).</p>
                        <p><strong>Two results are generated:</strong></p>
                        <ol>
                            <li>EP (molecular) score – from gene expression alone</li>
                            <li>EPclin score – combines the EP molecular score plus key clinical features (tumor size and lymph-node status) for a more individualized risk estimate used in treatment planning.</li>
                        </ol>
                        <p><strong>Timing:</strong> If you're planned for hormone therapy before surgery, the test should be performed on the pre-treatment core biopsy sample. (This ensures results reflect the untreated tumor.)</p>
                        <p><strong>What it predicts:</strong> Risk of early (0–10 years) and late (5–15 years) distant recurrence while on standard endocrine therapy.</p>
                    </div>

                    <div className="test-details-card">
                        <h3>5. Understanding your EndoPredict score (EP & EPclin)</h3>
                        <h4>EP vs EPclin</h4>
                        <p><strong>EP (molecular) score:</strong> Gene-only signal of tumor biology.</p>
                        <p><strong>EPclin score:</strong> The clinico-genomic score most often used to guide treatment decisions. It's reported as a numeric value with a risk group and estimated % risk of distant recurrence.</p>

                        <h4>The EPclin cut-off and risk groups</h4>
                        <p><strong>Cut-off:</strong> 3.33</p>
                        <ul>
                            <li>EPclin &lt; 3.33 → Low risk</li>
                            <li>EPclin ≥ 3.33 → High risk</li>
                        </ul>
                        <p>The value 3.33 corresponds to ~10% 10-year distant-recurrence risk and defines the boundary between low and high risk. Many node-negative patients—and a meaningful minority with 1–3 nodes—fall into the low-risk group and may avoid chemotherapy without compromising outcomes.</p>

                        <h4>What "low" and "high" EPclin generally mean</h4>
                        <p><strong>Low EPclin:</strong> Very low 10-year risk on endocrine therapy alone; studies show no material benefit from adding chemotherapy in this group. Your team may recommend endocrine therapy only (e.g., ~5 years; sometimes extended therapy considered based on age/menopause/comorbidity).</p>
                        <p><strong>High EPclin:</strong> Higher baseline risk; adding chemotherapy to endocrine therapy is more likely to reduce the chance of distant recurrence.</p>

                        <h4>Long-term (late) risk</h4>
                        <p>EndoPredict is validated to estimate late recurrence (years 5–15), informing discussions about extended endocrine therapy beyond 5 years. A low EPclin at 5 years has been associated with safely forgoing extended therapy in selected patients. Decisions remain personalized.</p>

                        <h4>Special notes for pre-menopausal patients</h4>
                        <p>Prospective-retrospective analyses in pre-menopausal women show EP and EPclin remain prognostic; in some cohorts, ~65% were classified low risk with &lt;4% 10-year distant-recurrence risk on endocrine therapy alone. Your age, ovarian suppression, and preferences still matter in final decisions.</p>
                    </div>

                    <div className="test-details-card">
                        <h3>Evidence snapshot (selected)</h3>
                        <ul>
                            <li><strong>Development/validation:</strong> Filipits et al., training/validation of the 12-gene EP and EPclin in ER+/HER2- cohorts (both node-negative and 1–3 nodes).</li>
                            <li><strong>10- & 15-year performance:</strong> Extended follow-up shows prognostic value for early (0–10y) and late (5–15y) recurrence.</li>
                            <li><strong>Chemo interaction:</strong> Low EPclin shows no meaningful benefit from chemo; high EPclin derives greater benefit.</li>
                            <li><strong>Comparative performance:</strong> JAMA Oncology analysis reported EPclin outperformed some other signatures for predicting recurrence risk in early ER+/HER2- disease.</li>
                            <li><strong>Guidelines context:</strong> ESMO guidelines support using validated multigene signatures (such as EndoPredict) to refine adjuvant therapy in ER+/HER2- early breast cancer when clinicopathologic factors leave uncertainty.</li>
                        </ul>
                    </div>

                    <div className="test-details-card">
                        <h3>Practical considerations (for patients & clinicians)</h3>
                        <ul>
                            <li><strong>Sample:</strong> Uses existing tumor tissue (biopsy or surgery); no extra procedure needed.</li>
                            <li><strong>Result you receive:</strong> Numeric EPclin score with risk group and an estimated % risk of distant recurrence at 10 years (and information relevant to years 5–15). Discuss how this integrates with age, menopausal status, tumor grade, comorbidities, and your preferences.</li>
                        </ul>
                    </div>

                    <div className="test-details-card">
                        <h3>Plain-language takeaway</h3>
                        <p>If your breast cancer is ER-positive and HER2-negative, EndoPredict can clarify how likely it is to come back far from the breast and whether chemotherapy is likely to add benefit over hormone therapy alone. The EPclin score (&lt;3.33 vs ≥3.33) is the key number used by doctors to personalize your plan.</p>
                    </div>

                    <div className="test-details-card">
                        <h3>References & Source Material</h3>
                        <ul>
                            <li>Myriad Genetics. EndoPredict Breast Cancer Prognostic Test (product page).</li>
                            <li>Myriad Genetics Europe. Patient guide to the EndoPredict test (leaflet with EPclin cut-off 3.33).</li>
                            <li>Filipits et al. Development/validation of EP & EPclin (summarized in MolDX LCD).</li>
                            <li>Buus/Sestak and colleagues. Long-term prognostic performance (Clinical Cancer Research; Myriad summary).</li>
                            <li>JAMA Oncology. Comparative analysis of multigene signatures.</li>
                            <li>Pre-menopausal validation study.</li>
                            <li>Chemo-benefit interaction summaries.</li>
                            <li>ESMO Early Breast Cancer Clinical Practice Guidelines</li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    };

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
                    <br></br>
                    {/* <button
                        className="btn btn--secondary"
                        onClick={() => {
                            document.getElementById('endo-predict-details').scrollIntoView({
                                behavior: 'smooth'
                            });
                        }}
                    >
                        Learn About EndoPredict
                    </button> */}
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
            {/* <EndoPredictDetails /> */}
        </div>
    );
};

export default CancerTestDashboard;