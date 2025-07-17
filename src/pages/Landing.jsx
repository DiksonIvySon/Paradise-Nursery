import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Landing.css'

const Landing = () => {
  const navigate = useNavigate()

  return (
    <div className="landing">
      <div className="overlay">
        <h1>Paradise Nursery</h1>
        <p>
          Welcome to Paradise Nursery — your one-stop shop for beautiful,
          air-purifying houseplants. Whether you're a beginner or a plant
          parent pro, we have something green and wonderful for everyone.
        </p>
        <button onClick={() => navigate('/products')}>Get Started</button>
      </div>
    </div>
  )
}

export default Landing
