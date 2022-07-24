import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    isActiveMenu: false
};

const configSlice = createSlice({
    name: 'config',
    initialState,
    reducers: {
        menuToggle(state) {
            state.isActiveMenu = !state.isActiveMenu
        }
    }
});

export const configActions = configSlice.actions;
export default configSlice