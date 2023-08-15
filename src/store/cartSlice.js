import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: { WishListProducts: [], carts: [] },
    reducers: {
        addToWishlist: (state, action) => {
            const isProductInWishlist = state.WishListProducts.some(item => item.id === action.payload.id);
            if (!isProductInWishlist) {
                state.WishListProducts.push(action.payload);
            }
        },
        removeFromWishlist: (state, action) => {
            state.WishListProducts = state.WishListProducts.filter(item => item.id !== action.payload.id)
        },
        addToCart: (state, action) => {
            const isProductInCart = state.carts.find(item => item.id === action.payload.id)
            if (isProductInCart) {
                const tempCart = state.carts.map(item => {
                    if (item.id === action.payload.id) {
                        let tempQty = item.quantity + action.payload.quantity
                        return {
                            ...item, quantity: tempQty
                        }
                    } else {
                        return item
                    }
                })
                state.carts = tempCart
            } else {
                state.carts.push(action.payload)
            }
        }
        , removeFromCartBasket: (state, action) => {
            state.carts = state.carts.filter((item)=>item.id !== action.payload.id)
        },
    }
}
);
export const { addToWishlist, addToCart, removeFromWishlist, removeFromCartBasket } = cartSlice.actions


export default cartSlice.reducer