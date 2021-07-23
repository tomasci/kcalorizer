import React, {useEffect, useState} from "react";
import makeApiUrl from "../../api";
import SearchListItem from "./SearchListItem";

function SearchSuggestions() {
    const [items, setItems] = useState([])

    useEffect(() => {
        // get suggestions
        fetch(makeApiUrl('/suggestions', {
            _limit: 4
        }))
            .then(res => res.json())
            .then((result) => {
                setItems(result)
            })
    }, [])

    return (
        <div className="list">
            {items.map((item, index) => {
                return (
                    <SearchListItem
                        key={index}
                        id={item.products[0].id}
                        image={item.products[0].image.formats.small.url}
                        name={item.products[0].name}
                        description={item.products[0].description}
                        item={item.products[0]}
                    />
                )
            })}
        </div>
    )
}

export default SearchSuggestions