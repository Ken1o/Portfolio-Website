import '../styles/Movie.css';
import TopNav from '../components/TopNav'
import { useNavigate } from 'react-router-dom'

const MoviePage: React.FC = () => {
  const year = new Date().getFullYear()
  const navigate = useNavigate()

  return (
    <div className="Movie-root">
      <TopNav />

      <main className="Movie-main">
        <div className="Movie-container">
          <button className="back-btn" onClick={() => navigate('/projects')}>
            ← Back to Projects
          </button>

          <div className="Movie-header">
            <div className="Movie-header-content">
              <h1>Movie Recommendation System</h1>
              <p className="Movie-subtitle">
                A application for recommending movies based on user preferences
              </p>
              <div className="Movie-meta">
                <span className="status">Completed</span>
                <span className="year">2024</span>
              </div>
            </div>
          </div>

          <section className="Movie-section">
            <h2>Overview</h2>
            <p>
                Developed a Movie Recommendation System using a dataset of 5,000+ movies to generate intelligent film suggestions through machine learning techniques. The project implements popularity-based, content-based, and personalized collaborative filtering models (using the Surprise library) to recommend 10 relevant movies based on user preferences or selected titles.
            </p>
            <p>
              Text analysis was applied to features such as genre, director, and cast to enhance similarity matching. The system was deployed as an interactive web application using Streamlit, displaying real-time recommendations with multilingual movie posters for an engaging user experience.
            </p>
            <p>
              
            </p>
          </section>

          <section className="Movie-section">
            <h2>Features</h2>
            <ul className="features-list">
              <li>
                Recommends 10 movies based on selected title or user preferences
              </li>
              <li>
                Popularity-based recommendation (top-rated / most liked movies)
              </li>
              <li>
                Content-based filtering using genre, director, and cast similarity
              </li>
              <li>
                Personalized recommendations using collaborative filtering (Surprise library)
              </li>
              <li>
                Text analysis applied to movie metadata for similarity computation
              </li>
              <li>
                Supports multilingual movie data and poster displays
              </li>
              <li>
                Interactive web application built with Streamlit
              </li>
              <li>
                Utilizes a dataset of 5,000+ movies for training and analysis
              </li>
            </ul>
          </section>

          <section className="Movie-section">
            <h2>Tech Stack</h2>
            <div className="tech-stack">
              <div className="tech-category">
                <h3>Backend</h3>
                <div className="tech-tags">
                  <span className="tech-tag">Python</span>
                </div>
              </div>
              <div className="tech-category">
                <h3>Frontend</h3>
                <div className="tech-tags">
                  <span className="tech-tag">Streamlit</span>
                </div>
              </div>
              <div className="tech-category">
                <h3>Infrastructure</h3>
                <div className="tech-tags">
                  <span className="tech-tag">TMDB API</span>
                </div>
              </div>
            </div>
          </section>

          <section className="Movie-section">
            <h2>Challenges & Solutions</h2>
            <p>
              
            </p>
          </section>

          <section className="Movie-section">
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

export default MoviePage
