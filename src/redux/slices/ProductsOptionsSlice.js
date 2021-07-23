import { createSlice } from "@reduxjs/toolkit";

export const ProductsOptionsSlice = createSlice({
    name: 'ProductsOptions',
    initialState: {
        value: []
    },
    reducers: {
        init: (state, action) => {
            let searchResult = searchInArray(state.value, action.payload.id)
            if (searchResult === -1) {
                state.value = state.value.concat(
                    makeEmptyObject(action.payload)
                )
            }
        },
        update: (state, action) => {
            state.value = updateObjectInArray(state.value, action.payload)
            // let searchResult = searchInArray(state.value, action.payload.id)
            //
            // if (searchResult === -1) {
            //     state.value = state.value.concat(
            //         makeEmptyObject(action.payload.id)
            //     )
            // } else {
            //     console.log('push 2')
            //     state.value = updateObjectInArray(state.value, action.payload)
            // }
        }
    }
})

function searchInArray(array, id) {
    return array.indexOf(
        array.find(search => search.id === id)
    )
}

function makeEmptyObject(item) {
    return {
        id: item.id,
        count: 1,
        weight: item.avg_weight
    }
}

function updateObjectInArray(array, object) {
    return array.map((item, index) => {
        if (item.id !== object.id) {
            // This isn't the item we care about - keep it as-is
            return item
        }

        switch (object.opts.field) {
            case "count":
                if (!object.opts.action && (item.count - 1 < 1)) return item
                object.opts.action ? item.count++ : item.count--
                break;

            case "weight":
                item.weight = object.opts.value
                break;

            default:
                break;
        }

        return item
    })
}

export const { update, init } = ProductsOptionsSlice.actions
export default ProductsOptionsSlice.reducer