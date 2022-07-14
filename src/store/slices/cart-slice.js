import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: { cart: [] },
    reducers: {
        addToCart() {

        },
        removeFromCart() {

        }
    }
})

export const cartActions = cartSlice.actions;
export default cartSlice;