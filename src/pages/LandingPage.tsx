import '../styles/LandingPage.css'
import TopNav from '../components/TopNav'
import Slideshow from '../components/Slideshow'
import GenAIImage from '../assets/GenAI.png'
import GoldMiner from '../assets/GoldMiner.png'
import Movie from '../assets/Movie.png'
import Stock from '../assets/Stock.png'
import Podcast from '../assets/Podcast.png'
import Memory from '../assets/Memory.png'
import Portfolio from '../assets/Portfolio.png'
import LinkedinIcon from '../assets/linkedin.png'
import GithubIcon from '../assets/github.png'
import ResumeIcon from '../assets/resume.jpg'

interface LandingProject {
	  id: number
	  title: string
	  description: string
}

const LandingPage: React.FC = () => {
	const year = new Date().getFullYear()

	const projectSlides = [
		{
			id: 1,
			image: GenAIImage,
			title: 'Generative AI Playground',
			description: 'Description',
		},
		{
			id: 2,
			image: Stock,
			title: 'Stock/Crypto Trading Simulator',
			description: 'Description',
		},
		{
			id: 3,
			image: Portfolio,
			title: 'Portfolio Website',
			description: 'Description'
		},
		{
			id: 4,
			image: Movie,
			title: 'Movie Recommendation System',
			description: 'Description'
		},
		{
			id: 5,
			image: Podcast,
			title: 'Podcast Web App',
			description: 'Description',
		},
		{
			id: 6,
			image: Memory,
			title: 'Memory Game',
			description: 'Description',
		},
		{
			id: 7,
			image: GoldMiner,
			title: 'Gold Miner Game',
			description: 'Description',
		},
	]

	const landingProjects: LandingProject[] = [
		{
			id: 1,
			title: 'Generative AI Playground',
			description: 'The GenAI Playground, a centralised platform where users can seamlessly compare outputs from vairous LLMs, adjust parameters, and integrate with multiple model providers.',
			
		},
		{
			id: 2,
			title: 'Stock/Crypto Trading Simulator',
			description: 'A live-data trading simulator that replicates stock and crypto markets, allowing users to execute trades, analyse performance, and refine trading strategies.',
		},
		{
			id: 3,
			title: 'Portfolio Website',
			description: 'A Portfolio Website which showcases my personal projects and group projects',
		},
		{
			id: 4,
			title: 'Movie Recommendation System',
			description: 'A personalised movie recommendation engine that uses collaborative filtering and content-based analysis to generate accurate movie suggestions.',
		},
		{
			id: 5,
			title: 'Podcast Web App',
			description: 'Short description and key tech used.',
		},
		{
			id: 6,
			title: 'Memory Game',
			description: 'A Python memory game where players must recall and input a sequence of numbers shown briefly on screen. Each round increases in length and difficulty, challenging the player’s short-term memory and focus.',
		},
		{
			id: 7,
			title: 'Gold Miner Game',
			description: 'A Python-based Gold Miner game where players control a claw to grab gold, rocks, and diamonds. Each level has a time limit and money goal, increasing difficulty as the player progresses.',
		},
	]

	return (
		<div className="lp-root">
			<TopNav />
				<section className="lp-introduction">
					<div className="lp-intro-inner">
						<p className="lp-intro-text">I'm Jinyoung Kim — a web developer building clean, accessible, and performant web apps. I explore generative AI, data-driven tools, and interactive experiences.</p>
						<div className="social-icons">
							<button type="button" onClick={() => window.open('https://linkedin.com/in/your-profile', '_blank')} aria-label="LinkedIn" className="social-icon">
								<img src={LinkedinIcon} alt="LinkedIn" />
							</button>
							<button type="button" onClick={() => window.open('https://github.com/your-username', '_blank')} aria-label="GitHub" className="social-icon">
								<img src={GithubIcon} alt="GitHub" />
							</button>
							<button type="button" onClick={() => window.open('/resume.pdf', '_blank')} aria-label="Resume" className="social-icon">
								<img src={ResumeIcon} alt="Resume" />
							</button>
						</div>
					</div>
				</section>
			<Slideshow slides={projectSlides} autoAdvanceInterval={5000} />

			<section id="projects" className="lp-section">
				<h2>Projects</h2>
				<div className="lp-grid">
					{landingProjects.map((project) => (
						<article key={project.id} className="lp-card">
							<h3>{project.title}</h3>
							<p>{project.description}</p>
						</article>
					))}
				</div>
			</section>

			<footer className="lp-footer">© {year} Jinyoung Kim</footer>
		</div>
	)
}

export default LandingPage
