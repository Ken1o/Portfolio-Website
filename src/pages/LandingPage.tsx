import '../styles/LandingPage.css'
import TopNav from '../components/TopNav'
import Slideshow from '../components/Slideshow'

const LandingPage: React.FC = () => {
	const year = new Date().getFullYear()

	const projectSlides = [
		{
			id: 1,
			image: 'https://via.placeholder.com/1200x400?text=Project+1',
			title: 'Project One',
			description: 'Description of your first project',
		},
		{
			id: 2,
			image: 'https://via.placeholder.com/1200x400?text=Project+2',
			title: 'Project Two',
			description: 'Description of your second project',
		},
		{
			id: 3,
			image: 'https://via.placeholder.com/1200x400?text=Project+3',
			title: 'Project Three',
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
			<div className="lp-actions">
					<a className="lp-btn lp-primary" href="#projects">See my work</a>
					<a className="lp-btn" href="#contact">Contact me</a>
				</div>

			<section id="projects" className="lp-section">
				<h2>Projects</h2>
				<div className="lp-grid">
					<article className="lp-card">
						<h3>Project One</h3>
						<p>Short description and key tech used.</p>
					</article>
					<article className="lp-card">
						<h3>Project Two</h3>
						<p>Short description and key tech used.</p>
					</article>
				</div>
			</section>

			<section id="about" className="lp-section">
				<h2>About</h2>
				<p>Brief bio: what you do, your background, and what you're interested in.</p>
			</section>

			<section id="contact" className="lp-section">
				<h2>Contact</h2>
				<p>Email: <a href="kjy.jin.0823@gmail.com">kjy.jin.0823@gmail.com</a></p>
			</section>

			<footer className="lp-footer">© {year} Your Name</footer>
		</div>
	)
}

export default LandingPage
