import React from 'react';
import { gurusData } from '../../../data/gurusData';
import NavbarHero from '../../../components/layout/NavbarHero';
import { GuruDetails } from '../../../components/gurus/GuruDetails';
import CompactFooter from '../../../components/layout/CompactFooter';

interface DynamicGuruPageProps {
  slug: string;
  onNavigateGurus?: () => void;
  onNavigateHome?: () => void;
}

export default function DynamicGuruPage({
  slug,
  onNavigateGurus,
}: DynamicGuruPageProps) {
  const guru = gurusData.find((g) => g.slug === slug || g.id === slug) || gurusData[0];

  const handleApplyClick = () => {
    alert(`Faculty & Admissions Enquiry at Cognizant Institute: Contact Ramnagar Campus, Anantapur at +91 8096651111 / 8096671111.`);
  };

  return (
    <div className="cognizant-guru-detail-route" style={{ width: '100%', minHeight: '100vh', overflowX: 'hidden', background: '#0b1120' }}>
      <NavbarHero onApplyClick={handleApplyClick} activePath="/gurus" />

      <main>
        <GuruDetails guru={guru} onBack={onNavigateGurus} />
      </main>

      <CompactFooter />
    </div>
  );
}
