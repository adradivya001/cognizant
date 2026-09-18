import React from 'react';

export function Card({
  children,
  variant = 'default', // 'default' | 'glass' | 'surface-alt' | 'light' | 'outline'
  interactive = false,
  className = '',
  style = {},
  onClick,
  ...props
}) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'glass':
        return {
          background: 'rgba(22, 29, 43, 0.7)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid var(--color-border)',
          color: 'var(--color-text)'
        };
      case 'surface-alt':
        return {
          background: 'var(--color-surface-alt)',
          border: '1px solid var(--color-border)',
          color: 'var(--color-text)'
        };
      case 'light':
        return {
          background: 'var(--color-surface-light)',
          border: '1px solid var(--color-border-light)',
          color: 'var(--color-text-light)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
        };
      case 'outline':
        return {
          background: 'transparent',
          border: '1px solid var(--color-border-strong)',
          color: 'var(--color-text)'
        };
      case 'default':
      default:
        return {
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          color: 'var(--color-text)'
        };
    }
  };

  const cardStyles = {
    borderRadius: 'var(--radius-lg, 20px)',
    padding: '32px',
    position: 'relative',
    transition: 'all var(--transition-normal)',
    cursor: interactive ? 'pointer' : 'default',
    ...getVariantStyles(),
    ...style
  };

  return (
    <div
      className={`ui-card ${interactive ? 'hover-glow-card' : ''} ${className}`}
      style={cardStyles}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
}
