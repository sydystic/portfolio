import React, { useState } from 'react';
import { mono, serif, FooterNote } from './shared';

interface Thought {
  content: string;
  date: string;
  mood: string;
}

const THOUGHTS: Thought[] = [
  {
    content: 'adhd means either hyperfocusing on code for 8 hours straight or spending 45 minutes deciding which spotify playlist to work to. no in-between, no warning.',
    date: 'oct 2025',
    mood: 'accurate',
  },
  {
    content: 'the gym membership i pay for vs the gym i actually go to are two completely different concepts. schrödinger\'s workout.',
    date: 'sep 2025',
    mood: 'guilty',
  },
  {
    content: 'ocd is weird. can\'t leave the house without checking the door lock 4 times. my code organisation? absolute chaos. pick a struggle.',
    date: 'aug 2025',
    mood: 'ironic',
  },
  {
    content: 'i spend more time organising notion than actually doing the tasks in notion. productivity is a spectrum and i\'m on the decorative end.',
    date: 'jul 2025',
    mood: 'called out',
  },
  {
    content: 'taking photos of the sky is cheaper than therapy. the results are just as unclear.',
    date: 'jun 2025',
    mood: 'philosophical',
  },
  {
    content: 'coffee dependency isn\'t a personality trait. anyway, fourth cup and it\'s only 2pm.',
    date: 'may 2025',
    mood: 'caffeinated',
  },
  {
    content: 'procrastination is just anxiety with better marketing. why do the thing now when you can panic about it at midnight?',
    date: 'apr 2025',
    mood: 'relatable',
  },
  {
    content: 'using ai for code doesn\'t make you less of a developer. it\'s like having google but it actually understands your vague questions.',
    date: 'mar 2025',
    mood: 'defensive',
  },
  {
    content: 'every project starts with \'this will be quick\' and ends with \'why did i think this was a good idea at 2am?\'',
    date: 'jan 2025',
    mood: 'regret',
  },
  {
    content: 'some people have spotify wrapped. i have 47 browser tabs of articles i\'ll \'definitely read later\'.',
    date: 'feb 2025',
    mood: 'exposed',
  },
  {
    content: 'overthinking is a full-time job and i\'m employee of the month, every month.',
    date: 'dec 2024',
    mood: 'exhausted',
  },
  {
    content: 'the gym bro energy vs the \'walked to the kitchen 5 times today\' energy. balance.',
    date: 'nov 2024',
    mood: 'trying',
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
      these hit different at 3am. daytime sid has concerns about nighttime sid's decision-making.
    </FooterNote>
  </div>
);

export default Thoughts;