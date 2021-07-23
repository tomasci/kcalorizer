import { useSelector } from "react-redux";
// import List from "./List";
// import SearchList from "./SearchList";
import ProductList from "./ProductList";
import SearchResults from "./SearchResults";
import SearchSuggestions from "./SearchSuggestions";


function Suggest() {
    const SearchInputFocus = useSelector((state) => state.SearchInputFocus.value)
    const SearchQuery = useSelector((state) => state.SearchQuery.value)
    const ProductListState = useSelector((state) => state.ProductList.value)

    return (
        <>
            {/*<div className={SearchFocus ? 'results results-focus' : 'results'}>*/}
            <div className={SearchInputFocus === true && ProductListState === false ? 'results results-focus' : SearchInputFocus === true && ProductListState === true ? 'results' : 'results'}>
                <div className="wrapper">
                    {SearchQuery.length > 0 ? (
                        <div className="suggestions">
                            <h2>
                                Search results
                            </h2>

                            <SearchResults/>
                        </div>
                    ) : (
                        <div className="suggestions">
                            <h2>
                                Popular
                            </h2>

                            <SearchSuggestions/>
                        </div>
                    )}
                </div>
            </div>
            <ProductList/>
        </>
    )
}

// function check(searchFocus, productFocus) {
//     if (searchFocus === false && productFocus === false) {
//         return (
//             <div className="results">
//         )
//     }
// }

export default Suggest