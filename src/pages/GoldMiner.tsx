import '../styles/Game.css';
import TopNav from '../components/TopNav';
import { useNavigate } from 'react-router-dom';
//import MemoryGameVideo from '../assets/MemoryGame.mp4';

const GoldMinerPage: React.FC = () => {
  const year = new Date().getFullYear();
  const navigate = useNavigate();

  return (
    <div className="Game-root">
      <TopNav />

      <main className="Game-main">
        <div className="Game-container">
          <button className="back-btn" onClick={() => navigate('/projects')}>
            ← Back to Projects
          </button>

          <div className="Game-hero">
            <div className="Game-video-container">
              <video
                className="Game-video"
                autoPlay
                muted
                loop
                controls
              >
                {/* <source src={MemoryGameVideo} type="video/mp4" /> */}
                Your browser doesn't support HTML5 video.
              </video>
            </div>
          </div>

          <section className="Game-overview">
            <h1>Gold Miner</h1>
            <p className="Game-subtitle">
                A classic arcade-style game where players control a miner to dig for gold and treasures while avoiding obstacles.
            </p>
            <div className="Game-meta">
              <span className="status">Completed</span>
              <span className="year">2024</span>
            </div>
          </section>

          <section className="Game-section">
            <div className="section-header">
              <h2>How to Play</h2>
            </div>
            <div className="steps-grid">
              <div className="step-card">
                <div className="step-number">1</div>
                <h3>Start Game</h3>
                <p>The game will begin as soon as you open the game</p>
              </div>
              <div className="step-card-middle">
                <div className="step-number">2</div>
                <h3>Control the Miner</h3>
                <p>By Clicking anywhere on the screen, you can control the miner's claw and dig up gold and treasures.</p>
              </div>
              <div className="step-card">
                <div className="step-number">3</div>
                <h3>Test Your Skills</h3>
                <p>Challenge yourself to dig up as much gold and treasures as possible without hitting any obstacles and beat the aim score without running out of time.</p>
              </div>
            </div>
          </section>

          <section className="Game-section">
            <div className="section-header">
              <h2>Features</h2>
            </div>
            <div className="features-list">
              <div className="feature-card">
                <div className="feature-icon">📊</div>
                <h3>Score System</h3>
                <p>Earn points based on the amount of gold and treasures collected and the time taken to complete each level.</p>
              </div>
              <div className="feature-card-middle">
                <div className="feature-icon">🏆</div>
                <h3>Aim</h3>
                <p>Beat the aim score for each level to unlock new challenges.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🎯</div>
                <h3>Difficulty</h3>
                <p>The difficulty level increases with each game, challenging your memory skills progressively.</p>
              </div>
            </div>
          </section>

          <section className="Game-section">
            <div className="section-header">
              <h2>Tech Stack</h2>
            </div>
            <div className="tech-stack">
              <div className="tech-category">
                <h3>Frontend</h3>
                <div className="tech-tags">
                  <span className="tech-tag">PyGame</span>
                </div>
              </div>
              <div className="tech-category">
                <h3>Tools</h3>
                <div className="tech-tags">
                  <span className="tech-tag">Python</span>
                </div>
              </div>
            </div>
          </section>

          <section className="Game-stats">
            <h2>Game Statistics</h2>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-value">1500</div>
                <div className="stat-label">Aim Score</div>
              </div>
              <div className="stat-item-middle">
                <div className="stat-value">Set individually</div>
                <div className="stat-label">Difficulty Levels</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">∞</div>
                <div className="stat-label">Replayability</div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="page-footer">© {year} Jinyoung Kim</footer>
    </div>
  );
};

export default GoldMinerPage;
