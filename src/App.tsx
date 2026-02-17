import './App.css'
import LandingPage from './pages/LandingPage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
//import ContactPage from './pages/ContactPage'
import GenAIPage from './pages/GenAI'
import StockPage from './pages/Stock'
import PortfolioPage from './pages/Portfolio'
import MoviePage from './pages/Movie'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <LandingPage /> } />
        <Route path="/about" element={ <AboutPage /> } />
        <Route path="/projects" element={ <ProjectsPage /> } />
        <Route path="/generative-ai-playground" element={ <GenAIPage /> } />
        <Route path="/stock-crypto-simulator" element={ <StockPage /> } />
        <Route path="/portfolio-website" element={ <PortfolioPage /> } />
        <Route path="/movie-recommendation-system" element={ <MoviePage /> } />
        {/* <Route path="/PodcastApp" element={ <PodcastPage /> } /> */}
        {/* <Route path="/GoldMiner" element={ <GoldMinerPage /> } /> */}
        {/* <Route path="/MemoryGame" element={ <MemoryGamePage /> } /> */}
      </Routes>
    </Router>
  )
}

export default App
