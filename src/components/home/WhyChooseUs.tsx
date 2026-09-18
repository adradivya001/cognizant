import React from 'react';
import { 
  GraduationCap, 
  Target, 
  Layers, 
  UserCheck, 
  LineChart, 
  MessageSquareQuote 
} from 'lucide-react';
import './WhyChooseUs.css';

export interface WhyFeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

const defaultFeatures: WhyFeatureItem[] = [
  {
    id: 'faculty',
    title: 'Experienced Faculty',
    description: 'Guided by seasoned IIT mathematics and core science mentors with decades of competitive coaching expertise.',
    iconName: 'graduation-cap',
  },
  {
    id: 'prep',
    title: 'NEET & JEE Focused Preparation',
    description: 'Integrated curriculum combining Intermediate Board syllabus with rigorous NEET & JEE Mains / Advanced problem solving.',
    iconName: 'target',
  },
  {
    id: 'methodology',
    title: 'Structured Academic Methodology',
    description: 'Systematic daily teaching schedules, pattern-proof concepts, and disciplined problem-solving methodologies.',
    iconName: 'layers',
  },
  {
    id: 'mentorship',
    title: 'Personalised Student Mentorship',
    description: 'Dedicated one-to-one academic counseling to resolve doubts, address weaknesses, and strengthen confidence.',
    iconName: 'user-check',
  },
  {
    id: 'testing',
    title: 'Regular Tests & Performance Tracking',
    description: 'Continuous assessment through topic-wise tests and mock competitive exams to monitor progress precisely.',
    iconName: 'line-chart',
  },
  {
    id: 'communication',
    title: 'Parent–Student Communication',
    description: 'Transparent academic reporting and regular updates to keep parents informed of performance milestones.',
    iconName: 'message-square',
  },
];

const renderIcon = (name: string) => {
  switch (name) {
    case 'graduation-cap':
      return <GraduationCap className="why-us-icon" size={24} />;
    case 'target':
      return <Target className="why-us-icon" size={24} />;
    case 'layers':
      return <Layers className="why-us-icon" size={24} />;
    case 'user-check':
      return <UserCheck className="why-us-icon" size={24} />;
    case 'line-chart':
      return <LineChart className="why-us-icon" size={24} />;
    case 'message-square':
      return <MessageSquareQuote className="why-us-icon" size={24} />;
    default:
      return <GraduationCap className="why-us-icon" size={24} />;
  }
};

interface WhyChooseUsProps {
  heading?: string;
  subheading?: string;
  features?: WhyFeatureItem[];
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({
  heading = 'WHY CHOOSE COGNIZANT',
  subheading = 'A structured, result-oriented educational framework designed to maximize conceptual clarity and exam confidence.',
  features = defaultFeatures,
}) => {
  return (
    <section className="why-choose-us-section" id="about">
      <div className="why-us-container">
        <div className="why-us-header">
          <span className="why-us-eyebrow">ACADEMIC EXCELLENCE</span>
          <h2 className="why-us-title">{heading}</h2>
          <p className="why-us-subheading">{subheading}</p>
        </div>

        <div className="why-us-grid">
          {features.map((item, idx) => (
            <div key={item.id || idx} className="why-us-card">
              <div className="why-us-card-header">
                <div className="why-us-icon-box">
                  {renderIcon(item.iconName)}
                </div>
                <span className="why-us-num">0{idx + 1}</span>
              </div>
              <h3 className="why-us-card-title">{item.title}</h3>
              <p className="why-us-card-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
