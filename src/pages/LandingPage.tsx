import '../styles/LandingPage.css'
import TopNav from '../components/TopNav'

const LandingPage: React.FC = () => {
	const year = new Date().getFullYear()

	return (
		<div className="lp-root">
			<TopNav />

            <div>
                
            </div>

			<main className="lp-hero">
				<h1 className="lp-title">Hi, I'm Jinyoung Kim</h1>
				<p className="lp-lead">I build web apps and interfaces. I focus on clean, accessible, and performant experiences.</p>
				<div className="lp-actions">
					<a className="lp-btn lp-primary" href="#projects">See my work</a>
					<a className="lp-btn" href="#contact">Contact me</a>
				</div>
			</main>

			<section id="projects" className="lp-section">
				<h2>Selected Projects</h2>
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
