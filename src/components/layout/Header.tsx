import React, { useState, useEffect, useRef } from 'react';
import { SiteConfig, NavItem } from '../../types/site';
import { Menu, X, ChevronDown, Phone, ArrowUpRight } from 'lucide-react';
import './Header.css';

interface HeaderProps {
  config: SiteConfig;
  activePath?: string;
  onNavigate?: (href: string) => void;
  onOpenAdmissions?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  config,
  activePath = '/',
  onNavigate,
  onOpenAdmissions
}) => {
  const [navState, setNavState] = useState<'expanded' | 'compact'>('expanded');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileAccordion, setOpenMobileAccordion] = useState<string | null>(null);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY <= 20) {
        setNavState('expanded');
      } else if (currentY > lastScrollY.current && currentY > 60) {
        setNavState('compact');
      } else if (currentY < lastScrollY.current) {
        setNavState('expanded');
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setIsMobileOpen(false);
    setOpenDropdown(null);

    if (onNavigate) {
      onNavigate(href);
    } else if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = href.replace('/', '');
    }
  };

  const primaryPhone = config.contact.phones[0] || '8096651111';

  return (
    <header className={`app-header header-${navState}`}>
      <div className="header-container">
        {/* Brand Logo */}
        <a
          href="/"
          className="brand-logo-link"
          onClick={(e) => handleLinkClick(e, '/')}
        >
          <div className="brand-emblem">
            <span className="emblem-symbol">C</span>
          </div>
          <div className="brand-titles">
            <span className="brand-name">{config.name}</span>
            <span className="brand-subtext">{config.positioning}</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Header Navigation">
          {config.navigation.map((item: NavItem) => {
            const hasChildren = item.children && item.children.length > 0;
            const isDropdownOpen = openDropdown === item.label;

            return (
              <div
                key={item.label}
                className="nav-item-wrapper"
                onMouseEnter={() => hasChildren && setOpenDropdown(item.label)}
                onMouseLeave={() => hasChildren && setOpenDropdown(null)}
              >
                <a
                  href={item.href}
                  className={`nav-link ${activePath === item.href ? 'active' : ''}`}
                  onClick={(e) => handleLinkClick(e, item.href)}
                >
                  <span>{item.label}</span>
                  {hasChildren && (
                    <ChevronDown
                      size={14}
                      className={`dropdown-chevron ${isDropdownOpen ? 'open' : ''}`}
                    />
                  )}
                </a>

                {/* Submenu Dropdown */}
                {hasChildren && isDropdownOpen && (
                  <div className="nav-dropdown-menu">
                    {item.children?.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="dropdown-item-link"
                        onClick={(e) => handleLinkClick(e, child.href)}
                      >
                        <span className="dropdown-item-title">{child.label}</span>
                        {child.description && (
                          <span className="dropdown-item-desc">{child.description}</span>
                        )}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="header-right-actions">
          <a href={`tel:${primaryPhone}`} className="header-phone-pill" title={`Call ${primaryPhone}`}>
            <Phone size={15} />
            <span className="phone-num">{primaryPhone}</span>
          </a>

          <button
            className="header-admissions-btn"
            onClick={() => onOpenAdmissions && onOpenAdmissions()}
          >
            <span>Admissions</span>
            <ArrowUpRight size={16} />
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            className="mobile-hamburger-btn"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Slide Drawer */}
      <div className={`mobile-nav-overlay ${isMobileOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-body">
          <div className="mobile-drawer-header">
            <span className="drawer-brand">{config.shortName}</span>
            <button
              className="drawer-close-btn"
              onClick={() => setIsMobileOpen(false)}
            >
              <X size={24} />
            </button>
          </div>

          <div className="mobile-nav-list">
            {config.navigation.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isAccordionOpen = openMobileAccordion === item.label;

              return (
                <div key={item.label} className="mobile-nav-group">
                  <div className="mobile-nav-row">
                    <a
                      href={item.href}
                      className="mobile-item-link"
                      onClick={(e) => handleLinkClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                    {hasChildren && (
                      <button
                        className="mobile-accordion-toggle"
                        onClick={() =>
                          setOpenMobileAccordion(isAccordionOpen ? null : item.label)
                        }
                      >
                        <ChevronDown size={18} className={isAccordionOpen ? 'rotated' : ''} />
                      </button>
                    )}
                  </div>

                  {hasChildren && isAccordionOpen && (
                    <div className="mobile-sub-list">
                      {item.children?.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="mobile-sub-item"
                          onClick={(e) => handleLinkClick(e, child.href)}
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mobile-drawer-footer">
            <a href={`tel:${primaryPhone}`} className="drawer-call-btn">
              <Phone size={16} />
              <span>Call {primaryPhone}</span>
            </a>
            <button
              className="drawer-admissions-btn"
              onClick={() => {
                setIsMobileOpen(false);
                if (onOpenAdmissions) onOpenAdmissions();
              }}
            >
              Admissions Enquiry
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

