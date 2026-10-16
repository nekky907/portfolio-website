import { TOTAL } from '../format'
import ProjectCard from './ProjectCard'

function ProjectGrid({ projects, activeTag, onClear }) {
  if (projects.length === 0) {
    return (
      <div className="empty">
        <span className="label">Result · 0 of {TOTAL}</span>
        <p className="h3">No projects match this filter.</p>
        <button type="button" className="btn" onClick={onClear}>Show all projects</button>
      </div>
    )
  }

  return (
    <div className="cards">
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} activeTag={activeTag} />
      ))}
      {/* Closes the ruled two-column grid when the count is odd */}
      {projects.length % 2 === 1 && (
        <div className="card-fill" aria-hidden="true">
          <span className="label">— End of index —</span>
        </div>
      )}
    </div>
  )
}

export default ProjectGrid
