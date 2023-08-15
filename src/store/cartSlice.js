import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: { WishListProducts: [], carts: [] },
    reducers: {
        addWishlist: (state, action) => {
            const isProductInWishlist = state.WishListProducts.some(item => item.id === action.payload.id);
            if (!isProductInWishlist) {
                state.WishListProducts.push(action.payload);
            }
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
    }
}
);
export const { addWishlist, addToCart } = cartSlice.actions


export default cartSlice.reducer