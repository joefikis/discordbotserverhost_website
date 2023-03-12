import React, { useState } from "react";
import './Navbar.css'

function Navbar() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

  return (
    <div>
        <nav>
            <div className="nav-container">
                <div className="nav-wrapper">
                    <div className="nav-logo">
                        <h1>logo</h1>
                    </div>
                    <div className="nav-links">
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li className="nav-link-btn">
                                <a href="/" className="nav-btn">Home</a>
                            </li>
                            <li className="nav-link-btn">
                                <a href="/about" className="nav-btn">About</a>
                            </li>
                            <li className="nav-link-btn ">
                                <a href="/blog" className="nav-btn">Blog</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="nav-icon" onClick={handleClick}>
                     <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
