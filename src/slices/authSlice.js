import { createSlice } from "@reduxjs/toolkit"
import { login } from "./authThunk";

const initialState = {
    token: null,
    loading: false,
    userData: {},
    error: null
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(login.pending, (state, action) => {
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
    }
});

export default authSlice.reducer;