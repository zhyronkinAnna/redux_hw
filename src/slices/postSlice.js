import { createSlice } from "@reduxjs/toolkit"
import { postAdd, posts } from "./postThunk";


const initialState = {
    data: [],
    loading: false,
    error: null
}


export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(posts.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(posts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
            })
            .addCase(posts.rejected, (state, action, error) => {
                state.loading = false;
                state.error = action.payload
            })

            .addCase(postAdd.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(postAdd.fulfilled, (state, action) => {
                state.data = [...state.data, action.payload];
                state.loading = false;
            })
            .addCase(postAdd.rejected, (state, action, error) => {
                state.loading = false;
                state.error = action.payload
            })
    }
});

export default postSlice.reducer;