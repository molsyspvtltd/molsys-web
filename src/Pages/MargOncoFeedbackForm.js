import React, { useState } from "react";
import "../style/MargOncoFeedbackForm.css";
import { submitMargOncoFeedback } from "../services/margOncoFeedbackService";

const INITIAL_FORM = {
  fullName: "",
  email: "",
  phone: "",
  affiliation: "",
  interests: [],
  rating: "",
  impressedFeature: "",
  suggestions: "",
  investmentInterest: "",
  pitchDeckContact: [],
  followUpDate: "",
  followUpTime: "",
  website: "", // Honeypot field: must remain empty.
};

const INTEREST_OPTIONS = [
  "Investment / Funding Opportunities",
  "Early Access / Beta Testing",
  "Strategic Partnership",
  "General Interest / Visitor",
];

const RATING_OPTIONS = [
  { value: "5", label: "5 - Excellent" },
  { value: "4", label: "4 - Good" },
  { value: "3", label: "3 - Average" },
  { value: "2", label: "2 - Fair" },
  { value: "1", label: "1 - Poor" },
];

function MargOncoFeedbackForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState({ type: "", message: "" });

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    if (submitState.message) setSubmitState({ type: "", message: "" });
  };

  const toggleInterest = (option) => {
    setForm((current) => {
      const selected = current.interests.includes(option);
      return {
        ...current,
        interests: selected
          ? current.interests.filter((item) => item !== option)
          : [...current.interests, option],
      };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitState({ type: "", message: "" });

    if (!form.fullName.trim() || !form.email.trim() || !form.phone.trim()) {
      setSubmitState({
        type: "error",
        message: "Please complete your name, email address, and phone number.",
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setSubmitState({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    if (!form.rating) {
      setSubmitState({
        type: "error",
        message: "Please select an overall impression rating.",
      });
      return;
    }

    if (!form.investmentInterest) {
      setSubmitState({
        type: "error",
        message: "Please select Yes, Maybe, or No for investment interest.",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      await submitMargOncoFeedback(form);
      setSubmitState({
        type: "success",
        message:
          "Thank you for sharing your feedback! Your response has been sent. If you experience any connection issue, please contact the Molsys team.",
      });
      setForm(INITIAL_FORM);
    } catch (error) {
      setSubmitState({
        type: "error",
        message:
          error.message ||
          "We couldn't send your response. Please check your internet connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="marg-feedback-page">
      <div className="marg-feedback-shell">
        <header className="marg-feedback-header">
          <span className="marg-feedback-eyebrow">
            MOLSYS · BENGALURU TECH SUMMIT
          </span>
          <h1>Marg-Onco Feedback &amp; Connect</h1>
          <p>
            Thank you for visiting the Marg-Onco team. Share your feedback, tell
            us what you are exploring, and let us know how we can connect with
            you after the summit.
          </p>
        </header>

        <form className="marg-feedback-form" onSubmit={handleSubmit} noValidate>
          <section className="marg-form-section">
            <div className="marg-section-heading">
              <span className="marg-section-number">01</span>
              <div>
                <h2>Connect &amp; Collaborate</h2>
                <p>Tell us a little about yourself.</p>
              </div>
            </div>

            <div className="marg-form-grid">
              <div className="marg-field">
                <label htmlFor="marg-fullName">
                  Full Name <span>*</span>
                </label>
                <input
                  id="marg-fullName"
                  name="fullName"
                  value={form.fullName}
                  onChange={updateField}
                  placeholder="Enter your full name"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="marg-field">
                <label htmlFor="marg-email">
                  Email Address <span>*</span>
                </label>
                <input
                  id="marg-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={updateField}
                  placeholder="name@company.com"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="marg-field">
                <label htmlFor="marg-phone">
                  Phone Number / WhatsApp <span>*</span>
                </label>
                <input
                  id="marg-phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={updateField}
                  placeholder="+91 98765 43210"
                  autoComplete="tel"
                  required
                />
              </div>

              <div className="marg-field">
                <label htmlFor="marg-affiliation">
                  Affiliation / Organization
                </label>
                <input
                  id="marg-affiliation"
                  name="affiliation"
                  value={form.affiliation}
                  onChange={updateField}
                  placeholder="Company, institution, role, etc."
                />
              </div>
            </div>

            <fieldset className="marg-choice-group">
              <legend>
                What are you exploring with us today?{" "}
                <em>(Select all that apply)</em>
              </legend>
              <div className="marg-checkbox-grid">
                {INTEREST_OPTIONS.map((option) => (
                  <label className="marg-choice-card" key={option}>
                    <input
                      type="checkbox"
                      checked={form.interests.includes(option)}
                      onChange={() => toggleInterest(option)}
                    />
                    <span className="marg-custom-check" />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          </section>

          <section className="marg-form-section">
            <div className="marg-section-heading">
              <span className="marg-section-number">02</span>
              <div>
                <h2>Feedback on Marg-Onco</h2>
                <p>Your feedback helps us improve the product.</p>
              </div>
            </div>

            <fieldset className="marg-choice-group">
              <legend>
                Overall Impression <span className="marg-required">*</span>
              </legend>
              <div className="marg-rating-grid">
                {RATING_OPTIONS.map((option) => (
                  <label
                    className={`marg-rating-option ${form.rating === option.value ? "selected" : ""}`}
                    key={option.value}
                  >
                    <input
                      type="radio"
                      name="rating"
                      value={option.value}
                      checked={form.rating === option.value}
                      onChange={updateField}
                    />
                    <span className="marg-radio-dot" />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="marg-field">
              <label htmlFor="marg-impressedFeature">
                Which feature or aspect of Marg-Onco impressed you the most?
              </label>
              <textarea
                id="marg-impressedFeature"
                name="impressedFeature"
                value={form.impressedFeature}
                onChange={updateField}
                placeholder="Tell us what stood out to you..."
                rows="3"
              />
            </div>

            <div className="marg-field">
              <label htmlFor="marg-suggestions">
                Any suggestions, feature requests, or critiques for our product?
              </label>
              <textarea
                id="marg-suggestions"
                name="suggestions"
                value={form.suggestions}
                onChange={updateField}
                placeholder="Share your suggestions with us..."
                rows="3"
              />
            </div>
          </section>

          <section className="marg-form-section">
            <div className="marg-section-heading">
              <span className="marg-section-number">03</span>
              <div>
                <h2>Pitch &amp; Next Steps</h2>
                <p>
                  Let us know how you would like to continue the conversation.
                </p>
              </div>
            </div>

            <fieldset className="marg-choice-group">
              <legend>
                Are you interested in evaluating Marg-Onco as an investment
                opportunity? <span className="marg-required">*</span>
              </legend>
              <div className="marg-inline-options">
                {["Yes", "Maybe", "No"].map((option) => (
                  <label
                    className={`marg-pill-option ${form.investmentInterest === option ? "selected" : ""}`}
                    key={option}
                  >
                    <input
                      type="radio"
                      name="investmentInterest"
                      value={option}
                      checked={form.investmentInterest === option}
                      onChange={updateField}
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset className="marg-choice-group">
              <legend>
                Where should we send our pitch deck and detailed information?
                <em> (Select all that apply)</em>
              </legend>
              <div className="marg-checkbox-grid">
                {["Email", "WhatsApp"].map((option) => (
                  <label className="marg-choice-card" key={option}>
                    <input
                      type="checkbox"
                      checked={form.pitchDeckContact.includes(option)}
                      onChange={() => {
                        setForm((current) => ({
                          ...current,
                          pitchDeckContact: current.pitchDeckContact.includes(
                            option,
                          )
                            ? current.pitchDeckContact.filter(
                                (item) => item !== option,
                              )
                            : [...current.pitchDeckContact, option],
                        }));
                      }}
                    />
                    <span className="marg-custom-check" />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="marg-form-grid">
              <div className="marg-field">
                <label htmlFor="marg-followUpDate">
                  Preferred follow-up date
                </label>
                <input
                  id="marg-followUpDate"
                  name="followUpDate"
                  type="date"
                  value={form.followUpDate}
                  onChange={updateField}
                />
              </div>
              <div className="marg-field">
                <label htmlFor="marg-followUpTime">
                  Preferred follow-up time
                </label>
                <input
                  id="marg-followUpTime"
                  name="followUpTime"
                  type="time"
                  value={form.followUpTime}
                  onChange={updateField}
                />
              </div>
            </div>
          </section>

          {/* Honeypot field for basic automated-spam filtering. */}
          <div className="marg-honeypot" aria-hidden="true">
            <label htmlFor="marg-website">Leave this field empty</label>
            <input
              id="marg-website"
              name="website"
              tabIndex="-1"
              autoComplete="off"
              value={form.website}
              onChange={updateField}
            />
          </div>

          {submitState.message && (
            <div
              className={`marg-form-alert ${submitState.type}`}
              role="status"
              aria-live="polite"
            >
              {submitState.message}
            </div>
          )}

          <div className="marg-submit-area">
            <button
              type="submit"
              className="marg-submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Feedback"}
              {!isSubmitting && <span aria-hidden="true">→</span>}
            </button>
            <p>
              Thank you for visiting the Marg-Onco pod. We appreciate your time
              and insights.
            </p>
            <small>
              Your information will be used by the Molsys team to follow up on
              your enquiry.
            </small>
          </div>
        </form>
      </div>
    </main>
  );
}

export default MargOncoFeedbackForm;
