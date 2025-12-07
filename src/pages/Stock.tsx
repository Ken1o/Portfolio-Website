import '../styles/Stock.css';
import TopNav from '../components/TopNav';
import StockImage from '../assets/Stock.png';
import { useNavigate } from 'react-router-dom';

const StockPage: React.FC = () => {
  const year = new Date().getFullYear();
  const navigate = useNavigate();

  return (
    <div className="Stock-root">
      <TopNav />

      <main className="Stock-main">
        <div className="Stock-container">
          <button className="back-btn" onClick={() => navigate('/projects')}>
            ← Back to Projects
          </button>

          <div className="Stock-header">
            <div className="Stock-hero-image">
                <img src={StockImage} alt="Stock/Crypto Trading Simulator" />
            </div>
            <div className="Stock-header-content">
              <h1>Stock/Crypto Trading Simulator</h1>
              <p className="Stock-subtitle">
                A web application that simulates stock and cryptocurrency trading using real market data
              </p>
              <div className="Stock-meta">
                <span className="status">OnGoing</span>
                <span className="year">2025</span>
              </div>
            </div>
          </div>
          <section className="Stock-section">
            <h2>Introduction</h2>
            <p> </p>
          </section>
          <section className="Stock-section">
            <h2>Tech Stack</h2>
            <div className="tech-stack">
              <div className="tech-category">
                <h3>Backend</h3>
                <div className="tech-tags">
                  <span className="tech-tag">Go</span>
                  <span className="tech-tag">Redis</span>
                </div>
              </div>
                <div className="tech-category">
                    <h3>Frontend</h3>
                    <div className="tech-tags">
                      <span className="tech-tag">React</span>
                    </div>
                </div>
                <div className="tech-category">
                    <h3>APIs</h3>
                    <div className="tech-tags">
                      <span className="tech-tag">Finnhub API</span>
                      <span className="tech-tag">Yahoo Finance API</span>
                    </div>
                </div>
            </div>
          </section>  
        </div>
      </main>
      <footer className="page-footer">© {year} Jinyoung Kim</footer>
    </div>
  );
}

export default StockPage