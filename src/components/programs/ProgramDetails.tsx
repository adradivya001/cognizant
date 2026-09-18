import React from 'react';
import { ProgramDetail } from '../../types/program';
import { 
  ChevronRight, 
  Clock, 
  BookOpen, 
  CheckCircle2, 
  UserCheck, 
  AlertCircle, 
  PhoneCall, 
  ArrowLeft 
} from 'lucide-react';
import './ProgramDetails.css';

interface ProgramDetailsProps {
  program: ProgramDetail;
  onNavigatePrograms?: () => void;
}

export const ProgramDetails: React.FC<ProgramDetailsProps> = ({
  program,
  onNavigatePrograms,
}) => {
  const isUpdating = program.status === 'information-updating';

  return (
    <article className="program-details-page">
      {/* Detail Hero Section */}
      <div className="pdetail-hero">
        <div className="pdetail-hero-container">
          <div className="pdetail-breadcrumb">
            <a
              href="/programs"
              onClick={(e) => {
                if (onNavigatePrograms) {
                  e.preventDefault();
                  onNavigatePrograms();
                }
              }}
            >
              Programs
            </a>
            <ChevronRight size={14} />
            <span>{program.code} — {program.name}</span>
          </div>

          <div className="pdetail-hero-main">
            <div className="pdetail-code-badge">
              <span>{program.code}</span>
            </div>
            <h1 className="pdetail-title">{program.name}</h1>
            <p className="pdetail-short-desc">{program.shortDescription}</p>

            <div className="pdetail-tags-row">
              <span className="pdetail-audience">{program.audienceTag}</span>
              {program.duration && (
                <span className="pdetail-duration">
                  <Clock size={14} />
                  <span>{program.duration}</span>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Detail Body */}
      <div className="pdetail-body-container">
        {/* Updating Notice Banner if applicable */}
        {isUpdating && (
          <div className="pdetail-notice-banner">
            <AlertCircle size={20} className="notice-icon" />
            <div>
              <h4 className="notice-title">Program Details Updating</h4>
              <p className="notice-text">
                Current curriculum schedules and enrollment guidelines for this program are being updated. Contact admissions for the latest information.
              </p>
            </div>
          </div>
        )}

        {/* Target Audience / Who Is It For */}
        {program.targetStudents && (
          <section className="pdetail-section">
            <h2 className="pdetail-sec-title">Who Is It For?</h2>
            <div className="pdetail-info-card">
              <UserCheck size={24} className="sec-icon" />
              <p className="pdetail-info-text">{program.targetStudents}</p>
            </div>
          </section>
        )}

        {/* Program Overview */}
        {program.fullDescription && (
          <section className="pdetail-section">
            <h2 className="pdetail-sec-title">Program Overview</h2>
            <p className="pdetail-paragraph">{program.fullDescription}</p>
          </section>
        )}

        {/* Academic Focus */}
        {program.focus && program.focus.length > 0 && (
          <section className="pdetail-section">
            <h2 className="pdetail-sec-title">Academic Focus</h2>
            <div className="pdetail-tags-grid">
              {program.focus.map((item, idx) => (
                <div key={idx} className="focus-tag-item">
                  <CheckCircle2 size={16} className="tag-icon" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Subjects Offered */}
        {program.subjects && program.subjects.length > 0 && (
          <section className="pdetail-section">
            <h2 className="pdetail-sec-title">Subjects & Languages</h2>
            <ul className="pdetail-list">
              {program.subjects.map((sub, idx) => (
                <li key={idx}>
                  <BookOpen size={16} className="list-icon" />
                  <span>{sub}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Key Features */}
        {program.features && program.features.length > 0 && (
          <section className="pdetail-section">
            <h2 className="pdetail-sec-title">Key Program Features</h2>
            <ul className="pdetail-list">
              {program.features.map((feat, idx) => (
                <li key={idx}>
                  <CheckCircle2 size={16} className="list-icon" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Eligibility */}
        {program.eligibility && program.eligibility.length > 0 && (
          <section className="pdetail-section">
            <h2 className="pdetail-sec-title">Eligibility Criteria</h2>
            <ul className="pdetail-list">
              {program.eligibility.map((elig, idx) => (
                <li key={idx}>
                  <UserCheck size={16} className="list-icon" />
                  <span>{elig}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Admission Information */}
        {program.admission && (
          <section className="pdetail-section">
            <h2 className="pdetail-sec-title">Admission Information</h2>
            <div className="admission-box">
              <p className="admission-desc">{program.admission.description}</p>
              {program.admission.isHistorical && program.admission.historicalNote && (
                <div className="historical-note">
                  <AlertCircle size={16} />
                  <span>{program.admission.historicalNote}</span>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Contact CTA Block */}
        <div className="pdetail-cta-card">
          <div className="cta-left">
            <h3 className="cta-title">Interested in {program.name}?</h3>
            <p className="cta-desc">Contact Cognizant admissions desk for campus guidance, subject options, and counseling.</p>
          </div>
          <div className="cta-right">
            <a href="#contact" className="cta-contact-btn">
              <PhoneCall size={18} />
              <span>Contact Admissions Desk</span>
            </a>
          </div>
        </div>

        {/* Back Link */}
        <div className="pdetail-back-bar">
          <button
            className="back-to-programs-btn"
            onClick={() => onNavigatePrograms && onNavigatePrograms()}
          >
            <ArrowLeft size={16} />
            <span>Back to All Programs</span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProgramDetails;
