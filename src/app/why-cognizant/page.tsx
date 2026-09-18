import React from 'react';
import { whyCognizantData } from '../../data/whyCognizantData';
import NavbarHero from '../../components/layout/NavbarHero';
import WhyCognizantHero from '../../components/why-cognizant/WhyCognizantHero';
import WhyIntro from '../../components/why-cognizant/WhyIntro';
import QualitySection from '../../components/why-cognizant/QualitySection';
import MethodologySection from '../../components/why-cognizant/MethodologySection';
import StudyMaterialSection from '../../components/why-cognizant/StudyMaterialSection';
import InfrastructureSection from '../../components/why-cognizant/InfrastructureSection';
import CounsellingSection from '../../components/why-cognizant/CounsellingSection';
import WinningProcessSection from '../../components/why-cognizant/WinningProcessSection';
import WhyCognizantCTA from '../../components/why-cognizant/WhyCognizantCTA';
import CompactFooter from '../../components/layout/CompactFooter';

interface WhyCognizantPageProps {
  onNavigateHome?: () => void;
  onNavigate?: (path: string) => void;
}

export default function WhyCognizantPage({
  onNavigateHome,
  onNavigate,
}: WhyCognizantPageProps) {
  const handleApplyClick = () => {
    alert('Admissions for 2026–27 at Cognizant Institute: Contact Ramnagar Campus, Anantapur at +91 8096651111 / 8096671111.');
  };

  const handleExplorePrograms = () => {
    if (onNavigate) {
      onNavigate('/programs');
    }
  };

  const handleExploreGurus = () => {
    if (onNavigate) {
      onNavigate('/gurus');
    }
  };

  return (
    <div className="cognizant-why-page" style={{ width: '100%', minHeight: '100vh', overflowX: 'hidden', background: '#0f172a' }}>
      {/* Sticky Minimizing Transparent Overlay Navbar */}
      <NavbarHero
        onApplyClick={handleApplyClick}
        onNavigate={onNavigate}
        activePath="/why-cognizant"
      />

      <main>
        {/* 1. HERO */}
        <WhyCognizantHero data={whyCognizantData.hero} onNavigateHome={onNavigateHome} />

        {/* 2. THE COGNIZANT APPROACH INTRO */}
        <WhyIntro data={whyCognizantData.intro} />

        {/* 3. THE QUALITY (5 Pillars: Best Faculty, Methodology, Study Material, Infrastructure, Counselling) */}
        <QualitySection data={whyCognizantData.quality} />

        {/* 4. PATTERN-PROOF TEACHING METHODOLOGY DETAIL */}
        <MethodologySection data={whyCognizantData.methodology} />

        {/* 5. STUDY MATERIAL DETAIL */}
        <StudyMaterialSection data={whyCognizantData.studyMaterial} />

        {/* 6. ENABLING INFRASTRUCTURE DETAIL */}
        <InfrastructureSection data={whyCognizantData.infrastructure} />

        {/* 7. ONE-TO-ONE COUNSELLING DETAIL */}
        <CounsellingSection data={whyCognizantData.counselling} />

        {/* 8. OUR WINNING PROCESS (01 IQ Level, 02 Confidence, 03 Competitive Exams) */}
        <WinningProcessSection steps={whyCognizantData.winningProcess} />

        {/* 9. FINAL CTA */}
        <WhyCognizantCTA
          data={whyCognizantData.cta}
          onExplorePrograms={handleExplorePrograms}
          onExploreGurus={handleExploreGurus}
        />
      </main>

      {/* 10. FOOTER */}
      <CompactFooter />
    </div>
  );
}
