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
  const [showPDF, setShowPDF] = useState(false);

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
    const templateID = "template_na4rrlt"; // ✅ Changed
    const publicKey = "dGXfesWGj3A2o1FsB";

    try {
      // Send registration & payment details
      await emailjs.send(
        serviceID,
        templateID, // ✅ Changed
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
    <div style={styles.container}>
      {/* PDF Download Link */}
      {/* Application Deadline Highlight */}
      <section style={styles.deadlineSection}>
        <div style={styles.deadlineContainer}>
          <span style={styles.deadlineBadge}>⏰ Deadline</span>
          <h3 style={styles.deadlineTitle}>
            Last Day to Apply: <strong>25 January 2026</strong>
          </h3>
          <p style={styles.deadlineText}>
            Applications received after this date will not be considered.
          </p>
        </div>
      </section>

      <section style={styles.pdfDownloadSection}>
        <div style={styles.pdfDownloadContainer}>
          <h3 style={styles.downloadTitle}>📄 Workshop Information</h3>
          <p style={styles.downloadText}>
            Download the complete workshop details and curriculum
          </p>
          <a
            href="/workshop-details.pdf"
            download
            style={styles.downloadButton}
          >
            📥 Download Workshop PDF
          </a>
        </div>
      </section>

      <section style={styles.formSection}>
        <div style={styles.formContainer}>
          <h2 style={styles.formTitle}>Workshop Registration</h2>
          <p style={styles.formSubtitle}>
            Fill in your details below to register for the workshop
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
              {isSubmitting ? " Submitting..." : " Submit Registration"}
            </button>
          </div>

          <div style={styles.paymentInfo}>
            <h3 style={styles.paymentTitle}>💳 Payment Information</h3>
            <p style={styles.paymentText}>
              After registration, you'll receive payment details via email:
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#f5f7fa",
    padding: "20px",
  },
  pdfDownloadSection: {
    maxWidth: "800px",
    margin: "40px auto 40px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    padding: "30px",
    textAlign: "center",
  },

  pdfDownloadContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
  },
  downloadTitle: {
    margin: 0,
    color: "#2c3e50",
    fontSize: "22px",
    fontWeight: "600",
  },
  downloadText: {
    margin: 0,
    color: "#7f8c8d",
    fontSize: "15px",
  },
  downloadButton: {
    display: "inline-block",
    padding: "12px 30px",
    backgroundColor: "#3498db",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "600",
    transition: "background-color 0.3s",
    cursor: "pointer",
  },
  formSection: {
    maxWidth: "800px",
    margin: "0 auto",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    padding: "40px",
  },
  formContainer: {
    width: "100%",
  },
  formTitle: {
    margin: "0 0 10px",
    color: "#2c3e50",
    fontSize: "28px",
    fontWeight: "700",
    textAlign: "center",
  },
  formSubtitle: {
    margin: "0 0 30px",
    color: "#7f8c8d",
    textAlign: "center",
    fontSize: "16px",
  },
  formContent: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "8px",
    color: "#34495e",
    fontWeight: "600",
    fontSize: "14px",
  },
  input: {
    padding: "12px 16px",
    fontSize: "16px",
    border: "2px solid #e0e0e0",
    borderRadius: "8px",
    outline: "none",
    transition: "border-color 0.3s",
    fontFamily: "inherit",
  },
  select: {
    padding: "12px 16px",
    fontSize: "16px",
    border: "2px solid #e0e0e0",
    borderRadius: "8px",
    outline: "none",
    backgroundColor: "#fff",
    cursor: "pointer",
    fontFamily: "inherit",
  },
  submitButton: {
    padding: "16px",
    fontSize: "18px",
    fontWeight: "600",
    color: "#fff",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "10px",
    transition: "transform 0.2s",
  },
  paymentInfo: {
    marginTop: "30px",
    padding: "20px",
    backgroundColor: "#e8f5e9",
    borderRadius: "8px",
    border: "1px solid #c8e6c9",
    textAlign: "center",
  },
  paymentText: {
    margin: 0,
    color: "#2e7d32",
    fontSize: "15px",
    fontWeight: "500",

  },
  deadlineSection: {
  maxWidth: "800px",
  margin: "30px auto",
  background: "linear-gradient(135deg, #fff3cd, #ffe8a1)",
  borderRadius: "12px",
  padding: "25px",
  border: "2px solid #ffcc00",
  boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
},

deadlineContainer: {
  textAlign: "center",
},

deadlineSection: {
  maxWidth: "800px",
  margin: "70px auto 30px", // ⬅️ Added bigger top margin
  background: "linear-gradient(135deg, #fff3cd, #ffe8a1)",
  borderRadius: "12px",
  padding: "25px",
  border: "2px solid #ffcc00",
  boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
},


deadlineTitle: {
  margin: "10px 0",
  fontSize: "22px",
  fontWeight: "700",
  color: "#d84315",
},

deadlineText: {
  margin: 0,
  fontSize: "15px",
  color: "#5d4037",
  fontWeight: "500",
},

};

export default Registration;
