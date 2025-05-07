// WorkshopRegistrationPage.jsx
import React, { useState } from "react";
import emailjs from 'emailjs-com';
import "../style/Workshop.css";

const WorkshopRegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    designation: "",
    workshop: "",
    agreeTerms: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const workshops = [
    {
      id: "metagenomics",
      name: "Amplicon Metagenomics & RNA Sequencing",
      date: "May 12th - May 14th, 2025",
    },
    {
      id: "biological",
      name: "AI in Biological Research",
      date: "May 16th - May 17th, 2025",
    },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter valid 10-digit phone number";
    }
    if (!formData.designation.trim())
      newErrors.designation = "Designation is required";
    if (!formData.workshop) newErrors.workshop = "Workshop is required";
    if (!formData.agreeTerms) newErrors.agreeTerms = "Required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      const selectedWorkshop = workshops.find((w) => w.id === formData.workshop);
  
      // Send the registration details via EmailJS
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        designation: formData.designation,
        workshop: selectedWorkshop?.name,
        workshopDate: selectedWorkshop?.date,
      };
  
      emailjs
        .send(
          'service_4qrjs0o', // Your EmailJS Service ID
          'template_kl20bjm', // Your EmailJS Template ID
          templateParams,
          'LV_-uXhtrexl-6c74' // Your EmailJS User ID
        )
        .then(
          (response) => {
            console.log('Email sent successfully!', response);
          },
          (error) => {
            console.error('Error sending email:', error);
          }
        );
    }
  };
  
  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      designation: "",
      workshop: "",
      agreeTerms: false,
    });
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    const selectedWorkshop = workshops.find((w) => w.id === formData.workshop);

    return (
      <div className="submitted-wrapper">
        <div className="submitted-box">
          <h2>Registration Successful!</h2>
          <p>
            Thank you, <strong>{formData.name}</strong>! You've registered for{" "}
          </p>
          <p>
            <strong>{selectedWorkshop?.name}</strong>
            <br />
            <span>{selectedWorkshop?.date}</span>
          </p>

          <button onClick={resetForm}>Register Another</button>
        </div>
      </div>
    );
  }

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit} className="registration-form">
        <h2>Workshop Registration</h2>

        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder={errors.name || "Full Name"}
            className={errors.name ? "error" : ""}
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder={errors.email || "Email Address"}
            className={errors.email ? "error" : ""}
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="phone"
            placeholder={errors.phone || "Phone Number"}
            className={errors.phone ? "error" : ""}
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="designation"
            placeholder={errors.designation || "Designation"}
            className={errors.designation ? "error" : ""}
            value={formData.designation}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <select
            name="workshop"
            className={errors.workshop ? "error" : ""}
            value={formData.workshop}
            onChange={handleChange}
          >
            <option value="">{errors.workshop || "Select Workshop"}</option>
            {workshops.map((w) => (
              <option key={w.id} value={w.id}>
                {w.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group checkbox-group">
          <label>
            <input
              type="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
            />
            I agree to the <a href="#">terms and conditions</a>
          </label>
          {errors.agreeTerms && (
            <span className="checkbox-error">{errors.agreeTerms}</span>
          )}
        </div>

        <button type="submit" className="submit-btn">
          Register Now
        </button>
      </form>
    </div>
  );
};

export default WorkshopRegistrationPage;
