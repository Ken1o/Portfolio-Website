import TopNav from '../components/TopNav'
import '../styles/AboutPage.css'

const AboutPage: React.FC = () => {
  const year = new Date().getFullYear()

  return (
    <div className="page-root">
      <TopNav />
      
      <main className="page-main">
        <div className="page-container">    
          <section className="aboutme-section">
            <div className="aboutme-content">
              <div className="personal-photo">
                <img src="https://via.placeholder.com/300x400?text=Your+Photo" alt="Your photo" />
              </div>
              <div className="intro-text">
                <h3>Who I Am</h3>
                <p> {/* add introduction */}
                  hello
                </p>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2>My Skills</h2>
            <div className="skills-grid">
              <div className="skill-card">
                <h3>💻 Frontend</h3>
                <div className="skill-tags">
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">TypeScript</span>
                  <span className="skill-tag">CSS</span>
                  <span className="skill-tag">HTML</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">Vite</span>
                </div>
              </div>
              <div className="skill-card">
                <h3>⚙️ Backend</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">Go</span>
                  <span className="skill-tag">PostgreSQL</span>
                  <span className="skill-tag">Docker</span>
                  <span className="skill-tag">REST APIs</span>
                </div>
              </div>
              <div className="skill-card">
                <h3>🛠️ Tools & More</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Git</span>
                  <span className="skill-tag">AWS</span>
                  <span className="skill-tag">Figma</span>
                  <span className="skill-tag">VS Code</span>
                  <span className="skill-tag">Redis</span>
                </div>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2>My Journey</h2>
            <p>

            </p>
          </section>

          <section className="about-section">
            <h2>What I'm Looking For</h2>
            <p>

            </p>
          </section>
        </div>
      </main>

      <footer className="page-footer">© {year} Jinyoung Kim</footer>
    </div>
  )
}

export default AboutPage
