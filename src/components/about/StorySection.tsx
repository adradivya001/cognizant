import React from 'react';
import { StoryData } from '../../types/about';
import { BookOpen, Award, Users } from 'lucide-react';
import logoImg from '../../assets/cognizant.png';
import './StorySection.css';

interface StorySectionProps {
  data: StoryData;
}

export const StorySection: React.FC<StorySectionProps> = ({ data }) => {
  return (
    <section className="story-section" id="story">
      <div className="story-container">
        <div className="story-grid">
          {/* Visual Column */}
          <div className="story-visual-col">
            <div className="story-image-card">
              <img
                src={logoImg}
                alt="Cognizant Institute Story"
                className="story-logo-img"
              />
              <div className="story-card-overlay">
                <div className="story-badge">
                  <Award size={18} className="badge-icon" />
                  <span>25+ Years Academic Leadership</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="story-content-col">
            <span className="story-eyebrow">{data.eyebrow}</span>
            <h2 className="story-title">{data.title}</h2>

            <div className="story-paragraphs">
              {data.paragraphs.map((para, idx) => (
                <p key={idx} className="story-p">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
