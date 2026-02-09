// import React, { useState } from "react";
// import emailjs from "@emailjs/browser";

// function Registration() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     institution: "",
//     role: "",
//     country: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [showPDF, setShowPDF] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async () => {
//     // Validation
//     if (
//       !formData.name ||
//       !formData.email ||
//       !formData.phone ||
//       !formData.institution ||
//       !formData.role ||
//       !formData.country
//     ) {
//       alert("⚠️ Please fill in all required fields");
//       return;
//     }

//     setIsSubmitting(true);

//     const serviceID = "service_cn21nrd";
//     const templateID = "template_na4rrlt"; // ✅ Changed
//     const publicKey = "dGXfesWGj3A2o1FsB";

//     try {
//       // Send registration & payment details
//       await emailjs.send(
//         serviceID,
//         templateID, // ✅ Changed
//         {
//           to_email: formData.email,
//           to_name: formData.name,
//           name: formData.name,
//           email: formData.email,
//           phone: formData.phone,
//           institution: formData.institution,
//           role: formData.role,
//           country: formData.country,
//           upi_id: "molsys@icici",
//           bank_name: "ICICI Bank",
//         },
//         publicKey,
//       );

//       alert(
//         "✅ Thank you for registering! Payment details have been sent to your email.",
//       );

//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         institution: "",
//         role: "",
//         country: "",
//       });
//     } catch (error) {
//       console.error("Error:", error);
//       alert("❌ Sorry, there was an error. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       {/* PDF Download Link */}
//       {/* Application Deadline Highlight */}
//       <section style={styles.deadlineSection}>
//         <div style={styles.deadlineContainer}>
//           <span style={styles.deadlineBadge}>⏰ Deadline</span>
//           <h3 style={styles.deadlineTitle}>
//             Last Day to Apply: <strong>25 January 2026</strong>
//           </h3>
//           <p style={styles.deadlineText}>
//             Applications received after this date will not be considered.
//           </p>
//         </div>
//       </section>

//       <section style={styles.pdfDownloadSection}>
//         <div style={styles.pdfDownloadContainer}>
//           <h3 style={styles.downloadTitle}>📄 Workshop Information</h3>
//           <p style={styles.downloadText}>
//             Download the complete workshop details and curriculum
//           </p>
//           <a
//             href="/workshop-details.pdf"
//             download
//             style={styles.downloadButton}
//           >
//             📥 Download Workshop PDF
//           </a>
//         </div>
//       </section>

//       <section style={styles.formSection}>
//         <div style={styles.formContainer}>
//           <h2 style={styles.formTitle}>Workshop Registration</h2>
//           <p style={styles.formSubtitle}>
//             Fill in your details below to register for the workshop
//           </p>

//           <div style={styles.formContent}>
//             <div style={styles.formGroup}>
//               <label style={styles.label}>Full Name *</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 disabled={isSubmitting}
//                 style={styles.input}
//                 placeholder="Enter your full name"
//               />
//             </div>

//             <div style={styles.formGroup}>
//               <label style={styles.label}>Email Address *</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 disabled={isSubmitting}
//                 style={styles.input}
//                 placeholder="your.email@example.com"
//               />
//             </div>

//             <div style={styles.formGroup}>
//               <label style={styles.label}>Phone Number *</label>
//               <input
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 disabled={isSubmitting}
//                 style={styles.input}
//                 placeholder="+91 1234567890"
//               />
//             </div>

//             <div style={styles.formGroup}>
//               <label style={styles.label}>Institution/Organization *</label>
//               <input
//                 type="text"
//                 name="institution"
//                 value={formData.institution}
//                 onChange={handleChange}
//                 disabled={isSubmitting}
//                 style={styles.input}
//                 placeholder="Your institution name"
//               />
//             </div>

//             <div style={styles.formGroup}>
//               <label style={styles.label}>Role *</label>
//               <select
//                 name="role"
//                 value={formData.role}
//                 onChange={handleChange}
//                 disabled={isSubmitting}
//                 style={styles.select}
//               >
//                 <option value="">Select your role</option>
//                 <option value="Student">Student</option>
//                 <option value="Researcher">Researcher</option>
//                 <option value="Faculty">Faculty</option>
//               </select>
//             </div>

//             <div style={styles.formGroup}>
//               <label style={styles.label}>Country *</label>
//               <input
//                 type="text"
//                 name="country"
//                 value={formData.country}
//                 onChange={handleChange}
//                 disabled={isSubmitting}
//                 style={styles.input}
//                 placeholder="India"
//               />
//             </div>

//             <button
//               onClick={handleSubmit}
//               disabled={isSubmitting}
//               style={{
//                 ...styles.submitButton,
//                 opacity: isSubmitting ? 0.6 : 1,
//                 cursor: isSubmitting ? "not-allowed" : "pointer",
//               }}
//             >
//               {isSubmitting ? " Submitting..." : " Submit Registration"}
//             </button>
//           </div>

//           <div style={styles.paymentInfo}>
//             <h3 style={styles.paymentTitle}>💳 Payment Information</h3>
//             <p style={styles.paymentText}>
//               After registration, you'll receive payment details via email:
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     minHeight: "100vh",
//     backgroundColor: "#f5f7fa",
//     padding: "20px",
//   },
//   pdfDownloadSection: {
//     maxWidth: "800px",
//     margin: "40px auto 40px",
//     backgroundColor: "#fff",
//     borderRadius: "12px",
//     boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
//     padding: "30px",
//     textAlign: "center",
//   },

//   pdfDownloadContainer: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     gap: "15px",
//   },
//   downloadTitle: {
//     margin: 0,
//     color: "#2c3e50",
//     fontSize: "22px",
//     fontWeight: "600",
//   },
//   downloadText: {
//     margin: 0,
//     color: "#7f8c8d",
//     fontSize: "15px",
//   },
//   downloadButton: {
//     display: "inline-block",
//     padding: "12px 30px",
//     backgroundColor: "#3498db",
//     color: "#fff",
//     textDecoration: "none",
//     borderRadius: "8px",
//     fontSize: "16px",
//     fontWeight: "600",
//     transition: "background-color 0.3s",
//     cursor: "pointer",
//   },
//   formSection: {
//     maxWidth: "800px",
//     margin: "0 auto",
//     backgroundColor: "#fff",
//     borderRadius: "12px",
//     boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
//     padding: "40px",
//   },
//   formContainer: {
//     width: "100%",
//   },
//   formTitle: {
//     margin: "0 0 10px",
//     color: "#2c3e50",
//     fontSize: "28px",
//     fontWeight: "700",
//     textAlign: "center",
//   },
//   formSubtitle: {
//     margin: "0 0 30px",
//     color: "#7f8c8d",
//     textAlign: "center",
//     fontSize: "16px",
//   },
//   formContent: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "20px",
//   },
//   formGroup: {
//     display: "flex",
//     flexDirection: "column",
//   },
//   label: {
//     marginBottom: "8px",
//     color: "#34495e",
//     fontWeight: "600",
//     fontSize: "14px",
//   },
//   input: {
//     padding: "12px 16px",
//     fontSize: "16px",
//     border: "2px solid #e0e0e0",
//     borderRadius: "8px",
//     outline: "none",
//     transition: "border-color 0.3s",
//     fontFamily: "inherit",
//   },
//   select: {
//     padding: "12px 16px",
//     fontSize: "16px",
//     border: "2px solid #e0e0e0",
//     borderRadius: "8px",
//     outline: "none",
//     backgroundColor: "#fff",
//     cursor: "pointer",
//     fontFamily: "inherit",
//   },
//   submitButton: {
//     padding: "16px",
//     fontSize: "18px",
//     fontWeight: "600",
//     color: "#fff",
//     background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//     border: "none",
//     borderRadius: "8px",
//     cursor: "pointer",
//     marginTop: "10px",
//     transition: "transform 0.2s",
//   },
//   paymentInfo: {
//     marginTop: "30px",
//     padding: "20px",
//     backgroundColor: "#e8f5e9",
//     borderRadius: "8px",
//     border: "1px solid #c8e6c9",
//     textAlign: "center",
//   },
//   paymentText: {
//     margin: 0,
//     color: "#2e7d32",
//     fontSize: "15px",
//     fontWeight: "500",

//   },
//   deadlineSection: {
//   maxWidth: "800px",
//   margin: "30px auto",
//   background: "linear-gradient(135deg, #fff3cd, #ffe8a1)",
//   borderRadius: "12px",
//   padding: "25px",
//   border: "2px solid #ffcc00",
//   boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
// },

// deadlineContainer: {
//   textAlign: "center",
// },

// deadlineSection: {
//   maxWidth: "800px",
//   margin: "70px auto 30px", // ⬅️ Added bigger top margin
//   background: "linear-gradient(135deg, #fff3cd, #ffe8a1)",
//   borderRadius: "12px",
//   padding: "25px",
//   border: "2px solid #ffcc00",
//   boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
// },


// deadlineTitle: {
//   margin: "10px 0",
//   fontSize: "22px",
//   fontWeight: "700",
//   color: "#d84315",
// },

// deadlineText: {
//   margin: 0,
//   fontSize: "15px",
//   color: "#5d4037",
//   fontWeight: "500",
// },

// };

// export default Registration;

import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    role: "",
    country: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    // Validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.institution ||
      !formData.role ||
      !formData.country
    ) {
      alert("⚠️ Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    const serviceID = "service_cn21nrd";
    const templateID = "template_na4rrlt";
    const publicKey = "dGXfesWGj3A2o1FsB";

    try {
      await emailjs.send(
        serviceID,
        templateID,
        {
          to_email: formData.email,
          to_name: formData.name,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          institution: formData.institution,
          role: formData.role,
          country: formData.country,
          upi_id: "molsys@icici",
          bank_name: "ICICI Bank",
        },
        publicKey,
      );

      alert(
        "✅ Thank you for registering! Payment details have been sent to your email.",
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        institution: "",
        role: "",
        country: "",
      });
    } catch (error) {
      console.error("Error:", error);
      alert("❌ Sorry, there was an error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={styles.pageWrapper}>
      {/* Urgent Banner */}
      <div style={styles.urgentBanner}>
        ⚡ REGISTRATION CLOSES ON 11TH FEBRUARY - BATCH 3 STARTS 12TH FEB ⚡
      </div>

      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>🧬 Genomics + AI Workshop</h1>
          <p style={styles.heroSubtitle}>
            Master 2 Critical Skills in Just 5 Days
          </p>
          <div style={styles.badge}>BATCH 3 - LIMITED SEATS</div>
          <div style={styles.heroHighlight}>
            100% HANDS-ON | Every Attendee Analyzes Real Data
          </div>
        </div>
      </section>

      {/* PDF Download Section - MOVED UP */}
      <section style={styles.pdfSection}>
        <div style={styles.container}>
          <div style={styles.pdfCard}>
            <h3 style={styles.pdfTitle}>📄 Workshop Information</h3>
            <p style={styles.pdfText}>
              Download the complete workshop details and curriculum
            </p>
            <a href="/workshop-details.pdf" download style={styles.pdfButton}>
              📥 Download Workshop PDF
            </a>
          </div>
        </div>
      </section>

      {/* Registration Form - MOVED UP */}
      <section style={styles.formSection} id="register">
        <div style={styles.container}>
          <div style={styles.formCard}>
            <h2 style={styles.formTitle}>🚀 Secure Your Seat Now!</h2>
            <p style={styles.formSubtitle}>
              Fill in your details below to register for Batch 3
            </p>

            <div style={styles.formContent}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  style={styles.input}
                  placeholder="Enter your full name"
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  style={styles.input}
                  placeholder="your.email@example.com"
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  style={styles.input}
                  placeholder="+91 1234567890"
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Institution/Organization *</label>
                <input
                  type="text"
                  name="institution"
                  value={formData.institution}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  style={styles.input}
                  placeholder="Your institution name"
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Role *</label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  style={styles.select}
                >
                  <option value="">Select your role</option>
                  <option value="Student">Student</option>
                  <option value="Researcher">Researcher</option>
                  <option value="Faculty">Faculty</option>
                </select>
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Country *</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  style={styles.input}
                  placeholder="India"
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                style={{
                  ...styles.submitButton,
                  opacity: isSubmitting ? 0.6 : 1,
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                }}
              >
                {isSubmitting ? "🔄 Submitting..." : "✅ Submit Registration"}
              </button>
            </div>

            <div style={styles.paymentInfo}>
              <h3 style={styles.paymentTitle}>💳 Payment Information</h3>
              <p style={styles.paymentText}>
                After registration, you'll receive payment details via email including:
              </p>
              <ul style={styles.paymentList}>
                <li>UPI ID: molsys@icici</li>
                <li>Bank: ICICI Bank</li>
                <li>Complete bank transfer details</li>
              </ul>
              <p style={styles.paymentNote}>
                Please complete payment within 24 hours to confirm your seat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section style={styles.pricingSection}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>💰 Special Workshop Pricing</h2>
          <div style={styles.pricingGrid}>
            <div style={styles.priceCard}>
              <div style={styles.priceCardHeader}>
                🇮🇳 Indian Students
              </div>
              <div style={styles.oldPrice}>₹7,999</div>
              <div style={styles.arrowDown}>↓</div>
              <div style={styles.newPrice}>₹2,999</div>
              <div style={styles.savingsTag}>Save ₹5,000 (62% OFF)</div>
            </div>
            <div style={styles.priceCard}>
              <div style={styles.priceCardHeader}>
                🌍 International
              </div>
              <div style={styles.oldPrice}>$100</div>
              <div style={styles.arrowDown}>↓</div>
              <div style={styles.newPrice}>$35</div>
              <div style={styles.savingsTag}>Save $65 (65% OFF)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section style={styles.scheduleSection}>
        <div style={styles.container}>
          <div style={styles.scheduleCard}>
            <h2 style={styles.scheduleTitleLarge}>📅 Workshop Schedule - Batch 3</h2>
            <div style={styles.scheduleGrid}>
              <div style={styles.scheduleItem}>
                <div style={styles.scheduleLabel}>Batch 3 Starts</div>
                <div style={styles.scheduleValue}>Thursday, 12th February 2026</div>
              </div>
              <div style={styles.scheduleItem}>
                <div style={styles.scheduleLabel}>Format</div>
                <div style={styles.scheduleValue}>
                  <span style={styles.onlineBadge}>💻 100% ONLINE</span>
                </div>
              </div>
              <div style={styles.scheduleItem}>
                <div style={styles.scheduleLabel}>Duration</div>
                <div style={styles.scheduleValue}>5 Days Intensive Training</div>
              </div>
              <div style={styles.scheduleItem}>
                <div style={styles.scheduleLabel}>Registration Deadline</div>
                <div style={styles.deadlineValue}>⏰ 11th February 2026</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section style={styles.curriculumSection}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>🎓 What You Will Learn</h2>
          
          {/* Skill 1 */}
          <div style={styles.skillCard}>
            <div style={styles.skillHeader}>
              <h3 style={styles.skillTitle}>Skill 1: Transcriptome Analysis (RNA-seq)</h3>
              <p style={styles.skillSubtitle}>
                Complete end-to-end pipeline from raw data to biological insights
              </p>
            </div>
            <ul style={styles.skillList}>
              <li style={styles.skillListItem}>✓ Basics of Quality Control (QC)</li>
              <li style={styles.skillListItem}>✓ Alignment or Assembly Techniques</li>
              <li style={styles.skillListItem}>✓ Differential Expression Analysis</li>
              <li style={styles.skillListItem}>✓ Pathway Enrichment Analysis</li>
              <li style={styles.skillListItem}>✓ AI-Based Results Interpretation (Special Feature)</li>
            </ul>
          </div>

          {/* Skill 2 */}
          <div style={styles.skillCard}>
            <div style={styles.skillHeader}>
              <h3 style={styles.skillTitle}>Skill 2: Exome / Variant Analysis</h3>
              <p style={styles.skillSubtitle}>
                Hands-on variant prioritization and clinical interpretation
              </p>
            </div>
            <ul style={styles.skillList}>
              <li style={styles.skillListItem}>✓ End-to-End Exome Pipeline</li>
              <li style={styles.skillListItem}>✓ Variant Calling Techniques</li>
              <li style={styles.skillListItem}>✓ ClinVarBERT / AI-Based Variant Interpretation</li>
              <li style={styles.skillListItem}>✓ Hands-On Variant Prioritization Exercises</li>
              <li style={styles.skillListItem}>✓ SIFT, Allele Frequency Analysis</li>
              <li style={styles.skillListItem}>✓ Literature Search & Conflict Interpretation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section style={styles.toolsSection}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitleWhite}>🛠️ Hands-On Tools You'll Use</h2>
          <div style={styles.toolsGrid}>
            <div style={styles.toolItem}>🐍 Google Colab (Python)</div>
            <div style={styles.toolItem}>💻 Linux/Bash</div>
            <div style={styles.toolItem}>☁️ AWS Instances</div>
            <div style={styles.toolItem}>🔧 Container-Based Pipelines</div>
            <div style={styles.toolItem}>🧬 Public Cancer Panel Datasets</div>
            <div style={styles.toolItem}>🤖 ClinVarBERT</div>
            <div style={styles.toolItem}>🔬 AI Interpretation Tools</div>
            <div style={styles.toolItem}>📊 Advanced Analytics</div>
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  pageWrapper: {
    minHeight: "100vh",
    backgroundColor: "#f5f5f5",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  },
  
  urgentBanner: {
    background: "linear-gradient(90deg, #ff6b6b 0%, #ee5a6f 100%)",
    color: "white",
    textAlign: "center",
    padding: "15px 20px",
    fontWeight: "700",
    fontSize: "14px",
    letterSpacing: "0.5px",
    marginTop: "80px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },

  heroSection: {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    padding: "80px 20px",
    paddingTop: "100px",
    textAlign: "center",
    color: "white",
  },

  heroContent: {
    maxWidth: "800px",
    margin: "0 auto",
  },

  heroTitle: {
    fontSize: "48px",
    fontWeight: "700",
    marginBottom: "20px",
    lineHeight: "1.2",
  },

  heroSubtitle: {
    fontSize: "24px",
    marginBottom: "30px",
    opacity: "0.95",
  },

  badge: {
    display: "inline-block",
    background: "rgba(255, 255, 255, 0.25)",
    padding: "12px 30px",
    borderRadius: "25px",
    fontWeight: "700",
    fontSize: "16px",
    border: "2px solid rgba(255, 255, 255, 0.3)",
    marginBottom: "20px",
  },

  heroHighlight: {
    fontSize: "20px",
    fontWeight: "600",
    padding: "15px 30px",
    background: "rgba(255, 255, 255, 0.15)",
    borderRadius: "10px",
    display: "inline-block",
  },

  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 15px",
    width: "100%",
  },

  pricingSection: {
    padding: "80px 20px",
    background: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
  },

  sectionTitle: {
    fontSize: "36px",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: "50px",
    color: "#2d3748",
  },

  sectionTitleWhite: {
    fontSize: "36px",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: "50px",
    color: "white",
  },

  pricingGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
    maxWidth: "600px",
    margin: "0 auto",
  },

  priceCard: {
    background: "white",
    padding: "40px 30px",
    borderRadius: "16px",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
    transition: "transform 0.3s ease",
  },

  priceCardHeader: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#667eea",
    marginBottom: "25px",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },

  oldPrice: {
    fontSize: "24px",
    color: "#e53e3e",
    textDecoration: "line-through",
    marginBottom: "10px",
  },

  arrowDown: {
    fontSize: "32px",
    color: "#48bb78",
    margin: "15px 0",
  },

  newPrice: {
    fontSize: "48px",
    fontWeight: "700",
    color: "#2d3748",
    marginBottom: "15px",
  },

  savingsTag: {
    display: "inline-block",
    background: "#48bb78",
    color: "white",
    padding: "8px 20px",
    borderRadius: "20px",
    fontSize: "14px",
    fontWeight: "600",
  },

  scheduleSection: {
    padding: "80px 20px",
    background: "#ffffff",
  },

  scheduleCard: {
    background: "#f7fafc",
    padding: "50px",
    borderRadius: "16px",
    borderLeft: "8px solid #667eea",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
  },

  scheduleTitleLarge: {
    fontSize: "32px",
    fontWeight: "700",
    color: "#2d3748",
    marginBottom: "40px",
    textAlign: "center",
  },

  scheduleGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "30px",
  },

  scheduleItem: {
    textAlign: "center",
  },

  scheduleLabel: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#718096",
    marginBottom: "10px",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },

  scheduleValue: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#2d3748",
  },

  deadlineValue: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#e53e3e",
  },

  onlineBadge: {
    display: "inline-block",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "white",
    padding: "8px 20px",
    borderRadius: "20px",
    fontSize: "14px",
    fontWeight: "700",
  },

  curriculumSection: {
    padding: "80px 20px",
    background: "#f5f5f5",
  },

  skillCard: {
    background: "white",
    borderRadius: "16px",
    padding: "40px",
    marginBottom: "30px",
    border: "2px solid #e2e8f0",
    boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
    transition: "all 0.3s ease",
  },

  skillHeader: {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "white",
    padding: "25px 30px",
    borderRadius: "12px",
    marginBottom: "30px",
  },

  skillTitle: {
    fontSize: "24px",
    fontWeight: "700",
    marginBottom: "10px",
  },

  skillSubtitle: {
    fontSize: "16px",
    opacity: "0.95",
    margin: 0,
  },

  skillList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },

  skillListItem: {
    fontSize: "16px",
    color: "#4a5568",
    padding: "15px 0",
    borderBottom: "1px solid #e2e8f0",
  },

  toolsSection: {
    padding: "80px 20px",
    background: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
  },

  toolsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "20px",
  },

  toolItem: {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    textAlign: "center",
    fontWeight: "600",
    fontSize: "16px",
    color: "#2d3748",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
  },

  pdfSection: {
    padding: "60px 20px",
    background: "white",
  },

  pdfCard: {
    textAlign: "center",
    background: "#f7fafc",
    padding: "40px",
    borderRadius: "16px",
    border: "2px solid #e2e8f0",
  },

  pdfTitle: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#2d3748",
    marginBottom: "15px",
  },

  pdfText: {
    fontSize: "16px",
    color: "#718096",
    marginBottom: "25px",
  },

  pdfButton: {
    display: "inline-block",
    background: "#3498db",
    color: "white",
    padding: "15px 40px",
    borderRadius: "10px",
    fontSize: "18px",
    fontWeight: "600",
    textDecoration: "none",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(52, 152, 219, 0.3)",
  },

  formSection: {
    padding: "60px 15px",
    background: "#f5f5f5",
  },

  formCard: {
    background: "white",
    borderRadius: "16px",
    padding: "40px 25px",
    boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "100%",
  },

  formTitle: {
    fontSize: "36px",
    fontWeight: "700",
    color: "#2d3748",
    textAlign: "center",
    marginBottom: "15px",
  },

  formSubtitle: {
    fontSize: "18px",
    color: "#718096",
    textAlign: "center",
    marginBottom: "40px",
  },

  formContent: {
    display: "flex",
    flexDirection: "column",
    gap: "25px",
  },

  formGroup: {
    display: "flex",
    flexDirection: "column",
  },

  label: {
    fontSize: "15px",
    fontWeight: "600",
    color: "#2d3748",
    marginBottom: "10px",
  },

  input: {
    padding: "14px 18px",
    fontSize: "16px",
    border: "2px solid #e2e8f0",
    borderRadius: "10px",
    outline: "none",
    transition: "border-color 0.3s ease",
    fontFamily: "inherit",
  },

  select: {
    padding: "14px 18px",
    fontSize: "16px",
    border: "2px solid #e2e8f0",
    borderRadius: "10px",
    outline: "none",
    background: "white",
    cursor: "pointer",
    fontFamily: "inherit",
  },

  submitButton: {
    padding: "18px",
    fontSize: "20px",
    fontWeight: "700",
    color: "white",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    marginTop: "15px",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    boxShadow: "0 6px 20px rgba(102, 126, 234, 0.4)",
  },

  paymentInfo: {
    marginTop: "40px",
    padding: "30px",
    background: "#e8f5e9",
    borderRadius: "12px",
    border: "2px solid #c8e6c9",
  },

  paymentTitle: {
    fontSize: "22px",
    fontWeight: "700",
    color: "#2e7d32",
    marginBottom: "15px",
    textAlign: "center",
  },

  paymentText: {
    fontSize: "16px",
    color: "#2e7d32",
    marginBottom: "15px",
    textAlign: "center",
  },

  paymentList: {
    listStyle: "none",
    padding: 0,
    margin: "20px 0",
    textAlign: "center",
    color: "#2e7d32",
    fontSize: "15px",
    fontWeight: "600",
  },

  paymentNote: {
    fontSize: "14px",
    color: "#1b5e20",
    textAlign: "center",
    fontStyle: "italic",
    marginTop: "15px",
  },
};

export default Registration;