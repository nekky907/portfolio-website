import { useParams, Link } from 'react-router-dom'
import { projectsData } from '../projectData'
import { FaArrowLeft } from 'react-icons/fa'
import './ProjectDetail.css'

function ProjectDetail() {
  const { id } = useParams()
  const project = projectsData.find(p => p.id === Number(id))

  if (!project) {
    return (
      <div className="container">
        <div className="content">
          <h2>Project not found</h2>
          <Link to="/" className="back-button">
            <FaArrowLeft /> Back to Home
          </Link>
        </div>
      </div>
    )
  }

  if (project.comingSoon) {
    return (
      <div className="container project-detail-container">
        <div className="content">
          <Link to="/" className="back-button">
            <FaArrowLeft /> Back to Home
          </Link>
          <div className="project-header">
            <h1>{project.title}</h1>
          </div>
          <section className="project-section coming-soon-section">
            <h2>Coming Soon</h2>
            <p>Details for this project are still being written. Check back soon.</p>
          </section>
          <Link to="/" className="back-button bottom">
            <FaArrowLeft /> Back to All Projects
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container project-detail-container">
      <div className="content">
        <Link to="/" className="back-button">
          <FaArrowLeft /> Back to Home
        </Link>

        <div className="project-header">
          <h1>{project.title}</h1>
          <div className="tech-stack">
            {project.tags.map(tag => (
              <span key={tag} className="tech-tag">{tag}</span>
            ))}
          </div>
          <p className="project-meta-large">{project.meta}</p>
        </div>

        {(project.liveUrl || project.repoUrl) && (
          <div className="project-links">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link primary"
              >
                Visit Live Site ↗
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Source ↗
              </a>
            )}
          </div>
        )}

        {project.images.length > 0 && (
          <div className="project-images">
            {project.images.map((image, index) => (
              <div key={image} className="project-image">
                <img src={image} alt={`${project.title} - Image ${index + 1}`} />
              </div>
            ))}
          </div>
        )}

        <div className="project-content">
          <section className="project-section">
            <h2>Overview</h2>
            <p className="project-description">{project.fullDescription}</p>
          </section>

          <section className="project-section">
            <h2>Challenge</h2>
            <p>{project.challenge}</p>
          </section>

          <section className="project-section">
            <h2>Solution</h2>
            <p>{project.solution}</p>
          </section>

          <section className="project-section">
            <h2>Key Results</h2>
            <ul className="results-list">
              {project.results.map(result => (
                <li key={result}>{result}</li>
              ))}
            </ul>
          </section>
        </div>

        <Link to="/" className="back-button bottom">
          <FaArrowLeft /> Back to All Projects
        </Link>
      </div>
    </div>
  )
}

export default ProjectDetail