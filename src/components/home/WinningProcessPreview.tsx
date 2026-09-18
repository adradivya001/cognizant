import React from 'react';
import { ProcessStep } from '../../types/site';
import { ArrowRight } from 'lucide-react';
import './WinningProcessPreview.css';

interface WinningProcessPreviewProps {
  steps: ProcessStep[];
  ctaText?: string;
  ctaHref?: string;
}

export const WinningProcessPreview: React.FC<WinningProcessPreviewProps> = ({
  steps,
  ctaText = 'Learn About Our Approach',
  ctaHref = '/approach',
}) => {
  return (
    <section className="process-section" id="process">
      <div className="process-container">
        <div className="process-header">
          <span className="process-eyebrow">ACADEMIC METHODOLOGY</span>
          <h2 className="process-title">Our Winning Process</h2>
          <p className="process-subtitle">
            A proven 3-phase pedagogical strategy that transforms student aptitude into exam success.
          </p>
        </div>

        <div className="process-grid">
          {steps.map((step, idx) => (
            <div key={step.id || idx} className="process-card">
              <div className="process-card-badge">
                <span className="process-num">{step.number}</span>
              </div>
              <h3 className="process-card-title">{step.title}</h3>
              <p className="process-card-desc">{step.description}</p>

              {idx < steps.length - 1 && (
                <div className="process-connector" aria-hidden="true">
                  <ArrowRight size={20} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="process-footer">
          <a href={ctaHref} className="process-cta-btn">
            <span>{ctaText}</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WinningProcessPreview;
