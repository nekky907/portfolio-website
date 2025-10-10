import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import ProjectDetail from './components/ProjectDetail'
import './App.css'

function App() {
  // Use basename for GitHub Pages deployment
  const basename = import.meta.env.MODE === 'production' ? '/portfolio-website' : ''
  
  return (
    <Router basename={basename}>
      <div className="app">
        <Routes>
          {/* Home Page */}
          <Route path="/" element={
            <div className="container">
              <Header />
              <div className="content">
                <About />
                <Projects />
              </div>
            </div>
          } />
          
          {/* Project Detail Page */}
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App