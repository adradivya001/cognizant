import React from 'react';
import { Shield, GraduationCap } from 'lucide-react';

export function Logo({
  name = 'COGNIZANT',
  subtext = 'JUNIOR COLLEGE • JEE • NEET',
  motif = 'shield',
  size = 'md',
  className = ''
}) {
  const isSm = size === 'sm';
  const logoWidth = isSm ? '38px' : '44px';
  const logoHeight = isSm ? '38px' : '44px';

  return (
    <div className={`college-logo college-logo-${size} ${className}`} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <div
        style={{
          width: logoWidth,
          height: logoHeight,
          borderRadius: '12px',
          background: 'linear-gradient(135deg, #1E40AF 0%, #3B82F6 50%, #F59E0B 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 16px rgba(59, 130, 246, 0.35)',
          position: 'relative',
          flexShrink: 0
        }}
      >
        <GraduationCap size={isSm ? 20 : 24} color="#FFFFFF" strokeWidth={2.2} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: isSm ? '1.1rem' : '1.35rem',
            fontWeight: 800,
            letterSpacing: '0.04em',
            lineHeight: 1.1,
            color: 'var(--color-text)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          {name}
        </span>
        {subtext && (
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-secondary)',
              marginTop: '2px'
            }}
          >
            {subtext}
          </span>
        )}
      </div>
    </div>
  );
}
