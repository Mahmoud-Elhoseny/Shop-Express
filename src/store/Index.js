import { configureStore } from "@reduxjs/toolkit";
import product from './productSlice'
import auth from './authSlice'
import cart from './cartSlice'

export default configureStore({
    reducer: {
        product,
        auth,
        cart
    }
})
