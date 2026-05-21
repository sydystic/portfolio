/**
 * shared.tsx
 * Design tokens + tiny reusable components for sid's portfolio.
 * Import what you need in each page file.
 */

import React, { CSSProperties } from 'react';

// ── Font tokens (use as inline style values) ──────────────────────────────
export const mono   = "'DM Mono', monospace";
export const serif  = "'Playfair Display', serif";

// ── Color token names (reference as CSS vars in inline styles) ────────────
// Use these strings directly: color: 'var(--ink)'
export const ink     = 'var(--ink)';
export const ink2    = 'var(--ink2)';
export const ink3    = 'var(--ink3)';
export const surface = 'var(--surface)';
export const surface2 = 'var(--surface2)';
export const border  = 'var(--border)';
export const border2 = 'var(--border2)';

// ── Reusable components ───────────────────────────────────────────────────

export const Divider = ({ style }: { style?: CSSProperties }) => (
  <hr style={{
    border: 'none',
    borderTop: `0.5px solid var(--border)`,
    margin: '24px 0',
    ...style,
  }} />
);

export const SectionLabel = ({ children, style }: { children: React.ReactNode; style?: CSSProperties }) => (
  <p style={{
    fontFamily: mono,
    fontSize: 10,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: ink3,
    marginBottom: 16,
    ...style,
  }}>
    {children}
  </p>
);

export const FooterNote = ({ children, style }: { children: React.ReactNode; style?: CSSProperties }) => (
  <p style={{
    fontFamily: mono,
    fontSize: 10,
    color: ink3,
    textAlign: 'center',
    lineHeight: 1.8,
    letterSpacing: '0.04em',
    marginTop: 32,
    ...style,
  }}>
    {children}
  </p>
);

/**
 * StatGrid — 2 or 3 column stat display used on Home and Thoughts.
 * Pass an array of { num, desc } objects.
 */
export const StatGrid = ({
  stats,
  style,
}: {
  stats: { num: string; desc: string }[];
  style?: CSSProperties;
}) => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: `repeat(${stats.length}, 1fr)`,
    border: `0.5px solid var(--border2)`,
    borderRadius: 8,
    overflow: 'hidden',
    ...style,
  }}>
    {stats.map(({ num, desc }, i) => (
      <div key={desc} style={{
        padding: '16px 12px',
        textAlign: 'center',
        borderRight: i < stats.length - 1 ? `0.5px solid var(--border2)` : 'none',
      }}>
        <span style={{
          fontFamily: serif,
          fontSize: 22,
          fontStyle: 'italic',
          color: ink,
          display: 'block',
          marginBottom: 4,
        }}>
          {num}
        </span>
        <span style={{ fontFamily: mono, fontSize: 10, color: ink3 }}>
          {desc}
        </span>
      </div>
    ))}
  </div>
);