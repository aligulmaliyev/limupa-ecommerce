import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            let newItem = action.payload;
            let existingItem = state.cartItems.find(item => item.id === newItem.id);
            if (existingItem) {
                existingItem.quantity += newItem.quantity;
                existingItem.totalPrice += newItem.price;
            }
            else {
                state.cartItems.push(newItem);
                state.totalQuantity++;
            }
            state.totalPrice += newItem.price;
        },
        removeFromCart(state, action) {

        }
    }
})

export const cartActions = cartSlice.actions;
export default cartSlice;