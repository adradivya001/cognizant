import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronRight, ChevronDown } from 'lucide-react';
import logoImg from '../../assets/cognizant.png';
import './NavbarHero.css';

interface NavbarHeroProps {
  logoText?: string;
  onApplyClick?: () => void;
  onNavigate?: (path: string) => void;
  activePath?: string;
}

export const NavbarHero: React.FC<NavbarHeroProps> = ({
  logoText = 'COGNIZANT',
  onApplyClick,
  onNavigate,
  activePath = '/',
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [showProgramsDropdown, setShowProgramsDropdown] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Cognizant', path: '/about' },
    { label: 'Why Cognizant', path: '/why-cognizant' },
    { label: 'Our Gurus', path: '/gurus' },
    {
      label: 'Programs',
      path: '/programs',
      hasDropdown: true,
      children: [
        { label: 'M² — Metamorph', path: '/programs/m2' },
        { label: 'E² — Eagle Eye', path: '/programs/e2' },
        { label: 'PV — Pyrric Victors', path: '/programs/pv' },
        { label: 'View All Programs', path: '/programs' },
      ],
    },
    { label: 'Admissions', path: '/admissions' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    if (path.startsWith('/')) {
      e.preventDefault();
      setShowProgramsDropdown(false);
      if (onNavigate) {
        onNavigate(path);
      } else {
        if (path === '/about') window.location.hash = 'about';
        else if (path.startsWith('/programs')) window.location.hash = path.replace('/', '');
        else if (path.startsWith('/gurus')) window.location.hash = path.replace('/', '');
        else if (path.startsWith('/admissions')) window.location.hash = path.replace('/', '');
        else window.location.hash = '';
      }
    }
  };

  return (
    <nav className={`hero-nav ${isScrolled ? 'nav-minimized' : 'nav-expanded'}`}>
      <div className="hero-nav-container">
        {/* Brand Logo */}
        <a
          href="/"
          className="hero-nav-logo"
          onClick={(e) => handleLinkClick(e, '/')}
        >
          <img
            src={logoImg}
            alt="Cognizant Institute for NEET & JEE"
            className="hero-logo-img"
          />
        </a>

        {/* Desktop Links */}
        <div className="hero-nav-links">
          {navLinks.map((link) => {
            const isActive =
              activePath === link.path ||
              (link.path === '/about' && activePath.includes('about')) ||
              (link.path === '/programs' && activePath.includes('programs')) ||
              (link.path === '/admissions' && activePath.includes('admissions')) ||
              (link.path === '/gurus' && activePath.includes('gurus'));

            if (link.hasDropdown) {
              return (
                <div
                  key={link.label}
                  className="nav-dropdown-wrapper"
                  onMouseEnter={() => setShowProgramsDropdown(true)}
                  onMouseLeave={() => setShowProgramsDropdown(false)}
                >
                  <a
                    href={link.path}
                    className={`hero-nav-link dropdown-toggle ${isActive ? 'active' : ''}`}
                    onClick={(e) => handleLinkClick(e, link.path)}
                  >
                    <span>{link.label}</span>
                    <ChevronDown size={14} className="dropdown-arrow" />
                  </a>

                  {showProgramsDropdown && (
                    <div className="nav-dropdown-menu">
                      {link.children?.map((child) => (
                        <a
                          key={child.label}
                          href={child.path}
                          className="dropdown-item"
                          onClick={(e) => handleLinkClick(e, child.path)}
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <a
                key={link.label}
                href={link.path}
                className={`hero-nav-link ${isActive ? 'active' : ''}`}
                onClick={(e) => handleLinkClick(e, link.path)}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Right CTA */}
        <div className="hero-nav-actions">
          <button className="hero-apply-btn" onClick={onApplyClick}>
            <span>Apply Now</span>
            <ChevronRight size={16} />
          </button>

          {/* Mobile Hamburger Button */}
          <button
            className="hero-mobile-toggle"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle Navigation"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="hero-mobile-drawer">
          <div className="hero-mobile-links">
            {navLinks.map((link) => (
              <React.Fragment key={link.label}>
                <a
                  href={link.path}
                  className="hero-mobile-link"
                  onClick={(e) => {
                    setIsMobileOpen(false);
                    handleLinkClick(e, link.path);
                  }}
                >
                  {link.label}
                </a>

                {link.children && (
                  <div className="mobile-sub-links">
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.path}
                        className="mobile-sub-link"
                        onClick={(e) => {
                          setIsMobileOpen(false);
                          handleLinkClick(e, child.path);
                        }}
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}
            <button
              className="hero-mobile-apply-btn"
              onClick={() => {
                setIsMobileOpen(false);
                if (onApplyClick) onApplyClick();
              }}
            >
              Apply Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarHero;
