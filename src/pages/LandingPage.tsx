import '../styles/LandingPage.css'
import TopNav from '../components/TopNav'
import Slideshow from '../components/Slideshow'

const LandingPage: React.FC = () => {
	const year = new Date().getFullYear()

	const projectSlides = [
		{
			id: 1,
			image: 'https://via.placeholder.com/1200x400?text=Project+1',
			title: 'Generative AI Playground',
			description: 'Description of your first project',
		},
		{
			id: 2,
			image: 'https://via.placeholder.com/1200x400?text=Project+2',
			title: 'Stock/Crypto Trading Simulator',
			description: 'Description of your second project',
		},
		{
			id: 3,
			image: 'https://via.placeholder.com/1200x400?text=Project+3',
			title: 'Movie Recommendation System',
			description: 'Description of your third project',
		},
		{
			id: 4,
			image: 'https://via.placeholder.com/1200x400?text=Project+3',
			title: 'Podcast Web App',
			description: 'Description of your third project',
		},
		{
			id: 5,
			image: 'https://via.placeholder.com/1200x400?text=Project+3',
			title: 'Old Arcade Shooting Game',
			description: 'Description of your third project',
		},
		{
			id: 6,
			image: 'https://via.placeholder.com/1200x400?text=Project+3',
			title: 'Gold Miner Game',
			description: 'Description of your third project',
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
					<article className="lp-card">
						<h3>Generative AI Playground</h3>
						<p>
							The GenAI Playground, a centralised platform where users can seamlessly compare outputs from vairous LLMs, adjust parameters, and integrate with multiple model providers.
						</p>
						<p>
							Node.js, React, Python, Docker, Postgresql, AWS Bedrock, Caddy.
						</p>
					</article>
					<article className="lp-card">
						<h3>Stock/Crypto Trading Simulator</h3>
						<p>
							A live-data trading simulator that replicates stock and crypto markets, allowing users to execute trades, analyse performance, and refine trading strategies.
						</p>
						<p>
							Go, React, Redis, Finnhub API, Yahoo Finance API.
						</p>
					</article>
					<article className="lp-card">
						<h3>Movie Recommendation System</h3>
						<p>
							A personalised movie recommendation engine that uses collaborative filtering and content-based analysis to generate accurate movie suggestions.
						</p>
						<p>
							Python, Streamlit, TMDB Api
						</p>
					</article>
					<article className="lp-card">
						<h3>Podcast Web App</h3>
						<p>Short description and key tech used.</p>
						<p>
							Python (Flask), HTML, CSS, SQLite
						</p>
					</article>
					<article className="lp-card">
						<h3>Old Arcade Shooting Game</h3>
						<p>Short description and key tech used.</p>
					</article>
					<article className="lp-card">
						<h3>Gold Miner Game</h3>
						<p>Short description and key tech used.</p>
					</article>
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

			<footer className="lp-footer">© {year} Your Name</footer>
		</div>
	)
}

export default LandingPage
