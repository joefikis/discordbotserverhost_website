import React from 'react'
import './Home.css'
import Button from '@mui/material/Button';


function home() {
  return (
    <div className="home">
      <div className="home-container">
          <div className="home-wrapper">
            <div className="home-text">
            <div className="home-text-wrapper">
              <h1 className='Heading'>
                Host Name
              </h1>
              <h2 className='Discription'>
                A fast and reliable discord bot hosting.
              </h2>
              <div className="sign-up">
              <Button variant="contained" className='signup-btn'>
                <a 
                  href="/">
                  Sign-Up
                </a>
              </Button>
              </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default home