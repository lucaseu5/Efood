import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Restaurant } from '../../pages/Home'
import { FoodItem } from '../../pages/Foods'

type CartState = {
  items: Restaurant[]
  foods: FoodItem[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  foods: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<FoodItem>) => {
      state.foods.push(action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

cartSlice.actions.add

export const { add, open, close } = cartSlice.actions
export default cartSlice.reducer
