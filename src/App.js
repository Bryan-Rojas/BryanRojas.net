import React from 'react';
import './App.css';
import Selfie from './components/Image';
import Description from './components/Description';
import Buttons from './components/ResumeButton';
import { IconMail, IconBrandLinkedin, IconBrandGithub } from './components/icons/TablerIcons';

function App() {
  return (
    <div className="App">
      <div className="container">
        <section className="hero">
          <Selfie />
          <Description />
          <Buttons />
        </section>

        <section id="about" className="section section-animate">
          <div className="section-line"></div>
          <h2 className="section-title">About Me</h2>
          <p className="section-text">👋 Hey, I'm Bryan! — Senior Software Engineer at Oracle with a background spanning SRE, DevSecOps, cloud infrastructure, and platform engineering.</p>
          <p className="section-text">For the past several years I've been building and owning production systems at scale: CI/CD pipelines, security hardening, observability, incident response, and the infrastructure that keeps services reliable when it matters most.</p>
          <p className="section-text">Lately, my focus has shifted toward AI engineering and developer productivity. I build agent-based systems, MCP integrations, and automation tools powered by OpenAI, Hermes-Agent, OpenRouter, and local models. My favorite work lives at the intersection of infrastructure and AI — turning repetitive, manual workflows into systems that can think, retrieve, and act autonomously.</p>
          <p className="section-text">🔧 I'm a builder and optimizer at heart. Whether it's Terraform, Cloud, Python, JavaScript, agent orchestration, or personal knowledge systems — if something can be improved, I'm probably already tinkering with it. I care as much about developer experience and long-term maintainability as I do about shipping.</p>
          <p className="section-text">🎮 Outside of work, I compete in high-level One Piece TCG tournaments and travel to events — the grind doesn't stop at the keyboard. I'm a lifelong anime & manga nerd, a constant learner, and I recently started swim lessons at 30 because it's never too late to pick up something new. 💍 Recently married. 🐱 Obsessed with cats.</p>
        </section>

        <section id="skills" className="section section-animate">
          <div className="section-line"></div>
          <h2 className="section-title">Skills &amp; Tech Stack</h2>
          <p className="section-text" style={{ marginBottom: '0.5rem' }}>
            Jack of all trades — not claiming expert in any single thing, but I pick up new stacks fast.
          </p>
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
                <span className="tag">SRE</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>AI &amp; Automation</h3>
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
                <span className="tag">distributed systems</span>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section section-animate">
          <div className="section-line"></div>
          <h2 className="section-title">Experience</h2>
          <div className="experience-list">
            <div className="experience-card">
              <div className="experience-header">
                <h3>Senior Software Engineer</h3>
                <span className="experience-date">2025 – Present</span>
              </div>
              <p className="experience-company">Oracle</p>
              <p className="experience-desc">
                Promoted May 2025. Leading the team's shift toward practical AI adoption — integrating Codex into daily workflows, creating reusable agent skills, and automating repetitive engineering tasks to reduce toil and speed up delivery.
              </p>
            </div>

            <div className="experience-card">
              <div className="experience-header">
                <h3>Software Engineer</h3>
                <span className="experience-date">2019 – 2025</span>
              </div>
              <p className="experience-company">Oracle</p>
              <p className="experience-desc">
                SRE and DevSecOps: managed cloud infrastructure, hardened security posture, built and maintained CI/CD pipelines, and maintained production reliability at scale for enterprise systems serving thousands of users.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="section section-animate">
          <div className="section-line"></div>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-text">
            I'm always open to new opportunities, interesting conversations, and collaborations.
            Feel free to reach out through any of the channels below.
          </p>
          <div className="contact-links">
            <a href="mailto:bryanrojascs@gmail.com" className="contact-link" aria-label="Email">
              <span className="contact-icon"><IconMail size={20} /></span>
              Email
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
          <p>© {new Date().getFullYear()} Bryan Rojas. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
