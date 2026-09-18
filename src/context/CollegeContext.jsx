import React, { createContext, useContext, useState, useEffect } from 'react';
import { loadCollegeData, getAvailableColleges } from '../tier3/contentLoader';

const CollegeContext = createContext(null);

export function CollegeProvider({ children }) {
  const [activeCollegeId, setActiveCollegeId] = useState('cognizant');
  const [collegeData, setCollegeData] = useState(() => loadCollegeData('cognizant'));
  
  // Active Page Route State ('home' | 'about')
  const [activePage, setActivePage] = useState(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.hash || window.location.pathname;
      if (path.includes('about')) return 'about';
    }
    return 'home';
  });

  const [isAdmissionsModalOpen, setIsAdmissionsModalOpen] = useState(false);
  const [admissionsModalMeta, setAdmissionsModalMeta] = useState('');
  const [activeLightboxImage, setActiveLightboxImage] = useState(null);
  const [activeDetailModal, setActiveDetailModal] = useState(null);

  useEffect(() => {
    const data = loadCollegeData(activeCollegeId);
    setCollegeData(data);
  }, [activeCollegeId]);

  // Sync SEO and Document Title based on Active Page & Data
  useEffect(() => {
    if (!collegeData) return;

    if (activePage === 'about' && collegeData.about?.seo) {
      document.title = collegeData.about.seo.title || `About ${collegeData.college?.name}`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', collegeData.about.seo.metaDescription || '');
      }
    } else if (collegeData.seo) {
      document.title = collegeData.seo.title || collegeData.college?.name;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', collegeData.seo.metaDescription || '');
      }
    }
  }, [collegeData, activePage]);

  // Listen to hash change for navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#about' || hash === '#/about') {
        setActivePage('about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#home' || hash === '#/home' || hash === '#hero' || hash === '') {
        setActivePage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToPage = (pageName, scrollTarget = null) => {
    setActivePage(pageName);
    if (typeof window !== 'undefined') {
      window.location.hash = pageName === 'about' ? 'about' : 'home';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (scrollTarget) {
      setTimeout(() => {
        const el = document.querySelector(scrollTarget);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const openAdmissionsModal = (meta = '') => {
    setAdmissionsModalMeta(meta);
    setIsAdmissionsModalOpen(true);
  };

  const closeAdmissionsModal = () => {
    setIsAdmissionsModalOpen(false);
    setAdmissionsModalMeta('');
  };

  const openLightbox = (imageObj) => {
    setActiveLightboxImage(imageObj);
  };

  const closeLightbox = () => {
    setActiveLightboxImage(null);
  };

  const openDetailModal = (pageKey) => {
    setActiveDetailModal(pageKey);
  };

  const closeDetailModal = () => {
    setActiveDetailModal(null);
  };

  return (
    <CollegeContext.Provider
      value={{
        activeCollegeId,
        setActiveCollegeId,
        collegeData,
        availableColleges: getAvailableColleges(),
        activePage,
        setActivePage,
        navigateToPage,
        isAdmissionsModalOpen,
        admissionsModalMeta,
        openAdmissionsModal,
        closeAdmissionsModal,
        activeLightboxImage,
        openLightbox,
        closeLightbox,
        activeDetailModal,
        openDetailModal,
        closeDetailModal
      }}
    >
      {children}
    </CollegeContext.Provider>
  );
}

export function useCollege() {
  const context = useContext(CollegeContext);
  if (!context) {
    throw new Error('useCollege must be used within a CollegeProvider');
  }
  return context;
}
