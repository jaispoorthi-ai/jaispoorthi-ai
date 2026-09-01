import "./App.css";

function App() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo-area">
          <div className="logo">NJ</div>
          <span>Jai Spoorthi</span>
        </div>

        <nav>
          <button onClick={() => scrollToSection("home")}>Home</button>
          <button onClick={() => scrollToSection("about")}>About</button>
          <button onClick={() => scrollToSection("skills")}>Skills</button>
          <button onClick={() => scrollToSection("projects")}>Projects</button>
          <button onClick={() => scrollToSection("education")}>Education</button>
          <button onClick={() => scrollToSection("certifications")}>
            Certifications
          </button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
        </nav>
      </header>

      {/* HOME */}
      <section id="home" className="hero">

        <div className="hero-content">

          <div className="badge">
            ✦ B.Tech CSE – AI & Data Science Student
          </div>

          <h1>Jai Spoorthi</h1>

          <h2>AI &amp; Data Science</h2>

          <p className="tagline">
            Curious mind. Continuous learner. Future technology professional.
          </p>

          <p className="intro">
            I'm exploring Artificial Intelligence, Data Science,
            Machine Learning, Cybersecurity and emerging technologies.
          </p>

          <div className="social-buttons">
            <a
              href="https://github.com/jaispoorthi-ai"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:spoorthin473@gmail.com">
              Email
            </a>
          </div>

          <div className="hero-buttons">
            <button onClick={() => scrollToSection("projects")}>
              View My Projects →
            </button>

            <button onClick={() => scrollToSection("contact")}>
              Let's Connect
            </button>
          </div>

        </div>

        {/* PHOTO */}
        <div className="hero-photo">
          <div className="photo-frame">
            <img src="/image.png" alt="Jai Spoorthi" />
          </div>
        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <p className="section-label">ABOUT ME</p>
        <h2>Curious. Learning. Building.</h2>

        <p>
          I'm N. Jai Spoorthi, currently pursuing my B.Tech in Computer
          Science & Engineering – Artificial Intelligence & Data Science
          at REVA University, Bengaluru (2025–2029).
        </p>

        <p>
          My interest in technology started with a simple question:
          How can we use technology to solve problems that actually matter?
        </p>

        <p>
          Since then, I've been exploring programming, Artificial
          Intelligence, Data Science and emerging technologies while
          building my foundation step by step.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <p className="section-label">SKILLS</p>
        <h2>What I'm Learning</h2>

        <div className="skills-grid">
          <div>Python</div>
          <div>C Programming</div>
          <div>Artificial Intelligence</div>
          <div>Machine Learning</div>
          <div>Data Science</div>
          <div>SQL & DBMS</div>
          <div>Data Structures & Algorithms</div>
          <div>Git & GitHub</div>
          <div>Cybersecurity</div>
          <div>IoT</div>
          <div>Software Development</div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <p className="section-label">PROJECTS</p>
        <h2>Projects &amp; Exploration</h2>

        <div className="project-grid">

          <div className="project-card">
            <h3>AI Security & Ride Safety Helmet</h3>
            <p>
              Exploring how AI, IoT, sensors and embedded technologies
              can contribute to safer riding.
            </p>
          </div>

          <div className="project-card">
            <h3>AI in Cybersecurity</h3>
            <p>
              Exploring how Artificial Intelligence can support
              cybersecurity and threat detection.
            </p>
          </div>

          <div className="project-card">
            <h3>Smart Dustbin</h3>
            <p>
              A smart waste-management concept exploring IoT,
              sensors and automation.
            </p>
          </div>

          <div className="project-card">
            <h3>Personal Portfolio Website</h3>
            <p>
              A personal website showcasing my learning journey,
              projects, certifications and technical growth.
            </p>
          </div>

        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="section">
        <p className="section-label">EDUCATION</p>
        <h2>My Education</h2>

        <div className="education-card">
          <h3>B.Tech – CSE (AI & Data Science)</h3>
          <p>REVA University, Bengaluru</p>
          <span>2025 – 2029</span>
        </div>

        <div className="education-card">
          <h3>11th &amp; 12th</h3>
          <p>Resonance Junior College, Hyderabad</p>
        </div>

        <div className="education-card">
          <h3>10th</h3>
          <p>Andhra Pradesh</p>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="section">
        <p className="section-label">CERTIFICATIONS</p>
        <h2>My Learning Journey</h2>

        <div className="cert-grid">
          <div>IBM SkillsBuild</div>
          <div>SAP Learning</div>
          <div>Wadhwani Foundation</div>
          <div>Scaler Topics</div>
        </div>

        <p className="cert-text">
          My learning journey includes Python for Data Science,
          Data Analysis, Data Visualization, SAP methodology and
          System Design.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">
        <p className="section-label">CONTACT</p>

        <h2>Let's Connect</h2>

        <p>
          If you're interested in technology, AI, Data Science,
          innovation or learning journeys, I'd be happy to connect
          and learn from each other.
        </p>

        <a
          className="email-button"
          href="mailto:spoorthin473@gmail.com"
        >
          📧 spoorthin473@gmail.com
        </a>

        <p className="phone">
          📱 9686774241
        </p>
      </section>

      {/* FOOTER */}
      <footer>
        <p>
          © 2026 Jai Spoorthi. Built with React.
        </p>

        <p>
          This is just the beginning. 🚀
        </p>
      </footer>

    </div>
  );
}

export default App;