import { Link } from 'react-router-dom'
import { projectsData } from '../projectData'
import './Projects.css'

function Projects() {
  return (
    <section className="section">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projectsData.map(project => (
          <Link
            to={`/project/${project.id}`}
            key={project.id}
            className="project-card-link"
          >
            <div className="project-card">
              <h3>{project.title}</h3>
              <p>{project.shortDescription}</p>
              <div className="tech-stack">
                {project.tags.map(tag => (
                  <span key={tag} className="tech-tag">{tag}</span>
                ))}
              </div>
              <p className="project-meta">{project.meta}</p>
              <div className="view-details">View Details →</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Projects