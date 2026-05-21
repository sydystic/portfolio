import React from 'react';
import { mono, serif, ink, ink2, ink3, surface2, border, border2, Divider, SectionLabel, FooterNote } from './shared';

const LINKS = [
  { label: 'email',    href: 'mailto:siddhi.s.kurne2@gmail.com', display: 'siddhi.s.kurne2@gmail.com' },
  { label: 'github',   href: 'https://github.com/siddhikurne2662',            display: 'github.com/siddhikurne2662' },
  { label: 'linkedin', href: 'https://www.linkedin.com/in/siddhikurne/',      display: 'linkedin.com/in/siddhikurne' },
  { label: 'resume',   href: '#',                                              display: 'available on request' },
];

const STATS = [
  { num: '∞',   desc: 'unfinished ideas' },
  { num: '3am', desc: 'peak brain hours' },
  { num: '4+',  desc: 'coffees today' },
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
      engineering student,<br />part-time sky archivist.
    </h1>

    <p style={{
      fontFamily: mono,
      fontSize: 12,
      color: 'var(--ink2)',
      lineHeight: 1.9,
      marginBottom: 24,
      maxWidth: 500,
    }}>
      i build things that occasionally work, take photos of clouds nobody asked
      for, and have a gym membership that functions primarily as a source of guilt.
      based in mumbai. surviving on diet coke.
    </p>

    {/* status pills */}
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
      {[
        { text: '● probably online', accent: '#3d9e6a' },
        { text: 'definitely procrastinating', accent: null },
        { text: 'adhd + ocd: the full combo', accent: null },
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
      `got into coding because someone said it was easy. it wasn't. stayed anyway because
      there's something weirdly satisfying about breaking things and fixing them at 3am.`,
      `hyperfocus for 6 hours straight or spend 40 minutes picking a spotify playlist.
      adhd doesn't do in-between. add ocd and you get someone who checks the door lock
      4 times but has zero folder structure.`,
      `camera roll: 70% skies, 20% coffee, 10% accidental screenshots of notification
      bars. no regrets. some of them are actually decent.`,
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
      made with ai, and excessive diet coke.
      if you're here for a resume, check linkedin. if you're here for chaos — welcome.
    </FooterNote>
  </div>
);

export default Home;