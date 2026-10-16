import { useState } from 'react'
import { projectsData } from '../projectData'
import { TOTAL, pad } from '../format'
import TagFilter from './TagFilter'
import ProjectGrid from './ProjectGrid'

function Projects() {
  const [activeTag, setActiveTag] = useState(null)
  const [filterOpen, setFilterOpen] = useState(false)

  const visibleProjects = activeTag
    ? projectsData.filter(project => project.tags.includes(activeTag))
    : projectsData
  const shown = pad(visibleProjects.length)
  const clear = () => setActiveTag(null)

  return (
    <section className="sec" aria-labelledby="projects-h">
      <div className="sec-head">
        <div className="sec-label sec-label--row">
          <span className="sec-no">02</span>
          <h2 className="h2" id="projects-h">Projects</h2>
        </div>
        <span className="label num">{TOTAL} entries</span>
      </div>

      <TagFilter
        activeTag={activeTag}
        onSelect={setActiveTag}
        open={filterOpen}
        onToggle={() => setFilterOpen(!filterOpen)}
        shown={shown}
      />

      <div className="fi-status">
        <span className="label num" aria-live="polite">Showing {shown} of {TOTAL}</span>
        {activeTag && (
          <button type="button" className="link label ink" onClick={clear}>Clear filter ×</button>
        )}
      </div>

      <ProjectGrid projects={visibleProjects} activeTag={activeTag} onClear={clear} />
    </section>
  )
}

export default Projects
