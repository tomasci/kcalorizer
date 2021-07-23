import {apiUrl} from "../../api";
import React from "react";
import {useDispatch} from "react-redux";
import {push} from "../../redux/slices/SelectedProductsSlice";
import {init} from "../../redux/slices/ProductsOptionsSlice";
import {focusIn} from "../../redux/slices/ProductListSlice";

function SearchListItem({id, image, name, description, item}) {
    const dispatch = useDispatch()

    function ButtonClick(event, item) { // e, disp, item...
        /*
        first time I tried to get item by id from api
        but then I remember, that I already have selected items,
        so I can just push it into array without one more get
         */

        // add to selected products
        dispatch(push(item))
        // create default options
        dispatch(init(item))
        // animate
        dispatch(focusIn())
    }

    return (
        <div className="item" key={id}>
            <div className="image">
                <img src={apiUrl + image} alt=""/>
            </div>
            <div className="info">
                <div className="title">
                    {name}
                </div>
                <div className="description">
                    {description}
                </div>
            </div>
            <div className="add">
                <button onClick={(e) => {
                    ButtonClick(e, item) // ButtonClick(e, dispatch, item)
                }}>
                    Select
                </button>
            </div>
        </div>
    )
}

export default SearchListItem