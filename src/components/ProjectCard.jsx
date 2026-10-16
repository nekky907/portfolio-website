import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { TOTAL, projectNumber } from '../format'

function ProjectCard({ project, activeTag }) {
  return (
    <Link to={`/project/${project.id}`} className="card">
      <div className="card-top">
        <span className="label num">No. {projectNumber(project)}</span>
        <span className="label num">/ {TOTAL}</span>
      </div>

      {project.images.length > 0 && (
        <div className="shot">
          <img src={project.images[0]} alt="" />
        </div>
      )}

      <h3 className="h3">{project.title}</h3>
      <p className="meta">
        {project.meta.map((item, i) => (
          <Fragment key={item}>
            {i > 0 && <span className="pipe" aria-hidden="true">|</span>}
            {item}
          </Fragment>
        ))}
      </p>
      <p className="card-desc small">{project.shortDescription}</p>
      <p className="card-tags">
        {project.tags.map(tag => (
          <span key={tag} className={tag === activeTag ? 'on' : undefined}>{tag}</span>
        ))}
      </p>

      <div className="card-foot">
        <span>View project</span>
        <span aria-hidden="true">→</span>
      </div>
    </Link>
  )
}

export default ProjectCard
