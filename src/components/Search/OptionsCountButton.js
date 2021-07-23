import {update} from "../../redux/slices/ProductsOptionsSlice";
import {useDispatch} from "react-redux";

function OptionsCountButton({id, action}) {
    const dispatch = useDispatch()

    return (
        <div className="count-update">
            <button onClick={(e) => {
                dispatch(update({
                    id: id,
                    opts: {
                        field: 'count',
                        action: action
                    }
                }))
            }}>
                {(action ? '+' : '-')}
            </button>
        </div>
    )
}

export default OptionsCountButton