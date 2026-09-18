import React from 'react';
import { ContactAddress } from '../../types/contact';
import { MapPin, Navigation } from 'lucide-react';
import './ContactLocation.css';

interface ContactLocationProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  address: ContactAddress;
}

export const ContactLocation: React.FC<ContactLocationProps> = ({
  eyebrow,
  title,
  subtitle,
  address,
}) => {
  return (
    <section className="contact-location-section">
      <div className="contact-location-container">
        <div className="contact-location-header">
          <span className="loc-eyebrow">{eyebrow}</span>
          <h2 className="loc-title">{title}</h2>
          <p className="loc-subtitle">{subtitle}</p>
        </div>

        <div className="location-card">
          <div className="location-card-left">
            <div className="loc-icon-wrapper">
              <MapPin size={32} />
            </div>
            <div className="loc-text-details">
              <span className="loc-badge">COGNIZANT JUNIOR COLLEGE</span>
              <h3 className="loc-campus-name">Ramnagar Main Campus</h3>
              <p className="loc-address">{address.line1}</p>
              <p className="loc-address">{address.line2}</p>
              <p className="loc-city">{address.city}, {address.state}</p>
            </div>
          </div>

          <div className="location-card-right">
            <a
              href="https://maps.google.com/?q=Ramnagar+80+Feet+Road+Anantapur+Andhra+Pradesh"
              target="_blank"
              rel="noopener noreferrer"
              className="directions-btn"
            >
              <Navigation size={18} />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
