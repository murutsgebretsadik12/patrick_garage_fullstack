import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css';

function Header() {
  return (
    <div>
      <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">About Us</Link></li>
                <li><Link to="/contact">Services</Link></li>
                <li><Link to="/contact">Contact us</Link></li>
                <li><Link to="/login" className="theme-btn btn-style-one">Login</Link></li>
            </ul>
            </nav>
    </div>
  )
}

export default Header
