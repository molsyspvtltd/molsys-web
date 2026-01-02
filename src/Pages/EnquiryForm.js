import React, { useState } from "react";
import emailjs from "@emailjs/browser"; // ✅ REQUIRED for sending emails
import "./EnquiryForm.css";

const EnquiryForm = () => {
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

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_e6ax5mf",
        "template_s0p2g4k",
        formData,
        "MHuXywcK2nvKGX8KQ"
      )
      .then((response) => {
        alert("Enquiry sent successfully!");
        console.log("SUCCESS!", response.status, response.text);

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
      })
      .catch((err) => {
        alert("Error sending enquiry!");
        console.error("FAILED...", err);
      });
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <div className="form-card">
          <div className="form-header">
            <h2 className="form-title">Service Request Form</h2>
            <p className="form-subtitle">
              Welcome! Please fill out the form below to request genomic
              sequencing services. Our team will review your submission and get
              back to you shortly.
            </p>
          </div>

          {/* FORM START */}
          <form className="form-body" onSubmit={sendEmail}>
            <div className="form-group">
              <label className="form-label">
                Full Name <span className="required">*</span>
              </label>
              <input
                type="text"
                name="from_name"
                value={formData.from_name}
                placeholder="Enter your full name"
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">
                  Email Address <span className="required">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Enter your email address"
                  onChange={handleChange}
                  className="form-input input-email"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  Phone Number <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  placeholder="+1 234 567 8900"
                  onChange={handleChange}
                  className="form-input input-phone"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Institution / Organization</label>
              <input
                type="text"
                name="institution"
                value={formData.institution}
                placeholder="Your Company Name"
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div className="form-row">
              {/* MAIN SERVICE DROPDOWN */}
              <div className="form-group">
                <label className="form-label">Selected Service</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="form-input input-service"
                  required
                >
                  <option value="">Select a Service</option>

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

              {/* SHOW ONLY IF "OTHER" IS SELECTED */}
              {formData.service === "Other" && (
                <div className="form-group">
                  <label className="form-label">
                    Please specify the service
                  </label>
                  <input
                    type="text"
                    name="other_service"
                    value={formData.other_service}
                    placeholder="Enter your custom service"
                    onChange={handleChange}
                    className="form-input input-other"
                    required
                  />
                </div>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">Final Service to Process</label>
              <input
                type="text"
                name="final_service"
                value={formData.final_service}
                placeholder="Primary service you're interested in"
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Message (Optional)</label>
              <textarea
                name="message"
                value={formData.message}
                placeholder="Tell us more about your requirements..."
                onChange={handleChange}
                className="form-textarea"
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Submit Enquiry - Don't Miss Out!
            </button>

            <p className="form-footer-text">
              ⏰ Priority response within 24 hours!
            </p>
          </form>
          {/* FORM END */}
        </div>
      </div>
    </div>
  );
};

export default EnquiryForm;
