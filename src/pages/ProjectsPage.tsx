import TopNav from '../components/TopNav'
import '../styles/ProjectsPage.css'
import GenAIImage from '../assets/GenAI.png'
import GoldMiner from '../assets/GoldMiner.png'
import Movie from '../assets/Movie.png'
import Stock from '../assets/Stock.png'
import Podcast from '../assets/Podcast.png'
import Memory from '../assets/Memory.png'
import { useNavigate } from 'react-router-dom'
import Portfolio from '../assets/Portfolio.png'

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
  const navigate = useNavigate()

  const handleProjectClick = (link?: string) => {
    if (link && link !== '#') {
      navigate(link)
    }
  }

  const projects: Project[] = [
    {
      id: 1,
      title: 'Generative AI Playground',
      description: '',
      image: GenAIImage,
      tags: ["Node.js", "React", "Python", "Docker", "PostgreSQL", "AWS Bedrock", "Caddy"],
      link: '/generative-ai-playground',
    },
    {
      id: 2,
      title: 'Stock/Crypto Trading Simulator',
      description: '',
      image: Stock,
      tags: ["Go", "React", "Redis", "Finnhub API", "Yahoo Finance API"],
      link: '/stock-crypto-simulator',
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: '',
      image: Portfolio,
      tags: ["React"],
      link: '/portfolio-website',
    },
    {
      id: 4,
      title: 'Movie Recommendation System',
      description: '',
      image: Movie,
      tags: ["Python", "Streamlit", "TMDB API"],
      link: '#',
    },
    {
      id: 5,
      title: 'Podcast Web App',
      description: '',
      image: Podcast,
      tags: ["Python (Flask)", "HTML", "CSS", "SQLite"],
      link: '#',
    },
    {
      id: 6,
      title: 'Memory Game',
      description: '',
      image: Memory,
      tags: ["Python", "Pygame"],
      link: '#',
    },
    {
      id: 7,
      title: 'Gold Miner Game',
      description: '',
      image: GoldMiner,
      tags: ["Python", "Pygame"],
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
              <div
                key={project.id}
                className="project-card"
                onClick={() => handleProjectClick(project.link)}
                style={{ cursor: project.link && project.link !== '#' ? 'pointer' : 'default' }}
              >
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
