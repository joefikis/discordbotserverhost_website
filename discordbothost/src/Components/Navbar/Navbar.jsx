import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div>
        <nav>
            <div className="nav-container">
                <div className="nav-wrapper">
                    <div className="nav-logo">
                        <h1>logo</h1>
                    </div>
                    <div className="nav-links">
                        <ul className="nav-links-wrapper">
                            <li className="nav-link-btn">
                                <a href="/" className="nav-btn">Home</a>
                            </li>
                            <li className="nav-link-btn">
                                <a href="/about" className="nav-btn">About</a>
                            </li>
                            <li className="nav-link-btn">
                                <a href="/blog" className="nav-btn">Blog</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
