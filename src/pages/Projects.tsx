import React from 'react';
import { mono, serif, FooterNote } from './shared';

interface Project {
  title: string;
  description: string;
  year: string;
  link: string;
  status: string;
  stack: string;
}

const PROJECTS: Project[] = [
  {
    title: 'cloudpilot',
    description:
      'ai workflow automation platform focused on email parsing, smart routing, llm-powered actions, and backend automations using n8n.',
    year: '2026',
    link: 'https://github.com/siddhikurne2662/cloudpilot-dashboard',
    status: 'actively building',
    stack: 'next.js / n8n / docker / supabase / llm',
  },
  {
    title: 'resumecraft',
    description:
      'modern ai-powered resume builder with ats scoring, live preview, pdf export, and intelligent resume suggestions.',
    year: '2026',
    link: 'https://github.com/siddhikurne2662/resume-builder-saas',
    status: 'live',
    stack: 'next.js / tailwind / firebase / google apis',
  },
  {
    title: 'smart expense tracker',
    description:
      'full-stack finance tracker with ai expense categorization, analytics dashboards, and firebase-powered sync.',
    year: '2026',
    link: 'https://github.com/siddhikurne2662',
    status: 'in progress',
    stack: 'flutter / firebase / ai',
  },
  {
    title: 'studysync',
    description:
      'ai-powered student assistant focused on assignment explanations, educational workflows, and study organization.',
    year: '2026',
    link: 'https://github.com/siddhikurne2662/StudyFocus',
    status: 'prototype',
    stack: 'flutter / firebase / gemini',
  },
  {
    title: 'moviedb',
    description:
      'imdb-inspired movie discovery platform built with react and tmdb api featuring search, ratings, and responsive ui.',
    year: '2025',
    link: 'https://sidsmoviedb.netlify.app',
    status: 'live',
    stack: 'react / tailwind / vite',
  },
  {
    title: 'synctwin',
    description:
      'interactive 3d automobile experience experimenting with realtime rendering, motion, and immersive frontend interactions.',
    year: '2025',
    link: 'https://github.com/siddhikurne2662/SyncTwin',
    status: 'experimental',
    stack: 'three.js / react',
  },
  {
    title: 'spotify clone',
    description:
      'spotify-inspired music streaming ui focused on responsive layouts, playback controls, and smooth user interactions.',
    year: '2025',
    link: 'https://github.com/siddhikurne2662',
    status: 'learning project',
    stack: 'react / css / javascript',
  },
];

const FOOTER_STATS = [
  { num: '8+', desc: 'projects shipped' },
  { num: '2', desc: 'internships completed' },
  { num: '1', desc: 'lead frontend role' },
  { num: '∞', desc: 'ideas unfinished' },
];

const SOCIALS = [
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/in/siddhikurne/',
  },
  {
    name: 'github',
    link: 'https://github.com/siddhikurne2662',
  },
];

const Projects = () => (
  <div>
    <h2
      style={{
        fontFamily: serif,
        fontSize: 30,
        fontWeight: 400,
        fontStyle: 'italic',
        color: 'var(--ink)',
        marginBottom: 14,
        letterSpacing: '-0.4px',
      }}
    >
      selected work
    </h2>

    <p
      style={{
        fontFamily: mono,
        fontSize: 12,
        color: 'var(--ink2)',
        lineHeight: 1.9,
        marginBottom: 28,
        maxWidth: 580,
      }}
    >
      products, experiments, and systems built around ai, automation,
      frontend engineering, and digital experiences.
    </p>

    {/* socials */}
    <div
      style={{
        display: 'flex',
        gap: 18,
        marginBottom: 42,
        flexWrap: 'wrap',
      }}
    >
      {SOCIALS.map((social) => (
        <a
          key={social.name}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: mono,
            fontSize: 10,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: 'var(--ink3)',
            textDecoration: 'none',
            border: '0.5px solid var(--border2)',
            padding: '8px 12px',
            transition: 'all 0.15s ease',
          }}
          onMouseEnter={(e) => {
            (
              e.currentTarget as HTMLAnchorElement
            ).style.opacity = '0.6';
          }}
          onMouseLeave={(e) => {
            (
              e.currentTarget as HTMLAnchorElement
            ).style.opacity = '1';
          }}
        >
          {social.name} ↗
        </a>
      ))}
    </div>

    <div>
      {PROJECTS.map((project, i) => (
        <div
          key={project.title}
          style={{
            padding: '24px 0',
            borderTop:
              i === 0
                ? `0.5px solid var(--border2)`
                : 'none',
            borderBottom: `0.5px solid var(--border2)`,
            display: 'grid',
            gridTemplateColumns: '1fr 60px',
            gap: 16,
          }}
        >
          <div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: serif,
                fontSize: 19,
                fontStyle: 'italic',
                fontWeight: 400,
                color: 'var(--ink)',
                textDecoration: 'none',
                display: 'inline-block',
                marginBottom: 8,
                transition: 'opacity 0.15s ease',
              }}
              onMouseEnter={(e) => {
                (
                  e.currentTarget as HTMLAnchorElement
                ).style.opacity = '0.6';
              }}
              onMouseLeave={(e) => {
                (
                  e.currentTarget as HTMLAnchorElement
                ).style.opacity = '1';
              }}
            >
              {project.title} ↗
            </a>

            <p
              style={{
                fontFamily: mono,
                fontSize: 11,
                color: 'var(--ink2)',
                lineHeight: 1.9,
                marginBottom: 10,
                maxWidth: 500,
              }}
            >
              {project.description}
            </p>

            <div
              style={{
                display: 'flex',
                gap: 12,
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <span
                style={{
                  fontFamily: mono,
                  fontSize: 10,
                  color: 'var(--ink3)',
                  letterSpacing: '0.05em',
                }}
              >
                — {project.status}
              </span>

              <span
                style={{
                  fontFamily: mono,
                  fontSize: 10,
                  color: 'var(--ink3)',
                  opacity: 0.7,
                }}
              >
                {project.stack}
              </span>
            </div>
          </div>

          <span
            style={{
              fontFamily: mono,
              fontSize: 11,
              color: 'var(--ink3)',
              textAlign: 'right',
              paddingTop: 4,
            }}
          >
            {project.year}
          </span>
        </div>
      ))}
    </div>

    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: 52,
        marginTop: 54,
        flexWrap: 'wrap',
      }}
    >
      {FOOTER_STATS.map(({ num, desc }) => (
        <div
          key={desc}
          style={{
            textAlign: 'center',
          }}
        >
          <span
            style={{
              fontFamily: serif,
              fontSize: 24,
              fontStyle: 'italic',
              color: 'var(--ink)',
              display: 'block',
              marginBottom: 4,
            }}
          >
            {num}
          </span>

          <span
            style={{
              fontFamily: mono,
              fontSize: 10,
              color: 'var(--ink3)',
            }}
          >
            {desc}
          </span>
        </div>
      ))}
    </div>

    <FooterNote style={{ marginTop: 42 }}>
      currently focused on ai workflows, frontend systems, and
      product-focused engineering.
    </FooterNote>
  </div>
);

export default Projects;