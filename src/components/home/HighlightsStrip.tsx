import React from 'react';
import { Highlight } from '../../types/site';
import { Calendar, Award, Stethoscope, Atom } from 'lucide-react';
import './HighlightsStrip.css';

interface HighlightsStripProps {
  highlights: Highlight[];
}

const ICON_MAP: Record<string, React.ElementType> = {
  founded: Calendar,
  experience: Award,
  neet: Stethoscope,
  jee: Atom
};

export const HighlightsStrip: React.FC<HighlightsStripProps> = ({ highlights }) => {
  return (
    <div className="new-highlights-strip">
      <div className="strip-container">
        <div className="strip-grid">
          {highlights.map((item, idx) => {
            const IconComponent = ICON_MAP[item.id] || Award;
            return (
              <React.Fragment key={item.id}>
                <div className="strip-item">
                  <div className="strip-icon-box">
                    <IconComponent size={20} />
                  </div>
                  <div className="strip-text-group">
                    <span className="strip-value">{item.value}</span>
                    <span className="strip-label">{item.label}</span>
                  </div>
                </div>
                {idx < highlights.length - 1 && <div className="strip-divider" />}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HighlightsStrip;

