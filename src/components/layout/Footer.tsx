import React from 'react';
import { SiteConfig } from '../../types/site';
import { MapPin, Phone, Clock, ShieldCheck } from 'lucide-react';
import './Footer.css';

interface FooterProps {
  config: SiteConfig;
  onNavigate?: (href: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ config, onNavigate }) => {
  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(href);
    } else if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = href.replace('/', '');
    }
  };

  return (
    <footer className="new-app-footer">
      <div className="footer-container">
        <div className="footer-main-grid">
          {/* Brand & Positioning Column */}
          <div className="footer-brand-col">
            <div className="footer-logo">
              <div className="footer-emblem">C</div>
              <span className="footer-brand-name">{config.name}</span>
            </div>
            <p className="footer-tagline-text">{config.tagline}</p>
            <div className="footer-contact-line">
              <MapPin size={14} className="f-icon" />
              <span>{config.address.fullAddress}</span>
            </div>
            <div className="footer-contact-line">
              <Clock size={14} className="f-icon" />
              <span>{config.contact.hours}</span>
            </div>
          </div>

          {/* Navigation Links Columns */}
          <div className="footer-links-grid">
            {config.navigation.map((navGroup) => (
              <div key={navGroup.label} className="footer-nav-col">
                <h4 className="footer-col-heading">{navGroup.label}</h4>
                <ul className="footer-nav-ul">
                  <li>
                    <a
                      href={navGroup.href}
                      className="footer-nav-a"
                      onClick={(e) => handleLinkClick(e, navGroup.href)}
                    >
                      Overview
                    </a>
                  </li>
                  {navGroup.children?.map((child) => (
                    <li key={child.label}>
                      <a
                        href={child.href}
                        className="footer-nav-a"
                        onClick={(e) => handleLinkClick(e, child.href)}
                      >
                        {child.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact & Desk Column */}
          <div className="footer-contact-col">
            <h4 className="footer-col-heading">Admissions Helpdesk</h4>
            <div className="footer-phone-list">
              {config.contact.phones.map((ph, idx) => (
                <div key={idx} className="footer-phone-row">
                  <Phone size={14} className="f-icon" />
                  <a href={`tel:${ph}`} className="footer-phone-a">
                    {ph}
                  </a>
                </div>
              ))}
            </div>
            <span className="footer-location-tag">Ramnagar 80 Feet Road Campus</span>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="footer-bottom-row">
          <span className="copyright-info">
            © {new Date().getFullYear()} {config.name}. All rights reserved.
          </span>
          <div className="footer-disclaimer-info">
            <ShieldCheck size={14} />
            <span>Factual institutional information — Verified Ramnagar Campus</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

