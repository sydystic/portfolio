import React, { useState } from 'react';
import { mono, serif, FooterNote } from './shared';

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────

type PostType = 'essay' | 'devlog';

interface Post {
  slug: string;
  type: PostType;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  tag: string;
  // devlog-only
  stack?: string[];
  outcome?: string;
  link?: string;
  // body: \n\n = paragraph break, ## heading = section heading
  body: string;
}

// ─────────────────────────────────────────────
// Posts — add yours here
// ─────────────────────────────────────────────

const POSTS: Post[] = [
  // ───────────────── Essays ─────────────────

  {
    slug: 'on-shipping',
    type: 'essay',
    title: 'on shipping imperfect things',
    subtitle:
      'done beats perfect. i needed reminding.',
    date: 'sep 2025',
    readTime: '3 min',
    tag: 'dev',
    body: `i have a folder called "projects" that contains roughly forty ideas in various states of incompleteness.

some are just a readme. some are halfway-built UIs with no backend. some are full backends with no frontend, which is backwards but here we are.

the thing that actually gets finished is the thing with a deadline or a real person waiting for it.

i used to think this was a discipline problem. i don't think that anymore. i think it's a stakes problem.

when a project is just for me, the bar for "good enough to share" keeps moving. when someone's actually waiting — a client, a friend, anyone — the bar becomes concrete.

the lesson i keep learning and forgetting: ship the imperfect version.

you learn more from one deployed thing than ten perfect-in-your-head things.

put it out. fix it after. the alternative is a very organised folder of things nobody ever saw.`,
  },

  {
    slug: 'why-i-code',
    type: 'essay',
    title: 'why i still code at 3am',
    subtitle:
      "it's not dedication. it's something weirder.",
    date: 'nov 2025',
    readTime: '3 min',
    tag: 'meta',
    body: `nobody tells you that the best debugging sessions happen when you're running on fumes and your sixth coffee has gone cold on the desk.

there's something about 3am that strips out the noise.

no slack pings. no notifications. no pressure to look productive. just you and the problem.

i don't think i'm naturally a night owl. i think the daytime just has too many things competing for attention.

when the world quiets down, my brain finally decides to cooperate.

hyperfocus is weird like that. when it hits, six hours disappear instantly. when it doesn't, you'll spend an hour staring at a blank file wondering why divs suddenly stopped making sense.

that's the real answer.

not productivity culture. not hustle culture.

just finding the hours where my brain works best and building around them.`,
  },

  // ───────────────── Devlogs ─────────────────

  {
    slug: 'devlog-cloudpilot',
    type: 'devlog',
    title:
      'building cloudpilot: ai workflows that actually do things',
    subtitle:
      'turning messy emails, llms, and automations into usable systems.',
    date: 'may 2026',
    readTime: '6 min',
    tag: 'devlog',
    stack: ['Next.js', 'n8n', 'docker', 'Supabase', 'LLM'],
    outcome: 'actively building',
    link: 'https://github.com/siddhikurne2662/cloudpilot-dashboard',
    body: `## the original problem

i kept noticing the same thing everywhere: people spend ridiculous amounts of time moving information between tools manually.

emails become tasks. tasks become spreadsheets. spreadsheets become reminders.

most workflows are just humans acting as middleware.

cloudpilot started as an attempt to reduce that friction.

## where n8n actually helped

i didn't want to build any basic automation.

the useful part of n8n is it's decision-making inside workflows.

it was reliability.

## what i learned

automation products live or die by trust.

users can tolerate occasional bugs. they cannot tolerate uncertainty about whether the workflow actually executed correctly.

observability matters more than aesthetics.`,
  },

  {
    slug: 'devlog-resumecraft',
    type: 'devlog',
    title:
      'building resumecraft: resumes without the corporate cringe',
    subtitle:
      'trying to make resume builders feel less like government forms.',
    date: 'apr 2026',
    readTime: '2 min',
    tag: 'devlog',
    stack: ['Next.js', 'Tailwind', 'Firebase', 'Google APIs'],
    outcome: 'live product',
    link: 'https://github.com/siddhikurne2662/resume-builder-saas',
    body: `## why i built it

most resume builders either look outdated or generate resumes that sound completely artificial.

everything becomes:
"highly motivated individual with strong communication skills."

which is recruiter repellent at this point.

i wanted to build something faster, cleaner, and more modern.

## live preview changed everything

people write better when they immediately see formatting and hierarchy updating beside the editor.

small ux feedback loops dramatically improved the experience.

instead of filling out forms, it started feeling like building a polished profile.

## what i learned

resume builders are secretly ux products.

the technology matters less than reducing friction and helping users feel confident while writing about themselves.`,
  },
];

// ─────────────────────────────────────────────
// Tag config
// ─────────────────────────────────────────────

const TAG_META: Record<string, { bg: string; text: string; label: string }> = {
  meta:    { bg: 'rgba(83,74,183,0.1)',   text: '#534AB7', label: 'meta'    },
  honest:  { bg: 'rgba(216,90,48,0.1)',   text: '#993C1D', label: 'honest'  },
  dev:     { bg: 'rgba(29,158,117,0.1)',  text: '#0F6E56', label: 'dev'     },
  life:    { bg: 'rgba(186,117,23,0.1)',  text: '#854F0B', label: 'life'    },
  devlog:  { bg: 'rgba(53,95,165,0.1)',   text: '#185FA5', label: 'devlog'  },
};

const tagStyle = (tag: string) =>
  TAG_META[tag] ?? { bg: 'var(--surface2)', text: 'var(--ink3)', label: tag };

// ─────────────────────────────────────────────
// BlogPost (full read view)
// ─────────────────────────────────────────────

const BlogPost = ({ post, onClose }: { post: Post; onClose: () => void }) => {
  const ts = tagStyle(post.tag);

  // parse body: ## Heading → <h3>, else <p>
  const blocks = post.body.split('\n\n').filter(Boolean).map((block, i) => {
    if (block.startsWith('## ')) {
      return (
        <h3 key={i} style={{
          fontFamily: serif,
          fontSize: 15,
          fontWeight: 400,
          fontStyle: 'italic',
          color: 'var(--ink)',
          marginBottom: 10,
          marginTop: 28,
          letterSpacing: '-0.1px',
        }}>
          {block.replace('## ', '')}
        </h3>
      );
    }
    return (
      <p key={i} style={{
        fontFamily: mono,
        fontSize: 13,
        color: 'var(--ink)',
        lineHeight: 2,
        marginBottom: 20,
        maxWidth: 560,
      }}>
        {block}
      </p>
    );
  });

  return (
    <div>
      {/* back */}
      <button
        onClick={onClose}
        style={{
          background: 'none', border: 'none',
          fontFamily: mono, fontSize: 11,
          color: 'var(--ink3)', cursor: 'pointer',
          letterSpacing: '0.06em', padding: 0,
          marginBottom: 28, display: 'flex',
          alignItems: 'center', gap: 6,
          transition: 'color 0.15s',
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = 'var(--ink)'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = 'var(--ink3)'; }}
      >
        ← all posts
      </button>

      {/* header */}
      <div style={{ marginBottom: 32 }}>
        <span style={{
          fontFamily: mono, fontSize: 10,
          letterSpacing: '0.1em',
          color: ts.text, background: ts.bg,
          padding: '3px 8px', borderRadius: 20,
          display: 'inline-block', marginBottom: 14,
        }}>
          {post.tag}
        </span>

        <h1 style={{
          fontFamily: serif, fontSize: 30,
          fontWeight: 400, fontStyle: 'italic',
          color: 'var(--ink)', lineHeight: 1.25,
          marginBottom: 10, letterSpacing: '-0.4px',
        }}>
          {post.title}
        </h1>

        <p style={{
          fontFamily: mono, fontSize: 12,
          color: 'var(--ink2)', lineHeight: 1.6, marginBottom: 14,
        }}>
          {post.subtitle}
        </p>

        <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
          <span style={{ fontFamily: mono, fontSize: 10, color: 'var(--ink3)' }}>{post.date}</span>
          <span style={{ color: 'var(--border2)' }}>·</span>
          <span style={{ fontFamily: mono, fontSize: 10, color: 'var(--ink3)' }}>{post.readTime} read</span>
        </div>
      </div>

      {/* devlog meta strip */}
      {post.type === 'devlog' && (post.stack || post.outcome || post.link) && (
        <div style={{
          border: '0.5px solid var(--border2)',
          borderRadius: 8,
          padding: '14px 16px',
          marginBottom: 32,
          display: 'grid',
          gridTemplateColumns: post.link ? '1fr 1fr auto' : '1fr 1fr',
          gap: 16,
        }}>
          {post.stack && (
            <div>
              <p style={{ fontFamily: mono, fontSize: 10, color: 'var(--ink3)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>stack</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {post.stack.map(s => (
                  <span key={s} style={{
                    fontFamily: mono, fontSize: 10,
                    padding: '2px 7px',
                    border: '0.5px solid var(--border2)',
                    borderRadius: 4,
                    color: 'var(--ink2)',
                  }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}
          {post.outcome && (
            <div>
              <p style={{ fontFamily: mono, fontSize: 10, color: 'var(--ink3)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>outcome</p>
              <p style={{ fontFamily: mono, fontSize: 11, color: 'var(--ink2)' }}>{post.outcome}</p>
            </div>
          )}
          {post.link && (
            <div style={{ display: 'flex', alignItems: 'flex-end' }}>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: mono, fontSize: 10,
                  color: ts.text,
                  textDecoration: 'none',
                  border: `0.5px solid ${ts.text}`,
                  padding: '4px 10px',
                  borderRadius: 6,
                  opacity: 0.85,
                  transition: 'opacity 0.15s',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.85'; }}
              >
                view project ↗
              </a>
            </div>
          )}
        </div>
      )}

      <div style={{ width: 32, height: '0.5px', background: 'var(--border2)', marginBottom: 32 }} />

      {/* body */}
      <div>{blocks}</div>
    </div>
  );
};

// ─────────────────────────────────────────────
// PostCard
// ─────────────────────────────────────────────

const PostCard = ({ post, onClick }: { post: Post; onClick: () => void }) => {
  const [hovered, setHovered] = useState(false);
  const ts = tagStyle(post.tag);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: hovered ? '20px 12px' : '20px 0',
        margin: hovered ? '0 -12px' : '0',
        cursor: 'pointer',
        display: 'grid',
        gridTemplateColumns: '1fr 60px',
        gap: 16,
        alignItems: 'start',
        background: hovered ? 'var(--surface2)' : 'transparent',
        borderRadius: hovered ? 6 : 0,
        transition: 'background 0.15s, margin 0.15s, padding 0.15s',
      }}
    >
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
          <span style={{
            fontFamily: mono, fontSize: 10,
            letterSpacing: '0.08em',
            color: ts.text, background: ts.bg,
            padding: '2px 8px', borderRadius: 20,
          }}>
            {post.tag}
          </span>
          {post.type === 'devlog' && post.stack && (
            <span style={{ fontFamily: mono, fontSize: 10, color: 'var(--ink3)' }}>
              {post.stack.slice(0, 2).join(' · ')}
            </span>
          )}
        </div>

        <h3 style={{
          fontFamily: serif, fontSize: 17,
          fontWeight: 400, fontStyle: 'italic',
          color: 'var(--ink)', marginBottom: 5,
          letterSpacing: '-0.2px',
          opacity: hovered ? 0.7 : 1,
          transition: 'opacity 0.15s',
        }}>
          {post.title}
        </h3>

        <p style={{
          fontFamily: mono, fontSize: 11,
          color: 'var(--ink2)', lineHeight: 1.7, marginBottom: 8,
        }}>
          {post.subtitle}
        </p>

        <span style={{ fontFamily: mono, fontSize: 10, color: 'var(--ink3)' }}>
          {post.readTime} read
        </span>
      </div>

      <div style={{ textAlign: 'right', paddingTop: 4 }}>
        <span style={{ fontFamily: mono, fontSize: 10, color: 'var(--ink3)' }}>
          {post.date}
        </span>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────
// Blog (list view)
// ─────────────────────────────────────────────

type Filter = 'all' | 'essay' | 'devlog';

const FILTERS: { id: Filter; label: string }[] = [
  { id: 'all',    label: 'all'     },
  { id: 'essay',  label: 'essays'  },
  { id: 'devlog', label: 'devlogs' },
];

const Blog = () => {
  const [activePost, setActivePost] = useState<Post | null>(null);
  const [filter, setFilter] = useState<Filter>('all');
  const [visible, setVisible] = useState(true);

  const filtered = filter === 'all' ? POSTS : POSTS.filter(p => p.type === filter);

  const openPost = (post: Post) => {
    setVisible(false);
    setTimeout(() => { setActivePost(post); setVisible(true); }, 120);
  };

  const closePost = () => {
    setVisible(false);
    setTimeout(() => { setActivePost(null); setVisible(true); }, 120);
  };

  return (
    <div style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(6px)',
      transition: 'opacity 0.12s ease, transform 0.12s ease',
    }}>
      {activePost ? (
        <BlogPost post={activePost} onClose={closePost} />
      ) : (
        <>
          {/* header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14, flexWrap: 'wrap', gap: 12 }}>
            <h2 style={{
              fontFamily: serif, fontSize: 28,
              fontWeight: 400, fontStyle: 'italic',
              color: 'var(--ink)', letterSpacing: '-0.3px',
            }}>
              writing
            </h2>

            {/* filter pills */}
            <div style={{ display: 'flex', gap: 0, alignSelf: 'center' }}>
              {FILTERS.map((f, i) => (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  style={{
                    background: filter === f.id ? 'var(--surface2)' : 'transparent',
                    border: `0.5px solid ${filter === f.id ? 'var(--border2)' : 'transparent'}`,
                    borderRadius: i === 0 ? '6px 0 0 6px' : i === FILTERS.length - 1 ? '0 6px 6px 0' : 0,
                    padding: '5px 12px',
                    fontFamily: mono, fontSize: 11,
                    color: filter === f.id ? 'var(--ink)' : 'var(--ink3)',
                    cursor: 'pointer',
                    transition: 'all 0.15s',
                    letterSpacing: '0.04em',
                  }}
                  onMouseEnter={e => { if (filter !== f.id) (e.currentTarget as HTMLButtonElement).style.color = 'var(--ink)'; }}
                  onMouseLeave={e => { if (filter !== f.id) (e.currentTarget as HTMLButtonElement).style.color = 'var(--ink3)'; }}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <p style={{
            fontFamily: mono, fontSize: 12,
            color: 'var(--ink2)', lineHeight: 1.9, marginBottom: 32,
          }}>
            {filter === 'all'    && 'essays and devlogs. not advice. just stuff i figured out or am still figuring out.'}
            {filter === 'essay'  && 'short essays. mostly me oversharing with slightly better sentence structure.'}
            {filter === 'devlog' && 'project writeups. what i built, what broke, what i\'d do differently.'}
          </p>

          <div>
            {filtered.map((post, i) => (
              <div key={post.slug} style={{
                borderTop: i === 0 ? '0.5px solid var(--border2)' : 'none',
                borderBottom: '0.5px solid var(--border2)',
              }}>
                <PostCard post={post} onClick={() => openPost(post)} />
              </div>
            ))}
          </div>

          <FooterNote style={{ marginTop: 40 }}>
            {POSTS.filter(p => p.type === 'essay').length} essays ·{' '}
            {POSTS.filter(p => p.type === 'devlog').length} devlogs ·{' '}
            more when the 3am clarity strikes.
          </FooterNote>
        </>
      )}
    </div>
  );
};

export default Blog;