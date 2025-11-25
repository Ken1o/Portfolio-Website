import TopNav from '../components/TopNav'
import '../styles/ProjectsPage.css'

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
      title: 'Project One',
      description: 'A brief description.',
      image: 'https://via.placeholder.com/400x300?text=Project+1',
      tags: [],
      link: '#',
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'A brief description.',
      image: 'https://via.placeholder.com/400x300?text=Project+2',
      tags: [],
      link: '#',
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'A brief description',
      image: 'https://via.placeholder.com/400x300?text=Project+3',
      tags: [],
      link: '#',
    },
    {
      id: 4,
      title: 'Project Four',
      description: 'A brief description.',
      image: 'https://via.placeholder.com/400x300?text=Project+4',
      tags: [],
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
