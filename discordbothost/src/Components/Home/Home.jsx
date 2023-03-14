import React from 'react'
import './Home.css'
import Button from '@mui/material/Button';
import Cards from './Assets/Cards/Cards';


function home() {
  return (
    <>
    <div className="home">
      <div className="home-container">
          <div className="home-wrapper">
            <div className="home-text" >
            <div className="htext-wrapper">
              <h1>
                Host Name
              </h1>
              <h2>
                A fast and reliable discord bot host.
              </h2>
              <div className="sign-up">
              <Button variant="contained" href="/" className='signup-btn'>
                  Sign-Up
              </Button>
              </div>
              </div>
            </div>
          </div>
      </div>
    </div>
    <Cards />
    </>
  )
}

export default home