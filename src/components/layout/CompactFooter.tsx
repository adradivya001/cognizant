import React from 'react';
import { MapPin, Phone, MessageSquare, ShieldCheck } from 'lucide-react';
import logoImg from '../../assets/cognizant.png';
import './CompactFooter.css';

export const CompactFooter: React.FC = () => {
  return (
    <footer className="compact-footer">
      <div className="compact-footer-container">
        <div className="compact-footer-grid">
          {/* Column 1: Logo & Short Description */}
          <div className="footer-col brand-col">
            <a href="#home" className="footer-logo">
              <img
                src={logoImg}
                alt="Cognizant Institute for NEET & JEE"
                className="footer-logo-img"
              />
            </a>
            <p className="footer-brand-desc">
              Integrated Intermediate Junior College & NEET / JEE Coaching Institute in Anantapur, Andhra Pradesh.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#academics">Academics</a></li>
              <li><a href="#admissions">Admissions</a></li>
            </ul>
          </div>

          {/* Column 3: Programs */}
          <div className="footer-col">
            <h4 className="footer-col-title">Programs</h4>
            <ul className="footer-links-list">
              <li><a href="#academics">MPC Integrated</a></li>
              <li><a href="#academics">BiPC Integrated</a></li>
              <li><a href="#academics">JEE Long-Term</a></li>
              <li><a href="#academics">NEET Coaching</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="footer-col contact-col">
            <h4 className="footer-col-title">Contact Us</h4>
            <div className="footer-contact-item">
              <MapPin size={16} className="contact-icon" />
              <span>Ramnagar 80 Feet Road, Opp. Ayyappa Swamy Temple, Anantapur, AP</span>
            </div>
            <div className="footer-contact-item">
              <Phone size={16} className="contact-icon" />
              <span>+91 8096651111 / +91 8096671111</span>
            </div>
            <div className="footer-contact-item">
              <MessageSquare size={16} className="contact-icon" />
              <span>WhatsApp Desk: +91 8096651111</span>
            </div>
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="compact-footer-bottom">
          <div className="copyright-text">
            © {new Date().getFullYear()} Cognizant Junior College & NEET/JEE Institute. All rights reserved.
          </div>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <span className="dot-sep">•</span>
            <a href="#terms">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CompactFooter;
