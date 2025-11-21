import { useNavigate } from 'react-router-dom'
import '../styles/TopNav.css'

interface NavItem {
  label: string
  path: string
}

interface TopNavProps {
  navItems?: NavItem[]
}

const TopNav: React.FC<TopNavProps> = ({
  navItems = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ],
}) => {
  const navigate = useNavigate()

  const handleNavClick = (path: string) => {
    navigate(path)
  }

  return (
    <nav className="topnav">
      <div className="topnav-brand">Portfolio</div>
      <ul className="topnav-menu">
        {navItems.map((item) => (
          <li key={item.path}>
            <button
              className="topnav-btn"
              onClick={() => handleNavClick(item.path)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default TopNav
