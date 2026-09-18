import React from 'react';

export function Badge({
  children,
  variant = 'subtle', // 'primary' | 'secondary' | 'subtle' | 'outline' | 'glow'
  size = 'md',
  icon: Icon = null,
  className = ''
}) {
  const styles = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: size === 'sm' ? '4px 10px' : '6px 14px',
    borderRadius: 'var(--radius-full)',
    fontSize: size === 'sm' ? '0.75rem' : '0.8125rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    fontFamily: 'var(--font-mono, monospace)',
    whiteSpace: 'nowrap'
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          background: 'var(--color-primary)',
          color: '#FFFFFF',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        };
      case 'secondary':
        return {
          background: 'var(--color-secondary)',
          color: '#000000',
          border: '1px solid rgba(0, 0, 0, 0.1)'
        };
      case 'glow':
        return {
          background: 'rgba(232, 90, 45, 0.12)',
          color: 'var(--color-primary)',
          border: '1px solid rgba(232, 90, 45, 0.3)',
          boxShadow: '0 0 16px var(--color-primary-glow)'
        };
      case 'outline':
        return {
          background: 'transparent',
          color: 'var(--color-text-muted)',
          border: '1px solid var(--color-border)'
        };
      case 'subtle':
      default:
        return {
          background: 'var(--color-surface-alt)',
          color: 'var(--color-text)',
          border: '1px solid var(--color-border)'
        };
    }
  };

  return (
    <span className={`badge badge-${variant} ${className}`} style={{ ...styles, ...getVariantStyles() }}>
      {Icon && <Icon size={size === 'sm' ? 12 : 14} />}
      {children}
    </span>
  );
}
