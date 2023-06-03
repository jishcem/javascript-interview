import { createSlice } from '@reduxjs/toolkit'
import users from './userData';

const initialState = {users};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
});

export const selectUsers = (state) => state.users;

export default usersSlice.reducer;