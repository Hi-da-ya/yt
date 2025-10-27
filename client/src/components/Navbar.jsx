import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const location = useLocation()

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          YT
        </Link>
        
        <div className="navbar-menu">
          <Link 
            to="/" 
            className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/show" 
            className={`navbar-link ${location.pathname === '/show' ? 'active' : ''}`}
          >
            Show
          </Link>
          <Link 
            to="/product-mastery" 
            className={`navbar-link ${location.pathname === '/product-mastery' ? 'active' : ''}`}
          >
            Product Mastery
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

