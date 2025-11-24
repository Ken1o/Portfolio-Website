import TopNav from '../components/TopNav'
import '../styles/PageStyles.css'

const AboutPage: React.FC = () => {
  const year = new Date().getFullYear()

  return (
    <div className="page-root">
      <TopNav />
      
      <main className="page-main">
        <div className="page-container">
          <h1>About Me</h1>
          
          <section className="about-section">
            <h2>Who I Am</h2>
            <p>
            </p>
          </section>

          <section className="about-section">
            <h2>My Skills</h2>
            <div className="skills-grid">
              <div className="skill-card">
                <h3>Frontend</h3>
                <p></p>
              </div>
              <div className="skill-card">
                <h3>Backend</h3>
                <p></p>
              </div>
              <div className="skill-card">
                <h3>Tools</h3>
                <p></p>
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
