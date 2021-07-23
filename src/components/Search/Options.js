import OptionsCountButton from "./OptionsCountButton";
import {update} from "../../redux/slices/ProductsOptionsSlice";
import {remove} from "../../redux/slices/SelectedProductsSlice"
import {useDispatch, useSelector} from "react-redux";

function Options({id, show}) {
    const ProductsOptions = useSelector((state) => state.ProductsOptions.value)
    const dispatch = useDispatch()

    function removeProductFromSelected(id) {
        dispatch(remove({
            id: id
        }))
    }

    return (
        <div className={'options' + (show ? ' options-show' : '')}>
            <div className="count">
                <OptionsCountButton id={id} action={false}/>
                <div className="number">
                    {ProductsOptions.find(s => s.id === id).count}
                </div>
                <OptionsCountButton id={id} action={true}/>
            </div>
            <div className="weight">
                <div className="label">
                    avg. weight of 1 pcs
                </div>
                <input
                    type="number"
                    defaultValue={
                        ProductsOptions.find(s => s.id === id).weight
                    }
                    onChange={(e) => {
                        dispatch(update({
                            id: id,
                            opts: {
                                field: 'weight',
                                value: e.target.value
                            }
                        }))
                    }}
                />
            </div>
            <div className="rem">
                <button onClick={() => {
                    removeProductFromSelected(id)
                }}>
                    Remove product
                </button>
            </div>
        </div>
    )
}

export default Options