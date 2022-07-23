import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuth: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        hydrate: (state, action) => {
            return action.payload
        },
        login(state, action) {
            // eslint-disable-next-line
            if (action.payload.email == "info@limupa.com" && action.payload.password == 12345678) {
                state.isAuth = true;
            }
        },
        logout(state) {
            state.isAuth = false;
        },
    }
})

export const authActions = authSlice.actions;
export default authSlice;