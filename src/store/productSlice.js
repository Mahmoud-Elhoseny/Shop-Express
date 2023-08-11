import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        const res = await fetch('https://dummyjson.com/products')
        const data = await res.json()

        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
}
)

const productSlice = createSlice({
    name: 'product',
    initialState: { products: null, isLoading: false, error: null, },
    reducers: {},
    extraReducers: (builder) => {
        // fetch product
        builder.addCase(fetchProducts.pending, (state) => {
            state.isLoading = true
            state.error = null
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false
            state.products = action.payload
            console.log(state.products);
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })

    }
})
export default productSlice.reducer