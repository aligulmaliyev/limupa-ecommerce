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
            let totalPrice = state.cartItems
                .map(cartItem => cartItem.price * cartItem.quantity)
                .reduce((previousValue, currentValue) => previousValue + currentValue, newItem.price)
                .toFixed(2)

            if (existingItem) {
                if (newItem.quantity == 1) {
                    existingItem.quantity++;
                    existingItem.totalPrice += newItem.totalPrice
                }
                if (newItem.quantity > 1) {
                    existingItem.quantity = newItem.quantity;
                    existingItem.totalPrice = newItem.totalPrice
                }
            }
            else {
                state.cartItems.push(newItem);
                state.totalQuantity++;
            }
            
            state.totalPrice = totalPrice
        },
        removeFromCart(state, action) {

        }
    }
})

export const cartActions = cartSlice.actions;
export default cartSlice;