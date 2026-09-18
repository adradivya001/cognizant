import React from 'react';
import { HomeContactCtaData } from '../../types/site';
import { MapPin, Navigation, PhoneCall, ArrowRight } from 'lucide-react';
import './ContactCTA.css';

interface ContactCTAProps {
  data: HomeContactCtaData;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({ data }) => {
  return (
    <section className="contact-cta-section">
      <div className="contact-cta-container">
        <div className="contact-cta-card">
          <div className="contact-cta-content">
            {data.eyebrow && (
              <span className="contact-cta-eyebrow">{data.eyebrow}</span>
            )}
            <h2 className="contact-cta-title">{data.title}</h2>
            <p className="contact-cta-desc">{data.description}</p>

            <div className="contact-cta-address">
              <MapPin className="contact-cta-icon" size={20} />
              <span>{data.address}</span>
            </div>
          </div>

          <div className="contact-cta-actions">
            <a
              href={data.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-cta-btn primary"
            >
              <Navigation size={18} />
              <span>{data.primaryCtaText || 'Get Directions'}</span>
            </a>

            <a href={data.contactUrl} className="contact-cta-btn secondary">
              <PhoneCall size={18} />
              <span>{data.secondaryCtaText || 'Contact Us'}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
