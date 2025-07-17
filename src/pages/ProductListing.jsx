import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../features/CartSlice'
import './ProductListing.css'

const plantData = [
  { id: 1, name: 'Fiddle Leaf Fig', category: 'Indoor', price: 250, image: 'https://source.unsplash.com/200x200/?plant1' },
  { id: 2, name: 'Snake Plant', category: 'Indoor', price: 180, image: 'https://source.unsplash.com/200x200/?plant2' },
  { id: 3, name: 'Spider Plant', category: 'Pet Friendly', price: 120, image: 'https://source.unsplash.com/200x200/?plant3' },
  { id: 4, name: 'Aloe Vera', category: 'Succulent', price: 100, image: 'https://source.unsplash.com/200x200/?aloe' },
  { id: 5, name: 'Peace Lily', category: 'Pet Friendly', price: 220, image: 'https://source.unsplash.com/200x200/?plant4' },
  { id: 6, name: 'Cactus', category: 'Succulent', price: 90, image: 'https://source.unsplash.com/200x200/?cactus' },
]

function ProductListing() {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.items)

  const isInCart = (id) => cart.some((item) => item.id === id)

  return (
    <div className="product-page">
      <h2>Our Plants</h2>
      <div className="products">
        {plantData.map((plant) => (
          <div className="card" key={plant.id}>
            <img src={plant.image} alt={plant.name} />
            <h3>{plant.name}</h3>
            <p>Category: {plant.category}</p>
            <p>Price: R{plant.price}</p>
            <button
              onClick={() => dispatch(addToCart(plant))}
              disabled={isInCart(plant.id)}
            >
              {isInCart(plant.id) ? 'Added' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductListing
