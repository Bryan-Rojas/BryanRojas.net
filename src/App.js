import React from 'react';
import './App.css';
import Selfie from './components/Image';
import Description from './components/Description';
import Buttons from './components/ResumeButton';

function App() {
  return (
    <div className="App">
      <div className="container">
        <section className="hero">
          <Selfie />
          <Description />
          <Buttons />
        </section>

        <section id="about" className="section">
          <h2 className="section-title">About Me</h2>
          <p className="section-text">
            I'm a Senior Software Engineer at Oracle, where I've spent the last several years in SRE and DevSecOps — now pivoting hard toward AI adoption across everything I do. I lived the infrastructure life: on-call rotations, security hardening, CI/CD pipelines, keeping production alive. Now I'm channeling all of that into making AI practical and reusable in real engineering workflows.
          </p>
          <p className="section-text" style={{ marginTop: '1rem' }}>
            I'm the kind of engineer who can't leave a tool alone until it's <em>exactly</em> how I want it. I went through a massive setup cycle configuring Hermes Agent + OpenRouter + Obsidian — skills, prompts, integrations — before I even started producing real work with it. I'm an early adopter by nature: I love discovering new tech, going deep, and then automating it so the next person (or future me) has it easier.
          </p>
          <p className="section-text" style={{ marginTop: '1rem' }}>
            Outside of work, I compete in high-level One Piece TCG tournaments, travel for events, and collect prize cards. I'm also an anime and manga person, a lifelong learner (currently taking swim lessons at 30 — never too late), and a newlywed who loves cats.
          </p>
        </section>

        <section id="skills" className="section">
          <h2 className="section-title">Skills &amp; Tech Stack</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Languages</h3>
              <div className="skill-tags">
                <span className="tag">JavaScript</span>
                <span className="tag">TypeScript</span>
                <span className="tag">Python</span>
                <span className="tag">Go</span>
                <span className="tag">Java</span>
                <span className="tag">Bash</span>
                <span className="tag">SQL</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Cloud &amp; Infra</h3>
              <div className="skill-tags">
                <span className="tag">AWS</span>
                <span className="tag">Docker</span>
                <span className="tag">Kubernetes</span>
                <span className="tag">Terraform</span>
                <span className="tag">CI/CD</span>
                <span className="tag">Linux</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>AI &amp; Tools</h3>
              <div className="skill-tags">
                <span className="tag">OpenAI Codex</span>
                <span className="tag">Hermes Agent</span>
                <span className="tag">OpenRouter</span>
                <span className="tag">prompt engineering</span>
                <span className="tag">skill authoring</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Systems</h3>
              <div className="skill-tags">
                <span className="tag">Full-stack</span>
                <span className="tag">DevSecOps</span>
                <span className="tag">SRE</span>
                <span className="tag">distributed systems</span>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <h2 className="section-title">Experience</h2>
          <div className="experience-list">
            <div className="experience-card">
              <div className="experience-header">
                <h3>Senior Software Engineer</h3>
                <span className="experience-date">2025 – Present</span>
              </div>
              <p className="experience-company">Oracle</p>
              <p className="experience-desc">
                Promoted in May 2025 from Software Engineer. Now pivoting the team toward practical AI adoption — using Codex daily, building reusable skills, and automating engineering workflows to reduce toil and accelerate delivery.
              </p>
            </div>

            <div className="experience-card">
              <div className="experience-header">
                <h3>Software Engineer</h3>
                <span className="experience-date">2019 – 2025</span>
              </div>
              <p className="experience-company">Oracle</p>
              <p className="experience-desc">
                SRE and DevSecOps: infrastructure management, security hardening, CI/CD pipelines, keeping large-scale production systems reliable. Deep understanding of the full software delivery lifecycle.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-text">
            I'm always open to new opportunities, interesting conversations, and collaborations.
            Feel free to reach out through any of the channels below.
          </p>
          <div className="contact-links">
            <a href="mailto:bryanrojascs@gmail.com" className="contact-link" aria-label="Email">
              <span className="contact-icon" role="img" aria-label="Email">✉</span>
              bryanrojascs@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/~bryan/" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="LinkedIn">
              <span className="contact-icon">in</span>
              LinkedIn
            </a>
            <a href="https://github.com/Bryan-Rojas" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="GitHub">
              <span className="contact-icon">GH</span>
              GitHub
            </a>
          </div>
        </section>

        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} Bryan Rojas. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
