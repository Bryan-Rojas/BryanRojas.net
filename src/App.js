import React, { useState, useEffect } from 'react';
import './App.css';
import Selfie from './components/Image';
import Buttons from './components/ResumeButton';
import TypingSubtitle from './components/TypingSubtitle';
import useScrollAnimations from './hooks/useScrollAnimations';
import { IconMail, IconBrandLinkedin, IconBrandGithub } from './components/icons/TablerIcons';

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

        {/* ===== HERO ===== */}
        <section className="hero">
          <Selfie />
          <h1 className="hero-name">Bryan Rojas</h1>
          <p className="hero-tagline">
            Senior Software Engineer @ Oracle<br />
            <TypingSubtitle prefersReducedMotion={prefersReducedMotion} />
          </p>
          <Buttons />
        </section>

        {/* ===== ABOUT ME ===== */}
        <section id="about" className="section section-animate">
          <div className="section-line section-line-animate"></div>
          <h2 className="section-title">About Me</h2>

          <p className="section-text">👋 Hey, I'm Bryan! — Senior Software Engineer at Oracle with a background spanning SRE, DevSecOps, cloud infrastructure, and platform engineering.</p>

          <p className="section-text">For the past several years I've been building and owning production systems at scale: CI/CD pipelines, security hardening, observability, incident response, and the infrastructure that keeps services reliable when it matters most.</p>

          <p className="section-text">Lately, my focus has shifted toward AI engineering and developer productivity. I build agent-based systems, MCP integrations, and automation tools powered by OpenAI, Hermes-Agent, OpenRouter, and local models. My favorite work lives at the intersection of infrastructure and AI — turning repetitive, manual workflows into systems that can think, retrieve, and act autonomously.</p>

          <p className="section-text">🔧 I'm a builder and optimizer at heart. Whether it's Terraform, Cloud, Python, JavaScript, agent orchestration, or personal knowledge systems — if something can be improved, I'm probably already tinkering with it. I care as much about developer experience and long-term maintainability as I do about shipping.</p>

          <p className="section-text">🎮 Outside of work, I compete in high-level One Piece TCG tournaments and travel to events — the grind doesn't stop at the keyboard. I'm a lifelong anime & manga nerd, a constant learner, and I recently started swim lessons at 30 because it's never too late to pick up something new. 💍 Recently married. 🐱 Obsessed with cats.</p>
        </section>

        {/* ===== SKILLS ===== */}
        <section id="skills" className="section section-animate">
          <div className="section-line section-line-animate"></div>
          <h2 className="section-title">Skills &amp; Tech Stack</h2>
          <p className="section-text">Jack of all trades — not claiming expert in any single thing, but I pick up new stacks fast.</p>

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

        {/* ===== EXPERIENCE ===== */}
        <section id="experience" className="section section-animate">
          <div className="section-line section-line-animate"></div>
          <h2 className="section-title">Experience</h2>
          <div className="experience-list">
            <div className="experience-card">
              <div className="experience-header">
                <h3>Senior Software Engineer</h3>
                <span className="experience-date">2025 – Present</span>
              </div>
              <p className="experience-company">Oracle</p>
              <p className="experience-desc">Promoted May 2025. Leading the team's shift toward practical AI adoption — integrating Codex into daily workflows, creating reusable agent skills, and automating repetitive engineering tasks to reduce toil and speed up delivery.</p>
            </div>
            <div className="experience-card">
              <div className="experience-header">
                <h3>Software Engineer</h3>
                <span className="experience-date">2019 – 2025</span>
              </div>
              <p className="experience-company">Oracle</p>
              <p className="experience-desc">SRE and DevSecOps: managed cloud infrastructure, hardened security posture, built and maintained CI/CD pipelines, and maintained production reliability at scale for enterprise systems serving thousands of users.</p>
            </div>
          </div>
        </section>

        {/* ===== CONTACT ===== */}
        <section id="contact" className="section section-animate">
          <div className="section-line section-line-animate"></div>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-text">I'm always open to new opportunities, interesting conversations, and collaborations. Feel free to reach out through any of the channels below.</p>
          <div className="contact-links">
            <a href="mailto:bryanrojascs@gmail.com" className="contact-link">
              <IconMail size={18} className="contact-icon" />
              Email
            </a>
            <a href="https://www.linkedin.com/in/~bryan/" target="_blank" rel="noopener noreferrer" className="contact-link">
              <IconBrandLinkedin size={18} className="contact-icon" />
              LinkedIn
            </a>
            <a href="https://github.com/Bryan-Rojas" target="_blank" rel="noopener noreferrer" className="contact-link">
              <IconBrandGithub size={18} className="contact-icon" />
              GitHub
            </a>
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <footer className="footer">
          <p>© {new Date().getFullYear()} Bryan Rojas. All rights reserved.</p>
        </footer>

      </div>
    </div>
  );
}

export default App;

