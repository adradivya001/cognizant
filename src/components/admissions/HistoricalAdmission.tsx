import React from 'react';
import { HistoricalAdmissionData } from '../../types/admissions';
import './HistoricalAdmission.css';

interface HistoricalAdmissionProps {
  data: HistoricalAdmissionData;
}

export const HistoricalAdmission: React.FC<HistoricalAdmissionProps> = ({ data }) => {
  if (!data || !data.enabled) return null;

  return (
    <section className="historical-admission-section">
      <div className="historical-admission-container">
        {/* Banner Header */}
        <div className="historical-banner-card">
          <div className="historical-badge-row">
            <span className="historical-tag">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              {data.yearLabel}
            </span>
            <span className="historical-disclaimer-text">{data.disclaimer}</span>
          </div>

          <h2 className="historical-title">{data.title}</h2>
          <p className="historical-intro">
            The details below represent entrance test structures utilized during the Cognizant Admission Test (CAT-23) session. This information is preserved solely for academic reference.
          </p>
        </div>

        {/* Test Patterns Grid */}
        <div className="historical-patterns-grid">
          {/* JEE / MPC Card */}
          <div className="historical-pattern-card">
            <div className="pattern-header">
              <span className="pattern-stream">{data.jeePattern.stream}</span>
              <h3 className="pattern-name">{data.jeePattern.name}</h3>
            </div>
            <div className="pattern-stats">
              <div className="stat-pill">
                <span className="stat-label">Duration</span>
                <span className="stat-value">{data.jeePattern.durationMinutes} Minutes</span>
              </div>
              <div className="stat-pill">
                <span className="stat-label">Total Questions</span>
                <span className="stat-value">{data.jeePattern.totalQuestions} Questions</span>
              </div>
            </div>
            <div className="pattern-subjects">
              <span className="subject-heading">Subject Breakdown</span>
              <div className="subject-list">
                {data.jeePattern.subjectBreakdown.map((sb, idx) => (
                  <div key={idx} className="subject-row">
                    <span className="subject-name">{sb.subject}</span>
                    <span className="subject-count">{sb.count} Questions</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* NEET / BPC Card */}
          <div className="historical-pattern-card">
            <div className="pattern-header">
              <span className="pattern-stream">{data.neetPattern.stream}</span>
              <h3 className="pattern-name">{data.neetPattern.name}</h3>
            </div>
            <div className="pattern-stats">
              <div className="stat-pill">
                <span className="stat-label">Duration</span>
                <span className="stat-value">{data.neetPattern.durationMinutes} Minutes</span>
              </div>
              <div className="stat-pill">
                <span className="stat-label">Total Questions</span>
                <span className="stat-value">{data.neetPattern.totalQuestions} Questions</span>
              </div>
            </div>
            <div className="pattern-subjects">
              <span className="subject-heading">Subject Breakdown</span>
              <div className="subject-list">
                {data.neetPattern.subjectBreakdown.map((sb, idx) => (
                  <div key={idx} className="subject-row">
                    <span className="subject-name">{sb.subject}</span>
                    <span className="subject-count">{sb.count} Questions</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Marking Scheme Footer */}
        <div className="historical-marking-card">
          <h4 className="marking-title">CAT-23 Marking Scheme</h4>
          <div className="marking-grid">
            <div className="marking-item positive">
              <span className="marking-val">+4</span>
              <span className="marking-desc">{data.markingScheme.correct}</span>
            </div>
            <div className="marking-item negative">
              <span className="marking-val">-1</span>
              <span className="marking-desc">{data.markingScheme.incorrect}</span>
            </div>
            <div className="marking-item neutral">
              <span className="marking-val">0</span>
              <span className="marking-desc">{data.markingScheme.unanswered}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
