import { createSlice } from "@reduxjs/toolkit";

export const SearchQuerySlice = createSlice({
    name: 'SearchQuery',
    initialState: {
        value: []
    },
    reducers: {
        setData: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setData } = SearchQuerySlice.actions
export default SearchQuerySlice.reducer