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
            <div className={`project-card${project.comingSoon ? ' coming-soon' : ''}`}>
              <h3>{project.title}</h3>
              <p>{project.shortDescription}</p>
              {project.tags.length > 0 && (
                <div className="tech-stack">
                  {project.tags.map(tag => (
                    <span key={tag} className="tech-tag">{tag}</span>
                  ))}
                </div>
              )}
              {project.meta && <p className="project-meta">{project.meta}</p>}
              <div className="view-details">
                {project.comingSoon ? 'Coming Soon' : 'View Details →'}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Projects