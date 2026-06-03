import React, { useEffect, useState } from 'react';
import './App.css';
import Selfie from './components/Image';
import Description from './components/Description';
import Buttons from './components/ResumeButton';
import { IconMail, IconBrandLinkedin, IconBrandGithub } from './components/icons/TablerIcons';
import useScrollAnimations from './hooks/useScrollAnimations';

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return prefersReducedMotion;
}

function App() {
  const prefersReducedMotion = usePrefersReducedMotion();
  useScrollAnimations(prefersReducedMotion);

  return (
    <div className="App">
      <div className="container">
        <section className="hero">
          <Selfie />
          <Description />
          <Buttons />
        </section>

        <div className="section-line" role="presentation"></div>
        <section id="about" className="section section-animate">
          <h2 className="section-title">About Me</h2>
          <p className="section-text">
            I'm a Senior Software Engineer at Oracle, where I spent several years in SRE and DevSecOps — on-call rotations, security hardening, CI/CD pipelines, keeping production alive. Now I'm pivoting hard toward AI adoption: using Codex daily, building reusable skills, and automating engineering workflows to reduce toil.
          </p>
          <p className="section-text" style={{ marginTop: '1.25rem' }}>
            I'm an early adopter by nature. I went through a massive setup cycle configuring Hermes Agent + OpenRouter + Obsidian before I even started producing real work with it — I can't leave a tool alone until it's exactly how I want it.
          </p>
          <p className="section-text" style={{ marginTop: '1.25rem' }}>
            Outside of work, I compete in high-level One Piece TCG tournaments and travel for events. I love anime, manga, coding, tech, and learning — I'm currently taking swim lessons at 30 because I never learned as a kid. Recently married, and I love cats.
          </p>
        </section>

        <div className="section-line" role="presentation"></div>
        <section id="skills" className="section section-animate">
          <h2 className="section-title">Skills &amp; Tech Stack</h2>
          <p className="section-text" style={{ marginBottom: '0.5rem' }}>
            Jack of all trades — not claiming expert in any single thing, but I pick up new stacks fast.
          </p>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Languages</h3>
              <div className="skill-tags">
                <span className="tag tag-animate">JavaScript</span>
                <span className="tag tag-animate">TypeScript</span>
                <span className="tag tag-animate">Python</span>
                <span className="tag tag-animate">Go</span>
                <span className="tag tag-animate">Java</span>
                <span className="tag tag-animate">Bash</span>
                <span className="tag tag-animate">SQL</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Cloud &amp; Infra</h3>
              <div className="skill-tags">
                <span className="tag tag-animate">AWS</span>
                <span className="tag tag-animate">Docker</span>
                <span className="tag tag-animate">Kubernetes</span>
                <span className="tag tag-animate">Terraform</span>
                <span className="tag tag-animate">CI/CD</span>
                <span className="tag tag-animate">Linux</span>
                <span className="tag tag-animate">SRE</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>AI &amp; Automation</h3>
              <div className="skill-tags">
                <span className="tag tag-animate">OpenAI Codex</span>
                <span className="tag tag-animate">Hermes Agent</span>
                <span className="tag tag-animate">OpenRouter</span>
                <span className="tag tag-animate">prompt engineering</span>
                <span className="tag tag-animate">skill authoring</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Systems</h3>
              <div className="skill-tags">
                <span className="tag tag-animate">Full-stack</span>
                <span className="tag tag-animate">DevSecOps</span>
                <span className="tag tag-animate">distributed systems</span>
              </div>
            </div>
          </div>
        </section>

        <div className="section-line" role="presentation"></div>
        <section id="experience" className="section section-animate">
          <h2 className="section-title">Experience</h2>
          <div className="experience-list">
            <div className="experience-card">
              <div className="experience-header">
                <h3>Senior Software Engineer</h3>
                <span className="experience-date">2025 - Present</span>
              </div>
              <p className="experience-company">Oracle</p>
              <p className="experience-desc">
                Promoted May 2025. Pivoting the team toward practical AI adoption — daily Codex usage, reusable skills, workflow automation.
              </p>
            </div>

            <div className="experience-card">
              <div className="experience-header">
                <h3>Software Engineer</h3>
                <span className="experience-date">2019 - 2025</span>
              </div>
              <p className="experience-company">Oracle</p>
              <p className="experience-desc">
                SRE and DevSecOps: infrastructure, security hardening, CI/CD, production reliability at scale.
              </p>
            </div>
          </div>
        </section>

        <div className="section-line" role="presentation"></div>
        <section id="contact" className="section section-animate">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-text">
            I'm always open to new opportunities, interesting conversations, and collaborations.
            Feel free to reach out through any of the channels below.
          </p>
          <div className="contact-links">
            <a href="mailto:bryanrojascs@gmail.com" className="contact-link" aria-label="Email">
              <span className="contact-icon"><IconMail size={20} /></span>
              bryanrojascs@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/~bryan/" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="LinkedIn">
              <span className="contact-icon"><IconBrandLinkedin size={20} /></span>
              LinkedIn
            </a>
            <a href="https://github.com/Bryan-Rojas" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="GitHub">
              <span className="contact-icon"><IconBrandGithub size={20} /></span>
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
