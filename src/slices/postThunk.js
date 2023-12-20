import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

export const posts = createAsyncThunk('posts', async () => {
    const response = await api.get("/posts");
    return response.data;
});