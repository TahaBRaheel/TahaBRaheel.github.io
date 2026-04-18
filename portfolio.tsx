import { useState } from "react";

const LINKS = {
  linkedin: "https://www.linkedin.com/in/taha-bin-raheel/",
  github: "https://github.com/TahaBRaheel",
  email: "mailto:taha.binraheel@gmail.com",
  roblox: "https://www.roblox.com/games/",
};

const work = [
  { company: "Yadag", period: "Oct – Dec 2025", team: "worker operations platform" },
  { company: "Sonical.ly", period: "May – Aug 2024", team: "course delivery & applicant screening" },
  { company: "Swimingo", period: "Feb – Apr 2024", team: "instructor booking platform" },
];

const projects = [
  { name: "Roblox: Meteor Mining Simulator", href: LINKS.roblox },
  { name: "MindVault", href: LINKS.github },
  { name: "Fault Finder", href: LINKS.github },
];

const skills = {
  languages: ["Python", "TypeScript", "Java", "C#", "JavaScript", "Lua", "SQL"],
  frameworks: ["React", "Next.js", ".NET", "Node", "TailwindCSS", "FastAPI"],
  tools: ["Git", "Firebase", "AWS", "Docker", "Figma", "Vite"],
};

export default function Portfolio() {
  const [hoveredWork, setHoveredWork] = useState<number | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <div style={{
      fontFamily: "'EB Garamond', Georgia, serif",
      background: "#111110",
      minHeight: "100vh",
      color: "#e8e6df",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=DM+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html, body, #root { background: #111110; min-height: 100vh; width: 100%; }

        .inner { max-width: 600px; margin: 0 auto; padding: 3.5rem 2rem 4rem; }

        a { color: inherit; text-decoration: underline; text-underline-offset: 3px;
            text-decoration-color: rgba(232,230,223,0.2); transition: text-decoration-color 0.2s; }
        a:hover { text-decoration-color: rgba(232,230,223,0.8); }

        .tag { font-family: 'DM Mono', monospace; font-size: 10px; background: #1c1c1a;
               color: #6a6a60; padding: 2px 6px; border-radius: 3px; white-space: nowrap; }

        .row { display: flex; justify-content: space-between; align-items: baseline;
               padding: 0.55rem 0; border-top: 1px solid #222220; gap: 0.5rem; }
        .row:last-child { border-bottom: 1px solid #222220; }

        .section-label { font-family: 'DM Mono', monospace; font-size: 10px; letter-spacing: 0.12em;
                         text-transform: uppercase; color: #3a3a36; margin: 2rem 0 0.75rem; }

        .nav-link { font-family: 'DM Mono', monospace; font-size: 11px; color: #3a3a36;
                    text-decoration: none; transition: color 0.15s; letter-spacing: 0.04em; }
        .nav-link:hover { color: #e8e6df; }

        .mono-sm { font-family: 'DM Mono', monospace; font-size: 10px; color: #3a3a36; }

        .fade-in { animation: fadeUp 0.4s ease both; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      <div className="inner fade-in">

        {/* Nav */}
        <nav style={{ display: "flex", gap: "1.25rem", marginBottom: "2.5rem" }}>
          <a href={LINKS.linkedin} className="nav-link" target="_blank" rel="noreferrer">linkedin</a>
          <a href={LINKS.github} className="nav-link" target="_blank" rel="noreferrer">github</a>
          <a href={LINKS.email} className="nav-link">email</a>
        </nav>

        {/* Hero */}
        <h1 style={{ fontSize: "clamp(1.7rem, 4vw, 2.2rem)", fontWeight: 400, lineHeight: 1.2,
                     letterSpacing: "-0.01em", color: "#f0ede4", marginBottom: "0.6rem" }}>
          Taha Bin Raheel
        </h1>
        <p style={{ fontSize: "0.95rem", color: "#5a5a54", fontFamily: "'DM Mono', monospace" }}>
          STATS + CS @ UofT · software engineering intern
        </p>

        {/* Work */}
        <p className="section-label">work</p>
        <div>
          {work.map((job, i) => (
            <div key={i} className="row"
              onMouseEnter={() => setHoveredWork(i)}
              onMouseLeave={() => setHoveredWork(null)}
              style={{ opacity: hoveredWork !== null && hoveredWork !== i ? 0.25 : 1, transition: "opacity 0.15s" }}>
              <span style={{ fontSize: "0.95rem", color: "#d0cdc4" }}>{job.company}
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "#4a4a44", marginLeft: "0.6rem" }}>
                  {job.team}
                </span>
              </span>
              <span className="mono-sm">{job.period}</span>
            </div>
          ))}
        </div>

        {/* Projects */}
        <p className="section-label">projects</p>
        <div>
          {projects.map((p, i) => (
            <div key={i} className="row"
              onMouseEnter={() => setHoveredProject(i)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ opacity: hoveredProject !== null && hoveredProject !== i ? 0.25 : 1, transition: "opacity 0.15s" }}>
              <a href={p.href} target="_blank" rel="noreferrer"
                style={{ fontSize: "0.95rem", color: "#d0cdc4", fontWeight: 400 }}>
                {p.name}
              </a>
            </div>
          ))}
        </div>

        {/* Skills */}
        <p className="section-label">skills</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
          {Object.entries(skills).map(([cat, items]) => (
            <div key={cat} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "#3a3a36",
                             minWidth: 72, paddingTop: 3, letterSpacing: "0.04em" }}>
                {cat}
              </span>
              <div style={{ display: "flex", gap: "0.3rem", flexWrap: "wrap" }}>
                {items.map(s => <span key={s} className="tag">{s}</span>)}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <p style={{ marginTop: "2.5rem", fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "#3a3a36", lineHeight: 1.8 }}>
          <a href={LINKS.email} style={{ color: "#4a4a44" }}>taha.binraheel@gmail.com</a>
          {" "}· 647-671-6359
        </p>

      </div>
    </div>
  );
}
