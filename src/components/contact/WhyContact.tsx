import React from 'react';
import { HelpCardItem } from '../../types/contact';
import { BookOpen, UserCheck, HelpCircle } from 'lucide-react';
import './WhyContact.css';

interface WhyContactProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  cards: HelpCardItem[];
}

export const WhyContact: React.FC<WhyContactProps> = ({
  eyebrow,
  title,
  subtitle,
  cards,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'book-open':
        return <BookOpen size={24} />;
      case 'user-check':
        return <UserCheck size={24} />;
      default:
        return <HelpCircle size={24} />;
    }
  };

  return (
    <section className="why-contact-section">
      <div className="why-contact-container">
        <div className="why-contact-header">
          <span className="why-eyebrow">{eyebrow}</span>
          <h2 className="why-title">{title}</h2>
          <p className="why-subtitle">{subtitle}</p>
        </div>

        <div className="help-cards-grid">
          {cards.map((card) => (
            <div key={card.id} className="help-card">
              <div className="help-card-icon">{getIcon(card.iconName)}</div>
              <h3 className="help-card-title">{card.title}</h3>
              <p className="help-card-desc">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
