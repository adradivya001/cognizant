import React from 'react';
import { aboutData } from '../../data/aboutData';
import NavbarHero from '../../components/layout/NavbarHero';
import AboutHero from '../../components/about/AboutHero';
import StorySection from '../../components/about/StorySection';
import AboutFacts from '../../components/about/AboutFacts';
import AcademicApproach from '../../components/about/AcademicApproach';
import MissionVision from '../../components/about/MissionVision';
import FounderMessage from '../../components/about/FounderMessage';
import AcademicPrinciples from '../../components/about/AcademicPrinciples';
import AboutCTA from '../../components/about/AboutCTA';
import CompactFooter from '../../components/layout/CompactFooter';

interface AboutPageProps {
  onNavigateHome?: () => void;
}

export default function AboutPage({ onNavigateHome }: AboutPageProps) {
  const handleApplyClick = () => {
    alert('Admissions for 2026–27 at Cognizant Institute: Contact Ramnagar Campus, Anantapur at +91 8096651111 / 8096671111.');
  };

  const handleExplorePrograms = () => {
    if (onNavigateHome) {
      onNavigateHome();
      setTimeout(() => {
        const el = document.getElementById('academics');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.location.hash = 'home';
    }
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
    <div className="cognizant-about-page" style={{ width: '100%', minHeight: '100vh', overflowX: 'hidden', background: '#0f172a' }}>
      {/* Sticky Minimizing Transparent Overlay Navbar */}
      <NavbarHero onApplyClick={handleApplyClick} />

      <main>
        {/* 1. ABOUT HERO */}
        <AboutHero data={aboutData.hero} onNavigateHome={onNavigateHome} />

        {/* 2. COGNIZANT STORY */}
        <StorySection data={aboutData.story} />

        {/* 3. KEY FACTS */}
        <AboutFacts facts={aboutData.facts} />

        {/* 4. ACADEMIC APPROACH */}
        <AcademicApproach steps={aboutData.approach} />

        {/* 5. MISSION & VISION */}
        <MissionVision data={aboutData.missionVision} />

        {/* 6. FOUNDER CHAIRMAN MESSAGE */}
        <FounderMessage data={aboutData.founderMessage} />

        {/* 7. CORE ACADEMIC PRINCIPLES */}
        <AcademicPrinciples principles={aboutData.principles} onExploreWhy={handleExplorePrograms} />

        {/* 8. FINAL CTA */}
        <AboutCTA data={aboutData.cta} onExplorePrograms={handleExplorePrograms} onContactClick={handleContactClick} />
      </main>

      {/* 9. FOOTER */}
      <CompactFooter />
    </div>
  );
}
