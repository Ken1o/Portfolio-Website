import './App.css'
import LandingPage from './pages/LandingPage'
//import AboutPage from './pages/AboutPage'
//import ContactPage from './pages/ContactPage'
//import ProjectPage from './pages/ProjectsPage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <LandingPage /> } />
        {/* <Route path="/about" element={ <AboutPage /> } />
        <Route path="/contact" element={ <ContactPage /> } />
        <Route path="/projects" element={ <ProjectPage /> } /> */}
      </Routes>
    </Router>
  )
}

export default App
