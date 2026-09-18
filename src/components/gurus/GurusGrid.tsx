import React, { useState } from 'react';
import { Guru } from '../../types/guru';
import GuruCard from './GuruCard';
import GurusFilter from './GurusFilter';
import './GurusGrid.css';

interface GurusGridProps {
  gurus: Guru[];
  finalNote?: string;
  onSelectGuru?: (slug: string) => void;
}

export const GurusGrid: React.FC<GurusGridProps> = ({
  gurus,
  finalNote = 'This is not the end of our Gurus list, more Gurus to join us soon.',
  onSelectGuru,
}) => {
  const [selectedSubject, setSelectedSubject] = useState<string>('ALL');

  const filteredGurus =
    selectedSubject === 'ALL'
      ? gurus
      : gurus.filter(
          (g) => g.subject.toUpperCase() === selectedSubject.toUpperCase()
        );

  return (
    <section className="gurus-grid-section" id="gurus-list">
      <div className="gurus-grid-container">
        {/* Subject Filter Bar */}
        <GurusFilter
          selectedSubject={selectedSubject}
          onSelectSubject={setSelectedSubject}
        />

        {/* Dynamic Faculty Cards Grid */}
        <div className="gurus-cards-wrapper">
          {filteredGurus.map((guru) => (
            <GuruCard
              key={guru.id}
              guru={guru}
              onSelectGuru={onSelectGuru}
            />
          ))}
        </div>

        {/* Informational Final Note */}
        {finalNote && (
          <div className="gurus-footer-note-card">
            <p className="note-text">{finalNote}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default GurusGrid;
