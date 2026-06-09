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
    title: 'flowbuilder',
    description:
      'ai-powered automation platform that converts plain english into executable n8n workflows. describe what you want automated, get a working workflow.',
    year: '2026',
    link: 'https://github.com/sydystic/Flowbuilder-ai',
    status: 'actively building',
    stack: 'html / google ai / n8n / javascript',
  },
  {
    title: 'cloudpilot',
    description:
      'cloud workflow automation platform with email parsing, smart routing, llm-powered actions, and backend automations using n8n.',
    year: '2026',
    link: 'https://github.com/sydystic/cloudpilot-dashboard',
    status: 'actively building',
    stack: 'next.js / n8n / docker / supabase / llm',
  },
  {
    title: 'markdrop',
    description:
      'document to markdown converter for ai pipelines. upload pdfs, docx, pptx, xlsx and get clean ai-ready markdown instantly.',
    year: '2026',
    link: 'https://github.com/sydystic/Markdrop',
    status: 'live',
    stack: 'html / markitdown / python',
  },
  {
    title: 'msbte result monitor',
    description:
      'automated monitoring system that tracks the msbte results portal and notifies users via email when new results are published.',
    year: '2026',
    link: 'https://github.com/sydystic/msbte-result-monitor',
    status: 'live',
    stack: 'node.js / puppeteer / nodemailer',
  },
  {
    title: 'resumecraft',
    description:
      'ai-powered resume builder with ats scoring, live preview, pdf export, and intelligent resume suggestions.',
    year: '2026',
    link: 'https://github.com/sydystic/resume-builder-saas',
    status: 'live',
    stack: 'next.js / tailwind / firebase / google apis',
  },
  {
    title: 'studyfocus',
    description:
      'ai study productivity app combining pomodoro sessions, smart task management, spotify integration, ai-generated study breakdowns, and streak analytics.',
    year: '2026',
    link: 'https://github.com/sydystic/StudyFocus',
    status: 'prototype',
    stack: 'typescript / firebase / gemini / spotify api',
  },
  {
    title: 'synctwin',
    description:
      'interactive 3d automobile experience experimenting with realtime rendering, motion, and immersive frontend interactions.',
    year: '2025',
    link: 'https://github.com/sydystic/SyncTwin',
    status: 'experimental',
    stack: 'three.js / react',
  },
  {
    title: 'moviedb',
    description:
      'imdb-inspired movie discovery platform with search, ratings, and responsive ui built on the tmdb api.',
    year: '2025',
    link: 'https://sidsmoviedb.netlify.app',
    status: 'live',
    stack: 'react / tailwind / vite',
  },
];

const FOOTER_STATS = [
  { num: '8+', desc: 'projects shipped' },
  { num: '2',  desc: 'internships completed' },
  { num: '1',  desc: 'lead frontend role' },
  { num: '∞',  desc: 'tabs open' },
];

const SOCIALS = [
  { name: 'linkedin', link: 'https://www.linkedin.com/in/siddhikurne/' },
  { name: 'github',   link: 'https://github.com/sydystic' },
];

const Projects = () => (
  <div>
    <h2 style={{
      fontFamily: serif,
      fontSize: 30,
      fontWeight: 400,
      fontStyle: 'italic',
      color: 'var(--ink)',
      marginBottom: 14,
      letterSpacing: '-0.4px',
    }}>
      selected work
    </h2>

    <p style={{
      fontFamily: mono,
      fontSize: 12,
      color: 'var(--ink2)',
      lineHeight: 1.9,
      marginBottom: 28,
      maxWidth: 580,
    }}>
      ai systems, automation pipelines, and products. built to solve real problems.
    </p>

    {/* socials */}
    <div style={{ display: 'flex', gap: 18, marginBottom: 42, flexWrap: 'wrap' }}>
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
          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.6'; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1'; }}
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
            borderTop: i === 0 ? `0.5px solid var(--border2)` : 'none',
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
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.6'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1'; }}
            >
              {project.title} ↗
            </a>

            <p style={{
              fontFamily: mono,
              fontSize: 11,
              color: 'var(--ink2)',
              lineHeight: 1.9,
              marginBottom: 10,
              maxWidth: 500,
            }}>
              {project.description}
            </p>

            <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: mono, fontSize: 10, color: 'var(--ink3)', letterSpacing: '0.05em' }}>
                — {project.status}
              </span>
              <span style={{ fontFamily: mono, fontSize: 10, color: 'var(--ink3)', opacity: 0.7 }}>
                {project.stack}
              </span>
            </div>
          </div>

          <span style={{ fontFamily: mono, fontSize: 11, color: 'var(--ink3)', textAlign: 'right', paddingTop: 4 }}>
            {project.year}
          </span>
        </div>
      ))}
    </div>

    <div style={{
      display: 'flex',
      justifyContent: 'center',
      gap: 52,
      marginTop: 54,
      flexWrap: 'wrap',
    }}>
      {FOOTER_STATS.map(({ num, desc }) => (
        <div key={desc} style={{ textAlign: 'center' }}>
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
          <span style={{ fontFamily: mono, fontSize: 10, color: 'var(--ink3)' }}>
            {desc}
          </span>
        </div>
      ))}
    </div>

    <FooterNote style={{ marginTop: 42 }}>
      currently focused on ai automation, rag agents, and agentic systems.
    </FooterNote>
  </div>
);

export default Projects;