import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, LogOut } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const { user, logout } = useAuth()

  const toggleMenu = () => setIsOpen(!isOpen)

  const handleLogout = () => {
    logout()
    setIsOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          YouthHub
        </Link>

        {/* Desktop Navigation */}
        <div className="navbar-menu">
          <Link to="/opportunities" className="navbar-link">
            Opportunities
          </Link>
          <Link to="/skill-swap" className="navbar-link">
            Skill Swap
          </Link>
          <Link to="/learn" className="navbar-link">
            Learn
          </Link>
          <Link to="/career" className="navbar-link">
            Career
          </Link>
        </div>

        {/* Right Side */}
        <div className="navbar-actions">
          {user ? (
            <>
              <Link to="/dashboard" className="navbar-link">
                Dashboard
              </Link>
              <Link to={`/profile/${user.id}`} className="navbar-link">
                Profile
              </Link>
              <button onClick={handleLogout} className="btn-small-secondary">
                <LogOut size={16} />
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="navbar-link">
                Login
              </Link>
              <Link to="/register" className="btn-primary">
                Join Free
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="navbar-toggle" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="navbar-mobile-menu">
          <Link to="/opportunities" className="navbar-mobile-link" onClick={() => setIsOpen(false)}>
            Opportunities
          </Link>
          <Link to="/skill-swap" className="navbar-mobile-link" onClick={() => setIsOpen(false)}>
            Skill Swap
          </Link>
          <Link to="/learn" className="navbar-mobile-link" onClick={() => setIsOpen(false)}>
            Learn
          </Link>
          <Link to="/career" className="navbar-mobile-link" onClick={() => setIsOpen(false)}>
            Career
          </Link>
          {user && (
            <>
              <Link to="/dashboard" className="navbar-mobile-link" onClick={() => setIsOpen(false)}>
                Dashboard
              </Link>
              <Link to={`/profile/${user.id}`} className="navbar-mobile-link" onClick={() => setIsOpen(false)}>
                Profile
              </Link>
              <button onClick={handleLogout} className="navbar-mobile-link text-red-600">
                Logout
              </button>
            </>
          )}
          {!user && (
            <>
              <Link to="/login" className="navbar-mobile-link" onClick={() => setIsOpen(false)}>
                Login
              </Link>
              <Link to="/register" className="btn-primary w-full text-center" onClick={() => setIsOpen(false)}>
                Join Free
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  )
}

export default Navbar
