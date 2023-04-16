import React, { useState } from "react";
import { BrowserRouter } from 'react-router-dom'
import './Navbar.css'

function Navbar() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

  return (
    <BrowserRouter>
        <div className='nav-container'>
  
            <div className='nav-logo'>
                <h1>Host Name</h1>
            </div>
            <div className="nav-link-wrapper">
              <div className="nav-linkss">
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <a>
            <li className="nav-item">
            <a href="/"  activeClassName="Active" className='nav-links'>Home</a>
            </li>
            </a>
            <li className="nav-item">
                <a href="/about"  activeClassName="Active" className='nav-links'>About</a>
              </li>
              <li className="nav-item">
                <a href="/plans"  activeClassName="Active" className='nav-links'>Plans</a>
              </li>
          </ul>
          </div>
          </div>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
    </BrowserRouter>
  )
}

export default Navbar
