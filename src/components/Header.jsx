const CONTACTS = [
  { label: 'Email', href: 'mailto:nek.nonthawat907@outlook.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nonthawat-pinchai-30131b265/', external: true },
  { label: 'GitHub', href: 'https://github.com/nekky907', external: true },
]

function Header() {
  return (
    <header className="hdr">
      <div className="photo-frame">
        <div className="photo">
          <img src={`${import.meta.env.BASE_URL}profile.jpg`} alt="Nonthawat Pinchai" />
        </div>
      </div>

      <div className="hdr-text">
        <h1 className="h1">Nonthawat Pinchai</h1>
        <p className="meta roles">
          <span>Full-Stack Developer</span>
          <span>Project Manager</span>
          <span>Innovative Builder</span>
        </p>
        <nav className="contacts" aria-label="Contact">
          {CONTACTS.map(({ label, href, external }) => (
            <a
              key={label}
              className="btn"
              href={href}
              {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
            >
              {label} <span aria-hidden="true">↗</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
