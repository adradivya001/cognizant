import React, { useState } from 'react';
import { AdmissionFAQItem } from '../../types/admissions';
import './AdmissionFAQ.css';

interface AdmissionFAQProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  faqs: AdmissionFAQItem[];
}

export const AdmissionFAQ: React.FC<AdmissionFAQProps> = ({
  eyebrow,
  title,
  subtitle,
  faqs,
}) => {
  const [openId, setOpenId] = useState<string | null>(faqs.length > 0 ? faqs[0].id : null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="admission-faq-section">
      <div className="admission-faq-container">
        <div className="admission-faq-header">
          <span className="faq-eyebrow">{eyebrow}</span>
          <h2 className="faq-title">{title}</h2>
          <p className="faq-subtitle">{subtitle}</p>
        </div>

        <div className="admission-faq-accordion">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`faq-accordion-item ${isOpen ? 'open' : ''}`}
              >
                <button
                  className="faq-accordion-button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <span className="faq-icon-wrapper">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="faq-chevron"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="faq-accordion-content">
                    <p className="faq-answer-text">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
