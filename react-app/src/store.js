import { configureStore } from "@reduxjs/toolkit"
import userReducer from './Users/usersSlice.js';

export default configureStore({
    reducer: {
        users: userReducer
    }
});