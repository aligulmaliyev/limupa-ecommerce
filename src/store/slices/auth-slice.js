import { createSlice } from "@reduxjs/toolkit";
import Notifilx from 'notiflix';

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
                Notifilx.Notify.success("Successful login");
            }
            else {
                Notifilx.Notify.failure("No such user exists");
            }
        },
        logout(state) {
            state.isAuth = false;
            Notifilx.Notify.success("Successful logout");
        },
    }
})

export const authActions = authSlice.actions;
export default authSlice;