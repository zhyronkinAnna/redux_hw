import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";
import {setToken} from '../utils/helperFunctions';

export const login = createAsyncThunk('auth/login', async (payload) => {
    const response = await api.post("/login", payload);
    setToken(response.data.token);
    return response.data;
});