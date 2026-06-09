import React from 'react';
import { mono, serif, Divider, SectionLabel, FooterNote } from './shared';

const LINKS = [
  { label: 'email',    href: 'mailto:siddhi.s.kurne@gmail.com', display: 'siddhi.s.kurne@gmail.com' },
  { label: 'github',   href: 'https://github.com/sydystic',     display: 'github.com/sydystic' },
  { label: 'linkedin', href: 'https://www.linkedin.com/in/siddhikurne/', display: 'linkedin.com/in/siddhikurne' },
  { label: 'resume',   href: '#',                               display: 'available on request' },
];

const STATS = [
  { num: '8+',  desc: 'projects shipped' },
  { num: '2',   desc: 'internships' },
  { num: '∞',   desc: 'tabs open' },
];

const Home = () => (
  <div>
    <h1 style={{
      fontFamily: serif,
      fontSize: 34,
      fontWeight: 400,
      fontStyle: 'italic',
      color: 'var(--ink)',
      lineHeight: 1.25,
      marginBottom: 20,
      letterSpacing: '-0.5px',
    }}>
      engineering student,<br />building ai systems.
    </h1>

    <p style={{
      fontFamily: mono,
      fontSize: 12,
      color: 'var(--ink2)',
      lineHeight: 1.9,
      marginBottom: 24,
      maxWidth: 500,
    }}>
      i build ai automation systems, agentic workflows, and full-stack products.
      based in mumbai. usually working on something.
    </p>

    {/* status pills */}
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
      {[
        { text: '● probably online', accent: '#3d9e6a' },
        { text: 'open to freelance', accent: null },
        { text: 'building in ai-first space', accent: null },
      ].map(({ text, accent }) => (
        <span key={text} style={{
          fontFamily: mono,
          fontSize: 11,
          padding: '4px 12px',
          border: `0.5px solid var(--border2)`,
          borderRadius: 20,
          color: accent ?? 'var(--ink2)',
          background: 'var(--surface2)',
          letterSpacing: '0.02em',
        }}>
          {text}
        </span>
      ))}
    </div>

    <Divider />
    <SectionLabel>the actual info</SectionLabel>

    {/* links grid */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: '76px 1fr',
      gap: '10px 20px',
      alignItems: 'baseline',
      marginBottom: 32,
    }}>
      {LINKS.map(({ label, href, display }) => (
        <React.Fragment key={label}>
          <span style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.12em', color: 'var(--ink3)', textTransform: 'uppercase' }}>
            {label}
          </span>
          <a
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            style={{
              fontFamily: mono,
              fontSize: 12,
              color: 'var(--ink)',
              textDecoration: 'none',
              borderBottom: `0.5px solid var(--border2)`,
              paddingBottom: 1,
              transition: 'border-color 0.15s, color 0.15s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--ink2)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--ink)'; }}
          >
            {display}
          </a>
        </React.Fragment>
      ))}
    </div>

    <Divider />
    <SectionLabel>in brief</SectionLabel>

    {[
      `started coding, didn't stop. mostly work on ai systems, automation pipelines, and full-stack products. occasionally something ships.`,
      `hyperfocus is the only mode. either deep in a build for hours or completely elsewhere. no in-between.`,
    ].map((text, i) => (
      <p key={i} style={{
        fontFamily: mono,
        fontSize: 12,
        color: 'var(--ink2)',
        lineHeight: 1.9,
        marginBottom: 14,
      }}>
        {text}
      </p>
    ))}

    {/* stats */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      border: `0.5px solid var(--border2)`,
      borderRadius: 8,
      overflow: 'hidden',
      margin: '28px 0',
    }}>
      {STATS.map(({ num, desc }, i) => (
        <div key={num} style={{
          padding: '16px 12px',
          textAlign: 'center',
          borderRight: i < STATS.length - 1 ? `0.5px solid var(--border2)` : 'none',
        }}>
          <span style={{
            fontFamily: serif,
            fontSize: 24,
            fontStyle: 'italic',
            color: 'var(--ink)',
            display: 'block',
            marginBottom: 4,
          }}>
            {num}
          </span>
          <span style={{ fontFamily: mono, fontSize: 10, color: 'var(--ink3)', letterSpacing: '0.04em' }}>
            {desc}
          </span>
        </div>
      ))}
    </div>

    <FooterNote>
      made with ai assistance. open to freelance and ai-first teams.
    </FooterNote>
  </div>
);

export default Home;