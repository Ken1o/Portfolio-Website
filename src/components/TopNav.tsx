import { useNavigate, useLocation } from 'react-router-dom'
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
  ],
}) => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavClick = (path: string) => {
    navigate(path)
  }

  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <nav className="topnav">
      <button className="topnav-brand" onClick={() => navigate('/')}>Portfolio</button>
      <ul className="topnav-menu">
        {navItems.map((item) => (
          <li key={item.path}>
            <button
              className={`topnav-btn ${isActive(item.path) ? 'active' : ''}`}
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
