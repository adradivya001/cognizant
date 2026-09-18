import React from 'react';
import { gurusPageData, gurusData } from '../../data/gurusData';
import NavbarHero from '../../components/layout/NavbarHero';
import { GurusHero } from '../../components/gurus/GurusHero';
import { GurusGrid } from '../../components/gurus/GurusGrid';
import { GurusCTA } from '../../components/gurus/GurusCTA';
import CompactFooter from '../../components/layout/CompactFooter';

interface GurusPageProps {
  onNavigateHome?: () => void;
  onSelectGuru?: (slug: string) => void;
  onNavigate?: (route: string) => void;
}

export default function GurusPage({
  onNavigateHome,
  onSelectGuru,
  onNavigate,
}: GurusPageProps) {
  const handleApplyClick = () => {
    alert('Admissions for 2026–27 at Cognizant Institute: Contact Ramnagar Campus, Anantapur at +91 8096651111 / 8096671111.');
  };

  return (
    <div className="cognizant-gurus-page" style={{ width: '100%', minHeight: '100vh', overflowX: 'hidden', background: '#0b1120' }}>
      {/* Navbar */}
      <NavbarHero onApplyClick={handleApplyClick} activePath="/gurus" />

      <main>
        {/* HERO */}
        <GurusHero
          eyebrow={gurusPageData.hero.eyebrow}
          title={gurusPageData.hero.title}
          description={gurusPageData.hero.description}
          breadcrumb={gurusPageData.hero.breadcrumb}
          onNavigateHome={onNavigateHome}
        />

        {/* FACULTY GRID WITH INTRODUCTION & SUBJECT FILTER */}
        <GurusGrid
          introduction={gurusPageData.introduction}
          gurus={gurusData}
          finalNote={gurusPageData.finalNote}
          onSelectGuru={onSelectGuru}
        />

        {/* CTA */}
        <GurusCTA onNavigate={onNavigate} />
      </main>

      {/* FOOTER */}
      <CompactFooter />
    </div>
  );
}
