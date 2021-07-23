import {apiUrl} from "../../api";
import Options from "./Options";
import {useState} from "react";

function ProductListItem({id, image, name}) {
    const [showOptions, setShowOptions] = useState(false)

    function toggleShowOptions() {
        if (showOptions) {
            setShowOptions(false)
        } else {
            setShowOptions(true)
        }
    }

    return (
        <div className="item" key={id}>
            <div className="default">
                <div className="image">
                    <img src={apiUrl + image} alt=""/>
                </div>
                <div className="title">
                    {name}
                </div>
                <div className="actions">
                    <button onClick={() => {
                        toggleShowOptions()
                    }}>
                        <div className="dot"/>
                        <div className="dot"/>
                        <div className="dot"/>
                    </button>
                </div>
            </div>

            <Options id={id} show={showOptions}/>
        </div>
    )
}

export default ProductListItem