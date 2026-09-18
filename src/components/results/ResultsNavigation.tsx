import React from 'react';
import './ResultsNavigation.css';

interface NavCard {
  title: string;
  description: string;
  btnText: string;
  link: string;
}

interface ResultsNavigationProps {
  cards: {
    whyCognizant: NavCard;
    meetGurus: NavCard;
  };
  onNavigate?: (route: string) => void;
}

export const ResultsNavigation: React.FC<ResultsNavigationProps> = ({
  cards,
  onNavigate,
}) => {
  const handleNav = (link: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(link);
    } else {
      window.location.hash = link.replace('/', '');
    }
  };

  return (
    <section className="results-navigation-section">
      <div className="results-navigation-container">
        <div className="results-nav-grid">
          {/* Why Cognizant */}
          <div className="results-nav-card">
            <h3 className="nav-card-title">{cards.whyCognizant.title}</h3>
            <p className="nav-card-desc">{cards.whyCognizant.description}</p>
            <a
              href={cards.whyCognizant.link}
              onClick={(e) => handleNav(cards.whyCognizant.link, e)}
              className="nav-card-btn primary"
            >
              {cards.whyCognizant.btnText}
            </a>
          </div>

          {/* Meet Our Gurus */}
          <div className="results-nav-card">
            <h3 className="nav-card-title">{cards.meetGurus.title}</h3>
            <p className="nav-card-desc">{cards.meetGurus.description}</p>
            <a
              href={cards.meetGurus.link}
              onClick={(e) => handleNav(cards.meetGurus.link, e)}
              className="nav-card-btn secondary"
            >
              {cards.meetGurus.btnText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
