import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    isActiveMenu: false,
    miniCart: false,
    setting: false,
    currency: false,
    language: false
};

const configSlice = createSlice({
    name: 'config',
    initialState,
    reducers: {
        menuToggle(state) {
            state.isActiveMenu = !state.isActiveMenu
        },
        miniCartToggle(state) {
            state.miniCart = !state.miniCart
        },
        settingToggle(state) {
            state.setting = !state.setting
        },
        currencyToggle(state) {
            state.currency = !state.currency
        },
        languageToggle(state) {
            state.language = !state.language
        }
    }
});

export const configActions = configSlice.actions;
export default configSlice