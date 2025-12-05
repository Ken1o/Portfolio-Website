import TopNav from '../components/TopNav'
import '../styles/GenAI.css'
import GenAIImage from '../assets/GenAI.png'
import { useNavigate } from 'react-router-dom'

const GenAIPage: React.FC = () => {
  const year = new Date().getFullYear()
  const navigate = useNavigate()

  return (
    <div className="GenAI-root">
      <TopNav />

      <main className="GenAI-main">
        <div className="GenAI-container">
          <button className="back-btn" onClick={() => navigate('/projects')}>
            ← Back to Projects
          </button>

          <div className="project-header">
            <div className="project-hero-image">
              <img src={GenAIImage} alt="Generative AI Playground" />
            </div>
            <div className="project-header-content">
              <h1>Generative AI Playground</h1>
              <p className="project-subtitle">
                A full-stack web application for experimenting with various AI models and APIs
              </p>
              <div className="project-meta">
                <span className="status">Completed</span>
                <span className="year">2024</span>
              </div>
            </div>
          </div>

          <section className="project-section">
            <h2>Overview</h2>
            <p>
              
            </p>
          </section>

          <section className="project-section">
            <h2>Features</h2>
            <ul className="features-list">
              <li>Multi-model support for different AI providers</li>
              <li>Real-time streaming responses</li>
              <li>User authentication and project management</li>
              <li>API request/response history</li>
              <li>Customizable parameters for each model</li>
              <li>Docker containerization for easy deployment</li>
            </ul>
          </section>

          <section className="project-section">
            <h2>Tech Stack</h2>
            <div className="tech-stack">
              <div className="tech-category">
                <h3>Backend</h3>
                <div className="tech-tags">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">PostgreSQL</span>
                  <span className="tech-tag">Docker</span>
                  <span className="tech-tag">AWS Bedrock</span>
                  <span className="tech-tag">Caddy</span>
                </div>
              </div>
              <div className="tech-category">
                <h3>Frontend</h3>
                <div className="tech-tags">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">TypeScript</span>
                  <span className="tech-tag">CSS</span>
                  <span className="tech-tag">Node.js</span>
                </div>
              </div>
              <div className="tech-category">
                <h3>Infrastructure</h3>
                <div className="tech-tags">
                  <span className="tech-tag">Docker</span>
                  <span className="tech-tag">AWS Bedrock</span>
                  <span className="tech-tag">Caddy</span>
                </div>
              </div>
            </div>
          </section>

          <section className="project-section">
            <h2>Challenges & Solutions</h2>
            <p>
              
            </p>
          </section>

          <section className="project-section">
            <h2>Learnings</h2>
            <p>
              
            </p>
          </section>

          <section className="project-section cta-section">
            <h2>Want to see more?</h2>
            <p>Check out my other projects or get in touch to discuss this work further.</p>
            <div className="cta-buttons">
              <button className="btn primary" onClick={() => navigate('/projects')}>
                View All Projects
              </button>
              <button className="btn" onClick={() => navigate('/about')}>
                About Me
              </button>
            </div>
          </section>
        </div>
      </main>

      <footer className="page-footer">© {year} Jinyoung Kim</footer>
    </div>
  )
}

export default GenAIPage
