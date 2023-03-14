import React from 'react'
import './Cards.css'

function Cards() {
  return (
    <div>
        <div className="cards-container">
            <div className="cards-wrapper">
                <div className="heading"> 
                    <h1>
                        Offerings
                    </h1>
                </div>
                <div className="cards">
                    <div className="card1">
                        <h1>
                            Fast Peformance
                        </h1>
                    </div>
                    <div className="card2">
                        <h1>
                            Secure Network
                        </h1>
                    </div>
                    <div className="card3">
                        <h1>
                            Reliable Uptime
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards