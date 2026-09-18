import React from 'react';
import { ProgramComparisonRow } from '../../types/program';
import './ProgramComparison.css';

interface ProgramComparisonProps {
  rows: ProgramComparisonRow[];
  heading?: string;
}

export const ProgramComparison: React.FC<ProgramComparisonProps> = ({
  rows,
  heading = 'Find the Program That Fits Your Stage',
}) => {
  return (
    <section className="comparison-section">
      <div className="comparison-container">
        <div className="comparison-header">
          <span className="comparison-eyebrow">PROGRAM COMPARISON</span>
          <h2 className="comparison-title">{heading}</h2>
        </div>

        {/* Desktop Table */}
        <div className="comparison-table-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Feature / Dimension</th>
                <th>M² — METAMORPH</th>
                <th>E² — EAGLE EYE</th>
                <th>PV — PYRRIC VICTORS</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr key={idx}>
                  <td className="row-label">{row.label}</td>
                  <td>{row.m2Value}</td>
                  <td className="cell-updating">{row.e2Value}</td>
                  <td>{row.pvValue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Stacked Cards */}
        <div className="mobile-comparison-cards">
          <div className="mobile-comp-card">
            <h3 className="mobile-comp-title">M² — METAMORPH</h3>
            <ul className="comp-list">
              {rows.map((row, idx) => (
                <li key={idx}>
                  <strong>{row.label}:</strong> {row.m2Value}
                </li>
              ))}
            </ul>
          </div>

          <div className="mobile-comp-card">
            <h3 className="mobile-comp-title">E² — EAGLE EYE</h3>
            <ul className="comp-list">
              {rows.map((row, idx) => (
                <li key={idx}>
                  <strong>{row.label}:</strong> {row.e2Value}
                </li>
              ))}
            </ul>
          </div>

          <div className="mobile-comp-card">
            <h3 className="mobile-comp-title">PV — PYRRIC VICTORS</h3>
            <ul className="comp-list">
              {rows.map((row, idx) => (
                <li key={idx}>
                  <strong>{row.label}:</strong> {row.pvValue}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramComparison;
