import React, { useState } from 'react';
import { Container } from '../../tier1/components/Container';
import { SectionHeading } from '../../tier1/components/SectionHeading';
import { Eye, ArrowUpRight } from 'lucide-react';
import './GallerySection.css';

export function GallerySection({ data, sectionConfig, onAction }) {
  const eyebrow = sectionConfig?.eyebrow || 'CAMPUS & INFRASTRUCTURE';
  const title = sectionConfig?.title || 'THE PLACE WHERE THE JOURNEY HAPPENS.';
  const subtitle = sectionConfig?.subtitle || 'Modern classrooms, science laboratories, and focused study spaces.';

  const categories = data?.gallery?.categories || ['Campus', 'Classrooms', 'Faculty', 'Students', 'Events'];
  const allImages = data?.gallery?.images || [
    {
      id: 'gal-1',
      title: 'Interactive Physics & Math Lecture Hall',
      category: 'Classrooms',
      src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80',
      caption: 'Acoustically tuned, distraction-free learning environments.'
    },
    {
      id: 'gal-2',
      title: 'Conceptual Science Laboratory',
      category: 'Campus',
      src: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80',
      caption: 'Hands-on experiment stations for Chemistry & Physics practicals.'
    },
    {
      id: 'gal-3',
      title: 'Focused Peer Discussion & Study Zone',
      category: 'Students',
      src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
      caption: 'Collaborative problem solving under mentor guidance.'
    },
    {
      id: 'gal-4',
      title: 'Central Reference Library & Resource Center',
      category: 'Campus',
      src: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
      caption: 'Quiet study carrels and extensive JEE/NEET reference materials.'
    },
    {
      id: 'gal-5',
      title: 'Expert Faculty Interactive Session',
      category: 'Faculty',
      src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80',
      caption: 'Personalised corrective feedback and doubt solving.'
    },
    {
      id: 'gal-6',
      title: 'Academic Orientation & Seminar Hall',
      category: 'Events',
      src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
      caption: 'Strategy workshops and examination orientation sessions.'
    }
  ];

  const [activeTab, setActiveTab] = useState('All');

  const filteredImages = activeTab === 'All'
    ? allImages
    : allImages.filter((img) => img.category === activeTab);

  return (
    <section id="campus" className="visual-section gallery-section">
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
        />

        {/* Category Filters */}
        <div className="gallery-filter-tabs">
          <button
            className={`filter-tab-btn ${activeTab === 'All' ? 'active' : ''}`}
            onClick={() => setActiveTab('All')}
          >
            All Campus Views
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-tab-btn ${activeTab === cat ? 'active' : ''}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Asymmetric Gallery Grid */}
        <div className="asymmetric-gallery-grid">
          {filteredImages.map((item, idx) => (
            <div
              key={item.id || idx}
              className={`gallery-grid-item item-layout-${(idx % 6) + 1}`}
              onClick={() => onAction('open_lightbox', { src: item.src, alt: item.title, caption: item.caption || item.title })}
            >
              <img
                src={item.src}
                alt={item.title}
                className="gallery-item-img"
                loading="lazy"
              />
              <div className="gallery-item-overlay">
                <span className="gallery-item-cat">{item.category}</span>
                <h4 className="gallery-item-title">{item.title}</h4>
                <p className="gallery-item-caption">{item.caption}</p>
                <div className="gallery-zoom-icon">
                  <Eye size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
