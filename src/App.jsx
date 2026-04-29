import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import ProjectDetail from './components/ProjectDetail'
import './App.css'

function App() {
  const basename = import.meta.env.MODE === 'production' ? '/portfolio-website' : ''

  return (
    <Router basename={basename}>
      <div className="app">
        <Routes>
          <Route path="/" element={
            <div className="container">
              <Header />
              <div className="content">
                <About />
                <Projects />
              </div>
            </div>
          } />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App