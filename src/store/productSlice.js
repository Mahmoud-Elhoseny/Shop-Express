import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        const res = await fetch('https://dummyjson.com/products?limit=100')
        const data = await res.json()
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
}
)
export const getProduct = createAsyncThunk("products/getProduct", async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        const res = await fetch(`https://dummyjson.com/products/${id}?limit=100`)
        const data = await res.json()
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
}
)

const productSlice = createSlice({
    name: 'product',
    initialState: { products: null, isLoading: false, },
    reducers: {},
    extraReducers: (builder) => {
        // fetch product
        builder.addCase(fetchProducts.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false
            state.products = action.payload
        })

        // get product
        builder.addCase(getProduct.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getProduct.fulfilled, (state, action) => {
            state.isLoading = false
            state.products = action.payload

        })


    }
})
export default productSlice.reducer