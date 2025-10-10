import { Link } from 'react-router-dom'
import { projectsData } from '../projectData'
import './Projects.css'

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'London House Chiang Mai Website',
      description: 'Created full-stack and miantained the London House Chiang Mai website using React.',
      tags: ['Londonhouse-cm', 'React', 'Full-Stack Web-Dev', 'API Integration', 'UI/UX', 'Server Management'],
      meta: 'Duration: 12 months | Budget: $450'
    },
    {
      id: 2,
      title: 'Mobile App Launch',
      description: 'Managed end-to-end development and launch of a mobile application, achieving 100K+ downloads in the first quarter and 4.5-star rating.',
      tags: ['iOS/Android', 'Scrum', 'Product Strategy'],
      meta: 'Duration: 9 months | Team Size: 12'
    },
    {
      id: 3,
      title: 'Cloud Migration Project',
      description: 'Orchestrated migration of legacy systems to AWS cloud infrastructure, reducing operational costs by 35% and improving system reliability to 99.9% uptime.',
      tags: ['AWS', 'DevOps', 'Risk Management'],
      meta: 'Duration: 18 months | Cost Savings: $500K/year'
    },
    {
      id: 4,
      title: 'Process Automation Initiative',
      description: 'Implemented automation solutions across multiple departments, reducing manual processing time by 60% and eliminating errors by 85%.',
      tags: ['Process Improvement', 'Automation', 'Six Sigma'],
      meta: 'Duration: 6 months | ROI: 250%'
    },
    {
      id: 5,
      title: 'Process Automation Initiative',
      description: 'Implemented automation solutions across multiple departments, reducing manual processing time by 60% and eliminating errors by 85%.',
      tags: ['Process Improvement', 'Automation', 'Six Sigma'],
      meta: 'Duration: 6 months | ROI: 250%'
    },{
      id: 6,
      title: 'Process Automation Initiative',
      description: 'Implemented automation solutions across multiple departments, reducing manual processing time by 60% and eliminating errors by 85%.',
      tags: ['Process Improvement', 'Automation', 'Six Sigma'],
      meta: 'Duration: 6 months | ROI: 250%'
    }
  ]

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
                {project.tags.map((tag, index) => (
                  <span key={index} className="tech-tag">{tag}</span>
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