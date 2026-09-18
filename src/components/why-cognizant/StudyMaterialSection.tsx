import React from 'react';
import { StudyMaterialData } from '../../types/whyCognizant';
import { BookOpen, CheckCircle2 } from 'lucide-react';
import './StudyMaterialSection.css';

interface StudyMaterialSectionProps {
  data: StudyMaterialData;
}

export const StudyMaterialSection: React.FC<StudyMaterialSectionProps> = ({ data }) => {
  return (
    <section className="smaterial-section" id="study-material">
      <div className="smaterial-container">
        <div className="smaterial-grid">
          <div className="smaterial-visual-card">
            <div className="smaterial-icon-badge">
              <BookOpen size={44} />
            </div>
            <h3 className="smaterial-visual-title">{data.highlight}</h3>
            <p className="smaterial-visual-sub">NEET & JEE Synchronized Syllabus</p>
          </div>

          <div className="smaterial-content-col">
            <span className="smaterial-eyebrow">ACADEMIC RESOURCES</span>
            <h2 className="smaterial-title">{data.title}</h2>
            <p className="smaterial-desc">{data.description}</p>

            <div className="smaterial-features-list">
              {data.features.map((feat, idx) => (
                <div key={idx} className="smaterial-feature-item">
                  <CheckCircle2 size={18} className="feat-icon" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyMaterialSection;
