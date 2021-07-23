import { createSlice } from "@reduxjs/toolkit";

export const SearchInputFocusSlice = createSlice({
    name: 'SearchInputFocus',
    initialState: {
        value: false
    },
    reducers: {
        // todo: rename to sifToggle(state: true | false)
        // todo: also idk why sifOut not in use xD
        sifIn: (state) => {
            state.value = true
        },
        // sifOut: (state) => {
        //     state.value = false
        // }
    }
})

export const { sifIn } = SearchInputFocusSlice.actions
export default SearchInputFocusSlice.reducer