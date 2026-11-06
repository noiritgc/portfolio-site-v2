const contact = [
  { label: 'noiritgc@gmail.com', href: 'mailto:noiritgc@gmail.com' },
  { label: '614-357-6241', href: 'tel:+16143576241' },
  { label: 'in/noiritgc', href: 'https://www.linkedin.com/in/noiritgc' },
  { label: 'noiritgc.com', href: 'https://noiritgc.com' },
];

const education = [
  {
    title: 'University of California, Berkeley',
    meta: 'Berkeley, CA',
    lines: ['B.A., Computer Science · Expected Graduation: 2029', 'Current coursework: Structure and Interpretation of Computer Programs (CS 61A), Linear Algebra and Differential Equations (MATH 54)'],
  },
  {
    title: 'The Ohio State University',
    meta: 'Columbus, OH',
    lines: ['GPA: 4.0 · 2025-2026', 'Relevant coursework: Multivariable Calculus, Linear Algebra, and Software Components'],
  },
];

const experience = [
  {
    title: 'Lead Developer',
    org: 'Beat-Less Tuning App',
    meta: 'January 2025 - Present, Columbus, OH',
    points: [
      'Developed an iOS just-intonation training app using React Native, Expo, and JavaScript, designed to help professional musicians and students develop accurate pitch perception and intonation.',
      'Engineered a custom audio playback system using expo-audio with real-time pitch/rate control, looping, and pitch-shifted drones, and built interactive tuning features including a circular cent-based interface, chord generation, and multiple ear-training practice modes.',
      'Published the app to the App Store, generating 400+ copies sold and $2,000+ in revenue.',
    ],
  },
  {
    title: 'Internal Vice President & Software Lead',
    org: 'VINdicated',
    meta: 'August 2026 - Present, Berkeley, CA',
    points: [
      'Led development of a used-car pricing education game and contributed to its Python/FastAPI backend, supporting 800 playable rounds, price-guess scoring, daily challenges, and persistent player statistics.',
      'Led development of a CatBoost valuation pipeline using 21,500+ vehicle records, achieving 4.5% median absolute percentage error against CARFAX estimates on 4,306 held-out vehicles.',
      'Guided development of SHAP-based price explanations and mileage and accident adjustments; managed recruitment, finances, and chapter logistics.',
    ],
  },
  {
    title: 'Lab Assistant',
    org: 'SOAR Lab @ Ohio State University',
    meta: 'January 2026 - May 2026, Columbus, OH',
    points: [
      'Programmed and assembled a swarm of 6 Crazyflie nano-drones using Python and ROS, achieving synchronized autonomous flight paths in a lab research setting.',
      'Integrated a Vicon motion-capture system for real-time position tracking, enabling precise closed-loop control across all 6 drones simultaneously.',
      'Implemented hardware kill-switch safety protocols to ensure safe operation during synchronized multi-drone flight testing.',
    ],
  },
];

const projects = [
  {
    title: 'Buzzlytix',
    org: 'Full-Stack Development · buzzlytix.com',
    meta: 'May 2025 - Present',
    points: [
      'Engineered a concurrent Python scraping and ETL pipeline spanning 165 RSS feeds across 71 configured news sources, implementing data extraction, cleaning, deduplication, and persistent storage in SQLite.',
      'Deployed cloud data infrastructure using Google Cloud Run and Google Cloud Storage, automating dataset updates and integrating processed news data with the production web application.',
      'Built an AI-powered data processing engine that clusters news into up to 15 ranked topics per run, generating source-cited summaries and cross-publisher framing comparisons with structured-output validation, caching, and automated retries.',
      'Developed a responsive Next.js, React, and TypeScript platform featuring interactive topic navigation, publisher coverage analytics, and side-by-side source comparisons.',
      'Tech: Python, TypeScript, JavaScript, React, Next.js, OpenAI API, SQLite, RSS, Web Scraping, ETL, Data Processing, Sentiment Analysis, Topic Clustering, GCS, Cloud Run, Docker, REST APIs.',
    ],
  },
  {
    title: 'Geo-Feature Sharing Platform Demo',
    org: 'Full-Stack Development · github.com/noiritgc/geo-feature-sharing-platform',
    meta: 'January 2026 - Present',
    points: [
      'Engineered a full-stack geospatial web application using Next.js, React, TypeScript, Leaflet, and Firebase, integrating interactive map features with Google Authentication and Firestore to model users, friends, groups, and saved geographic areas through relational references.',
      'Implemented interactive polygon drawing and geolocation, enabling users to define and save geographic regions through a Leaflet interface.',
      'Tech: Next.js 16, React 19, TypeScript, Firebase (Authentication, Firestore, Analytics), Leaflet, React-Leaflet, CSS Modules, ESLint.',
    ],
  },
  {
    title: 'Public Audio Synthesis Toolset',
    org: 'Python Programming & Signal Processing · github.com/noiritgc/Audio-Processing-Generation',
    meta: 'February 2025 - Present',
    points: [
      'Developed a Python audio synthesis pipeline using NumPy, Librosa, and WORLD (pyworld), applying Fourier analysis to extract spectral envelopes and timbral characteristics from real instrument recordings.',
      'Implemented additive synthesis to reconstruct 60 instrument tones from octaves 2-6 at mathematically precise pitches while preserving instrument resonance and eliminating pitch-shifting artifacts.',
      'Tech: Python, NumPy, Librosa, PyWorld, SoundFile, FFmpeg.',
    ],
  },
];

const skills = [
  ['Languages', 'Python, TypeScript, JavaScript, MATLAB, Java, SQL, HTML/CSS'],
  ['Frameworks/Libraries', 'React, Next.js, React Native, Expo, NumPy, Pandas, SciPy, Librosa, BeautifulSoup, Leaflet, FastAPI, CatBoost'],
  ['Technologies', 'Cloud Run, Docker, Firebase, Firestore, Google Cloud Storage, Git, GitHub, Vercel, FFmpeg'],
  ['Technical', 'Web Scraping, REST APIs, Data Processing, Sentiment Analysis, Full-Stack Development, Audio Synthesis, Digital Signal Processing'],
];

function Entries({ items }: { items: { title: string; org: string; meta: string; points: string[] }[] }) {
  return items.map((item) => (
    <article key={item.title} className="resume-entry">
      <h3>{item.title}</h3>
      <div className="resume-meta"><span>{item.org}</span><span>{item.meta}</span></div>
      <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
    </article>
  ));
}

export default function Resume() {
  return (
    <div className="resume crayon-fine">
      <h1>Noirit Ghosh Choudhuri</h1>
      <p className="resume-contact">
        Berkeley, California, United States
        {contact.map((c) => <span key={c.label}> · <a href={c.href}>{c.label}</a></span>)}
      </p>

      <h2>EDUCATION</h2>
      {education.map((school) => (
        <article key={school.title} className="resume-entry">
          <h3>{school.title}</h3>
          <div className="resume-meta"><span>{school.lines[0]}</span><span>{school.meta}</span></div>
          <p>{school.lines[1]}</p>
        </article>
      ))}

      <h2>EXPERIENCE</h2>
      <Entries items={experience} />

      <h2>PROJECTS</h2>
      <Entries items={projects} />

      <h2>SKILLS</h2>
      {skills.map(([name, list]) => <p key={name} className="resume-skill"><strong>{name}:</strong> {list}</p>)}

      <h2>AWARDS</h2>
      <article className="resume-entry">
        <h3>Midnight Hackathon: August 2026 - Mobile Track Winner</h3>
        <p>Developed Punchd, a loyalty reward system built on mobile to protect users’ geographic and timestamp data using Midnight’s zero-knowledge privacy blockchains.</p>
      </article>

      <p className="resume-pdf">Need a printable copy? <a href="/resume.pdf" target="_blank" rel="noreferrer">Open the PDF</a>.</p>
    </div>
  );
}
