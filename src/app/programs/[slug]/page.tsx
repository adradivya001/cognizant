import React from 'react';
import { programsList } from '../../../data/programsData';
import NavbarHero from '../../../components/layout/NavbarHero';
import ProgramDetails from '../../../components/programs/ProgramDetails';
import CompactFooter from '../../../components/layout/CompactFooter';

interface DynamicProgramPageProps {
  slug: string;
  onNavigatePrograms?: () => void;
  onNavigateHome?: () => void;
}

export default function DynamicProgramPage({
  slug,
  onNavigatePrograms,
  onNavigateHome,
}: DynamicProgramPageProps) {
  const program = programsList.find((p) => p.slug === slug || p.id === slug) || programsList[0];

  const handleApplyClick = () => {
    alert(`Admissions Enquiry for ${program.name}: Contact Ramnagar Campus, Anantapur at +91 8096651111 / 8096671111.`);
  };

  return (
    <div className="cognizant-program-detail-route" style={{ width: '100%', minHeight: '100vh', overflowX: 'hidden', background: '#0f172a' }}>
      <NavbarHero onApplyClick={handleApplyClick} activePath="/programs" />

      <main>
        <ProgramDetails program={program} onNavigatePrograms={onNavigatePrograms} />
      </main>

      <CompactFooter />
    </div>
  );
}
