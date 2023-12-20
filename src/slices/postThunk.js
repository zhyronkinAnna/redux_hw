import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

export const posts = createAsyncThunk('posts', async () => {
    const response = await api.get("/posts");
    return response.data;
});

export const postAdd = createAsyncThunk('posts/add', async (payload) => {
    const response = await api.post("/posts", payload);
    return response.data;
});

export const postUpdate = createAsyncThunk('posts/update', async (payload) => {
    const response = await api.put(`/posts/${payload.id}`, payload);
    return response.data;
});

export const postDelete = createAsyncThunk('posts/delete', async (payload) => {
    const response = await api.delete(`/posts/${payload.id}`);
    return response.data;
});