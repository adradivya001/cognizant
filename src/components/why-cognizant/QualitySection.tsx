import React, { useState } from 'react';
import { QualitySectionData } from '../../types/whyCognizant';
import { Users, Layers, BookOpen, Building2, UserCheck, ChevronRight } from 'lucide-react';
import './QualitySection.css';

interface QualitySectionProps {
  data: QualitySectionData;
}

const getIcon = (name: string) => {
  switch (name) {
    case 'users':
      return <Users size={22} />;
    case 'layers':
      return <Layers size={22} />;
    case 'book-open':
      return <BookOpen size={22} />;
    case 'building-2':
      return <Building2 size={22} />;
    case 'user-check':
      return <UserCheck size={22} />;
    default:
      return <Users size={22} />;
  }
};

export const QualitySection: React.FC<QualitySectionProps> = ({ data }) => {
  const [activeId, setActiveId] = useState<string>(data.features[0]?.id || '');

  const activeFeature = data.features.find((f) => f.id === activeId) || data.features[0];

  return (
    <section className="quality-section" id="quality">
      <div className="quality-container">
        <div className="quality-header">
          <span className="quality-eyebrow">UNCOMPROMISING STANDARDS</span>
          <h2 className="quality-statement">"{data.statement}"</h2>
          <p className="quality-title">{data.title}</p>
        </div>

        {/* Interactive Desktop Split */}
        <div className="quality-grid">
          {/* Left Active Detail Panel */}
          <div className="quality-left-panel">
            <div className="active-detail-card">
              <div className="detail-num-badge">{activeFeature.number}</div>
              <div className="detail-icon-box">{getIcon(activeFeature.iconName)}</div>
              <h3 className="detail-title">{activeFeature.title}</h3>
              <p className="detail-desc">{activeFeature.fullDesc}</p>
            </div>
          </div>

          {/* Right 5 Feature List */}
          <div className="quality-right-list">
            {data.features.map((item) => {
              const isSelected = item.id === activeId;
              return (
                <div
                  key={item.id}
                  className={`quality-item ${isSelected ? 'active' : ''}`}
                  onClick={() => setActiveId(item.id)}
                  onMouseEnter={() => setActiveId(item.id)}
                >
                  <div className="item-header">
                    <span className="item-num">{item.number}</span>
                    <h4 className="item-title">{item.title}</h4>
                    <ChevronRight size={18} className="item-arrow" />
                  </div>
                  <p className="item-short-desc">{item.shortDesc}</p>
                  
                  {/* Mobile expanded view */}
                  <p className="item-full-mobile">{item.fullDesc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
