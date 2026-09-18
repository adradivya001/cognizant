// Tier 2 Section Registry: Maps section types to layout components

import { HeroSection } from './sections/HeroSection';
import { TrustStripSection } from './sections/TrustStripSection';
import { AboutSection } from './sections/AboutSection';
import { FounderSection } from './sections/FounderSection';
import { ProgramsSection } from './sections/ProgramsSection';
import { WinningProcessSection } from './sections/WinningProcessSection';
import { WhyCognizantSection } from './sections/WhyCognizantSection';
import { FacultySection } from './sections/FacultySection';
import { ExamPrepSection } from './sections/ExamPrepSection';
import { TestingAnalyticsSection } from './sections/TestingAnalyticsSection';
import { ResultsSection } from './sections/ResultsSection';
import { GallerySection } from './sections/GallerySection';
import { UpdatesSection } from './sections/UpdatesSection';
import { AdmissionsCTASection } from './sections/AdmissionsCTASection';
import { ContactSection } from './sections/ContactSection';
import { ExperienceSection } from './sections/ExperienceSection';

// About Page Specific Layouts
import { AboutHeroLayout } from './sections/AboutHeroLayout';
import { StoryLayout } from './sections/StoryLayout';
import { CommitmentLayout } from './sections/CommitmentLayout';
import { MissionVisionLayout } from './sections/MissionVisionLayout';
import { PhilosophyLayout } from './sections/PhilosophyLayout';
import { FounderMessageLayout } from './sections/FounderMessageLayout';
import { QuoteLayout } from './sections/QuoteLayout';

export const SECTION_REGISTRY = {
  // Cognizant Homepage Sections
  hero: HeroSection,
  'trust-strip': TrustStripSection,
  about: AboutSection,
  founder: FounderSection,
  programs: ProgramsSection,
  'winning-process': WinningProcessSection,
  'why-cognizant': WhyCognizantSection,
  'why-us': WhyCognizantSection,
  faculty: FacultySection,
  'exam-prep': ExamPrepSection,
  'testing-analytics': TestingAnalyticsSection,
  results: ResultsSection,
  gallery: GallerySection,
  'gallery-preview': GallerySection,
  updates: UpdatesSection,
  'admissions-cta': AdmissionsCTASection,
  'final-cta': AdmissionsCTASection,
  contact: ContactSection,

  // Cognizant About Page Layouts
  'about-hero': AboutHeroLayout,
  'story-layout': StoryLayout,
  'commitment-layout': CommitmentLayout,
  'mission-vision-layout': MissionVisionLayout,
  'philosophy-layout': PhilosophyLayout,
  'founder-message-layout': FounderMessageLayout,
  'quote-layout': QuoteLayout,
  'final-cta-layout': AdmissionsCTASection,

  // Fallbacks & Previous Aliases
  'student-experience': AboutSection,
  'campus-preview': GallerySection,
  'academics-preview': ProgramsSection,
  'chakra-experience': ExperienceSection
};

/**
 * Returns the layout component for a given section type
 */
export function getSectionComponent(type) {
  return SECTION_REGISTRY[type] || null;
}
