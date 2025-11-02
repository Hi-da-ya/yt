import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';
import Logo from '../assets/Logo.png';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src={Logo} alt="Young Techiez" className="w-40 h-auto" />
        </Link>
        
        {/* Hamburger Menu Button */}
        <button 
          className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Navigation Menu */}
        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link 
            to="/" 
            className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            to="/show" 
            className={`navbar-link ${location.pathname === '/show' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            The Show
          </Link>
          <Link 
            to="/product-mastery" 
            className={`navbar-link ${location.pathname === '/product-mastery' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            YT School
          </Link>
          <Link 
            to="/blogs" 
            className={`navbar-link ${location.pathname === '/blogs' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Blogs
          </Link>
        </div>

        {/* Overlay for mobile when menu is open */}
        {isMenuOpen && (
          <div 
            className="navbar-overlay"
            onClick={closeMenu}
          ></div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;