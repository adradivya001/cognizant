import React from 'react';
import { resultsData } from '../../data/resultsData';
import NavbarHero from '../../components/layout/NavbarHero';
import { ResultsHero } from '../../components/results/ResultsHero';
import { ResultsIntro } from '../../components/results/ResultsIntro';
import { AchievementHighlights } from '../../components/results/AchievementHighlights';
import { FacultyAchievements } from '../../components/results/FacultyAchievements';
import { PerformanceJourney } from '../../components/results/PerformanceJourney';
import { ResultsNavigation } from '../../components/results/ResultsNavigation';
import { ResultsCTA } from '../../components/results/ResultsCTA';
import CompactFooter from '../../components/layout/CompactFooter';

interface ResultsPageProps {
  onNavigateHome?: () => void;
  onNavigatePrograms?: () => void;
  onNavigateContact?: () => void;
  onNavigate?: (route: string) => void;
}

export default function ResultsPage({
  onNavigateHome,
  onNavigatePrograms,
  onNavigateContact,
  onNavigate,
}: ResultsPageProps) {
  const handleApplyClick = () => {
    alert('Admissions Enquiry at Cognizant Institute: Contact Ramnagar Campus, Anantapur at +91 8096651111 / 8096671111.');
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

  const handleContactClick = () => {
    if (onNavigateContact) {
      onNavigateContact();
    } else if (onNavigate) {
      onNavigate('/contact');
    } else {
      window.location.hash = 'contact';
    }
  };

  return (
    <div className="cognizant-results-page" style={{ width: '100%', minHeight: '100vh', overflowX: 'hidden', background: '#ffffff' }}>
      {/* Sticky Navbar */}
      <NavbarHero onApplyClick={handleApplyClick} activePath="/results" onNavigate={onNavigate} />

      <main>
        {/* HERO */}
        <ResultsHero
          eyebrow={resultsData.hero.eyebrow}
          title={resultsData.hero.title}
          description={resultsData.hero.description}
          breadcrumb={resultsData.hero.breadcrumb}
          onNavigateHome={onNavigateHome}
        />

        {/* INTRO */}
        <ResultsIntro
          title={resultsData.intro.title}
          description={resultsData.intro.description}
        />

        {/* MENTOR TRACK RECORD / HIGHLIGHTS WITH FILTER */}
        <AchievementHighlights
          eyebrow={resultsData.achievementsHeader.eyebrow}
          title={resultsData.achievementsHeader.title}
          subtitle={resultsData.achievementsHeader.subtitle}
          achievements={resultsData.achievements}
        />

        {/* FACULTY ACHIEVEMENTS */}
        <FacultyAchievements
          eyebrow={resultsData.facultyAchievementsHeader.eyebrow}
          title={resultsData.facultyAchievementsHeader.title}
          subtitle={resultsData.facultyAchievementsHeader.subtitle}
          facultyGroups={resultsData.facultyGroups}
        />

        {/* PERFORMANCE JOURNEY */}
        <PerformanceJourney
          eyebrow={resultsData.journeyHeader.eyebrow}
          title={resultsData.journeyHeader.title}
          subtitle={resultsData.journeyHeader.subtitle}
          steps={resultsData.journeySteps}
        />

        {/* NAVIGATION CARDS */}
        <ResultsNavigation
          cards={resultsData.navigationCards}
          onNavigate={onNavigate}
        />

        {/* FINAL CTA */}
        <ResultsCTA
          title={resultsData.cta.title}
          subtitle={resultsData.cta.subtitle}
          primaryBtnText={resultsData.cta.primaryBtnText}
          secondaryBtnText={resultsData.cta.secondaryBtnText}
          onExplorePrograms={handleExplorePrograms}
          onContactClick={handleContactClick}
        />
      </main>

      {/* FOOTER */}
      <CompactFooter />
    </div>
  );
}
