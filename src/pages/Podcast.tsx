import '../styles/Podcast.css';
import TopNav from '../components/TopNav'
import { useNavigate } from 'react-router-dom';
import PodcastImage from '../assets/Podcast.png';
import PodcastBrowse from '../assets/PodcastBrowse.png';
import PodcastLogin from '../assets/PodcastLogin.png';
import Podcast from '../assets/PodcastPage.png';
import PodcastPlaylist from '../assets/PodcastPlaylist.png';
import PodcastRegister from '../assets/PodcastRegister.png';

const PodcastPage: React.FC = () => {
  const year = new Date().getFullYear();
  const navigate = useNavigate();

  return (
    <div className="Podcast-root">
      <TopNav />

      <main className="Podcast-main">
        <div className="Podcast-container">
          <button className="back-btn" onClick={() => navigate('/projects')}>
            ← Back to Projects
          </button>

          <div className="Podcast-header">
            <div className="Podcast-hero-image">
                <video src={PodcastImage} controls autoPlay muted loop width="100%"/>
            </div>
            <div className="Podcast-header-content">
              <h1>Podcast Web App</h1>
              <p className="Podcast-subtitle">
                A web application that allows users to browse, search, and play podcasts
              </p>
              <div className="Podcast-meta"> 
                <span className="status">Completed</span>
                <span className="year">2024</span>
              </div>
            </div>
          </div>
          <section className="Podcast-section">
            <h2>Tech Stack</h2>
            <div className="tech-stack">
              <div className="tech-category">
                <h3>Backend</h3>
                <div className="tech-tags">
                  <span className="tech-tag">Python(Flask)</span>
                </div>
              </div>
                <div className="tech-category">
                    <h3>Frontend</h3>
                    <div className="tech-tags">
                      <span className="tech-tag">HTML</span>
                      <span className="tech-tag">CSS</span>
                    </div>
                </div>
                <div className="tech-category">
                    <h3>Database</h3>
                    <div className="tech-tags">
                      <span className="tech-tag">SQLite</span>
                    </div>
                </div>
            </div>
          </section> 
          <section className="Podcast-features">
            <h2>Features</h2>
            <div className="feature-item">
                <div className="feature-image">
                    <img src={PodcastImage} alt="Landing Page" />
                </div>
                <div className="feature-description">
                    <h3>Landing Page</h3>
                    <p>Simple landing page with navigation and key information about the podcast web app.</p>
                </div>
                <div className="feature-description">
                    <h3>Register Page</h3>
                    <p>Allow users to create an account with a username and password.</p>
                </div>
                <div className="feature-image">
                    <img src={PodcastRegister} alt="Register Page" />
                </div>
                <div className="feature-image">
                    <img src={PodcastLogin} alt="Login Page" />
                </div>
                <div className="feature-description">
                    <h3>Login Page</h3>
                    <p>Allow users to log in with their registered credentials.</p>
                </div>
                <div className="feature-description">
                    <h3>Browse Page</h3>
                    <p>Display a list of available podcasts with search and filter functionality.</p>
                </div>
                <div className="feature-image">
                    <img src={PodcastBrowse} alt="Browse Page" />
                </div>
                <div className="feature-image">
                    <img src={PodcastPlaylist} alt="Playlist Page" />
                </div>
                <div className="feature-description">
                    <h3>Playlist Page</h3>
                    <p>Allow users to create and manage their own playlists of favorite podcasts.</p>
                </div>
                <div className="feature-description">
                    <h3>Podcast Detail Page</h3>
                    <p>Display detailed information about a selected podcast, including description, host, and episode list.</p>
                </div>
                <div className="feature-image">
                    <img src={Podcast} alt="Podcast Detail Page" />
                </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="page-footer">© {year} Jinyoung Kim</footer>
    </div>
  );
}

export default PodcastPage