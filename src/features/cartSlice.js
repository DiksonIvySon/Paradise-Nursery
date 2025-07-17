import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload
      const exists = state.items.find((item) => item.id === product.id)

      if (!exists) {
        state.items.push({ ...product, quantity: 1 })
      }
    },

    increaseQuantity: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload)
      if (item) {
        item.quantity += 1
      }
    },

    decreaseQuantity: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload)
      if (item && item.quantity > 1) {
        item.quantity -= 1
      }
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter((i) => i.id !== action.payload)
    },
  },
})

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } = cartSlice.actions

export default cartSlice.reducer

