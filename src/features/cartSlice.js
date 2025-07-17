import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push({ ...action.payload, quantity: 1 })
    },
    // More reducers will come later (increase, decrease, delete)
  },
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer
