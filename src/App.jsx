import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
// we'll add ProductPage later

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* Placeholder route for products */}
        <Route path="/products" element={<div>Product Listing Page (coming soon)</div>} />
      </Routes>
    </Router>
  )
}

export default App


