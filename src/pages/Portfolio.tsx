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
                <img src={PortfolioImage} alt="Security Page" />
              </div>
              <div className="feature-description">
                <h3>Security</h3>
                <p></p>
              </div>
              <div className="feature-description">
                <h3>Buy & Sell Trading</h3>
                <p>Execute trades with real-time market data. Buy and sell stocks and cryptocurrencies with simulated funds to practice trading strategies without financial risk.</p>
              </div>
              <div className="feature-image">
                <img src={PortfolioImage} alt="Buy/Sell Page" />
              </div>
              <div className="feature-image">
                <img src={PortfolioImage} alt="Portfolio Page" />
              </div>
              <div className="feature-description">
                <h3>Portfolio Management</h3>
                <p>Track your investments with a comprehensive portfolio dashboard. View your holdings, transaction history, and overall performance to make informed trading decisions.</p>
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