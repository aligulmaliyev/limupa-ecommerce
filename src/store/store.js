import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import cartSlice from './slices/cart-slice';
import productsSlice from './slices/products-slice';
import wishlistSlice from './slices/wishlist-slice';

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        wishlist: wishlistSlice.reducer,
        productsReducer: productsSlice.reducer,
    },
    // middleware: [thunk]
});
store.subscribe(() => {
    localStorage.setItem('wishlist', JSON.stringify(store.getState().wishlist));
    localStorage.setItem('cart', JSON.stringify(store.getState().cart))
})

export default store;