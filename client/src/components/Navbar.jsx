import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'
import Logo from '../assets/Logo.png'


const Navbar = () => {
  const location = useLocation()

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={Logo} alt="Young Techiez" className="w-40 h-auto" />
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
            The Show
          </Link>
          <Link 
            to="/product-mastery" 
            className={`navbar-link ${location.pathname === '/product-mastery' ? 'active' : ''}`}
          >
            YT School
          </Link>
          {/* <Link 
            to="/show" 
            className={`navbar-link ${location.pathname.startsWith('/show') ? 'active' : ''}`}
          >
            Experiments
          </Link> */}
        </div>
      </div>
    </nav>
  )
}

export default Navbar

