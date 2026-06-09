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
  {
    slug: 'most-things-work-out',
    type: 'essay',
    title: 'most things work out eventually',
    subtitle: 'the timeline is usually the surprising part.',
    date: 'jun 2026',
    readTime: '2 min',
    tag: 'life',
    body: `for a long time i thought everyone else had a plan.

career plan. life plan. five-year plan.

turns out most people are just making reasonable decisions with the information they have at the time.

some projects worked. some didn't.

some opportunities showed up late.

some showed up when i wasn't ready.

life feels less like a roadmap and more like walking through fog.

you don't see the whole thing.

you just see enough to take the next step.

that's usually enough.`,
  },

  {
slug: 'building-cloudpilot',
type: 'devlog',
title: 'building cloudpilot',
subtitle: 'making cloud services less intimidating for people who shouldn’t need a cloud certification.',
date: 'may 2026',
readTime: '4 min',
tag: 'devlog',
stack: ['Next.js', 'n8n', 'Docker', 'Supabase'],
outcome: 'actively building',
link: 'https://github.com/siddhikurne2662/cloudpilot-dashboard',
body: `## why i started it

cloud services are powerful.

they're also full of dashboards.

if all you want to do is manage a service, jumping between provider consoles gets old quickly.

cloudpilot started as an attempt to put the things people actually use into one place.

## what i'm building

the idea is simple.

a dashboard that lets users interact with cloud services without spending half their time inside cloud consoles.

less navigation. less context switching. fewer tabs.

## things i've learned

most of the work isn't the dashboard. it's everything around it.

authentication. permissions. webhooks. integrations.

the parts users never see usually take the longest to get right.

that's been true for almost every feature so far.`

},


  {
    slug: 'exploring-llms',
    type: 'devlog',
    title: 'currently exploring llms',
    subtitle: 'trying to separate useful systems from impressive demos.',
    date: 'jun 2026',
    readTime: '3 min',
    tag: 'devlog',
    stack: ['LLMs', 'RAG', 'Agents', 'Evaluation'],
    outcome: 'researching',
    body: `## current rabbit hole

lately i've been spending most of my time exploring llms, rag systems, agents, and evaluation.

every week there seems to be a new framework.

half of them disappear before i finish reading the documentation.

## what interests me

not bigger models. better systems. retrieval. memory. tool use. reliability.

the boring parts are usually where the real work happens.

## current conclusion

llms are impressive.

making them consistently useful is still the interesting problem.

that's probably where i'll keep spending my time.`,
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
  1 essay · 2 devlogs · written when something felt worth writing down.
</FooterNote>
        </>
      )}
    </div>
  );
};

export default Blog;