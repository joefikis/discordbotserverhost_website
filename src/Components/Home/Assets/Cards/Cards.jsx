import React from 'react'
import './Cards.css'
import Button from '@mui/material/Button';

function Cards() {
  return (
    <div>
       <div className="cards-container">
            <div className="cards-wrapper">
              <div className="cards-header">
                <h1>
                  Why Us?
                </h1>
              </div>
                <ul>
                    <div className="cards-list">
                        <div className="card1">
                          <h1> Smart </h1>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, ducimus.</p>
                          <div className="card1-icon">
                          <i class="fa-duotone fa-truck-fast"></i>
                          </div>
                        </div>
                        <div className="card2">
                          <h1> Smart </h1>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, ducimus.</p>
                          <div className="card2-icon">
                          <i class="fa-duotone fa-truck-fast"></i>
                      </div>
                        </div>
                        <div className="card3">
                          <h1> Smart </h1>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, ducimus.</p>
                          <div className="card3-icon">
                          <i class="fa-duotone fa-truck-fast"></i>
                          </div>
                        </div>
                    </div>
                </ul>
                  <div className="card-btn">
                  <Button variant="contained" href="/" className='cards-btn' size='large' >
                  Sign-Up
              </Button>
                  </div>
            </div>
       </div>
    </div>
  )
}

export default Cards