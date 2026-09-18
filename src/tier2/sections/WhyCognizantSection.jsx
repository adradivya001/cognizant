import React from 'react';
import { Container } from '../../tier1/components/Container';
import { SectionHeading } from '../../tier1/components/SectionHeading';
import { Card } from '../../tier1/components/Card';
import { Users, Lightbulb, FileText, BarChart, Target } from 'lucide-react';
import './WhyCognizantSection.css';

const PILLAR_ICONS = [
  Users,
  Lightbulb,
  FileText,
  BarChart,
  Target
];

export function WhyCognizantSection({ data, sectionConfig }) {
  const eyebrow = sectionConfig?.eyebrow || 'THE ADVANTAGE';
  const title = sectionConfig?.title || 'WHY COGNIZANT?';
  const subtitle = sectionConfig?.subtitle || 'Five core pillars that distinguish Cognizant\'s academic ecosystem.';
  const pillars = sectionConfig?.pillars || [
    {
      index: '01',
      title: 'EXPERT FACULTY',
      description: 'Learn from experienced educators with strong competitive-exam backgrounds.'
    },
    {
      index: '02',
      title: 'CONCEPT-FIRST LEARNING',
      description: 'Build strong fundamentals before moving into advanced problem solving.'
    },
    {
      index: '03',
      title: 'CONTINUOUS TESTING',
      description: 'Regular testing to understand academic progress.'
    },
    {
      index: '04',
      title: 'PERFORMANCE ANALYSIS',
      description: 'Identify strengths, weaknesses and areas for improvement.'
    },
    {
      index: '05',
      title: 'COMPETITIVE EXAM FOCUS',
      description: 'Structured preparation for JEE and NEET.'
    }
  ];

  return (
    <section id="why-cognizant" className="visual-section why-cognizant-section">
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
        />

        <div className="why-pillars-grid">
          {pillars.map((pillar, idx) => {
            const IconComponent = PILLAR_ICONS[idx % PILLAR_ICONS.length];
            return (
              <Card
                key={idx}
                variant="glass"
                className={`why-pillar-card why-pillar-${idx}`}
              >
                <div className="pillar-header-row">
                  <span className="pillar-num">{pillar.index || `0${idx + 1}`}</span>
                  <div className="pillar-icon-box">
                    <IconComponent size={20} />
                  </div>
                </div>

                <h3 className="pillar-title">{pillar.title}</h3>
                <p className="pillar-desc">{pillar.description}</p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
