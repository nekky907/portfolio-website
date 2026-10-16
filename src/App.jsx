import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Page from './components/Page'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import ProjectDetail from './components/ProjectDetail'

function Home() {
  return (
    <Page
      stripLeft={<span className="label">Portfolio</span>}
      stripRight={<span className="label">Chiang Mai, Thailand</span>}
      footLeft={<span className="label">Nonthawat Pinchai · Chiang Mai, Thailand</span>}
      footRight={<a className="link label ink" href="#top">Back to top ↑</a>}
    >
      <Header />
      <About />
      <Projects />
    </Page>
  )
}

function App() {
  const basename = import.meta.env.MODE === 'production' ? '/portfolio-website' : ''

  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App
