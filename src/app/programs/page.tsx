import React from 'react';
import { programsPageData } from '../../data/programsData';
import NavbarHero from '../../components/layout/NavbarHero';
import ProgramsHero from '../../components/programs/ProgramsHero';
import ProgramsGrid from '../../components/programs/ProgramsGrid';
import ProgramComparison from '../../components/programs/ProgramComparison';
import ProgramJourney from '../../components/programs/ProgramJourney';
import ProgramsCTA from '../../components/programs/ProgramsCTA';
import CompactFooter from '../../components/layout/CompactFooter';

interface ProgramsPageProps {
  onNavigateHome?: () => void;
  onSelectProgram?: (slug: string) => void;
}

export default function ProgramsPage({
  onNavigateHome,
  onSelectProgram,
}: ProgramsPageProps) {
  const handleApplyClick = () => {
    alert('Admissions for 2026–27 at Cognizant Institute: Contact Ramnagar Campus, Anantapur at +91 8096651111 / 8096671111.');
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

  return (
    <div className="cognizant-programs-page" style={{ width: '100%', minHeight: '100vh', overflowX: 'hidden', background: '#0f172a' }}>
      {/* Sticky Minimizing Transparent Overlay Navbar */}
      <NavbarHero onApplyClick={handleApplyClick} activePath="/programs" />

      <main>
        {/* 1. PROGRAM HERO */}
        <ProgramsHero
          eyebrow={programsPageData.hero.eyebrow}
          title={programsPageData.hero.title}
          description={programsPageData.hero.description}
          breadcrumb={programsPageData.hero.breadcrumb}
          onNavigateHome={onNavigateHome}
        />

        {/* 2. EXPLORE OUR PROGRAMS GRID */}
        <ProgramsGrid
          programs={programsPageData.programs}
          eyebrow={programsPageData.gridHeader.eyebrow}
          title={programsPageData.gridHeader.title}
          subtitle={programsPageData.gridHeader.subtitle}
          onSelectProgram={onSelectProgram}
        />

        {/* 3. PROGRAM COMPARISON */}
        <ProgramComparison rows={programsPageData.comparisonRows} />

        {/* 4. PROGRAM JOURNEY / ACADEMIC PATHWAYS */}
        <ProgramJourney steps={programsPageData.journeySteps} />

        {/* 5. CONTACT CTA */}
        <ProgramsCTA
          title={programsPageData.cta.title}
          subtitle={programsPageData.cta.subtitle}
          primaryBtnText={programsPageData.cta.primaryBtnText}
          secondaryBtnText={programsPageData.cta.secondaryBtnText}
          onContactClick={handleContactClick}
        />
      </main>

      {/* 6. FOOTER */}
      <CompactFooter />
    </div>
  );
}
