import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import emailjs from 'emailjs-com';
import '../styles/CancerTestForm.css';

const CancerTestForm = () => {
    const history = useHistory();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        age: '',
        gender: '',
        email: '',
        phone: '',
        location: '',
        selectedTest: '',
        referredBy: '',
        agreeToContact: false
    });

    // Hardcoded test options
    const testOptions = [
        { name: "BRACAnalysis CDx", type: "Germline Diagnostic" },
        { name: "EndoPredict", type: "Tumor Prognostic" },
        { name: "myChoice CDx", type: "Tumor Diagnostic (HRD)" },
        { name: "MyRisk Germline Test", type: "Germline Multi-Gene Panel" },
        { name: "MyRisk Hereditary Cancer Risk Test", type: "Germline Multi-Gene Panel" },
        { name: "Prolaris", type: "Tumor Prognostic" }
    ];

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.age || formData.age < 1 || formData.age > 120) newErrors.age = 'Please enter a valid age';
        if (!formData.gender) newErrors.gender = 'Please select gender';
        if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Please enter a valid email';
        if (!formData.phone || !/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Please enter a valid 10-digit phone number';
        if (!formData.location.trim()) newErrors.location = 'Location is required';
        if (!formData.selectedTest) newErrors.selectedTest = 'Please select a test';
        if (!formData.referredBy.trim()) newErrors.referredBy = 'This field is required';

        if (!formData.agreeToContact) newErrors.agreeToContact = 'You must agree to be contacted';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleBackClick = () => {
        history.push('/cancer');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsSubmitting(true);

            const templateParams = {
                to_name: "Medical Team",
                from_name: `${formData.firstName} ${formData.lastName}`,
                from_email: formData.email,
                phone: formData.phone,
                age: formData.age,
                gender: formData.gender,
                location: formData.location,
                selected_test: formData.selectedTest,
                referred_by: formData.referredBy,
                message: `New genetic test consultation request for ${formData.selectedTest}`
            };

            emailjs.send(
                'service_eosie2g',   // e.g., 'service_abc123'
                'template_dnanuqm',  // e.g., 'template_xyz456'
                templateParams,
                'rTDFxznnAkkiAVsrt'       // e.g., 'user_123abc'
            )
                .then((response) => {
                    console.log('Email sent successfully!', response.status, response.text);
                    setIsSubmitting(false);
                    setSubmitSuccess(true);

                    // Optional: Reset form
                    setFormData({
                        firstName: '',
                        lastName: '',
                        age: '',
                        gender: '',
                        email: '',
                        phone: '',
                        location: '',
                        selectedTest: '',
                        referredBy: '',
                        agreeToContact: false
                    });
                })
                .catch((err) => {
                    console.error('Failed to send email:', err);
                    setIsSubmitting(false);
                    alert('Failed to send request. Please try again later.');
                });
        }
    };

    if (submitSuccess) {
        return (
            <div className="form-success-container">
                <div className="form-success-card">
                    <div className="success-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <path d="M22 4L12 14.01l-3-3" />
                        </svg>
                    </div>
                    <h2>Thank You for Your Submission</h2>
                    <p>Our team will contact you shortly to discuss next steps.</p>
                    <button
                        className="btn btn--primary"
                        onClick={handleBackClick}
                    >
                        Back to Test Directory
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="cancer-test-form-container">
            <div className="form-header">
                <div className="header-gradient">
                    <h1>Genetic Test Consultation Request</h1>
                    <p>Complete this form to request a consultation about our genetic tests</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="cancer-test-form">
                <div className="form-grid">
                    <div className="form-group">
                        <label htmlFor="firstName">First Name*</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className={errors.firstName ? 'error' : ''}
                        />
                        {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="lastName">Last Name*</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className={errors.lastName ? 'error' : ''}
                        />
                        {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="age">Age*</label>
                        <input
                            type="number"
                            id="age"
                            name="age"
                            min="1"
                            max="120"
                            value={formData.age}
                            onChange={handleChange}
                            className={errors.age ? 'error' : ''}
                        />
                        {errors.age && <span className="error-message">{errors.age}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="gender">Gender*</label>
                        <select
                            id="gender"
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className={errors.gender ? 'error' : ''}
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                            <option value="prefer-not-to-say">Prefer not to say</option>
                        </select>
                        {errors.gender && <span className="error-message">{errors.gender}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email*</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={errors.email ? 'error' : ''}
                        />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone*</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={errors.phone ? 'error' : ''}
                            placeholder="10 digits without spaces"
                        />
                        {errors.phone && <span className="error-message">{errors.phone}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="location">Location*</label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            className={errors.location ? 'error' : ''}
                            placeholder="City, State"
                        />
                        {errors.location && <span className="error-message">{errors.location}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="selectedTest">Select Test*</label>
                        <select
                            id="selectedTest"
                            name="selectedTest"
                            value={formData.selectedTest}
                            onChange={handleChange}
                            className={errors.selectedTest ? 'error' : ''}
                        >
                            <option value="">Select a Genetic Test</option>
                            {testOptions.map((test, index) => (
                                <option key={index} value={test.name}>
                                    {test.name} ({test.type})
                                </option>
                            ))}
                        </select>
                        {errors.selectedTest && <span className="error-message">{errors.selectedTest}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="referredBy">Referred By Doctor*</label>
                        <input
                            type="text"
                            id="referredBy"
                            name="referredBy"
                            value={formData.referredBy}
                            onChange={handleChange}
                            className={errors.referredBy ? 'error' : ''}
                            placeholder="Enter doctor's name or clinic"
                        />
                        {errors.referredBy && <span className="error-message">{errors.referredBy}</span>}
                    </div>
                    
                </div>

                <div className="form-group checkbox-group">
                    <input
                        type="checkbox"
                        id="agreeToContact"
                        name="agreeToContact"
                        checked={formData.agreeToContact}
                        onChange={handleChange}
                        className={errors.agreeToContact ? 'error' : ''}
                    />
                    <label htmlFor="agreeToContact">
                        I agree to be contacted by the medical team regarding this test*
                    </label>
                    {errors.agreeToContact && <span className="error-message">{errors.agreeToContact}</span>}
                </div>

                <div className="form-actions">
                    <button
                        type="button"
                        className="btn btn--secondary"
                        onClick={handleBackClick}
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="btn btn--primary"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <>
                                <span className="spinner"></span>
                                Submitting...
                            </>
                        ) : 'Submit Request'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CancerTestForm;