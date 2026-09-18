import React, { useState, useEffect, useRef } from 'react';
import { Container } from './Container';
import { Button } from './Button';
import { Logo } from './Logo';
import { Menu, X, ArrowUpRight, Phone, MessageSquare } from 'lucide-react';
import { useCollege } from '../../context/CollegeContext';
import './Navbar.css';

export function Navbar() {
  const {
    collegeData,
    activePage,
    navigateToPage,
    openAdmissionsModal,
    openDetailModal
  } = useCollege();

  // Scroll dynamics: shrink on scroll down, expand on scroll up, expanded at top
  const [navState, setNavState] = useState('expanded');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 20) {
        setNavState('expanded');
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 60) {
        setNavState('compact');
      } else if (currentScrollY < lastScrollY.current) {
        setNavState('expanded');
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nav = collegeData?.navigation || {};
  const links = (nav.links || []).filter((l) => l.enabled !== false);
  const brand = nav.brand || { name: 'COGNIZANT', subtext: 'JUNIOR COLLEGE • JEE • NEET' };
  const motif = collegeData?.theme?.motif || 'shield';
  const phone = collegeData?.college?.contact?.phone || '8096651111';
  const whatsapp = collegeData?.college?.contact?.whatsapp || '8096651111';

  const handleNavAction = (link) => {
    setIsMobileMenuOpen(false);

    if (link.type === 'page' || link.target === 'home' || link.target === 'about') {
      navigateToPage(link.target);
    } else if (link.type === 'scroll' || link.target?.startsWith('#')) {
      if (activePage !== 'home') {
        navigateToPage('home', link.target);
      } else {
        const el = document.querySelector(link.target || '#hero');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else if (link.type === 'page_modal') {
      openDetailModal(link.target);
    } else if (link.type === 'admissions_modal' || link.id === 'admissions') {
      openAdmissionsModal();
    } else {
      openDetailModal(link.target);
    }
  };

  return (
    <>
      {/* Main Sticky Dynamic Navbar */}
      <header className={`app-navbar navbar-${navState}`}>
        <Container>
          <div className="navbar-inner">
            {/* Left: Cognizant Logo */}
            <a
              href="#home"
              className="navbar-logo-link"
              onClick={(e) => {
                e.preventDefault();
                navigateToPage('home');
              }}
            >
              <Logo
                name={brand.name}
                subtext={brand.subtext}
                motif={motif}
                size={navState === 'compact' ? 'sm' : 'md'}
              />
            </a>

            {/* Center/Left: Navigation Links */}
            <nav className="desktop-nav-links" aria-label="Main Navigation">
              {links.map((link) => {
                const isActive = (activePage === 'about' && (link.id === 'about' || link.target === 'about')) ||
                                 (activePage === 'home' && (link.id === 'home' || link.target === 'home'));

                return (
                  <button
                    key={link.id}
                    className={`nav-link-btn ${isActive ? 'active' : ''}`}
                    onClick={() => handleNavAction(link)}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>

            {/* Right: Phone, WhatsApp, Admissions CTA */}
            <div className="navbar-right-actions">
              <a
                href={`tel:${phone}`}
                className="nav-icon-action call-action"
                title={`Call Cognizant Admissions (${phone})`}
              >
                <Phone size={17} />
                <span className="phone-num-text">{phone}</span>
              </a>

              <a
                href={`https://wa.me/91${whatsapp}?text=Hello%20Cognizant%20Junior%20College%20Admissions`}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-icon-action whatsapp-action"
                title="WhatsApp Admissions Desk"
              >
                <MessageSquare size={17} />
              </a>

              <Button
                variant="primary"
                size={navState === 'compact' ? 'sm' : 'md'}
                icon={ArrowUpRight}
                onClick={() => openAdmissionsModal()}
                className="nav-admissions-btn"
              >
                Admissions →
              </Button>

              {/* Mobile Hamburger Button */}
              <button
                className="mobile-menu-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-drawer ${isMobileMenuOpen ? 'drawer-open' : ''}`}>
        <div className="mobile-nav-content">
          <div className="mobile-nav-header">
            <Logo name={brand.name} subtext={brand.subtext} motif={motif} size="sm" />
            <button
              className="mobile-close-btn"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <div className="mobile-links-list">
            {links.map((link) => (
              <button
                key={link.id}
                className="mobile-link-item"
                onClick={() => handleNavAction(link)}
              >
                <span>{link.label}</span>
                <ArrowUpRight size={16} className="link-arrow" />
              </button>
            ))}
          </div>

          <div className="mobile-drawer-contact-strip">
            <a href={`tel:${phone}`} className="mobile-contact-pill">
              <Phone size={16} />
              <span>Call {phone}</span>
            </a>
            <a
              href={`https://wa.me/91${whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-contact-pill wa"
            >
              <MessageSquare size={16} />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="mobile-drawer-footer">
            <Button
              variant="primary"
              size="lg"
              icon={ArrowUpRight}
              onClick={() => {
                setIsMobileMenuOpen(false);
                openAdmissionsModal();
              }}
              style={{ width: '100%' }}
            >
              Admissions Enquiry
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
