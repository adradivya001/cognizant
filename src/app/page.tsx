import React from 'react';
import NavbarHero from '../components/layout/NavbarHero';
import HeroViewportOnly from '../components/home/HeroViewportOnly';
import WhyChooseUs from '../components/home/WhyChooseUs';
import CoursesPreview from '../components/home/CoursesPreview';
import CompactFooter from '../components/layout/CompactFooter';

interface HomePageProps {
  onNavigateAbout?: () => void;
  onNavigate?: (path: string) => void;
}

export default function HomePage({ onNavigateAbout, onNavigate }: HomePageProps) {
  const handleApplyClick = () => {
    alert('Admissions for 2026–27 at Cognizant Institute: Contact Ramnagar Campus, Anantapur at +91 8096651111 / 8096671111.');
  };

  const handleExploreClick = () => {
    if (onNavigate) {
      onNavigate('/programs');
    } else {
      const academicsSection = document.getElementById('academics');
      if (academicsSection) {
        academicsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleCourseDetail = (courseId: string) => {
    if (onNavigate) {
      onNavigate(`/programs/${courseId}`);
    } else {
      alert(`Cognizant Program (${courseId.toUpperCase()}): Integrated Intermediate Education & NEET/JEE Coaching at Anantapur Campus.`);
    }
  };

  const handleNavClick = (path: string) => {
    if (path === '/about' && onNavigateAbout) {
      onNavigateAbout();
    } else if (onNavigate) {
      onNavigate(path);
    }
  };

  return (
    <div className="cognizant-app-root" style={{ width: '100%', minHeight: '100vh', overflowX: 'hidden', background: '#0f172a' }}>
      {/* Sticky Minimizing Transparent Overlay Navbar */}
      <NavbarHero
        onApplyClick={handleApplyClick}
        onNavigate={handleNavClick}
        activePath="/"
      />

      {/* 1. HERO SECTION */}
      <HeroViewportOnly onApplyClick={handleApplyClick} onExploreClick={handleExploreClick} />

      {/* 2. WHY CHOOSE US SECTION */}
      <WhyChooseUs />

      {/* 3. COURSES PREVIEW SECTION */}
      <CoursesPreview onViewDetails={handleCourseDetail} onViewAll={handleExploreClick} />

      {/* 4. FOOTER SECTION */}
      <CompactFooter />
    </div>
  );
}
