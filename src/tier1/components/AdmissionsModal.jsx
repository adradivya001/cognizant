import React, { useState } from 'react';
import { Modal } from './Modal';
import { Input, Select, Textarea } from './FormControls';
import { Button } from './Button';
import { Badge } from './Badge';
import { CheckCircle, Send, User, Phone, MapPin, Calendar, PhoneCall } from 'lucide-react';
import { useCollege } from '../../context/CollegeContext';

export function AdmissionsModal() {
  const {
    isAdmissionsModalOpen,
    closeAdmissionsModal,
    admissionsModalMeta,
    collegeData
  } = useCollege();

  const collegeName = collegeData?.college?.name || 'Cognizant Junior College';
  const isCampusVisit = admissionsModalMeta === 'campus_visit';
  const directPhone = collegeData?.college?.contact?.phone || '8096651111';
  const directPhone2 = collegeData?.college?.contact?.phone2 || '8096671111';

  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    phone: '',
    city: '',
    stream: '',
    visitDate: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const streamOptions = [
    { value: 'M2 Meta Morph (MPC - JEE Integrated)', label: 'M² Meta Morph — MPC (JEE Focus)' },
    { value: 'M2 Meta Morph (BPC - NEET Integrated)', label: 'M² Meta Morph — BPC (NEET Focus)' },
    { value: 'E2 Eagle Eye (Conceptual Rigor)', label: 'E² Eagle Eye — Focused Methodology' },
    { value: 'PV Pyrric Victors (2nd Year Advanced)', label: 'PV Pyrric Victors — 2nd Year Advanced' },
    { value: 'General MPC', label: 'MPC (Mathematics, Physics, Chemistry)' },
    { value: 'General BPC', label: 'BPC (Biology, Physics, Chemistry)' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.studentName.trim()) errs.studentName = 'Student name is required';
    if (!formData.phone.trim()) {
      errs.phone = 'Contact number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      errs.phone = 'Enter a valid 10-digit mobile number';
    }
    if (!formData.city.trim()) errs.city = 'City / Town is required';
    if (!formData.stream) errs.stream = 'Please select a program / stream';
    if (isCampusVisit && !formData.visitDate) errs.visitDate = 'Please pick a preferred date';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      studentName: '',
      parentName: '',
      phone: '',
      city: '',
      stream: '',
      visitDate: '',
      message: ''
    });
    closeAdmissionsModal();
  };

  return (
    <Modal
      isOpen={isAdmissionsModalOpen}
      onClose={closeAdmissionsModal}
      title={isCampusVisit ? 'Schedule a Campus Visit' : 'Admissions Enquiry — Cognizant'}
      subtitle={`${collegeName} • Ramnagar, Anantapur`}
      maxWidth="620px"
    >
      {submitted ? (
        <div style={{ textAlign: 'center', padding: '24px 12px' }}>
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'rgba(16, 185, 129, 0.15)',
              color: 'var(--color-success)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px auto'
            }}
          >
            <CheckCircle size={36} />
          </div>
          <Badge variant="glow" style={{ marginBottom: '12px' }}>Enquiry Received</Badge>
          <h4
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.5rem',
              fontWeight: 700,
              color: 'var(--color-text)',
              marginBottom: '10px'
            }}
          >
            Thank You, {formData.studentName || 'Student'}!
          </h4>
          <p
            style={{
              color: 'var(--color-text-muted)',
              fontSize: '0.9375rem',
              lineHeight: 1.6,
              marginBottom: '20px',
              maxWidth: '440px',
              margin: '0 auto 20px auto'
            }}
          >
            Your enquiry for <strong>{formData.stream}</strong> has been logged. Our admissions counseling team will contact you at <strong>{formData.phone}</strong> shortly.
          </p>

          <div style={{ padding: '16px', background: 'rgba(255, 255, 255, 0.04)', borderRadius: '12px', marginBottom: '24px' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', display: 'block', marginBottom: '6px' }}>Need Immediate Counseling? Call directly:</span>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', fontWeight: 700, color: 'var(--color-secondary)' }}>
              <a href={`tel:${directPhone}`}>📞 {directPhone}</a>
              <a href={`tel:${directPhone2}`}>📞 {directPhone2}</a>
            </div>
          </div>

          <Button variant="primary" onClick={handleReset}>
            Done
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
            <Input
              label="Student Name"
              name="studentName"
              placeholder="e.g. S. Sai Kumar"
              value={formData.studentName}
              onChange={handleChange}
              required
              error={errors.studentName}
              icon={User}
            />

            <Input
              label="Parent / Guardian Name"
              name="parentName"
              placeholder="e.g. S. Venkat"
              value={formData.parentName}
              onChange={handleChange}
              icon={User}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
            <Input
              label="Mobile Number"
              name="phone"
              type="tel"
              placeholder="10-digit contact number"
              value={formData.phone}
              onChange={handleChange}
              required
              error={errors.phone}
              icon={Phone}
            />

            <Input
              label="Town / City"
              name="city"
              placeholder="e.g. Anantapur"
              value={formData.city}
              onChange={handleChange}
              required
              error={errors.city}
              icon={MapPin}
            />
          </div>

          <Select
            label="Program / Stream of Interest"
            name="stream"
            options={streamOptions}
            value={formData.stream}
            onChange={handleChange}
            required
            placeholder="Select Program / Stream"
            error={errors.stream}
          />

          {isCampusVisit && (
            <Input
              label="Preferred Visit Date"
              name="visitDate"
              type="date"
              value={formData.visitDate}
              onChange={handleChange}
              required
              error={errors.visitDate}
              icon={Calendar}
            />
          )}

          <Textarea
            label="Questions / Notes (Optional)"
            name="message"
            placeholder="Mention 10th board status, questions on JEE/NEET coaching, or campus location queries..."
            value={formData.message}
            onChange={handleChange}
            rows={2}
          />

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
            <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <PhoneCall size={14} color="var(--color-secondary)" />
              <span>Helpdesk: {directPhone}</span>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <Button variant="ghost" onClick={closeAdmissionsModal}>
                Cancel
              </Button>
              <Button variant="primary" type="submit" icon={Send}>
                {isCampusVisit ? 'Book Campus Visit' : 'Submit Enquiry'}
              </Button>
            </div>
          </div>
        </form>
      )}
    </Modal>
  );
}
