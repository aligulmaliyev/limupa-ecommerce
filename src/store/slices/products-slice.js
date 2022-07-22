import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../actions/product-actions";

const initialState = {
    loading: false,
    error: '',
    products: [],
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
            state.error = ''
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.products = [];
            state.error = action.error.message
        });
    }
})

export const productsActions = productsSlice.actions;
export default productsSlice;