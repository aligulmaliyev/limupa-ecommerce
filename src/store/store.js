import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/auth-slice';
import cartSlice from './slices/cart-slice';
import configSlice from './slices/config-slice';
import productsSlice from './slices/products-slice';
import wishlistSlice from './slices/wishlist-slice';

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        wishlist: wishlistSlice.reducer,
        productsReducer: productsSlice.reducer,
        auth: authSlice.reducer,
        config: configSlice.reducer
    },
});
store.subscribe(() => {
    localStorage.setItem('wishlist', JSON.stringify(store.getState().wishlist));
    localStorage.setItem('cart', JSON.stringify(store.getState().cart));
    localStorage.setItem('user', JSON.stringify(store.getState().auth))
})

export default store;