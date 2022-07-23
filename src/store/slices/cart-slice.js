import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0,
    subtotalPrice: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        hydrate: (state, action) => {
            return action.payload
        },
        addToCart(state, action) {
            let newItem = action.payload;
            let existingItem = state.cartItems.find(item => item.id === newItem.id);
            let totalPrice = state.cartItems.map(cartItem => cartItem.price * cartItem.quantity)[0]
            let subtotalPrice = state.cartItems.map(cartItem => cartItem.discountPrice ? cartItem.discountPrice * cartItem.quantity : cartItem.price * cartItem.quantity)[0];

            if (existingItem) {
                if (newItem.quantity === 1) {
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
            state.subtotalPrice = subtotalPrice
        },
        removeFromCart(state, action) {
            let newCartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload);
            let findItem = state.cartItems.find(cartItem => cartItem.id === action.payload);
            let totalPrice = findItem.totalPrice;
            let subtotalPrice = 0;
            if (findItem.discountPrice) {
                subtotalPrice = findItem.discountPrice * findItem.quantity;
            }
            else {
                subtotalPrice = findItem.price * findItem.quantity;
            }
            state.cartItems = newCartItems;
            state.totalPrice -= totalPrice
            state.subtotalPrice -= subtotalPrice
            state.totalQuantity--;
        }
    }
})

export const cartActions = cartSlice.actions;
export default cartSlice;