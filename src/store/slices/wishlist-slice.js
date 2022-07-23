import { createSlice } from "@reduxjs/toolkit";
import Notiflix from "notiflix";

const initialState = {
    wishlistItems: [],
    totalQuantity: 0,
}

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        hydrate: (state, action) => {
            return action.payload
        },
        wishListToggler(state, action) {
            let newItem = action.payload;
            let existingItem = state.wishlistItems.find(item => item.id === newItem.id);
            if (localStorage.getItem('wishlist') === undefined) {
                localStorage.setItem('wishlist', [])
            }
            if (existingItem !== undefined) {
                let newWishListItems = state.wishlistItems.filter(wishlistItem => wishlistItem.id !== newItem.id);
                localStorage.setItem('wishlist', state.wishlistItems)
                state.wishlistItems = newWishListItems;
                state.totalQuantity--;
                Notiflix.Notify.success(newItem.name + " remove from wishlist..");
            }
            else {
                state.wishlistItems.push(newItem);
                state.totalQuantity++;
                Notiflix.Notify.success(newItem.name + " add to wishlist..");
            }
        },
    }
})

export const wishlistActions = wishlistSlice.actions;
export default wishlistSlice;