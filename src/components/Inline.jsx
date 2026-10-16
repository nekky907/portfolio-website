// Renders projectData text, setting anything wrapped in backticks as inline code
function Inline({ text }) {
  return text.split('`').map((part, i) =>
    i % 2 === 1 ? <span key={i} className="code">{part}</span> : part
  )
}

export default Inline
