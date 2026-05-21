import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Thoughts from './pages/Thoughts';
import Blog from './pages/Blog';

type Page = 'home' | 'projects' | 'thoughts' | 'blog';

const NAV_ITEMS: { id: Page; label: string }[] = [
  { id: 'home', label: 'home' },
  { id: 'projects', label: 'projects' },
  { id: 'thoughts', label: 'thoughts' },
  { id: 'blog', label: 'blog' },
];

const App = () => {
  const [page, setPage] = useState<Page>('home');
  const [visible, setVisible] = useState(true);

  const navigate = (next: Page) => {
    if (next === page) return;
    setVisible(false);
    setTimeout(() => {
      setPage(next);
      setVisible(true);
    }, 120);
  };

  return (
    <>
      {/* ── Google Fonts ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Playfair+Display:ital,wght@0,400;0,500;1,400&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --mono: 'DM Mono', monospace;
          --serif: 'Playfair Display', serif;
          --ink:  #1a1a18;
          --ink2: #5a5a56;
          --ink3: #9a9a94;
          --surface: #fafaf8;
          --surface2: #f2f1ec;
          --border: rgba(0,0,0,0.08);
          --border2: rgba(0,0,0,0.14);
        }

        @media (prefers-color-scheme: dark) {
          :root {
            --ink:  #e8e8e0;
            --ink2: #9a9a92;
            --ink3: #5a5a54;
            --surface: #141412;
            --surface2: #1e1e1a;
            --border: rgba(255,255,255,0.07);
            --border2: rgba(255,255,255,0.13);
          }
        }

        body {
          font-family: var(--mono);
          background: var(--surface);
          color: var(--ink);
          min-height: 100vh;
          -webkit-font-smoothing: antialiased;
        }

        a { color: inherit; }

        ::selection { background: var(--ink); color: var(--surface); }
      `}</style>

      <div style={{
        maxWidth: 680,
        margin: '0 auto',
        padding: '0 24px',
      }}>
        {/* ── Nav ── */}
        <nav style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '28px 0 24px',
          borderBottom: `0.5px solid var(--border2)`,
          marginBottom: 40,
        }}>
          <NameTag />

          <div style={{ display: 'flex' }} role="tablist">
            {NAV_ITEMS.map((item, i) => (
              <button
                key={item.id}
                role="tab"
                aria-selected={page === item.id}
                onClick={() => navigate(item.id)}
                style={{
                  background: page === item.id ? 'var(--surface2)' : 'transparent',
                  border: `0.5px solid ${page === item.id ? 'var(--border2)' : 'transparent'}`,
                  borderRadius: i === 0
                    ? '6px 0 0 6px'
                    : i === NAV_ITEMS.length - 1
                    ? '0 6px 6px 0'
                    : 0,
                  padding: '6px 13px',
                  fontFamily: 'var(--mono)',
                  fontSize: 11,
                  color: page === item.id ? 'var(--ink)' : 'var(--ink2)',
                  cursor: 'pointer',
                  letterSpacing: '0.04em',
                  transition: 'all 0.15s',
                }}
                onMouseEnter={e => {
                  if (page !== item.id) {
                    (e.currentTarget as HTMLButtonElement).style.color = 'var(--ink)';
                    (e.currentTarget as HTMLButtonElement).style.background = 'var(--surface2)';
                  }
                }}
                onMouseLeave={e => {
                  if (page !== item.id) {
                    (e.currentTarget as HTMLButtonElement).style.color = 'var(--ink2)';
                    (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
                  }
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>

        {/* ── Page ── */}
        <main
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(6px)',
            transition: 'opacity 0.15s ease, transform 0.15s ease',
            paddingBottom: 80,
          }}
        >
          {page === 'home'     && <Home />}
          {page === 'projects' && <Projects />}
          {page === 'thoughts' && <Thoughts />}
          {page === 'blog'     && <Blog />}
        </main>
      </div>
    </>
  );
};

/* ── Animated name in nav ── */
const NameTag = () => {
  const full = 'sid kurne';
  const [display, setDisplay] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      i++;
      setDisplay(full.slice(0, i));
      if (i >= full.length) { clearInterval(t); setDone(true); }
    }, 80);
    return () => clearInterval(t);
  }, []);

  return (
    <span style={{
      fontFamily: 'var(--serif)',
      fontStyle: 'italic',
      fontSize: 19,
      fontWeight: 400,
      color: 'var(--ink)',
      letterSpacing: '-0.3px',
    }}>
      {display}
      {!done && (
        <span style={{ animation: 'blink 1s step-end infinite', display: 'inline-block' }}>
          _
          <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
        </span>
      )}
    </span>
  );
};

export default App;