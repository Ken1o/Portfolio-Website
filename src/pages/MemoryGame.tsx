import '../styles/MemoryGame.css';
import TopNav from '../components/TopNav';
import { useNavigate } from 'react-router-dom';
//import MemoryGameVideo from '../assets/MemoryGame.mp4';

const MemoryGamePage: React.FC = () => {
  const year = new Date().getFullYear();
  const navigate = useNavigate();

  return (
    <div className="MemoryGame-root">
      <TopNav />

      <main className="MemoryGame-main">
        <div className="MemoryGame-container">
          <button className="back-btn" onClick={() => navigate('/projects')}>
            ← Back to Projects
          </button>

          <div className="MemoryGame-hero">
            <div className="MemoryGame-video-container">
              <video
                className="MemoryGame-video"
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

          <section className="MemoryGame-overview">
            <h1>Memory Game</h1>
            <p className="MemoryGame-subtitle">
              Test your memory skills with this interactive card-matching game. 
              Flip cards to find matching pairs and challenge yourself to complete the game in record time!
            </p>
            <div className="MemoryGame-meta">
              <span className="status">Completed</span>
              <span className="year">2024</span>
            </div>
          </section>

          <section className="MemoryGame-section">
            <div className="section-header">
              <h2>How to Play</h2>
            </div>
            <div className="steps-grid">
              <div className="step-card">
                <div className="step-number">1</div>
                <h3>Start Game</h3>
                <p>Click the start button to begin. Cards will appear on the screen for few seconds.</p>
              </div>
              <div className="step-card">
                <div className="step-number">2</div>
                <h3>Observe Pattern</h3>
                <p>Watch as cards reveal in order from 1 to the maximum number for your level.</p>
              </div>
              <div className="step-card">
                <div className="step-number">3</div>
                <h3>Test Your Memory</h3>
                <p>Complete the sequence correctly by clicking the cards in the same order they appeared. Try to beat your best score.</p>
              </div>
            </div>
          </section>

          <section className="MemoryGame-section">
            <div className="section-header">
              <h2>Features</h2>
            </div>
            <div className="features-list">
              <div className="feature-card">
                <div className="feature-icon">📊</div>
                <h3>Score System</h3>
                <p>Earn points based on speed and accuracy. Compete with friends!</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🏆</div>
                <h3>Leaderboard</h3>
                <p>View top scores and compete with other players online.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🎯</div>
                <h3>Difficulty</h3>
                <p>The difficulty level increases with each game, challenging your memory skills progressively.</p>
              </div>
            </div>
          </section>

          <section className="MemoryGame-section">
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

          <section className="MemoryGame-stats">
            <h2>Game Statistics</h2>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-value">0</div>
                <div className="stat-label">Cards</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">1 - 20</div>
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

export default MemoryGamePage;
