import { configureStore } from "@reduxjs/toolkit";
import SearchInputFocusSlice from "./slices/SearchInputFocusSlice";
import SearchQuerySlice from "./slices/SearchQuerySlice";
import SelectedProductsSlice from "./slices/SelectedProductsSlice";
import ProductListSlice from "./slices/ProductListSlice";
import ProductsOptionsSlice from "./slices/ProductsOptionsSlice";

export default configureStore({
    reducer: {
        SearchInputFocus: SearchInputFocusSlice,
        SearchQuery: SearchQuerySlice,
        SelectedProducts: SelectedProductsSlice,
        ProductList: ProductListSlice,
        ProductsOptions: ProductsOptionsSlice
    }
})