import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slices/cart-slice';
import productsSlice from './slices/products-slice';

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        products:productsSlice.reducer
    }
});

export default store;