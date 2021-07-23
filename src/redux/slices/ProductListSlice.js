import { createSlice } from "@reduxjs/toolkit";

export const ProductListSlice = createSlice({
    name: 'ProductList',
    initialState: {
        value: false
    },
    reducers: {
        // todo: productListToggle(state: true | false)
        focusIn: (state, action) => {
            state.value = true
        },
        focusOut: (state, action) => {
            state.value = false
        }
    }
})

export const { focusIn, focusOut } = ProductListSlice.actions
export default ProductListSlice.reducer