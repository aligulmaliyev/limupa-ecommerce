import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allProducts: [],
    filterProducts: []
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        allProducts(state, action) {
            state.allProducts = action.payload;
        },
        filterProducts(state, action) {
            state.filterProducts = action.payload;
        }
    }
})

export const productsActions = productsSlice.actions;
export default productsSlice;