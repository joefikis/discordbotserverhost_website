import React, { useState } from "react";
import { BrowserRouter, NavLink } from 'react-router-dom'
import './Navbar.css'
import "@fortawesome/fontawesome-free/css/all.min.css";


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
            <li className="nav-item">
            <NavLink to="/"  activeClassName="active" reloadDocument className='nav-links' onClick={handleClick} >Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="about" reloadDocument activeClassName="active" className='nav-links' onClick={handleClick} >About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="plans"  activeClassName="active" className='nav-links' onClick={handleClick} >Plans</NavLink>
              </li>
          </ul>
          </div>
          </div>
          <div className="nav-icon" onClick={handleClick}>
          <i class={click ? "fa-solid fa-x" : "fa-solid fa-bars"}></i>
          </div>
        </div>
    </BrowserRouter>
  )
}

export default Navbar
