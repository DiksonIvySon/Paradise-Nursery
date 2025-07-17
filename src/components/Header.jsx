import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './Header.css'

const Header = () => {
  const cartCount = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  )
  const location = useLocation()

  return (
    <header className="header">
      <h1 className="logo">🌿 Paradise Nursery</h1>
      <nav>
        {location.pathname !== '/' && <Link to="/">Home</Link>}
        <Link to="/products">Shop</Link>
        <Link to="/cart" className="cart-link">
          🛒 <span className="cart-count">{cartCount}</span>
        </Link>
      </nav>
    </header>
  )
}

export default Header
