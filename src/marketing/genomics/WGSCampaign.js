import React, { useState } from 'react';
import './WGSCampaign.css';
import html2pdf from 'html2pdf.js';
import logo from '../../assets/logo.png';
const WGSCampaign = () => {
    const [activeTab, setActiveTab] = useState('compare');
    const [sampleCount, setSampleCount] = useState(10);
    const [currentWgsQty, setCurrentWgsQty] = useState(10);
    const [currentWgsUnitRate, setCurrentWgsUnitRate] = useState(4999);
    const [currentWgsTotal, setCurrentWgsTotal] = useState(49990);
    const [mapMode, setMapMode] = useState('ngs');
    const [depthValue, setDepthValue] = useState(200);
    const [showQuoteModal, setShowQuoteModal] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [leadId, setLeadId] = useState('');
    const [submissionDate, setSubmissionDate] = useState('');
    const [quoteRef, setQuoteRef] = useState('');
    const [complianceChecks, setComplianceChecks] = useState({
        format: false,
        ice: false,
        moq: false
    });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        institution: '',
        department: '',
        notes: ''
    });
    const [consoleOutput, setConsoleOutput] = useState('Wait for user selection... Try running a simulation by selecting a button above.');

    const formatCurrency = (num) => {
        return '₹' + num.toLocaleString('en-IN');
    };

    const updateCalculator = (val) => {
        const count = parseInt(val);
        setCurrentWgsQty(count);
        setSampleCount(count);

        let unitRate = 4999;
        let total = count * 4999;

        if (count >= 100) {
            unitRate = Math.round(4999 * 0.9);
            total = unitRate * count;
        } else if (count >= 20) {
            unitRate = Math.round(4999 * 0.95);
            total = unitRate * count;
        }

        setCurrentWgsUnitRate(unitRate);
        setCurrentWgsTotal(total);
    };

    const validateCompliance = () => {
        return complianceChecks.format && complianceChecks.ice && complianceChecks.moq;
    };

    // Phase 1: Form Validation
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhone = (phone) => {
        if (!phone) return true; // Phone is optional
        const phoneRegex = /^\+?\d{10,15}$/;
        return phoneRegex.test(phone.replace(/[\s-]/g, ''));
    };

    const validateForm = () => {
        if (!formData.name.trim()) {
            alert("Please enter your name.");
            return false;
        }
        if (!formData.email.trim()) {
            alert("Please enter your email address.");
            return false;
        }
        if (!validateEmail(formData.email)) {
            alert("Please enter a valid email address.");
            return false;
        }
        if (formData.phone && !validatePhone(formData.phone)) {
            alert("Please enter a valid phone number (10-15 digits).");
            return false;
        }
        if (!formData.institution.trim()) {
            alert("Please enter your institution name.");
            return false;
        }
        if (!formData.department.trim()) {
            alert("Please enter your department.");
            return false;
        }
        return true;
    };

    const numberToWords = (num) => {
        const a = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
        const b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

        if ((num = num.toString()).length > 9) return 'overflow';
        let n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
        if (!n) return '';
        let str = '';
        str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + ' Crore ' : '';
        str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + ' Lakh ' : '';
        str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + ' Thousand ' : '';
        str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + ' Hundred ' : '';
        str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) : '';
        return str.trim() + ' Rupees Only';
    };

    const generateQuotation = async () => {
        // Phase 1: Validate form
        if (!validateForm()) {
            return;
        }

        // Phase 1: Disable multiple submissions
        if (isSubmitting) {
            return;
        }

        setIsSubmitting(true);
        setShowLoading(true);

        // Phase 1: Generate Lead ID and Submission Date
        const newLeadId = "WGS-" + Date.now();
        const newSubmissionDate = new Date().toISOString();
        // Safer quote ref using timestamp (no duplicates possible)
        const newQuoteRef = `MOL/QTN/WGS/${new Date().getFullYear()}/${Date.now()}`;

        setLeadId(newLeadId);
        setSubmissionDate(newSubmissionDate);
        setQuoteRef(newQuoteRef);

        // Calculate totals
        const netTotal = currentWgsTotal;
        const gst = Math.round(netTotal * 0.18);
        const grandTotal = netTotal + gst;

        // Phase 4: Prepare data for Google Sheet
        const sheetData = {
            timestamp: newSubmissionDate,
            leadId: newLeadId,
            quoteRef: newQuoteRef,
            name: formData.name,
            email: formData.email,
            phone: formData.phone || 'N/A',
            institution: formData.institution,
            department: formData.department,
            notes: formData.notes || 'N/A',
            sampleCount: currentWgsQty,
            unitRate: currentWgsUnitRate,
            netTotal: netTotal,
            gst: gst,
            grandTotal: grandTotal,
            status: 'NEW',
            campaign: 'WGS Campaign',
            source: window.location.href
        };

        // Issue 2 Fix: Only show success after actual save
        try {
            // Google Apps Script webhook URL
            const gasWebhookUrl = "https://script.google.com/macros/s/AKfycbzsaaKrUX3EHqVmY-8hGJWpmcfssP-JFzVIDWC8cjhKxosb2yIqZ-0w2-WM5k6YhyPl/exec";

            // Save to Google Sheets
            await fetch(gasWebhookUrl, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(sheetData)
            });

            // Only show success if save succeeded
            setShowLoading(false);
            setIsSubmitting(false);
            setShowSuccessPopup(true);

        } catch (err) {
            console.error("Error submitting to Google Sheet:", err);
            setShowLoading(false);
            setIsSubmitting(false);
            alert("❌ Submission failed. Please try again or contact support.\n\nError: " + err.message);
        }
    };

    const runRAGSimulation = (type) => {
        let lines = [];
        if (type === 'amr') {
            lines = [
                "> Initializing Genom-Agent semantic search...",
                "> Query: 'Find active multi-drug resistance cassettes and efflux pumps'",
                "> Connecting to assembly fasta database...",
                "> Contig count checked: 42 contigs (Total length: 4.85 MB)",
                "> Scanning against CARD (Comprehensive Antibiotic Resistance Database)...",
                "> Aligning contig_04 [position 124,500 - 128,200]...",
                "  [MATCH FOUND] blaCTX-M-15 (Beta-lactamase resistance) - Identity: 99.8%",
                "  [MATCH FOUND] aac(6')-Ib-cr (Aminoglycoside resistance) - Identity: 100%",
                "  [MATCH FOUND] oqxB (Multidrug resistance efflux pump) - Identity: 99.2%",
                "> Analysis complete. Identified 3 resistance loci on plasmid vector sequences.",
                "> Recommendation: Samples indicate susceptibility risk to Cephalosporins. Final profile generated."
            ];
        } else if (type === 'bgc') {
            lines = [
                "> Initializing Genom-Agent pathway prediction...",
                "> Query: 'Identify biosynthetic gene clusters (BGCs) for secondary metabolites'",
                "> Loading genome coordinates...",
                "> Running antiSMASH v7.0 bioinformatic annotations...",
                "> Region 1: Contig_02 [45,000 - 92,000] - Type: NRPS (Non-Ribosomal Peptide Synthetase)",
                "  - Similarity to Enterobactin cluster: 100% (Iron chelating siderophore)",
                "> Region 2: Contig_11 [120,500 - 155,000] - Type: Polyketide Synthase (PKS Type I)",
                "  - Similarity to Pyoverdine cluster: 88% (Fluorescent pigment production)",
                "> Region 3: Contig_15 [5,000 - 14,200] - Type: Terpene cluster",
                "  - Discovery: Novel phytoene-like cluster (12% known database matching)",
                "> Recommendation: High potential for bioremediation/chelation research. 3 BGCs verified."
            ];
        } else if (type === 'tax') {
            lines = [
                "> Initializing Genom-Agent taxonomic pipeline...",
                "> Query: 'Calculate strain-level taxonomic validation and ANI identity'",
                "> Extracting ribosomal markers (16S-23S ITS spacer) and core genome...",
                "> Core-genome database alignment (GTDB R214)...",
                "> Average Nucleotide Identity (ANI) calculation initiated...",
                "  - Reference genome: Pseudomonas aeruginosa DSM 50071",
                "  - Alignment Coverage: 97.4%",
                "  - ANI Similarity Value: 99.982%",
                "  - Sanger 16S Marker check: Pseudomonas sp. (100% identity to 16S)",
                "> Result: Isolate classified as Pseudomonas aeruginosa (strain resolution confirmed).",
                "> Strain ID: MOL-P-AERU-2026-04. Ready for NCBI Genome Announcement submission."
            ];
        }

        setConsoleOutput('');
        let currentLine = 0;
        const printLine = () => {
            if (currentLine < lines.length) {
                setConsoleOutput(prev => prev + lines[currentLine] + '\n');
                currentLine++;
                setTimeout(printLine, 450);
            }
        };
        printLine();
    };

    const getDepthInfo = () => {
        if (depthValue <= 30) {
            return {
                badge: 'Basic Assembly Depth (30X)',
                title: 'De Novo Genome Draft Assembly',
                desc: 'Generates primary chromosomal draft sequences. Suitable for basic species verification and taxonomic listings. Minimal annotation depth.',
                journals: '★ Target Journals: Local/Regional Research bulletins, basic culture catalog listings.'
            };
        } else if (depthValue <= 80) {
            return {
                badge: 'Standard Structural Depth (80X)',
                title: 'Core Multi-Locus Sequence Characterization',
                desc: 'Enables basic gene mapping and verification of standard metabolic enzymes. Good for general sequence submissions.',
                journals: '★ Target Journals: Microbiology Resource Announcements, Basic Genomics Profiles.'
            };
        } else if (depthValue <= 130) {
            return {
                badge: 'High-Resolution Annotation Depth (130X)',
                title: 'Comprehensive Multi-Omic Profiling',
                desc: 'Resolves core secondary metabolite gene clusters (BGCs), virulence factors, and antimicrobial resistance (AMR) cassettes. Fully annotated metabolic networks.',
                journals: '★ Target Journals: Journal of Bacteriology, Applied and Environmental Microbiology.'
            };
        } else {
            return {
                badge: 'Molsys Gold-Standard Depth (200X)',
                title: 'Strain-Level Phylogenomics & Comparative Genomics',
                desc: 'Provides single-nucleotide polymorphism (SNP) diagnostics, complete chromosome + plasmid structure resolution, and publication-ready comparative plots.',
                journals: '★ Target Journals: Nature Microbiology, Q1 high-impact genomics journals, Genome Announcements.'
            };
        }
    };

    // Issue 4: Copy Lead ID to Clipboard
    const copyLeadId = () => {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(leadId)
                .then(() => {
                    alert('✓ Lead ID copied to clipboard!');
                })
                .catch(err => {
                    console.error('Failed to copy:', err);
                    // Fallback for older browsers
                    fallbackCopyTextToClipboard(leadId);
                });
        } else {
            // Fallback for older browsers
            fallbackCopyTextToClipboard(leadId);
        }
    };

    // Fallback copy method for older browsers
    const fallbackCopyTextToClipboard = (text) => {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand('copy');
            alert('✓ Lead ID copied to clipboard!');
        } catch (err) {
            alert('❌ Failed to copy. Please copy manually: ' + text);
        }
        document.body.removeChild(textArea);
    };

    // Issue 3: Reset form after closing quotation
    const handleCloseQuotation = () => {
        setShowQuoteModal(false);
        // Reset form data
        setFormData({
            name: '',
            email: '',
            phone: '',
            institution: '',
            department: '',
            notes: ''
        });
        // Reset compliance checks
        setComplianceChecks({
            format: false,
            ice: false,
            moq: false
        });
    };

    // Phase 5: PDF Download Function
    const downloadPDF = () => {
        const element = document.querySelector('.letterhead-document');

        const opt = {
            margin: 10,
            filename: `${quoteRef || 'MOL-QTN-WGS'}.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: {
                scale: 2,
                useCORS: true
            },
            jsPDF: {
                unit: 'mm',
                format: 'a4',
                orientation: 'portrait'
            }
        };

        html2pdf()
            .set(opt)
            .from(element)
            .save();
    };

    const depthInfo = getDepthInfo();
    const netTotal = currentWgsTotal;
    const gst = Math.round(netTotal * 0.18);
    const grandTotal = netTotal + gst;

    return (
        <div className="wgs-campaign-container">
            <div className="container">
                {/* Header - keeping user's modifications */}
                <header></header>

                {/* Hero Section */}
                <div className="hero-section">
                    <div className="hero-content">
                        <h1 className="hero-title">Whole Genome Sequencing at the Cost of Sanger ID</h1>
                        <p className="hero-subtitle">Upgrade from legacy 16S Sanger marker identification to complete Whole Genome Sequencing (WGS) with 200X depth of coverage, 21-day TAT, and GPU-accelerated bioinformatics pipelines.</p>
                        <center>
                            <div className="tab-container">
                                <button
                                    className={`tab-btn ${activeTab === 'compare' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('compare')}
                                >
                                    Core Comparison
                                </button>
                                <button
                                    className={`tab-btn ${activeTab === 'calc' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('calc')}
                                >
                                    Interactive Value &amp; Map Tool
                                </button>
                            </div>
                        </center>
                    </div>
                </div>

                {/* Alert Box */}
                <div className="alert-box">
                    <div className="alert-icon">💡</div>
                    <div className="alert-content">
                        <p><strong>The Opportunity Gap:</strong> Sanger 16S rRNA sequencing generally costs around <strong>₹2,000 - ₹3,000 + GST</strong> per sample. Molsys is offering <strong>Whole Genome Sequencing (WGS) with 200X depth for only ₹4,999 per sample</strong> (for projects with 10+ samples - multiples of 10). Note that we do NOT accept pure cultures on plates; samples must be submitted as cell pellets or extracted gDNA for logistics safety.</p>
                    </div>
                </div>

                {/* Tab Content - Compare */}
                {activeTab === 'compare' && (
                    <div className="tab-content active">
                        <div className="comparison-grid">
                            {/* Sanger Card */}
                            <div className="card">
                                <div className="card-header-container">
                                    <h3 className="card-title">Traditional 16S Sanger</h3>
                                    <span className="sanger-badge">Legacy Standard</span>
                                </div>
                                <div className="price-tag">
                                    ₹2,500 <span>/ sample average</span>
                                </div>
                                <ul className="feature-list">
                                    <li className="feature-item">
                                        <span className="feature-icon-red">✕</span>
                                        <div className="feature-item-text">
                                            <strong>Extremely Limited Data</strong>
                                            <span>Sequences only a single gene marker (~1,500 base pairs).</span>
                                        </div>
                                    </li>
                                    <li className="feature-item">
                                        <span className="feature-icon-red">✕</span>
                                        <div className="feature-item-text">
                                            <strong>Low Taxonomic Resolution</strong>
                                            <span>Usually limited to genus level; fails to differentiate closely related species or strains.</span>
                                        </div>
                                    </li>
                                    <li className="feature-item">
                                        <span className="feature-icon-red">✕</span>
                                        <div className="feature-item-text">
                                            <strong>No Functional Genomics</strong>
                                            <span>Zero information on metabolic pathways, active secondary metabolites, or enzymes.</span>
                                        </div>
                                    </li>
                                    <li className="feature-item">
                                        <span className="feature-icon-red">✕</span>
                                        <div className="feature-item-text">
                                            <strong>No Resistance/Virulence Screening</strong>
                                            <span>Cannot detect multi-drug resistance (AMR) genes or virulence factors.</span>
                                        </div>
                                    </li>
                                    <li className="feature-item">
                                        <span className="feature-icon-red">✕</span>
                                        <div className="feature-item-text">
                                            <strong>Poor Publication Value</strong>
                                            <span>Standard 16S taxonomic identification is rarely accepted in high-impact journals.</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* WGS Card */}
                            <div className="card wgs-highlight">
                                <div className="card-header-container">
                                    <h3 className="card-title">Molsys NGS Whole Genome</h3>
                                    <span className="wgs-badge">Next-Gen Upgrade</span>
                                </div>
                                <div className="price-tag wgs-price">
                                    ₹4,999 <span>/ sample (10+ samples)</span>
                                </div>
                                <ul className="feature-list">
                                    <li className="feature-item">
                                        <span className="feature-icon-green">✓</span>
                                        <div className="feature-item-text">
                                            <strong>High-Depth 200X Coverage</strong>
                                            <span>Sequences the entire chromosome, plasmids, phages, and mobile elements to 200X depth.</span>
                                        </div>
                                    </li>
                                    <li className="feature-item">
                                        <span className="feature-icon-green">✓</span>
                                        <div className="feature-item-text">
                                            <strong>Strain-Level Resolution</strong>
                                            <span>Provides exact strain identification and comparative single-nucleotide resolution.</span>
                                        </div>
                                    </li>
                                    <li className="feature-item">
                                        <span className="feature-icon-green">✓</span>
                                        <div className="feature-item-text">
                                            <strong>Complete Functional Profiling</strong>
                                            <span>Annotates all biosynthetic pathway gene clusters (BGCs) and metabolic capabilities.</span>
                                        </div>
                                    </li>
                                    <li className="feature-item">
                                        <span className="feature-icon-green">✓</span>
                                        <div className="feature-item-text">
                                            <strong>Comprehensive Safety Profiling</strong>
                                            <span>Automatically scans for Antimicrobial Resistance (AMR) genes and virulence factors.</span>
                                        </div>
                                    </li>
                                    <li className="feature-item">
                                        <span className="feature-icon-green">✓</span>
                                        <div className="feature-item-text">
                                            <strong>High Publication Leverage</strong>
                                            <span>Unlocks complete "Genome Announcements" and high-impact comparative genomics papers.</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                {/* Tab Content - Calculator */}
                {activeTab === 'calc' && (
                    <div className="tab-content active">
                        <div className="calculator-container">
                            <div className="dashboard-grid">
                                {/* Left Column */}
                                <div>
                                    <h3 className="calc-title">Interactive Project Calculator</h3>
                                    <p className="calc-subtitle">Select the number of isolates to evaluate the exact commercial parameters of your campaign run.</p>

                                    <div className="slider-box">
                                        <div className="slider-header">
                                            <span className="slider-label">Microbial Samples (Cell Pellets/gDNA):</span>
                                            <span className="slider-value">{sampleCount}</span>
                                        </div>
                                        <input
                                            type="range"
                                            min="10"
                                            max="150"
                                            step="10"
                                            value={sampleCount}
                                            className="range-slider"
                                            onChange={(e) => updateCalculator(e.target.value)}
                                        />
                                        <div className="slider-ticks">
                                            <span>10 (MOQ)</span>
                                            <span>50 samples</span>
                                            <span>100 samples</span>
                                            <span>150 samples</span>
                                        </div>
                                    </div>

                                    <div className="results-grid-simple">
                                        <div className="result-card">
                                            <span className="result-label">Traditional 16S Sanger Cost</span>
                                            <div className="result-value">{formatCurrency(sampleCount * 2500)}</div>
                                            <span className="result-desc">Based on ₹2,500/sample marker standard</span>
                                        </div>

                                        <div className="result-card value-highlight">
                                            <span className="result-label" style={{ color: 'var(--accent-teal)' }}>Molsys WGS Cost</span>
                                            <div className="result-value wgs-price">{formatCurrency(currentWgsTotal)}</div>
                                            <span className="result-desc" style={{ color: 'var(--accent-teal)', fontWeight: '700' }}>
                                                {currentWgsQty >= 100 ? 'Ultra Bulk Rate Activated (10% Off WGS)' :
                                                 currentWgsQty >= 20 ? 'Bulk Volume Activated (5% Off WGS)' :
                                                 'Campaign Rate Active (₹4,999/sample)'}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mini-alert">
                                        ℹ️ Enforcing a <strong>Minimum of 10 samples</strong> allows Molsys to run high-throughput multiplexed sequencing, protecting the corporate margin while offering WGS at Sanger cost.
                                    </div>

                                    {/* Compliance Checklist */}
                                    <div className="checklist-card">
                                        <h4 className="checklist-title">Logistics &amp; Shipping Compliance Checklist</h4>
                                        <div className="checklist-item">
                                            <input
                                                type="checkbox"
                                                checked={complianceChecks.format}
                                                onChange={(e) => setComplianceChecks({...complianceChecks, format: e.target.checked})}
                                            />
                                            <label><strong>gDNA / Cell Pellet Format:</strong> I confirm samples will be shipped as extracted gDNA or cell pellets (not live agar plates or slant cultures, for biosafety compliance).</label>
                                        </div>
                                        <div className="checklist-item">
                                            <input
                                                type="checkbox"
                                                checked={complianceChecks.ice}
                                                onChange={(e) => setComplianceChecks({...complianceChecks, ice: e.target.checked})}
                                            />
                                            <label><strong>Cold Chain Shipping:</strong> I confirm samples will be shipped in dry ice or cold packs to prevent nucleic acid degradation during transit.</label>
                                        </div>
                                        <div className="checklist-item">
                                            <input
                                                type="checkbox"
                                                checked={complianceChecks.moq}
                                                onChange={(e) => setComplianceChecks({...complianceChecks, moq: e.target.checked})}
                                            />
                                            <label><strong>Volume MOQ:</strong> I confirm that I am submitting 10 or more isolates (or multiples of 10) to qualify for this bulk campaign pricing.</label>
                                        </div>
                                        {!validateCompliance() && (
                                            <div className="compliance-banner">
                                                ⚠️ Please verify and check all logistics compliance boxes to unlock quotation generation.
                                            </div>
                                        )}
                                    </div>

                                    {/* Quote Form */}
                                    {validateCompliance() && (
                                        <div className="quote-form-card">
                                            <h4 className="form-title">Request Official Indicative Quotation</h4>
                                            <div className="form-group">
                                                <label>Contact Person (Principal Investigator / Scholar) *</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="e.g. Dr. Ramesh Kumar"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                                />
                                            </div>
                                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                                                <div className="form-group">
                                                    <label>Email Address (For Quote Delivery) *</label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        placeholder="e.g. ramesh@iari.res.in"
                                                        value={formData.email}
                                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label>Phone Number (Optional)</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="e.g. +91 98765 43210"
                                                        value={formData.phone}
                                                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                                    />
                                                </div>
                                            </div>
                                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                                                <div className="form-group">
                                                    <label>Institution / University *</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="e.g. Indian Agricultural Research Institute"
                                                        value={formData.institution}
                                                        onChange={(e) => setFormData({...formData, institution: e.target.value})}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label>Department / Division *</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="e.g. Division of Microbiology"
                                                        value={formData.department}
                                                        onChange={(e) => setFormData({...formData, department: e.target.value})}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Additional Project Requirements / Remarks</label>
                                                <textarea
                                                    className="form-control"
                                                    rows="2"
                                                    placeholder="e.g. Acidophilic bacteria isolates, secondary metabolic pathway annotation requested..."
                                                    value={formData.notes}
                                                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                                                ></textarea>
                                            </div>
                                            <button
                                                className="submit-btn"
                                                onClick={generateQuotation}
                                                disabled={isSubmitting}
                                                style={{ opacity: isSubmitting ? 0.6 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                                            >
                                                {isSubmitting ? '⏳ Submitting...' : '📄 Submit & Generate Molsys Quotation'}
                                            </button>
                                        </div>
                                    )}
                                </div>

                                {/* Right Column - Scientific Tools */}
                                <div className="right-column">
                                    <h3 className="calc-title">Scientific Map & Outcomes</h3>
                                    <p className="calc-subtitle">Visualize the dynamic resolution contrast of Sanger versus high-depth Next-Gen sequencing.</p>

                                    <div className="map-toggle-container">
                                        <button
                                            className={`map-toggle-btn ${mapMode === 'ngs' ? 'active' : ''}`}
                                            onClick={() => setMapMode('ngs')}
                                        >
                                            Molsys NGS (200X Depth)
                                        </button>
                                        <button
                                            className={`map-toggle-btn ${mapMode === 'sanger' ? 'active' : ''}`}
                                            onClick={() => setMapMode('sanger')}
                                        >
                                            Sanger Trace (1.5 kb)
                                        </button>
                                    </div>

                                    <div className="svg-canvas-box">
                                        {mapMode === 'ngs' ? (
                                            <svg viewBox="0 0 320 280" style={{ width: '100%', height: 'auto' }}>
                                                <circle cx="160" cy="130" r="100" fill="none" stroke="#f1f5f9" strokeWidth="12"/>
                                                <circle cx="160" cy="130" r="100" fill="none" stroke="#e2e8f0" strokeWidth="6" className="ring-track"/>
                                                <circle cx="160" cy="130" r="85" fill="none" stroke="#00A88F" strokeWidth="8" strokeDasharray="80 120 40 180" className="ring-track"/>
                                                <circle cx="160" cy="130" r="70" fill="none" stroke="#0055FF" strokeWidth="8" strokeDasharray="20 90 30 180" className="ring-track"/>
                                                <path d="M 160 85 A 45 45 0 0 1 205 130 A 45 45 0 0 1 160 175 Q 140 160, 115 130 Q 140 100, 160 85" fill="none" stroke="#00FFCC" strokeWidth="2" className="ring-track"/>
                                                <text x="160" y="125" fill="#0F172A" fontSize="14" fontFamily="'Outfit', sans-serif" fontWeight="900" textAnchor="middle">MOLSYS WGS</text>
                                                <text x="160" y="142" fill="#00A88F" fontSize="9" fontFamily="sans-serif" fontWeight="800" textAnchor="middle" letterSpacing="0.5px">200X COVERAGE</text>
                                                <text x="160" y="152" fill="#64748B" fontSize="8" fontFamily="sans-serif" textAnchor="middle">Hover tracks for multi-omic details</text>
                                            </svg>
                                        ) : (
                                            <svg viewBox="0 0 320 220" style={{ width: '100%', height: 'auto' }}>
                                                <rect x="5" y="5" width="310" height="210" rx="10" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1"/>
                                                <line x1="10" y1="160" x2="310" y2="160" stroke="#cbd5e1" strokeWidth="1.5"/>
                                                <path d="M 10 160 Q 20 40, 30 160 Q 40 30, 50 160 Q 60 70, 70 160 Q 80 50, 90 160" fill="none" stroke="#10b981" strokeWidth="2"/>
                                                <path d="M 25 160 Q 35 60, 45 160 Q 55 20, 65 160 Q 75 80, 85 160 Q 95 40, 105 160" fill="none" stroke="#ef4444" strokeWidth="2"/>
                                                <text x="160" y="202" fill="#64748B" fontSize="9.5" fontFamily="sans-serif" textAnchor="middle" fontWeight="700">1.5 kb 16S Marker Sequence (Genus Level ID only)</text>
                                            </svg>
                                        )}
                                    </div>

                                    {/* Depth Slider */}
                                    <div className="depth-slider-section">
                                        <div className="slider-header">
                                            <span className="slider-label">Interactive Sequencing Depth Visualizer:</span>
                                            <span className="depth-value">{depthValue}X Coverage</span>
                                        </div>
                                        <input
                                            type="range"
                                            min="30"
                                            max="200"
                                            step="50"
                                            value={depthValue}
                                            className="range-slider"
                                            onChange={(e) => setDepthValue(parseInt(e.target.value))}
                                        />
                                        <div className="slider-ticks">
                                            <span>30X Depth</span>
                                            <span>80X Depth</span>
                                            <span>130X Depth</span>
                                            <span>200X (Standard)</span>
                                        </div>

                                        <div className="depth-card">
                                            <span className="depth-badge">{depthInfo.badge}</span>
                                            <h4 className="depth-title">{depthInfo.title}</h4>
                                            <div className="depth-desc">{depthInfo.desc}</div>
                                            <div className="depth-journals">{depthInfo.journals}</div>
                                        </div>
                                    </div>

                                    {/* RAG Simulator */}
                                    <div className="rag-simulator-card">
                                        <h4 className="rag-title">
                                            🤖 Molsys Genom-Agent RAG Simulator
                                        </h4>
                                        <p className="rag-subtitle">
                                            Experience how your lab can query draft assembly results in natural language using our agentic multi-omic workflows. Select a query below to test:
                                        </p>

                                        <div className="rag-buttons">
                                            <button className="console-prompt-btn" onClick={() => runRAGSimulation('amr')}>Scan AMR Genes</button>
                                            <button className="console-prompt-btn" onClick={() => runRAGSimulation('bgc')}>Predict BGCs</button>
                                            <button className="console-prompt-btn" onClick={() => runRAGSimulation('tax')}>Verify Strain Taxonomy</button>
                                        </div>

                                        <div className="rag-console">
                                            <div className="rag-header">
                                                <span>MOLSYS GENOM-AGENT v1.0.2</span>
                                                <div>
                                                    <span className="dot red"></span>
                                                    <span className="dot yellow"></span>
                                                    <span className="dot green"></span>
                                                </div>
                                            </div>
                                            <pre className="console-text-flow">{consoleOutput}</pre>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Sample Failure Policy */}
                <section className="failure-policy">
                    <div className="policy-content">
                        <div className="policy-icon">⚠️</div>
                        <div>
                            <h4>Sample Failure &amp; Re-run Policy</h4>
                            <p>
                                Any sample submission that fails quality control (QC), clogs chromatography columns, suppresses ionization, or yields poor data quality due to client-side sample preparation errors (degradation, contamination, high salt/detergent content, wrong concentration, or incorrect sample type/shipping plates) is the sole commercial risk and responsibility of the client. Molsys enforces a strict policy: failed runs due to poor sample preparation are <strong>not</strong> re-run for free. Clients must submit fresh samples and pay the full commercial rate for any re-injection, re-sequencing, or re-run.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            {/* Loading Overlay */}
            {showLoading && (
                <div className="loading-overlay active">
                    <div className="loading-card">
                        <div className="spinner"></div>
                        <div className="status-msg">Saving your quotation request...</div>
                        <p>Please wait, syncing details and compiling official quotation document.</p>
                    </div>
                </div>
            )}

            {/* Phase 2: Success Popup */}
            {showSuccessPopup && (
                <div className="success-popup-backdrop active">
                    <div className="success-popup-card">
                        <div className="success-icon">✓</div>
                        <h2 className="success-title">Request Submitted Successfully</h2>

                        <div className="success-details">
                            <div className="success-detail-item">
                                <span className="success-label">Lead ID:</span>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <span className="success-value">{leadId}</span>
                                    <button
                                        className="copy-lead-btn"
                                        onClick={copyLeadId}
                                        title="Copy Lead ID"
                                    >
                                        📋
                                    </button>
                                </div>
                            </div>
                            <div className="success-detail-item">
                                <span className="success-label">Quote Reference:</span>
                                <span className="success-value">{quoteRef}</span>
                            </div>
                            <div className="success-detail-item">
                                <span className="success-label">Submitted:</span>
                                <span className="success-value">{new Date(submissionDate).toLocaleString('en-US', {
                                    year: 'numeric',
                                    month: 'short',
                                    day: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit'
                                })}</span>
                            </div>
                        </div>

                        <p className="success-message">
                            Your quotation request has been saved successfully.
                            <br />
                            <strong>Please save this Lead ID for future communication.</strong>
                        </p>

                        <button
                            className="success-btn"
                            onClick={() => {
                                setShowSuccessPopup(false);
                                setShowQuoteModal(true);
                            }}
                        >
                            View Quotation
                        </button>
                    </div>
                </div>
            )}

            {/* Quote Modal */}
            {showQuoteModal && (
                <div className="quote-modal-backdrop active" onClick={handleCloseQuotation}>
                    <div className="letterhead-document" onClick={(e) => e.stopPropagation()}>
                        <div className="doc-action-bar">
                            <span>📄 Quotation generated successfully. Download, print or save as PDF.</span>
                            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                                <button className="doc-close-btn" onClick={handleCloseQuotation}>Back to Page</button>
                                <button className="doc-print-btn" onClick={downloadPDF}>📥 Download PDF</button>
                                <button className="doc-print-btn" onClick={() => window.print()}>🖨️ Print</button>
                            </div>
                        </div>

                        <div className="letterhead-header">
                            <div>
                                <img src={logo} alt="Molsys Logo" className="letterhead-logo"/>
                                <div style={{ fontSize: '10px', fontWeight: '700', color: '#64748b', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Next-Gen Bioinformatic Solutions</div>
                            </div>
                            <div className="letterhead-corporate-info">
                                <strong>Molsys Pvt. Ltd.</strong><br/>
                                Yenepoya Technology Incubator, University Road,<br/>
                                Deralakatte, Ullal, Karnataka, Mangalore - 575018<br/>
                                Email: info@molsys.in | solutions@molsys.in
                            </div>
                        </div>

                        <div className="letterhead-title">QUOTATION FOR MICROBIAL WHOLE GENOME SEQUENCING (WGS) SERVICES</div>

                        {/* Phase 3: Improved Quotation Header with Lead ID, Email, Phone */}
                        <div className="doc-meta-grid">
                            <div className="doc-meta-card">
                                <strong>Quotation Details:</strong><br/>
                                <table style={{ width: '100%', fontSize: '12px', marginTop: '6px' }}>
                                    <tbody>
                                        <tr><td>Lead ID:</td><td style={{ fontWeight: '600', color: '#0055FF' }}>{leadId}</td></tr>
                                        <tr><td>Quote Ref:</td><td style={{ fontWeight: '600' }}>{quoteRef}</td></tr>
                                        <tr><td>Quote Date:</td><td style={{ fontWeight: '600' }}>{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</td></tr>
                                        <tr><td>Validity:</td><td style={{ fontWeight: '600' }}>45 Days</td></tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="doc-meta-card">
                                <strong>To (Client Details):</strong><br/>
                                <table style={{ width: '100%', fontSize: '12px', marginTop: '6px' }}>
                                    <tbody>
                                        <tr><td>Client:</td><td style={{ fontWeight: '600' }}>{formData.name}</td></tr>
                                        <tr><td>Email:</td><td style={{ fontWeight: '600' }}>{formData.email}</td></tr>
                                        <tr><td>Phone:</td><td style={{ fontWeight: '600' }}>{formData.phone || 'N/A'}</td></tr>
                                        <tr><td>Dept:</td><td style={{ fontWeight: '600' }}>{formData.department}</td></tr>
                                        <tr><td>Institution:</td><td style={{ fontWeight: '600' }}>{formData.institution}</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="disclaimer-box">
                            <strong>Important Notice:</strong> Please note that the prices and terms displayed in this generated quotation are indicative and provided solely to give you an estimate for your planning purposes. They do not constitute a final binding commercial offer.
                        </div>

                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>S.No.</th>
                                    <th>Cat No.</th>
                                    <th>Description of Services</th>
                                    <th>Qty</th>
                                    <th>Price / Sample</th>
                                    <th>Total Cost</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>MOL-WGS-200X</td>
                                    <td>
                                        <strong>Whole Genome Sequencing (WGS) &amp; Bioinformatics Assembly Services</strong><br/>
                                        Includes high-throughput sequencing at 200X depth of coverage, genome draft assembly report (FASTA format), GC skew analysis, taxonomic validation, AMR resistance profiling, and Biosynthetic Gene Cluster (BGC) mapping.
                                    </td>
                                    <td>{currentWgsQty}</td>
                                    <td>{formatCurrency(currentWgsUnitRate)}</td>
                                    <td>{formatCurrency(netTotal)}</td>
                                </tr>
                                <tr>
                                    <td colSpan="4"></td>
                                    <td style={{ fontWeight: '600' }}>Net Total:</td>
                                    <td style={{ fontWeight: '600' }}>{formatCurrency(netTotal)}</td>
                                </tr>
                                <tr>
                                    <td colSpan="4"></td>
                                    <td style={{ fontWeight: '600' }}>GST @ 18%:</td>
                                    <td style={{ fontWeight: '600' }}>{formatCurrency(gst)}</td>
                                </tr>
                                <tr>
                                    <td colSpan="4"></td>
                                    <td style={{ fontWeight: '700', color: '#0055ff' }}>Grand Total:</td>
                                    <td style={{ fontWeight: '700', color: '#0055ff' }}>{formatCurrency(grandTotal)}</td>
                                </tr>
                            </tbody>
                        </table>

                        <div style={{ fontSize: '13px', marginBottom: '20px', fontWeight: '600' }}>
                            Amount in Words: <span style={{ color: '#475569', fontWeight: '700' }}>{numberToWords(grandTotal)}</span>
                        </div>

                        <div className="doc-signatures">
                            <div>
                                <span style={{ color: '#64748b', fontSize: '11px' }}>Document generated electronically via Molsys Portal.</span>
                            </div>
                            <div style={{ textAlign: 'right', lineHeight: '1.6' }}>
                                For <strong>Molsys Pvt. Ltd.</strong><br/><br/><br/>
                                <strong>Authorized Signatory</strong><br/>
                                Operations &amp; Logistics Team
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WGSCampaign;
