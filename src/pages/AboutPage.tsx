import TopNav from '../components/TopNav'
import '../styles/AboutPage.css'

const AboutPage: React.FC = () => {
  const year = new Date().getFullYear()

  return (
    <div className="page-root">
      <TopNav />
      
      <main className="page-main">
        <div className="page-container">
          <section className="hero-section">
            <span className="section-label">PERSONAL INTERESTS</span>
            <h1 className="hero-title">ABOUT ME</h1>
            <p className="hero-subtitle">Things that interest me beyond code.</p>
          </section>

          <section className="interest-section">
            <div className="section-number">01</div>
            <h2 className="section-heading">HOBBIES</h2>
            
            <div className="interest-grid">
              <div className="interest-category">
                <h3>🎮 Gaming</h3>
                <ul>
                  <li>Competitive gaming & esports</li>
                  <li>Strategy games</li>
                </ul>
              </div>
              <div className="interest-category">
                <h3>🎨 Creative</h3>
                <ul>
                  <li>Photography</li>
                  <li>Pencil Drawing</li>
                </ul>
              </div>
              <div className="interest-category">
                <h3>🎵 Sports</h3>
                <ul>
                  <li>Football</li>
                  <li>Badminton</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="interest-section">
            <div className="section-number">02</div>
            <h2 className="section-heading">LIFESTYLE</h2>
            
            <div className="lifestyle-grid">
              <div className="lifestyle-category">
                <h3>💪 Fitness</h3>
                <p>Regular gym sessions, hiking, and outdoor activities keep me active and energized.</p>
              </div>
              <div className="lifestyle-category">
                <h3>☕ Daily Routine</h3>
                <p></p>
              </div>
              <div className="lifestyle-category">
                <h3>🌍 Travel</h3>
                <p>Exploring new places, experiencing different cultures, and discovering local tech communities worldwide.</p>
              </div>
              <div className="lifestyle-category">
                <h3>🍕 Food</h3>
                <p>Always up for trying new restaurants and cuisines. Food brings people together and creates memories.</p>
              </div>
            </div>
          </section>

          <section className="interest-section">
            <div className="section-number">03</div>
            <h2 className="section-heading">EXTRACURRICULAR ACTIVITIES</h2>
            
            <div className="activities-grid">
              <div className="activity-item">
                <h3>📖 Projects</h3>
                <p>Side projects, portfolio building, experimental applications</p>
              </div>
              <div className="activity-item">
                <h3>🎓 Growth</h3>
                <p>Certifications, workshops, continuous learning in tech</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="page-footer">© {year} Jinyoung Kim</footer>
    </div>
  )
}

export default AboutPage
