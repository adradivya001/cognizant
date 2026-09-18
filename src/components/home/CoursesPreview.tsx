import React from 'react';
import { ArrowRight, Calculator, Dna, Rocket, Stethoscope } from 'lucide-react';
import './CoursesPreview.css';

export interface CoursePreviewItem {
  id: string;
  code: string;
  name: string;
  description: string;
  category: 'MPC' | 'BiPC' | 'JEE' | 'NEET';
  iconName: string;
}

const defaultCourses: CoursePreviewItem[] = [
  {
    id: 'mpc',
    code: 'MPC',
    name: 'MPC — Intermediate',
    description: 'Mathematics, Physics, & Chemistry integrated with JEE foundation principles.',
    category: 'MPC',
    iconName: 'calculator',
  },
  {
    id: 'bipc',
    code: 'BiPC',
    name: 'BiPC — Intermediate',
    description: 'Biology, Physics, & Chemistry structured for core science and NEET readiness.',
    category: 'BiPC',
    iconName: 'dna',
  },
  {
    id: 'jee',
    code: 'JEE',
    name: 'JEE Mains & Advanced',
    description: 'Intensive coaching focused on advanced problem-solving techniques for engineering entrance.',
    category: 'JEE',
    iconName: 'rocket',
  },
  {
    id: 'neet',
    code: 'NEET',
    name: 'NEET Medical Entrance',
    description: 'Comprehensive medical coaching designed for speed, accuracy, and concept mastery.',
    category: 'NEET',
    iconName: 'stethoscope',
  },
];

const getCourseIcon = (name: string) => {
  switch (name) {
    case 'calculator':
      return <Calculator size={22} />;
    case 'dna':
      return <Dna size={22} />;
    case 'rocket':
      return <Rocket size={22} />;
    case 'stethoscope':
      return <Stethoscope size={22} />;
    default:
      return <Calculator size={22} />;
  }
};

interface CoursesPreviewProps {
  heading?: string;
  subheading?: string;
  courses?: CoursePreviewItem[];
  onViewDetails?: (courseId: string) => void;
  onViewAll?: () => void;
}

export const CoursesPreview: React.FC<CoursesPreviewProps> = ({
  heading = 'OUR PROGRAMS',
  subheading = 'Focused academic programs designed to build strong foundations and prepare students for competitive examinations.',
  courses = defaultCourses,
  onViewDetails,
  onViewAll,
}) => {
  return (
    <section className="courses-preview-section" id="academics">
      <div className="courses-preview-container">
        <div className="courses-preview-header">
          <span className="courses-preview-eyebrow">ACADEMIC PATHWAYS</span>
          <h2 className="courses-preview-title">{heading}</h2>
          <p className="courses-preview-subheading">{subheading}</p>
        </div>

        <div className="courses-preview-grid">
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              <div className="course-card-top">
                <div className="course-icon-badge">
                  {getCourseIcon(course.iconName)}
                </div>
                <span className="course-code-tag">{course.code}</span>
              </div>

              <h3 className="course-title">{course.name}</h3>
              <p className="course-desc">{course.description}</p>

              <div className="course-card-action">
                <button
                  className="course-link-btn"
                  onClick={() => onViewDetails && onViewDetails(course.id)}
                >
                  <span>View Details</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="courses-preview-footer">
          <a
            href="#academics"
            className="view-all-courses-btn"
            onClick={(e) => {
              if (onViewAll) {
                e.preventDefault();
                onViewAll();
              }
            }}
          >
            <span>View All Courses</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CoursesPreview;
