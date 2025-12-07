import '../styles/Stock.css';
import TopNav from '../components/TopNav';
import StockImage from '../assets/StockApp.png';
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
        </div>
      </main>
      <footer className="page-footer">© {year} Jinyoung Kim</footer>
    </div>
  );
}

export default StockPage