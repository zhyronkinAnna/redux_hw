import { createSlice } from "@reduxjs/toolkit"
import { fetchUserData, login, logout, registration } from "./authThunk";

const initialState = {
    token: null,
    userData: {},
    loading: false,
    error: null
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(logout.fulfilled, (state, action) => {
                state.loading = false;
                state.token = null;
                state.userData = {};
            })
            .addCase(login.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.token = action.payload.token;
                state.userData = action.payload.user;
                state.loading = false;
            })
            .addCase(login.rejected, (state, action, error) => {
                state.loading = false;
                state.error = action.payload
            })

            .addCase(fetchUserData.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(fetchUserData.fulfilled, (state, action) => {
                state.token = action.payload.token;
                state.userData = action.payload.user;
                state.loading = false;
            })
            .addCase(fetchUserData.rejected, (state, action, error) => {
                state.loading = false;
                state.error = action.payload;
                state.token = null;
                state.userData = {}
            })
            .addCase(registration.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(registration.fulfilled, (state, action) => {
                state.token = action.payload.token;
                state.userData = action.payload.user;
                state.loading = false;
            })
            .addCase(registration.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
});

export default authSlice.reducer;