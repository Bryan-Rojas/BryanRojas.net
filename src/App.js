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
            I'm a Software Engineer with a passion for building scalable, reliable web applications and distributed systems.
            With experience spanning full-stack development, cloud infrastructure, and team leadership, I enjoy tackling
            complex problems that sit at the intersection of performance and usability. I care deeply about writing clean,
            maintainable code and helping the people around me grow.
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
                <span className="tag">SQL</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Frontend</h3>
              <div className="skill-tags">
                <span className="tag">React</span>
                <span className="tag">Next.js</span>
                <span className="tag">Vue.js</span>
                <span className="tag">CSS / Sass</span>
                <span className="tag">Tailwind CSS</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <div className="skill-tags">
                <span className="tag">Node.js</span>
                <span className="tag">Express</span>
                <span className="tag">Django</span>
                <span className="tag">REST APIs</span>
                <span className="tag">GraphQL</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Cloud &amp; DevOps</h3>
              <div className="skill-tags">
                <span className="tag">AWS</span>
                <span className="tag">Docker</span>
                <span className="tag">Kubernetes</span>
                <span className="tag">Terraform</span>
                <span className="tag">CI/CD</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Data</h3>
              <div className="skill-tags">
                <span className="tag">PostgreSQL</span>
                <span className="tag">MongoDB</span>
                <span className="tag">Redis</span>
                <span className="tag">Elasticsearch</span>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <h2 className="section-title">Experience &amp; Projects</h2>
          <div className="experience-list">
            <div className="experience-card">
              <div className="experience-header">
                <h3>Senior Software Engineer</h3>
                <span className="experience-date">2022 – Present</span>
              </div>
              <p className="experience-company">Independent Cloud Application Development &amp; Consulting</p>
              <p className="experience-desc">
                Building and deploying cloud-native applications on AWS using modern tooling
                (Docker, Kubernetes, Terraform). Leading end-to-end development from architecture
                design to production delivery for clients across multiple industries.
              </p>
            </div>

            <div className="experience-card">
              <div className="experience-header">
                <h3>Software Engineer</h3>
                <span className="experience-date">2019 – 2022</span>
              </div>
              <p className="experience-company">Enterprise Web Solutions</p>
              <p className="experience-desc">
                Developed and maintained large-scale web applications serving millions of users.
                Implemented microservices architecture with Node.js and Python, reducing system
                latency by 40%. Mentored junior engineers and led code review processes.
              </p>
            </div>

            <div className="experience-card">
              <div className="experience-header">
                <h3>Open Source Contributor</h3>
                <span className="experience-date">Ongoing</span>
              </div>
              <p className="experience-company">Various Projects</p>
              <p className="experience-desc">
                Active contributor to open-source projects in the React and DevOps ecosystems.
                Built developer tools and CLI utilities that have been adopted by hundreds of engineers.
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
            <a href="mailto:bryan@bryanrojas.net" className="contact-link" aria-label="Email">
              <span className="contact-icon" role="img" aria-label="Email">✉</span>
              bryan@bryanrojas.net
            </a>
            <a href="https://www.linkedin.com/in/~bryan/" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="LinkedIn">
              <span className="contact-icon">in</span>
              LinkedIn
            </a>
            <a href="https://github.com/bryan-rojas" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="GitHub">
              <span className="contact-icon">GH</span>
              GitHub
            </a>
            <a href="https://res.cloudinary.com/dzwtspghi/image/upload/v1644435651/Bryan_Rojas_-_Resume_-_2022_wdieln.pdf" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="Resume">
              <span className="contact-icon" role="img" aria-label="Resume">📄</span>
              Resume
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
