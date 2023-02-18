import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://63f0f0205703e063fa4f4924.mockapi.io';

export const fetchUsers = createAsyncThunk('users/get', async (_, thunkAPI) => {
  try {
    const { data } = await axios.get('/users');
    return data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
});
export const fetchUserDetails = createAsyncThunk(
  'user/details',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/users/${id}`);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteUser = createAsyncThunk(
  'user/delete',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/users/${id}`);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
