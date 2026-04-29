import { HiMail } from 'react-icons/hi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="profile-pic">
        <img src={`${import.meta.env.BASE_URL}profile.jpg`} alt="Profile" />
      </div>
      
      <h1>Nonthawat Pinchai</h1>
      <p className="title">Full-Stack Developer | Project Manager | Innovative Builder</p>
      
      <div className="contact-links">
        <a href="mailto:nek.nonthawat907@outlook.com">
          <HiMail size={20} />
          <span>Email</span>
        </a>
        <a href="https://www.linkedin.com/in/nonthawat-pinchai-30131b265/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={20} />
          <span>LinkedIn</span>
        </a>
        <a href="https://github.com/nekky907" target="_blank" rel="noopener noreferrer">
          <FaGithub size={20} />
          <span>GitHub</span>
        </a>
      </div>
    </header>
  )
}

export default Header