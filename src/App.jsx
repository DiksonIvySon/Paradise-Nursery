import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Landing from './pages/Landing'
import ProductListing from './pages/ProductListing'
import Header from './components/Header'

function AppWrapper() {
  const location = useLocation()
  const showHeader = location.pathname !== '/'

  return (
    <>
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/cart" element={<div>Shopping Cart Page (coming soon)</div>} />
      </Routes>
    </>
  )
}

export default function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  )
}


