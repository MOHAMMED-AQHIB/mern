import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch users from the API using fetch
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await fetch('https://reqres.in/api/users?page=2');
  const data = await response.json();
  return data.data; // Return the user data array
});

const userSlice = createSlice({
  name: 'users',
  initialState: {
    list: [],
    status: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default userSlice.reducer;