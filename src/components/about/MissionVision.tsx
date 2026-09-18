import React from 'react';
import { MissionVisionData } from '../../types/about';
import { Target, Compass, CheckCircle2 } from 'lucide-react';
import './MissionVision.css';

interface MissionVisionProps {
  data: MissionVisionData;
}

export const MissionVision: React.FC<MissionVisionProps> = ({ data }) => {
  return (
    <section className="mission-vision-section" id="mission-vision">
      <div className="mission-vision-container">
        <div className="mission-vision-header">
          <span className="mv-eyebrow">{data.eyebrow}</span>
          <h2 className="mv-title">{data.title}</h2>
        </div>

        <div className="mission-vision-grid">
          {/* Mission Card (Orange Accent) */}
          <div className="mv-card mission-card">
            <div className="mv-card-header">
              <div className="mv-icon-box orange">
                <Target size={24} />
              </div>
              <h3 className="mv-card-title">{data.mission.title}</h3>
            </div>

            <blockquote className="mv-quote mission-quote">
              "{data.mission.officialStatement}"
            </blockquote>

            <ul className="mv-points-list">
              {data.mission.points.map((pt, idx) => (
                <li key={idx}>
                  <CheckCircle2 size={16} className="pt-icon" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Vision Card (Blue Accent) */}
          <div className="mv-card vision-card">
            <div className="mv-card-header">
              <div className="mv-icon-box blue">
                <Compass size={24} />
              </div>
              <h3 className="mv-card-title">{data.vision.title}</h3>
            </div>

            <p className="mv-vision-text">
              {data.vision.officialStatement}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
