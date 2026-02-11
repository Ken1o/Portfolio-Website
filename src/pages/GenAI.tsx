import TopNav from '../components/TopNav'
import '../styles/GenAI.css'
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

          <div className="GenAI-header">
            <div className="GenAI-header-content">
              <h1>Generative AI Playground</h1>
              <p className="GenAI-subtitle">
                A full-stack web application for experimenting with various AI models and APIs
              </p>
              <div className="GenAI-meta">
                <span className="status">Completed</span>
                <span className="year">2025</span>
              </div>
            </div>
          </div>

          <section className="GenAI-section">
            <h2>Overview</h2>
            <p>
              Generative AI Playground is a web-based experimentation platform designed to help users explore, compare, and understand generative AI models within a single unified interface. The platform allows users to test multiple models from different providers side by side, adjust parameters such as temperature and token limits, and observe how these changes affect model outputs in real time—making it an effective tool for learning prompt engineering and model behaviour.
            </p>
            <p>
              Built with a React and TypeScript frontend and a FastAPI backend, the system integrates AWS Bedrock for multi-model access, AWS Cognito for secure authentication, Stripe for usage-based wallet payments, and PostgreSQL for transaction tracking. A strong emphasis was placed on usability, security, and privacy, with features such as temporary chat histories, synchronized multi-model prompting, and transparent cost estimation.
            </p>
            <p>
              Overall, the project demonstrates a scalable, production-oriented architecture and delivers a user-centric AI sandbox that demystifies generative AI, supports responsible usage, and enables informed model selection for developers, educators, and learners.
            </p>
          </section>

          <section className="GenAI-section">
            <h2>Features</h2>
            <ul className="features-list">
              <li></li>
            </ul>
          </section>

          <section className="GenAI-section">
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

          <section className="GenAI-section">
            <h2>Challenges & Solutions</h2>
            <p>
              
            </p>
          </section>

          <section className="GenAI-section">
            <h2>Learnings</h2>
            <p>
              
            </p>
          </section>
        </div>
      </main>

      <footer className="page-footer">© {year} Jinyoung Kim</footer>
    </div>
  )
}

export default GenAIPage
