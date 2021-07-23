import { createSlice } from "@reduxjs/toolkit";

export const SelectedProductsSlice = createSlice({
    name: 'SelectedProducts',
    initialState: {
        value: []
    },
    reducers: {
        push: (state, action) => {

            if (state.value.length < 1) {
                // if there no one item in array then create array with first item
                state.value = [action.payload]
            } else {
                // search for element in array
                let arr = state.value
                let find = arr.indexOf(arr.find(search => search.id === action.payload.id))

                // if not - push
                if (find === -1) {
                    state.value = state.value.concat(action.payload)
                }
            }

        },
        remove: (state, action) => {
            let arr = state.value
            let id = action.payload.id
            let index = searchInArray(arr, id)

            if (index !== -1) {
                // delete
                arr.splice(index, 1)
                state.value = arr
            }
        }
    }
})

function searchInArray(array, id) {
    return array.indexOf(
        array.find(search => search.id === id)
    )
}

export const { push, remove } = SelectedProductsSlice.actions
export default SelectedProductsSlice.reducer