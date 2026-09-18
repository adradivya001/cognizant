import React from 'react';
import { Container } from '../../tier1/components/Container';
import { Logo } from '../../tier1/components/Logo';
import { MapPin, Phone, ShieldCheck } from 'lucide-react';
import { useCollege } from '../../context/CollegeContext';
import './FooterSection.css';

export function FooterSection({ data, theme, onAction }) {
  const { navigateToPage, openDetailModal, openAdmissionsModal } = useCollege();

  const college = data?.college || {};
  const nav = data?.navigation || {};
  const links = (nav.links || []).filter((l) => l.enabled !== false);
  const programs = data?.courses?.programs || [
    { name: 'M² Meta Morph', id: 'm2-meta-morph' },
    { name: 'E² Eagle Eye', id: 'e2-eagle-eye' },
    { name: 'PV Pyrric Victors', id: 'pv-pyrric-victors' }
  ];

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    if (link.type === 'page' || link.target === 'home' || link.target === 'about') {
      navigateToPage(link.target);
    } else if (link.type === 'scroll' || link.target?.startsWith('#')) {
      onAction('scroll_to', link.target);
    } else if (link.type === 'page_modal') {
      onAction('open_detail_modal', link.target);
    } else {
      onAction('open_detail_modal', link.target);
    }
  };

  return (
    <footer id="footer-section" className="app-footer">
      <Container>
        <div className="footer-compact-grid">
          {/* Col 1: Brand */}
          <div className="footer-col brand-col">
            <Logo
              name={nav.brand?.name || 'COGNIZANT'}
              subtext={nav.brand?.subtext || 'JUNIOR COLLEGE • JEE • NEET'}
              motif={theme?.motif || 'shield'}
              size="sm"
            />
            <p className="footer-position-text">
              {college.tagline || 'Institute for NEET & JEE'}
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-col links-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-nav-list">
              {links.map((link) => (
                <li key={link.id}>
                  <button
                    className="footer-link-btn"
                    onClick={(e) => handleLinkClick(e, link)}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Programs */}
          <div className="footer-col prog-col">
            <h4 className="footer-col-title">Programs</h4>
            <ul className="footer-nav-list">
              {programs.map((prog) => (
                <li key={prog.id || prog.name}>
                  <button
                    className="footer-link-btn"
                    onClick={() => openDetailModal(`program:${prog.id}`)}
                  >
                    {prog.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="footer-col contact-col">
            <h4 className="footer-col-title">Contact</h4>
            <div className="footer-contact-block">
              <div className="contact-line">
                <MapPin size={14} className="c-icon" />
                <span>Ramnagar 80 Feet Road, Anantapur</span>
              </div>
              <div className="contact-line">
                <Phone size={14} className="c-icon" />
                <div className="phones-inline">
                  <a href={`tel:${college.contact?.phone || '8096651111'}`}>{college.contact?.phone || '8096651111'}</a>
                  <span>,</span>
                  <a href={`tel:${college.contact?.phone2 || '8096671111'}`}>{college.contact?.phone2 || '8096671111'}</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <span className="copyright-text">
            © {new Date().getFullYear()} {college.name || 'Cognizant Junior College'}. All rights reserved.
          </span>
          <span className="footer-tag-location">Ramnagar 80 Feet Road, Anantapur, AP</span>
        </div>
      </Container>
    </footer>
  );
}
