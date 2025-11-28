import TopNav from '../components/TopNav'
import '../styles/ProjectsPage.css'
import GenAIImage from '../assets/GenAI.png'
import GoldMiner from '../assets/GoldMiner.png'
import Movie from '../assets/Movie.png'
import Stock from '../assets/Stock.png'

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  link?: string
}

const ProjectsPage: React.FC = () => {
  const year = new Date().getFullYear()

  const projects: Project[] = [
    {
      id: 1,
      title: 'Generative AI Playground',
      description: '',
      image: GenAIImage,
      tags: ["Node.js", "React", "Python", "Docker", "PostgreSQL", "AWS Bedrock", "Caddy"],
      link: '#',
    },
    {
      id: 2,
      title: 'Stock/Crypto Trading Simulator',
      description: '',
      image: Stock,
      tags: ["Go", "React", "Redis", "Finnhub API", "Yahoo Finance API"],
      link: '#',
    },
    {
      id: 3,
      title: 'Movie Recommendation System',
      description: '',
      image: Movie,
      tags: ["Python", "Streamlit", "TMDB API"],
      link: '#',
    },
    {
      id: 4,
      title: 'Podcast Web App',
      description: '',
      image: 'https://via.placeholder.com/400x300?text=Project+4',
      tags: ["Python (Flask)", "HTML", "CSS", "SQLite"],
      link: '#',
    },
    {
      id: 5,
      title: 'Old Arcade Shooting Game',
      description: '',
      image: 'https://via.placeholder.com/400x300?text=Project+5',
      tags: ["Python"],
      link: '#',
    },
    {
      id: 6,
      title: 'Gold Miner Game',
      description: '',
      image: GoldMiner,
      tags: ["Python"],
      link: '#',
    },
  ]

  return (
    <div className="page-root">
      <TopNav />

      <main className="page-main">
        <div className="page-container">
          <h1>My Projects</h1>
          <p className="projects-intro">
            {/* add brief introduction about my projects */}
          </p>

          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-content">
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a href={project.link} className="project-link">
                      View Project →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="page-footer">© {year} Jinyoung Kim</footer>
    </div>
  )
}

export default ProjectsPage
