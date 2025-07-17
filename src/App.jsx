import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import ProductListing from './pages/ProductListing'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/products" element={<div>Product Listing Page (coming soon)</div>} />
      </Routes>
    </Router>
  )
}

export default App


