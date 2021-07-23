import {useSelector} from "react-redux";
import KCAL from "../KCAL/KCAL";
import ProductListItem from "./ProductListItem";

function ProductList() {
    const ProductListState = useSelector((state) => state.ProductList.value)
    const SearchInputFocus = useSelector((state) => state.SearchInputFocus.value)
    const SelectedProducts = useSelector((state) => state.SelectedProducts.value)

    return (
        <>
            <div className={SearchInputFocus === true && ProductListState === false ? 'productlist' : SearchInputFocus === true && ProductListState === true ? 'productlist productlist-focus' : 'productlist'}>
                <div className="wrapper">
                    <div className="counter">
                        <div className="list">
                            <h2>
                                Ingredients:
                            </h2>

                            <div className="items">
                                {SelectedProducts.map((item, index) => {
                                    return (
                                        <ProductListItem
                                            key={index}
                                            id={item.id}
                                            image={item.image.formats.small.url}
                                            name={item.name}
                                        />
                                    )
                                })}

                                {SelectedProducts.length < 1 ? (
                                    <p>
                                        No products selected
                                    </p>
                                ) : ''}
                            </div>
                        </div>

                        <div className="echo">
                            <KCAL/>

                            {/*<div className="copy">*/}
                            {/*    <button>*/}
                            {/*        Копировать результат*/}
                            {/*    </button>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductList