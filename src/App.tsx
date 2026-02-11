import './App.css'
import LandingPage from './pages/LandingPage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
//import ContactPage from './pages/ContactPage'
import GenAIPage from './pages/GenAI'
import StockPage from './pages/Stock'
import PortfolioPage from './pages/Portfolio'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <LandingPage /> } />
        <Route path="/about" element={ <AboutPage /> } />
        <Route path="/projects" element={ <ProjectsPage /> } />
        {/* <Route path="/contact" element={ <ContactPage /> } /> */}
        <Route path="/generative-ai-playground" element={ <GenAIPage /> } />
        <Route path="/stock-crypto-simulator" element={ <StockPage /> } />
        <Route path="/portfolio-website" element={ <PortfolioPage /> } />
      </Routes>
    </Router>
  )
}

export default App
