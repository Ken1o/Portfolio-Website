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
        </div>
      </main>
      <footer className="page-footer">© {year} Jinyoung Kim</footer>
    </div>
  );
}

export default StockPage