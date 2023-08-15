import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: { isLoggedIn: false, Name: "", Password: ""},
    reducers: {
        logIn: (state) => {
            state.isLoggedIn = !state.isLoggedIn;
        },
        signUp: (state, action) => {
            state.Name = action.payload?.userName
            state.Password = action.payload?.password
        },
    }
}
);
export const { logIn, signUp } = authSlice.actions


export default authSlice.reducer