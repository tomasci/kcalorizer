import React from "react";
import {useSelector} from "react-redux";
import SearchListItem from "./SearchListItem";

function SearchResults() {
    const SearchQuery = useSelector((state) => state.SearchQuery.value)

    return (
        <div className="list">
            {SearchQuery.map((item, index) => {
                return (
                    <SearchListItem
                        key={index}
                        id={item.id}
                        image={item.image.formats.small.url}
                        name={item.name}
                        description={item.description}
                        item={item}
                    />
                )
            })}
        </div>
    )
}

export default SearchResults