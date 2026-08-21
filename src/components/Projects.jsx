import { useState } from 'react'
import { Link } from 'react-router-dom'
import { projectsData } from '../projectData'
import './Projects.css'

const allTags = [...new Set(projectsData.flatMap(project => project.tags))].sort()

function Projects() {
  const [activeTag, setActiveTag] = useState(null)

  const visibleProjects = activeTag
    ? projectsData.filter(project => project.tags.includes(activeTag))
    : projectsData

  return (
    <section className="section">
      <h2>Featured Projects</h2>

      <div className="tag-filter" role="group" aria-label="Filter projects by technology">
        <button
          type="button"
          className={`tag-filter-chip${activeTag === null ? ' active' : ''}`}
          aria-pressed={activeTag === null}
          onClick={() => setActiveTag(null)}
        >
          All
        </button>
        {allTags.map(tag => (
          <button
            key={tag}
            type="button"
            className={`tag-filter-chip${activeTag === tag ? ' active' : ''}`}
            aria-pressed={activeTag === tag}
            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      {visibleProjects.length === 0 ? (
        <p className="projects-empty">No projects match this filter.</p>
      ) : (
        <div className="projects-grid">
          {visibleProjects.map(project => (
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
      )}
    </section>
  )
}

export default Projects
