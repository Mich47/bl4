import { createSlice } from '@reduxjs/toolkit';
import { deleteUser, fetchUserDetails, fetchUsers } from './users.operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  currentUser: {},
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = payload;
        state.currentUser = null;
      })
      .addCase(fetchUsers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchUserDetails.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchUserDetails.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.currentUser = payload;
        // state.currentUser = null;
      })
      .addCase(fetchUserDetails.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(deleteUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(({ id }) => id !== payload.id);
        state.currentUser = null;
      })
      .addCase(deleteUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const usersReducer = usersSlice.reducer;
