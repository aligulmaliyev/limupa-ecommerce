import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishlistItems: [],
    totalQuantity: 0,
}

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        wishListToggler(state, action) {
            let newItem = action.payload;
            let existingItem = state.wishlistItems.find(item => item.id === newItem.id);
            if (existingItem !== undefined) {
                let newWishListItems = state.wishlistItems.filter(wishlistItem => wishlistItem.id !== newItem.id);
                state.wishlistItems = newWishListItems;
                state.totalQuantity--;
            }
            else {
                state.wishlistItems.push(newItem);
                state.totalQuantity++;
            }
        },
    }
})

export const wishlistActions = wishlistSlice.actions;
export default wishlistSlice;