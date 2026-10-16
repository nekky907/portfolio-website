import { TOTAL, allTags, pad, tagCounts } from '../format'

// The tag index. Desktop: a header bar with the "All" chip above a 4x4 grid.
// <=768px: eink.css hides the header and shows the toggle bar, which opens the
// same grid (2 columns) with its own "All" row. Both "All" chips are rendered;
// CSS shows one per breakpoint, and display:none keeps the other out of the
// accessibility tree.
function TagFilter({ activeTag, onSelect, open, onToggle, shown }) {
  const allChip = className => (
    <button
      type="button"
      className={className}
      aria-pressed={activeTag === null}
      onClick={() => onSelect(null)}
    >
      All <span className="n">{TOTAL}</span>
    </button>
  )

  return (
    <div className="fi" role="group" aria-label="Filter projects by tag">
      <div className="fi-head">
        <div className="fi-head-l">
          <span className="label ink">Filter by tag</span>
          <span className="label num">{allTags.length} tags</span>
        </div>
        {allChip('chip chip--all')}
      </div>

      <button
        type="button"
        className="fi-toggle"
        aria-expanded={open}
        aria-controls="fi-body"
        onClick={onToggle}
      >
        <span>Filter <span className="v">· {activeTag ?? 'All'}</span></span>
        <span className="fi-toggle-r">
          <span className="label num">{shown}/{TOTAL}</span>
          <span aria-hidden="true">{open ? '−' : '+'}</span>
        </span>
      </button>

      <div id="fi-body" className={`fi-body${open ? ' is-open' : ''}`}>
        <div className="fi-all-row">{allChip('chip')}</div>
        <div className="fi-grid">
          {allTags.map(tag => (
            <button
              key={tag}
              type="button"
              className="chip"
              aria-pressed={activeTag === tag}
              onClick={() => onSelect(activeTag === tag ? null : tag)}
            >
              {tag} <span className="n">{pad(tagCounts[tag])}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TagFilter
