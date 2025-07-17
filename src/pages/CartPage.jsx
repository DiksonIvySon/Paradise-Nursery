import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../features/CartSlice'
import { Link } from 'react-router-dom'
import './CartPage.css'

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0)

  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-summary">
            <p>Total items: <strong>{totalItems}</strong></p>
            <p>Total cost: <strong>R{totalPrice.toFixed(2)}</strong></p>
          </div>

          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="details">
                  <h4>{item.name}</h4>
                  <p>Price: R{item.price.toFixed(2)}</p>
                  <div className="quantity-controls">
                    <button onClick={() => dispatch(decreaseQuantity(item.id))}>−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                  </div>
                  <button className="delete" onClick={() => dispatch(removeFromCart(item.id))}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-actions">
            <button className="checkout">Checkout (Coming Soon)</button>
            <Link to="/products" className="continue">Continue Shopping</Link>
          </div>
        </>
      )}
    </div>
  )
}

export default CartPage
