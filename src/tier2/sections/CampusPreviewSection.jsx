import React, { useState } from 'react';
import { Container } from '../../tier1/components/Container';
import { ArrowUpRight } from 'lucide-react';
import './CampusPreviewSection.css';

export function CampusPreviewSection({ data, sectionConfig, onAction }) {
  const microLabel = sectionConfig?.microLabel || 'STEP INSIDE';
  const statement = sectionConfig?.statement || 'BUILT FOR LEARNING. DESIGNED FOR GROWTH.';
  const tabs = sectionConfig?.tabs || [
    {
      id: 'classrooms',
      label: 'CLASSROOMS',
      title: 'Acoustically Balanced Lecture Halls',
      desc: 'Spacious spaces equipped with modern visual learning aids.',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'labs',
      label: 'LABS',
      title: 'Dedicated Science & Research Laboratories',
      desc: 'Separate Physics, Chemistry, and Biology inquiry stations with safety standards.',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'library',
      label: 'LIBRARY',
      title: 'Curated Knowledge & Reference Archives',
      desc: 'Quiet reference zones and individual reading carrels.',
      image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'campus-grounds',
      label: 'CAMPUS',
      title: 'Vibrant Grounds & Activity Areas',
      desc: 'Open spaces designed for a focused student journey.',
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80'
    }
  ];
  const cta = sectionConfig?.cta || { label: 'Explore Campus →', action: 'open_detail_modal', target: 'campus' };

  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const activeTab = tabs[activeTabIdx] || tabs[0];

  return (
    <section id="campus-preview" className="campus-preview-section visual-section">
      <Container>
        {/* Editorial Header */}
        <div className="campus-preview-header">
          <div>
            <span className="micro-label">{microLabel}</span>
            <h2 className="campus-preview-statement">{statement}</h2>
          </div>

          <button
            className="explore-section-cta"
            onClick={() => onAction(cta.action, cta.target)}
          >
            {cta.label}
          </button>
        </div>

        {/* Interactive Tabs Selector */}
        <div className="campus-interactive-tabs" role="tablist">
          {tabs.map((tab, idx) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={idx === activeTabIdx}
              className={`campus-tab-btn ${idx === activeTabIdx ? 'tab-active' : ''}`}
              onClick={() => setActiveTabIdx(idx)}
              onMouseEnter={() => setActiveTabIdx(idx)}
            >
              <span className="tab-indicator-dot" />
              <span className="tab-btn-text">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Showcase Viewport */}
        <div className="campus-showcase-viewport">
          <img
            key={activeTab.id}
            src={activeTab.image}
            alt={activeTab.title}
            className="showcase-active-img"
            loading="lazy"
          />
          <div className="showcase-gradient-shade" />

          {/* Minimal Floating Caption */}
          <div className="showcase-caption-overlay">
            <span className="showcase-cat-pill">{activeTab.label}</span>
            <h3 className="showcase-caption-title">{activeTab.title}</h3>
            <p className="showcase-caption-desc">{activeTab.desc}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
