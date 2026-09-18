import React from 'react';
import { getSectionComponent } from './sectionRegistry';
import { FooterSection } from './sections/FooterSection';
import { useCollege } from '../context/CollegeContext';

/**
 * PageRenderer: Config-driven dynamic section renderer
 * Driven 100% by Tier 3 content JSON configurations.
 */
export function PageRenderer() {
  const {
    collegeData,
    activePage,
    navigateToPage,
    openAdmissionsModal,
    openLightbox,
    openDetailModal
  } = useCollege();

  if (!collegeData) return null;

  // Select sections array based on active page route ('home' vs 'about')
  const sections = (activePage === 'about' && collegeData.about?.sections)
    ? collegeData.about.sections
    : (collegeData.sections || []);

  const theme = collegeData.theme;

  const handleAction = (action, payload) => {
    if (action === 'open_admissions_modal') {
      openAdmissionsModal(payload || '');
    } else if (action === 'open_detail_modal') {
      openDetailModal(payload || 'about');
    } else if (action === 'open_lightbox') {
      openLightbox(payload);
    } else if (action === 'navigate_to') {
      navigateToPage(payload || 'home');
    } else if (action === 'scroll_to' && payload) {
      if (activePage !== 'home' && payload.startsWith('#')) {
        navigateToPage('home', payload);
      } else {
        const el = document.querySelector(payload);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <main className="college-page-content" key={activePage}>
      {sections.map((sectionConfig) => {
        if (sectionConfig.enabled === false) return null;

        const SectionComponent = getSectionComponent(sectionConfig.type);
        if (!SectionComponent) {
          console.warn(`[PageRenderer] Unknown section type: ${sectionConfig.type}`);
          return null;
        }

        return (
          <SectionComponent
            key={sectionConfig.id}
            data={collegeData}
            sectionConfig={sectionConfig}
            theme={theme}
            onAction={handleAction}
          />
        );
      })}

      {/* Footer rendered at conclusion */}
      <FooterSection
        data={collegeData}
        theme={theme}
        onAction={handleAction}
      />
    </main>
  );
}
