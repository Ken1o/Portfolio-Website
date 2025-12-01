import '../styles/LandingPage.css'
import TopNav from '../components/TopNav'
import Slideshow from '../components/Slideshow'
import GenAIImage from '../assets/GenAI.png'
import GoldMiner from '../assets/GoldMiner.png'
import Movie from '../assets/Movie.png'
import Stock from '../assets/Stock.png'
import Podcast from '../assets/Podcast.png'
import Memory from '../assets/Memory.png'

interface LandingProject {
	  id: number
	  title: string
	  description: string
	  techstacks: string
}

const LandingPage: React.FC = () => {
	const year = new Date().getFullYear()

	const projectSlides = [
		{
			id: 1,
			image: GenAIImage,
			title: 'Generative AI Playground',
			description: 'Description of your first project',
		},
		{
			id: 2,
			image: Stock,
			title: 'Stock/Crypto Trading Simulator',
			description: 'Description of your second project',
		},
		{
			id: 3,
			image: Movie,
			title: 'Movie Recommendation System',
			description: 'Description of your third project',
		},
		{
			id: 4,
			image: Podcast,
			title: 'Podcast Web App',
			description: 'Description of your third project',
		},
		{
			id: 5,
			image: Memory,
			title: 'Memory Game',
			description: 'Description of your third project',
		},
		{
			id: 6,
			image: GoldMiner,
			title: 'Gold Miner Game',
			description: 'Description of your third project',
		},
	]

	const landingProjects: LandingProject[] = [
		{
			id: 1,
			title: 'Generative AI Playground',
			description: 'The GenAI Playground, a centralised platform where users can seamlessly compare outputs from vairous LLMs, adjust parameters, and integrate with multiple model providers.',
			techstacks: 'Node.js, React, Python, Docker, Postgresql, AWS Bedrock, Caddy.',
		},
		{
			id: 2,
			title: 'Stock/Crypto Trading Simulator',
			description: 'A live-data trading simulator that replicates stock and crypto markets, allowing users to execute trades, analyse performance, and refine trading strategies.',
			techstacks: 'Go, React, Redis, Finnhub API, Yahoo Finance API.',
		},
		{
			id: 3,
			title: 'Movie Recommendation System',
			description: 'A personalised movie recommendation engine that uses collaborative filtering and content-based analysis to generate accurate movie suggestions.',
			techstacks: 'Python, Streamlit, TMDB Api',
		},
		{
			id: 4,
			title: 'Podcast Web App',
			description: 'Short description and key tech used.',
			techstacks: 'Python (Flask), HTML, CSS, SQLite',
		},
		{
			id: 5,
			title: 'Memory Game',
			description: 'Short description and key tech used.',
			techstacks: 'Python',
		},
		{
			id: 6,
			title: 'Gold Miner Game',
			description: 'Short description and key tech used.',
			techstacks: 'Python',
		},
	]

	return (
		<div className="lp-root">
			<TopNav />
			<main className="lp-hero">
				<h1 className="lp-title">Hi, I'm Jinyoung Kim</h1>
				<p className="lp-lead">I build web apps and interfaces. I focus on clean, accessible, and performant experiences.</p>
			</main>
			<Slideshow slides={projectSlides} autoAdvanceInterval={5000} />

			<section id="projects" className="lp-section">
				<h2>Projects</h2>
				<div className="lp-grid">
					{landingProjects.map((project) => (
						<article key={project.id} className="lp-card">
							<h3>{project.title}</h3>
							<p>{project.description}</p>
							<p>{project.techstacks}</p>
						</article>
					))}
				</div>
			</section>

			<section id="about" className="lp-section">
				<h2>About</h2>
				<p>Brief bio: .</p>
			</section>

			<section id="contact" className="lp-section">
				<h2>Contact</h2>
				<p>Email: kjy.jin.0823@gmail.com</p>
			</section>

			<footer className="lp-footer">© {year} Jinyoung Kim</footer>
		</div>
	)
}

export default LandingPage
