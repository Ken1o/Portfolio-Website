import TopNav from '../components/TopNav'
import '../styles/Portfolio.css'
import { useNavigate } from 'react-router-dom';
import PortfolioImage from '../assets/Portfolio.png';

const PortfolioPage: React.FC = () => {
  const year = new Date().getFullYear();
  const navigate = useNavigate();

  return (
    <div className="Stock-root">
      <TopNav />

      <main className="Portfolio-main">
        <div className="Portfolio-container">
          <button className="back-btn" onClick={() => navigate('/projects')}>
            ← Back to Projects
          </button>

          <div className="Portfolio-header">
            <div className="Portfolio-hero-image">
                <img src={PortfolioImage} alt="Portfolio Website" />
            </div>
            <div className="Portfolio-header-content">
              <h1>Portfolio Website</h1>
              <p className="Portfolio-subtitle">
                A Web Page introducing my projects and skills, showcasing my work and experience in a visually appealing way.
              </p>
              <div className="Portfolio-meta">
                <span className="status">OnGoing</span>
                <span className="year">2026</span>
              </div>
            </div>
          </div>
          <section className="Portfolio-features">
            <h2>Features</h2>
            <div className="feature-item">
              <div className="feature-image">
                <img src={PortfolioImage} alt="Landing Page" />
              </div>
              <div className="feature-description">
                <h3>Landing Page</h3>
                <p>Introduces the website and provides a quick overview of the projects and skills showcased.</p>
              </div>
              <div className="feature-description">
                <h3>Projects Page</h3>
                <p>View all my projects in one place. Each project is described with its technologies, features, and links to live demos or source code.</p>
              </div>
              <div className="feature-image">
                <img src={PortfolioImage} alt="Projects Page" />
              </div>
              <div className="feature-image">
                <img src={PortfolioImage} alt="About Page" />
              </div>
              <div className="feature-description">
                <h3>About Page</h3>
                <p>Learn more about me and my background. Discover my journey, skills, and what drives me to create meaningful projects.</p>
              </div>
              <div className="feature-description">
                <h3>Contact Page</h3>
                <p>Get in touch with me. Whether you have a question, want to collaborate, or just want to say hi, feel free to reach out!</p>
              </div>
              <div className="feature-image">
                <img src={PortfolioImage} alt="Contact Page" />
              </div>
              
            </div>
          </section>
        </div>
      </main>
      <footer className="page-footer">© {year} Jinyoung Kim</footer>
    </div>
  );
}

export default PortfolioPage