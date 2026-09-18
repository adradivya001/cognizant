import React from 'react';
import { FounderMessageData } from '../../types/about';
import { Quote, Award } from 'lucide-react';
import './FounderMessage.css';

interface FounderMessageProps {
  data: FounderMessageData;
}

export const FounderMessage: React.FC<FounderMessageProps> = ({ data }) => {
  return (
    <section className="founder-section" id="founder-message">
      <div className="founder-container">
        <div className="founder-header">
          <span className="founder-eyebrow">{data.eyebrow}</span>
          <h2 className="founder-title">{data.title}</h2>
        </div>

        <div className="founder-grid">
          {/* Left Avatar / Portrait Column */}
          <div className="founder-portrait-col">
            <div className="founder-portrait-card">
              <div className="founder-avatar">
                <span className="founder-initials">RP</span>
              </div>
              <div className="founder-info">
                <h3 className="founder-name">{data.name}</h3>
                <p className="founder-role">{data.role}</p>
                <div className="founder-cred-badge">
                  <Award size={14} />
                  <span>IIT Math Faculty & Mentor</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Message Text Column */}
          <div className="founder-message-col">
            <Quote size={40} className="quote-icon" />

            <div className="founder-paragraphs">
              {data.paragraphs.map((para, idx) => (
                <p key={idx} className="founder-p">
                  {para}
                </p>
              ))}
            </div>

            <div className="founder-signature-block">
              <div className="sig-name">{data.name}</div>
              <div className="sig-role">{data.closing} — {data.role}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderMessage;
