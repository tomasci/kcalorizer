import { useSelector, useDispatch } from "react-redux";
import { setData } from "../../redux/slices/SearchQuerySlice";
import makeApiUrl from "../../api";
import {focusOut} from "../../redux/slices/ProductListSlice";
import {sifIn} from "../../redux/slices/SearchInputFocusSlice";

function Search() {
    const SearchInputFocus = useSelector((state) => state.SearchInputFocus.value)
    const dispatch = useDispatch()

    function OnKeyUp(event, dispatch) {
        let query = event.target.value

        if (query.length > 0) {
            fetch(makeApiUrl('/products', {
                '_where[name_contains]': query
            }))
                .then(res => res.json())
                .then(result => {
                    if(result) {
                        dispatch(setData(result))
                    }
                })
        } else {
            dispatch(setData([]))
        }
    }

    return (
        <>
            <div className={SearchInputFocus ? 'search search-focus' : 'search'}>
                <div className="input">
                    <input type="text" placeholder="Type something"
                           onFocus={() => {
                               // todo: so baaaaad..!
                               dispatch(sifIn())
                               dispatch(focusOut())
                           }}
                           onKeyUp={(e) => {
                               OnKeyUp(e, dispatch)
                           }}/>
                </div>
            </div>
        </>
    )
}



export default Search