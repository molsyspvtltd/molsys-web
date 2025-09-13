import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Registration.css';

function Registration() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        profession: '',
        education: '',
        organization: '',
        experience: '',
        expectations: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Replace these with your actual EmailJS credentials
        const serviceID = 'service_4qrjs0o';
        const templateID = 'template_q4k3u0t';
        const publicKey = '4LZtSWRLALJfG7OKG';

        // Send form data using EmailJS
        emailjs.send(serviceID, templateID, formData, publicKey)
            .then((result) => {
                console.log('Email successfully sent!', result.text);
                alert('Thank you for registering! We will contact you soon.');
                // Reset form after successful submission
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    profession: '',
                    education: '',
                    organization: '',
                    experience: '',
                    expectations: ''
                });
            })
            .catch((error) => {
                console.error('Failed to send email:', error);
                alert('Sorry, there was an error submitting your registration. Please try again.');
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <div className="registration-page">
            {/* Registration Form Section */}
            <section className="registration-form-section">
                <div className="container">
                    <h2>Register for the Workshop</h2>
                    <p className="form-subtitle">Complete the form below to secure your spot in our intensive 5-week program</p>

                    <form onSubmit={handleSubmit} className="registration-form">
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="firstName">First Name *</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name *</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="email">Email Address *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="profession">Current Profession/Role *</label>
                                <input
                                    type="text"
                                    id="profession"
                                    name="profession"
                                    value={formData.profession}
                                    onChange={handleChange}
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="education">Highest Education *</label>
                                <select
                                    id="education"
                                    name="education"
                                    value={formData.education}
                                    onChange={handleChange}
                                    required
                                    disabled={isSubmitting}
                                >
                                    <option value="">Select your education level</option>
                                    <option value="Undergraduate">Undergraduate</option>
                                    <option value="Bachelor's">Bachelor's Degree</option>
                                    <option value="Master's">Master's Degree</option>
                                    <option value="PhD">PhD</option>
                                    <option value="Postdoc">Postdoctoral</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="organization">Organization/Institution</label>
                                <input
                                    type="text"
                                    id="organization"
                                    name="organization"
                                    value={formData.organization}
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                />
                            </div>
                        </div>

                        <div className="form-group full-width">
                            <label htmlFor="expectations">What are your expectations from this workshop?</label>
                            <textarea
                                id="expectations"
                                name="expectations"
                                value={formData.expectations}
                                onChange={handleChange}
                                rows="4"
                                disabled={isSubmitting}
                            />
                        </div>

                        <div className="form-submit-container">
                            <button
                                type="submit"
                                className="cta-button form-submit"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit Registration'}
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Registration;
