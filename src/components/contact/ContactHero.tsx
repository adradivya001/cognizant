import React from 'react';
import './ContactHero.css';

interface ContactHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumb: string;
  onNavigateHome?: () => void;
}

export const ContactHero: React.FC<ContactHeroProps> = ({
  eyebrow,
  title,
  description,
  breadcrumb,
  onNavigateHome,
}) => {
  return (
    <section className="contact-hero-section">
      <div className="contact-hero-container">
        {/* Breadcrumb */}
        <div className="contact-hero-breadcrumb">
          <a
            href="/"
            onClick={(e) => {
              if (onNavigateHome) {
                e.preventDefault();
                onNavigateHome();
              }
            }}
          >
            Home
          </a>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Contact</span>
        </div>

        {/* Content */}
        <div className="contact-hero-content">
          <span className="contact-hero-eyebrow">{eyebrow}</span>
          <h1 className="contact-hero-title">{title}</h1>
          <p className="contact-hero-description">{description}</p>
        </div>
      </div>
    </section>
  );
};
