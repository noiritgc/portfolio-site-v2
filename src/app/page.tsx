'use client';

import { useEffect, useRef, useState, type ComponentType } from 'react';
import Link from 'next/link';
import {
  ArrowOut, CatchDrawing, ClarinetDrawing, DeskDrawing, FootballDrawing, GitHubMark, FishingDrawing, LinkedInMark, Mail, NewsDrawing,
  Portrait, RoughBox, Scribble, TuningDrawing,
} from '@/components/Doodles';

type Project = {
  title: string;
  summary: string;
  tech: string[];
  tint: string;
  Drawing: ComponentType<{ className?: string }>;
  video?: string;
  more: string[];
  link: { label: string; href: string };
};

const projects: Project[] = [
  {
    title: 'Steady Hands',
    summary: 'A magnet-tracked pen becomes a virtual surgical tool, so your desk is the training room. Built at Cal Hacks 13.0.',
    tech: ['hardware', 'game', 'AI'],
    tint: 'tint-red',
    Drawing: DeskDrawing,
    video: 'aH168-oegaQ',
    more: [
      'The pen: a magnet inside a pen and five sensors under the board. Move your hand and the instrument follows.',
      'The practice: make careful cuts, control depth, and work through simulated procedures on your desk.',
      'The coach: Riley gives live callouts. After each run, a coach reviews your movement and suggests what to practice next.',
    ],
    link: { label: 'Watch on YouTube', href: 'https://www.youtube.com/watch?v=aH168-oegaQ' },
  },
  {
    title: 'Beat-Less Tuning',
    summary: 'An iOS app that trains musicians to hear pitch accurately using just intonation. 400+ copies sold.',
    tech: ['React Native', 'Expo', 'JavaScript'],
    tint: 'tint-yellow',
    Drawing: TuningDrawing,
    video: 'El4SwqdXyRs',
    more: [
      'Custom audio playback with real-time pitch control, looping, and pitch-shifted drones.',
      'A circular cent-based tuning interface, chord generation, and several ear-training practice modes.',
      'Published on the App Store, with 400+ copies sold and $2,000+ in revenue.',
    ],
    link: { label: 'Get it on the App Store', href: 'https://apps.apple.com/us/app/beat-less-tuning/id6758780458' },
  },
  {
    title: 'Buzzlytix',
    summary: 'Reads 165 news feeds, groups the stories into topics, and compares how outlets cover them.',
    tech: ['Python', 'Next.js', 'OpenAI API', 'Cloud Run'],
    tint: 'tint-blue',
    Drawing: NewsDrawing,
    more: [
      'A concurrent Python pipeline scrapes and cleans 165 RSS feeds across 71 news sources.',
      'AI clusters the news into up to 15 ranked topics per run, with source-cited summaries.',
      'Side-by-side comparisons show how different publishers frame the same story.',
    ],
    link: { label: 'Visit buzzlytix.com', href: 'https://buzzlytix.com' },
  },
];

const stack = ['Python', 'TypeScript', 'JavaScript', 'Java', 'SQL', 'React', 'Next.js', 'React Native', 'FastAPI', 'NumPy', 'Docker', 'Cloud Run', 'Firebase', 'Git'];

export default function Home() {
  const [open, setOpen] = useState<Project | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open) dialog.current?.showModal();
  }, [open]);

  return (
    <>
      <section className="hero">
        <div>
          <h1 className="crayon">Hi, I’m Noirit</h1>
          <p className="tagline crayon-fine">Computer science at UC Berkeley. I build apps, tools, and games.</p>
          <div className="buttons">
            <a href="#projects" className="btn btn-fill"><Scribble className="crayon" /><span className="crayon-fine">See my projects</span></a>
            <Link href="/resume" className="btn"><span className="crayon"><RoughBox /></span><span className="crayon-fine">Read my resume</span></Link>
          </div>
          <div className="find-me crayon-fine">
            <span>Find me:</span>
            <a href="mailto:noiritgc@gmail.com" aria-label="Email"><Mail /></a>
            <a href="https://github.com/noiritgc" aria-label="GitHub"><GitHubMark /></a>
            <a href="https://www.linkedin.com/in/noiritgc" aria-label="LinkedIn"><LinkedInMark /></a>
          </div>
        </div>
        <Portrait className="crayon hero-portrait" />
      </section>

      <section id="projects" className="section">
        <h2 className="crayon">Things I’ve built</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card" onClick={() => setOpen(project)}>
              <span className="crayon"><RoughBox /></span>
              <div className={`project-art ${project.tint}`}>
                <Scribble className="crayon" />
                <project.Drawing className="crayon" />
              </div>
              <div className="project-text crayon-fine">
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <p className="tech">{project.tech.join(' | ')}</p>
                <button type="button" className="more">Click for more</button>
              </div>
            </article>
          ))}
        </div>

        <div className="github-note">
          <span className="crayon"><RoughBox /></span>
          <div className="crayon-fine">
            <h3>The rest are on GitHub</h3>
            <p>Including a geo-feature sharing platform and an audio synthesis toolset.</p>
          </div>
          <a href="https://github.com/noiritgc" className="btn btn-fill"><Scribble className="crayon" /><span className="crayon-fine">See my GitHub</span></a>
        </div>
      </section>

      <section id="about" className="section about">
        <div>
          <h2 className="crayon">About me</h2>
          <div className="crayon-fine">
            <p>I’m a freshman studying computer science at UC Berkeley, class of 2029.</p>
            <p>Outside of school, I play the clarinet, follow the Bengals, and go fishing.</p>
            <h3>What I work with</h3>
          </div>
          <div className="stack">
            <Scribble className="crayon" />
            <p className="crayon-fine">{stack.join(' | ')}</p>
          </div>
        </div>
        <figure>
          <FishingDrawing className="crayon" />
        </figure>
      </section>

      <section id="outside" className="section">
        <h2 className="crayon">Outside of class</h2>
        <div className="outside-grid">
          <div className="outside-card">
            <span className="crayon"><RoughBox /></span>
            <ClarinetDrawing className="crayon" />
            <div className="crayon-fine">
              <h3>Music</h3>
              <p>I play the clarinet! My current model is a Backun Beta wooden clarinet, a step-up from my previous Yamaha plastic model. I've been playing for 6 years, and I still make time to noodle around every now and then.</p>
            </div>
          </div>
          <div className="outside-card">
            <span className="crayon"><RoughBox /></span>
            <FootballDrawing className="crayon" />
            <div className="crayon-fine">
              <h3>Football</h3>
              <p>I’m a huge Cincinnati Bengals fan and try to catch every game I can. I’ve been to two NFL games in person Bengals vs. Ravens at home in 2023 and Niners vs. Cardinals at Levi Stadium in 2026.</p>
            </div>
          </div>
          <div className="outside-card">
            <span className="crayon"><RoughBox /></span>
            <CatchDrawing className="crayon" />
            <div className="crayon-fine">
              <h3>Fishing</h3>
              <p>Fishing is one of my favorite ways to pass time. I mainly fish in rivers, lakes, and ponds where I catch sunfish, bass, trout, and catfish. I'm trying to get more into salt-water fishing.</p>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="site-footer">
        <Scribble className="crayon" />
        <div className="site-footer-inner crayon-fine">
          <div>
            <h2>Want to build something?</h2>
            <p>Noirit Ghosh Choudhuri | Computer science at UC Berkeley</p>
          </div>
          <nav>
            <a href="mailto:noiritgc@gmail.com">Email</a>
            <a href="https://github.com/noiritgc">GitHub</a>
            <a href="https://www.linkedin.com/in/noiritgc">LinkedIn</a>
          </nav>
        </div>
      </footer>

      {open && (
        <dialog
          ref={dialog}
          className="project-dialog"
          onClose={() => setOpen(null)}
          onClick={(event) => {
            if (event.target === dialog.current) dialog.current?.close();
          }}
        >
          <div className="dialog-body">
            <button type="button" className="dialog-close crayon-fine" onClick={() => dialog.current?.close()}>Close</button>
            <h2 className="crayon">{open.title}</h2>
            {open.video && (
              <div className="video-frame">
                <div className="crayon frame-lines"><RoughBox /></div>
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${open.video}`}
                  title={`${open.title} demo`}
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            )}
            <div className="crayon-fine">
              <ul>{open.more.map((point) => <li key={point}>{point}</li>)}</ul>
              <a href={open.link.href} target="_blank" rel="noreferrer" className="watch">{open.link.label} <ArrowOut className="icon" /></a>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}
