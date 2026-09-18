import React from 'react';
import { admissionsData } from '../../data/admissionsData';
import NavbarHero from '../../components/layout/NavbarHero';
import { AdmissionsHero } from '../../components/admissions/AdmissionsHero';
import { AdmissionOverview } from '../../components/admissions/AdmissionOverview';
import { AdmissionProcess } from '../../components/admissions/AdmissionProcess';
import { HistoricalAdmission } from '../../components/admissions/HistoricalAdmission';
import { AdmissionFAQ } from '../../components/admissions/AdmissionFAQ';
import { AdmissionsCTA } from '../../components/admissions/AdmissionsCTA';
import CompactFooter from '../../components/layout/CompactFooter';

interface AdmissionsPageProps {
  onNavigateHome?: () => void;
  onNavigatePrograms?: () => void;
  onSelectProgram?: (slug: string) => void;
  onNavigate?: (route: string) => void;
}

export default function AdmissionsPage({
  onNavigateHome,
  onNavigatePrograms,
  onSelectProgram,
  onNavigate,
}: AdmissionsPageProps) {
  const handleApplyClick = () => {
    alert('Admissions Enquiry for 2026–27 at Cognizant Institute: Contact Ramnagar Campus, Anantapur at +91 8096651111 / 8096671111.');
  };

  const handleContactClick = () => {
    if (onNavigateHome) {
      onNavigateHome();
      setTimeout(() => {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.location.hash = 'contact';
    }
  };

  const handleExplorePrograms = () => {
    if (onNavigatePrograms) {
      onNavigatePrograms();
    } else if (onNavigate) {
      onNavigate('/programs');
    } else {
      window.location.hash = 'programs';
    }
  };

  return (
    <div className="cognizant-admissions-page" style={{ width: '100%', minHeight: '100vh', overflowX: 'hidden', background: '#0b1120' }}>
      {/* Sticky Navbar */}
      <NavbarHero onApplyClick={handleApplyClick} activePath="/admissions" onNavigate={onNavigate} />

      <main>
        {/* 1. ADMISSIONS HERO */}
        <AdmissionsHero
          eyebrow={admissionsData.hero.eyebrow}
          title={admissionsData.hero.title}
          description={admissionsData.hero.description}
          breadcrumb={admissionsData.hero.breadcrumb}
          onNavigateHome={onNavigateHome}
          onNavigatePrograms={handleExplorePrograms}
        />

        {/* 2. CHOOSE YOUR ACADEMIC PATHWAY */}
        <AdmissionOverview
          eyebrow={admissionsData.pathwayHeader.eyebrow}
          title={admissionsData.pathwayHeader.title}
          subtitle={admissionsData.pathwayHeader.subtitle}
          pathways={admissionsData.pathways}
          onSelectProgram={onSelectProgram}
        />

        {/* 3. HOW ADMISSION INFORMATION WORKS */}
        <AdmissionProcess
          eyebrow={admissionsData.processHeader.eyebrow}
          title={admissionsData.processHeader.title}
          subtitle={admissionsData.processHeader.subtitle}
          steps={admissionsData.processSteps}
        />

        {/* 4. HISTORICAL CAT-23 INFORMATION */}
        <HistoricalAdmission data={admissionsData.historicalInformation} />

        {/* 5. FAQ */}
        <AdmissionFAQ
          eyebrow={admissionsData.faqHeader.eyebrow}
          title={admissionsData.faqHeader.title}
          subtitle={admissionsData.faqHeader.subtitle}
          faqs={admissionsData.faqs}
        />

        {/* 6. CONTACT ADMISSIONS CTA */}
        <AdmissionsCTA
          title={admissionsData.cta.title}
          subtitle={admissionsData.cta.subtitle}
          primaryBtnText={admissionsData.cta.primaryBtnText}
          secondaryBtnText={admissionsData.cta.secondaryBtnText}
          onContactClick={handleContactClick}
          onExplorePrograms={handleExplorePrograms}
        />
      </main>

      {/* FOOTER */}
      <CompactFooter />
    </div>
  );
}
