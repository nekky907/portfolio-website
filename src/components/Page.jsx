// Shared page frame: the title strip across the top, the content column, and
// the heavy-ruled footer. Every screen hangs off these three bands.
function Page({ stripLeft, stripRight, footLeft, footRight, children }) {
  return (
    <div className="page" id="top">
      <div className="strip">
        <div className="wrap strip-in">
          {stripLeft}
          {stripRight}
        </div>
      </div>

      <div className="wrap">{children}</div>

      <footer className="foot">
        <div className="wrap foot-in">
          {footLeft}
          {footRight}
        </div>
      </footer>
    </div>
  )
}

export default Page
