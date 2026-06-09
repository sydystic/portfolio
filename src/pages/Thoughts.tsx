import React, { useState } from 'react';
import { mono, serif, FooterNote } from './shared';

interface Thought {
  content: string;
  date: string;
  mood: string;
}

const THOUGHTS = [
{
  content: 'most things work out eventually, even if it doesn\'t feel like it at the time.',
  date: 'jan 2026',
  mood: 'life',
},
{
content: 'high cortisol level.',
date: 'march 2026',
mood: 'routine',
},
{
content: 'not a morning person. peak productivity between 12pm and 6pm.',
date: 'dec 2025',
mood: 'daily',
},
{
content: 'ai is a life saver.',
date: 'aug 2025',
mood: 'useful',
},
{
content: 'adhd and ocd occasionally feel like two people trying to use the same keyboard.',
date: 'jul 2025',
mood: 'observed',
},
];


const ThoughtItem = ({ thought, index }: { thought: Thought; index: number }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: hovered ? '18px 12px' : '18px 0',
        borderTop: index === 0 ? `0.5px solid var(--border2)` : 'none',
        borderBottom: `0.5px solid var(--border2)`,
        display: 'grid',
        gridTemplateColumns: '28px 1fr',
        gap: 16,
        background: hovered ? 'var(--surface2)' : 'transparent',
        margin: hovered ? '0 -12px' : '0',
        borderRadius: hovered ? 6 : 0,
        transition: 'background 0.15s, margin 0.15s, padding 0.15s',
      }}
    >
      <span style={{
        fontFamily: mono,
        fontSize: 10,
        color: 'var(--ink3)',
        letterSpacing: '0.06em',
        paddingTop: 2,
      }}>
        {String(index + 1).padStart(2, '0')}
      </span>

      <div>
        <p style={{
          fontFamily: mono,
          fontSize: 12,
          color: 'var(--ink)',
          lineHeight: 1.9,
          marginBottom: 10,
        }}>
          {thought.content}
        </p>

        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <span style={{ fontFamily: mono, fontSize: 10, color: 'var(--ink3)' }}>
            {thought.date}
          </span>
          <span style={{ color: 'var(--border2)', fontSize: 10 }}>·</span>
          <span style={{
            fontFamily: mono,
            fontSize: 10,
            padding: '2px 8px',
            border: `0.5px solid var(--border2)`,
            borderRadius: 20,
            color: 'var(--ink3)',
          }}>
            {thought.mood}
          </span>
        </div>
      </div>
    </div>
  );
};

const Thoughts = () => (
  <div>
    <h2 style={{
      fontFamily: serif,
      fontSize: 28,
      fontWeight: 400,
      fontStyle: 'italic',
      color: 'var(--ink)',
      marginBottom: 14,
      letterSpacing: '-0.3px',
    }}>
      brain dumps
    </h2>

    <p style={{
      fontFamily: mono,
      fontSize: 12,
      color: 'var(--ink2)',
      lineHeight: 1.9,
      marginBottom: 36,
    }}>
      thoughts that felt important enough to write down. mostly just me oversharing at this point.
    </p>

    <div>
      {THOUGHTS.map((thought, i) => (
        <ThoughtItem key={i} thought={thought} index={i} />
      ))}
    </div>

    {/* stats */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      border: `0.5px solid var(--border2)`,
      borderRadius: 8,
      overflow: 'hidden',
      margin: '40px 0 0',
    }}>
      {[
        { num: `${THOUGHTS.length}`, desc: 'written down' },
        { num: '∞', desc: 'still in my head' },
        { num: '3am', desc: 'peak clarity time' },
      ].map(({ num, desc }, i, arr) => (
        <div key={desc} style={{
          padding: '16px 12px',
          textAlign: 'center',
          borderRight: i < arr.length - 1 ? `0.5px solid var(--border2)` : 'none',
        }}>
          <span style={{
            fontFamily: serif,
            fontSize: 22,
            fontStyle: 'italic',
            color: 'var(--ink)',
            display: 'block',
            marginBottom: 4,
          }}>
            {num}
          </span>
          <span style={{ fontFamily: mono, fontSize: 10, color: 'var(--ink3)' }}>
            {desc}
          </span>
        </div>
      ))}
    </div>

    <FooterNote style={{ marginTop: 32 }}>
      suppressing emotions led to memory loss, so half of the thoughts are dumped in my brain.
    </FooterNote>
  </div>
);

export default Thoughts;