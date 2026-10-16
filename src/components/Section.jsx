// Numbered spec row: label column ("01 / About Me") beside the content column
function Section({ no, title, children }) {
  const headingId = `${title.toLowerCase().replace(/\W+/g, '-')}-h`

  return (
    <section className="sec row2" aria-labelledby={headingId}>
      <div className="sec-label">
        <span className="sec-no">{no}</span>
        <h2 className="h2" id={headingId}>{title}</h2>
      </div>
      {children}
    </section>
  )
}

export default Section
