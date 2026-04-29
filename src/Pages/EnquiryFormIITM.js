import React, { useState } from "react";
import logo from "../assets/logo.png";
import nexgen from "../assets/nexgen.jpg";

const EnquiryFormIITM = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    email: "",
    phone: "",
    institution: "",
    service: "",
    other_service: "",
    final_service: "",
    message: "",
    title: "New Company Enquiry",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const params = new URLSearchParams({
        from_name: formData.from_name,
        email: formData.email,
        phone: formData.phone,
        institution: formData.institution,
        service: formData.service,
        other_service: formData.other_service,
        final_service: formData.final_service,
        message: formData.message,
      });

      await fetch(
        "https://script.google.com/macros/s/AKfycbwvtzYrdHHqFwBgMKG-zJrLxfEg-sMtAbzBcxS0VqzeLw3dythFCW-fyhdxuHu0tgn1/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: params,
        },
      );

      // no-cors means we can't read the response, but if no exception = success
      alert("Enquiry sent successfully!");

      setFormData({
        from_name: "",
        email: "",
        phone: "",
        institution: "",
        service: "",
        other_service: "",
        final_service: "",
        message: "",
        title: "New Company Enquiry",
      });
    } catch (err) {
      alert("Error sending enquiry! Please try again.");
      console.error("Submission failed:", err);
    }
  };

  const services = [
    {
      icon: "🧬",
      name: "Whole Genome Sequencing",
      subtitle: "WGS – Bacteria",
      description: "Complete bacterial genome analysis with high accuracy",
    },
    {
      icon: "🦠",
      name: "Whole Metagenome Sequencing",
      subtitle: "Microbiome Analysis",
      description: "Comprehensive microbial community profiling",
    },
    {
      icon: "🔬",
      name: "Shallow-depth mtDNA Sequencing",
      subtitle: "Mitochondrial DNA",
      description: "Cost-effective mitochondrial genome sequencing",
    },
    {
      icon: "📊",
      name: "RNA Sequencing",
      subtitle: "RNA-Seq",
      description: "Transcriptome analysis and gene expression profiling",
    },
    {
      icon: "🧪",
      name: "Gene Expression Analysis",
      subtitle: "qPCR",
      description: "Quantitative PCR for precise gene expression measurement",
    },
    {
      icon: "🎯",
      name: "SNP Genotyping",
      subtitle: "Variant Detection",
      description: "High-throughput genetic variation analysis",
    },
  ];

  return (
    <>
      <div
        style={{
          background: "white",
          padding: "40px 20px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(24px, 5vw, 28px)",
              fontWeight: "bold",
              color: "#2d3748",
              marginBottom: "30px",
              position: "relative",
              paddingBottom: "16px",
            }}
          >
            Our Collaboration
          </h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "clamp(20px, 5vw, 40px)",
              flexWrap: "wrap",
              padding: "20px",
            }}
          >
            <div
              style={{
                width: "clamp(90px, 15vw, 130px)",
                height: "clamp(90px, 15vw, 130px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "white",
                borderRadius: "12px",
                padding: "8px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
              }}
            >
              <img
                src={logo}
                alt="MOLSYS Logo"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
            <span
              style={{
                fontSize: "clamp(14px, 3vw, 18px)",
                fontWeight: "600",
                color: "#667eea",
                whiteSpace: "nowrap",
              }}
            >
              collaborated with
            </span>
            <div
              style={{
                width: "clamp(90px, 15vw, 130px)",
                height: "clamp(90px, 15vw, 130px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "white",
                borderRadius: "12px",
                padding: "8px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
              }}
            >
              <img
                src={nexgen}
                alt="NexGen"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  borderRadius: "8px",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          background: "#f7fafc",
          padding: "60px 20px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "#2d3748",
              textAlign: "center",
              marginBottom: "48px",
            }}
          >
            💰 Featured Pricing Plans
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "32px",
            }}
          >
            {/* WGS-Bacteria Card */}
            <div
              style={{
                background: "linear-gradient(135deg, #e0e7ff 0%, #f3e8ff 100%)",
                borderRadius: "16px",
                padding: "32px",
                border: "2px solid #667eea",
                boxShadow: "0 8px 24px rgba(102, 126, 234, 0.2)",
              }}
            >
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#2d3748",
                  marginBottom: "16px",
                }}
              >
                WGS-Bacteria
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  color: "#4a5568",
                  marginBottom: "24px",
                }}
              >
                Complete bacterial genome sequencing
              </p>
              <div
                style={{
                  marginBottom: "24px",
                }}
              >
                <p
                  style={{
                    fontSize: "28px",
                    fontWeight: "bold",
                    color: "#667eea",
                    margin: "0 0 4px 0",
                  }}
                >
                  INR 4,999
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#718096",
                    margin: "0",
                  }}
                >
                  (including taxes)
                </p>
              </div>
              <p
                style={{
                  fontSize: "14px",
                  color: "#4a5568",
                  marginBottom: "20px",
                }}
              >
                Minimum 6 samples required
              </p>
              <div style={{ marginBottom: "24px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "12px",
                  }}
                >
                  <span
                    style={{
                      color: "#48bb78",
                      fontSize: "20px",
                      marginRight: "8px",
                    }}
                  >
                    ✓
                  </span>
                  <span style={{ color: "#4a5568" }}>
                    High-quality genomic data
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "12px",
                  }}
                >
                  <span
                    style={{
                      color: "#48bb78",
                      fontSize: "20px",
                      marginRight: "8px",
                    }}
                  >
                    ✓
                  </span>
                  <span style={{ color: "#4a5568" }}>Fast turnaround time</span>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span
                    style={{
                      color: "#48bb78",
                      fontSize: "20px",
                      marginRight: "8px",
                    }}
                  >
                    ✓
                  </span>
                  <span style={{ color: "#4a5568" }}>
                    Comprehensive analysis report
                  </span>
                </div>
              </div>
            </div>

            {/* Whole Metagenome Sequencing Card */}
            <div
              style={{
                background: "linear-gradient(135deg, #ffe0f0 0%, #f3e8ff 100%)",
                borderRadius: "16px",
                padding: "32px",
                border: "2px solid #d946ef",
                boxShadow: "0 8px 24px rgba(217, 70, 239, 0.2)",
              }}
            >
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#2d3748",
                  marginBottom: "16px",
                }}
              >
                Whole Metagenome Sequencing
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  color: "#4a5568",
                  marginBottom: "24px",
                }}
              >
                Advanced metagenomic analysis
              </p>
              <div
                style={{
                  marginBottom: "24px",
                }}
              >
                <p
                  style={{
                    fontSize: "28px",
                    fontWeight: "bold",
                    color: "#d946ef",
                    margin: "0 0 4px 0",
                  }}
                >
                  INR 9,999
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#718096",
                    margin: "0",
                  }}
                >
                  (including taxes)
                </p>
              </div>
              <p
                style={{
                  fontSize: "14px",
                  color: "#4a5568",
                  marginBottom: "20px",
                }}
              >
                Minimum 6 samples required
              </p>
              <div style={{ marginBottom: "24px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "12px",
                  }}
                >
                  <span
                    style={{
                      color: "#48bb78",
                      fontSize: "20px",
                      marginRight: "8px",
                    }}
                  >
                    ✓
                  </span>
                  <span style={{ color: "#4a5568" }}>
                    Complete microbiome profiling
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "12px",
                  }}
                >
                  <span
                    style={{
                      color: "#48bb78",
                      fontSize: "20px",
                      marginRight: "8px",
                    }}
                  >
                    ✓
                  </span>
                  <span style={{ color: "#4a5568" }}>
                    Species identification
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span
                    style={{
                      color: "#48bb78",
                      fontSize: "20px",
                      marginRight: "8px",
                    }}
                  >
                    ✓
                  </span>
                  <span style={{ color: "#4a5568" }}>
                    Comprehensive diversity analysis
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          padding: "100px 20px 40px 20px",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div
            style={{
              textAlign: "center",
              marginBottom: "60px",
              color: "white",
            }}
          >
            <h1
              style={{
                fontSize: "48px",
                fontWeight: "bold",
                marginBottom: "16px",
                textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
              }}
            >
              Special Offer on Genomic Sequencing Services
            </h1>
            <p
              style={{
                fontSize: "20px",
                opacity: 0.95,
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Cutting-edge genomic analysis for research institutions,
              hospitals, and biotech companies worldwide
            </p>
          </div>

          <div style={{ marginBottom: "60px" }}>
            <h2
              style={{
                fontSize: "32px",
                fontWeight: "bold",
                color: "white",
                textAlign: "center",
                marginBottom: "40px",
              }}
            >
              🌟 Our Premium Services
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "24px",
              }}
            >
              {services.map((service, index) => (
                <div
                  key={index}
                  style={{
                    background: "white",
                    borderRadius: "16px",
                    padding: "24px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow =
                      "0 15px 40px rgba(0,0,0,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 30px rgba(0,0,0,0.2)";
                  }}
                >
                  <div style={{ fontSize: "48px", marginBottom: "12px" }}>
                    {service.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "#2d3748",
                      marginBottom: "4px",
                    }}
                  >
                    {service.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#667eea",
                      fontWeight: "600",
                      marginBottom: "12px",
                    }}
                  >
                    {service.subtitle}
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#4a5568",
                      lineHeight: "1.6",
                    }}
                  >
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              background: "white",
              borderRadius: "24px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
              overflow: "hidden",
            }}
          >
            <div style={{ padding: "48px" }}>
              <div style={{ marginBottom: "32px" }}>
                <h2
                  style={{
                    fontSize: "32px",
                    fontWeight: "bold",
                    color: "#2d3748",
                    marginBottom: "12px",
                  }}
                >
                  Service Request Form
                </h2>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#4a5568",
                    lineHeight: "1.6",
                  }}
                >
                  Welcome! Please fill out the form below to request genomic
                  sequencing services. Our team will review your submission and
                  get back to you shortly.
                </p>
              </div>

              <div>
                <div style={{ marginBottom: "24px" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#2d3748",
                      marginBottom: "8px",
                    }}
                  >
                    Full Name <span style={{ color: "#e53e3e" }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    value={formData.from_name}
                    placeholder="Enter your full name"
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "2px solid #e2e8f0",
                      borderRadius: "8px",
                      fontSize: "16px",
                      outline: "none",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#667eea")}
                    onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                    required
                  />
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                    gap: "24px",
                    marginBottom: "24px",
                  }}
                >
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#2d3748",
                        marginBottom: "8px",
                      }}
                    >
                      Email Address <span style={{ color: "#e53e3e" }}>*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      placeholder="Enter your email address"
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        border: "2px solid #e2e8f0",
                        borderRadius: "8px",
                        fontSize: "16px",
                        outline: "none",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#667eea")}
                      onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                      required
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#2d3748",
                        marginBottom: "8px",
                      }}
                    >
                      Phone Number <span style={{ color: "#e53e3e" }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      placeholder="+1 234 567 8900"
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        border: "2px solid #e2e8f0",
                        borderRadius: "8px",
                        fontSize: "16px",
                        outline: "none",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#667eea")}
                      onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                      required
                    />
                  </div>
                </div>

                <div style={{ marginBottom: "24px" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#2d3748",
                      marginBottom: "8px",
                    }}
                  >
                    Institution / Organization
                  </label>
                  <input
                    type="text"
                    name="institution"
                    value={formData.institution}
                    placeholder="Your Company Name"
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "2px solid #e2e8f0",
                      borderRadius: "8px",
                      fontSize: "16px",
                      outline: "none",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#667eea")}
                    onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                  />
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      formData.service === "Other"
                        ? "repeat(auto-fit, minmax(250px, 1fr))"
                        : "1fr",
                    gap: "24px",
                    marginBottom: "24px",
                  }}
                >
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#2d3748",
                        marginBottom: "8px",
                      }}
                    >
                      Selected Service
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        border: "2px solid #e2e8f0",
                        borderRadius: "8px",
                        fontSize: "16px",
                        outline: "none",
                        cursor: "pointer",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#667eea")}
                      onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                      required
                    >
                      <option value="">Select a Service</option>
                      <option value="16S Metagenomics">16S Metagenomics</option>
                      <option value="ITS Metagenomic Sequencing (Fungal Profiling)">
                        ITS Metagenomic Sequencing (Fungal Profiling)
                      </option>
                      <option value="Whole Genome Sequencing (WGS – Bacteria)">
                        Whole Genome Sequencing (WGS – Bacteria)
                      </option>
                      <option value="Whole Metagenome Sequencing">
                        Whole Metagenome Sequencing
                      </option>
                      <option value="Shallow-depth mtDNA Sequencing">
                        Shallow-depth mtDNA Sequencing
                      </option>
                      <option value="RNA Sequencing (RNA-Seq)">
                        RNA Sequencing (RNA-Seq)
                      </option>
                      <option value="Gene Expression Analysis (qPCR)">
                        Gene Expression Analysis (qPCR)
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  {formData.service === "Other" && (
                    <div>
                      <label
                        style={{
                          display: "block",
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "#2d3748",
                          marginBottom: "8px",
                        }}
                      >
                        Please specify the service
                      </label>
                      <input
                        type="text"
                        name="other_service"
                        value={formData.other_service}
                        placeholder="Enter your custom service"
                        onChange={handleChange}
                        style={{
                          width: "100%",
                          padding: "12px 16px",
                          border: "2px solid #e2e8f0",
                          borderRadius: "8px",
                          fontSize: "16px",
                          outline: "none",
                        }}
                        onFocus={(e) =>
                          (e.target.style.borderColor = "#667eea")
                        }
                        onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                        required
                      />
                    </div>
                  )}
                </div>

                <div style={{ marginBottom: "24px" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#2d3748",
                      marginBottom: "8px",
                    }}
                  >
                    Final Service to Process
                  </label>
                  <input
                    type="text"
                    name="final_service"
                    value={formData.final_service}
                    placeholder="Primary service you're interested in"
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "2px solid #e2e8f0",
                      borderRadius: "8px",
                      fontSize: "16px",
                      outline: "none",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#667eea")}
                    onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                  />
                </div>

                <div style={{ marginBottom: "24px" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#2d3748",
                      marginBottom: "8px",
                    }}
                  >
                    Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    placeholder="Tell us more about your requirements..."
                    onChange={handleChange}
                    rows="5"
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "2px solid #e2e8f0",
                      borderRadius: "8px",
                      fontSize: "16px",
                      outline: "none",
                      resize: "vertical",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#667eea")}
                    onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                  />
                </div>

                <button
                  onClick={sendEmail}
                  style={{
                    width: "100%",
                    padding: "16px",
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    color: "white",
                    fontSize: "18px",
                    fontWeight: "bold",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow =
                      "0 10px 20px rgba(102, 126, 234, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "none";
                  }}
                >
                  Submit Enquiry - Don't Miss Out!
                </button>

                <p
                  style={{
                    textAlign: "center",
                    marginTop: "16px",
                    fontSize: "16px",
                    color: "#667eea",
                    fontWeight: "600",
                  }}
                >
                  ⏰ Priority response within 24 hours!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnquiryFormIITM;
