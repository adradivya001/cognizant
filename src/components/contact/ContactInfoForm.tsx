import React, { useState } from 'react';
import { ContactAddress } from '../../types/contact';
import { programsPageData } from '../../data/programsData';
import './ContactInfoForm.css';

interface ContactInfoFormProps {
  phones: string[];
  address: ContactAddress;
  formConfig: {
    title: string;
    subtitle: string;
    submitLabel: string;
    sendingLabel: string;
    successMessage: string;
    errorMessage: string;
  };
}

export const ContactInfoForm: React.FC<ContactInfoFormProps> = ({
  phones,
  address,
  formConfig,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    program: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    } else {
      const cleanPhone = formData.phone.replace(/[\s\-\+\(\)]/g, '');
      const phoneRegex = /^[6-9]\d{9}$/;
      if (!phoneRegex.test(cleanPhone) && cleanPhone.length !== 10 && cleanPhone.length !== 12) {
        newErrors.phone = 'Please enter a valid 10-digit Indian phone number';
      }
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
    }

    if (!formData.program) {
      newErrors.program = 'Please select an interested program';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('idle');

    if (!validate()) return;

    setIsSubmitting(true);

    // Clean abstraction for submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        program: '',
        message: '',
      });
    }, 1200);
  };

  return (
    <section className="contact-info-form-section" id="enquiry-form">
      <div className="contact-info-form-container">
        <div className="contact-two-column-grid">
          {/* LEFT: Contact Info */}
          <div className="contact-info-column">
            <h2 className="info-column-title">Get in Touch</h2>
            <p className="info-column-subtitle">
              Reach out to our campus office directly or visit us during official working hours.
            </p>

            <div className="contact-info-cards-stack">
              {/* Call Us Card */}
              <div className="contact-detail-card">
                <div className="detail-card-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="detail-card-content">
                  <h3 className="detail-card-label">CALL US</h3>
                  <div className="detail-card-numbers">
                    {phones.map((phone, idx) => (
                      <a key={idx} href={`tel:${phone.replace(/\s+/g, '')}`} className="phone-link">
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Visit Us Card */}
              <div className="contact-detail-card">
                <div className="detail-card-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="detail-card-content">
                  <h3 className="detail-card-label">VISIT US</h3>
                  <p className="detail-address-line">{address.line1}</p>
                  <p className="detail-address-line">{address.line2}</p>
                  <p className="detail-address-line">{address.city}, {address.state}</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Enquiry Form */}
          <div className="contact-form-column">
            <div className="enquiry-form-card">
              <h3 className="form-card-title">{formConfig.title}</h3>
              <p className="form-card-subtitle">{formConfig.subtitle}</p>

              {submitStatus === 'success' && (
                <div className="form-alert success">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>{formConfig.successMessage}</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="form-alert error">
                  <span>{formConfig.errorMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="enquiry-form">
                {/* Full Name */}
                <div className="form-group">
                  <label htmlFor="fullName" className="form-label">
                    Full Name <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`form-input ${errors.fullName ? 'has-error' : ''}`}
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && <span className="error-msg">{errors.fullName}</span>}
                </div>

                {/* Phone Number */}
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Phone Number <span className="req">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`form-input ${errors.phone ? 'has-error' : ''}`}
                    placeholder="Enter 10-digit mobile number"
                  />
                  {errors.phone && <span className="error-msg">{errors.phone}</span>}
                </div>

                {/* Email Address */}
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address <span className="opt">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`form-input ${errors.email ? 'has-error' : ''}`}
                    placeholder="Enter email address"
                  />
                  {errors.email && <span className="error-msg">{errors.email}</span>}
                </div>

                {/* Interested Program */}
                <div className="form-group">
                  <label htmlFor="program" className="form-label">
                    Interested Program <span className="req">*</span>
                  </label>
                  <select
                    id="program"
                    name="program"
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    className={`form-select ${errors.program ? 'has-error' : ''}`}
                  >
                    <option value="">Select a Program</option>
                    {programsPageData.programs.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.code} — {p.name} ({p.studentStage})
                      </option>
                    ))}
                  </select>
                  {errors.program && <span className="error-msg">{errors.program}</span>}
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message <span className="opt">(Optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-textarea"
                    placeholder="Ask a question or specify any preferences..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="form-submit-btn"
                >
                  {isSubmitting ? formConfig.sendingLabel : formConfig.submitLabel}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
