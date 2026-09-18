import React from 'react';
import { HomeAboutData } from '../../types/site';
import { ArrowRight, Award, GraduationCap, CheckCircle } from 'lucide-react';
import './AboutPreview.css';

interface AboutPreviewProps {
  data: HomeAboutData;
}

export const AboutPreview: React.FC<AboutPreviewProps> = ({ data }) => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-grid">
          {/* Visual Column */}
          <div className="about-visual-col">
            <div className="about-image-card">
              {data.image ? (
                <img
                  src={data.image}
                  alt="Cognizant Institute"
                  className="about-image"
                />
              ) : (
                <div className="about-visual-fallback">
                  <div className="about-fallback-badge">
                    <GraduationCap className="about-fallback-icon" />
                    <span>Established 2022</span>
                  </div>
                  <div className="about-fallback-content">
                    <h4 className="about-fallback-title">Cognizant Institute</h4>
                    <p className="about-fallback-sub">NEET & JEE Coaching Excellence</p>
                  </div>
                </div>
              )}

              {/* Founder Credential Card */}
              {data.founder && (
                <div className="about-founder-badge">
                  <div className="founder-icon-box">
                    <Award className="founder-icon" />
                  </div>
                  <div>
                    <div className="founder-name">{data.founder.name}</div>
                    <div className="founder-role">{data.founder.role}</div>
                    <div className="founder-exp">{data.founder.experience}</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Content Column */}
          <div className="about-content-col">
            <span className="about-eyebrow">{data.eyebrow}</span>
            <h2 className="about-title">{data.title}</h2>
            <p className="about-subtitle">{data.subtitle}</p>

            <div className="about-body">
              {data.description.map((paragraph, idx) => (
                <p key={idx} className="about-paragraph">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="about-cta-box">
              <a href={data.cta.href} className="about-cta-btn">
                <span>{data.cta.text}</span>
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
