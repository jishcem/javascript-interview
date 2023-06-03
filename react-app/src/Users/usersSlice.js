import { createSlice } from '@reduxjs/toolkit'
import users from './userData';

const initialState = {users};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        add: (state, action) => {
            state.users.push({...action.payload, id: state.users.length + 1 });
        },
    }
});

export const { add } = usersSlice.actions;

export const selectUsers = (state) => state.users.users;

export default usersSlice.reducer;