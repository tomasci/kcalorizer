import {useSelector} from "react-redux";
import roundTo from "round-to";
import Total from "./Total";
import Num from "./Num";
import Tip from "./Tip";

function KCAL() {
    const SelectedProducts = useSelector((state) => state.SelectedProducts.value)
    const ProductsOptions = useSelector((state) => state.ProductsOptions.value)
    let calcResult = calculate(SelectedProducts, ProductsOptions)

    if (calcResult === null) return null

    return (
        <>
            {calcResult.map((result, index) => {
                return (
                    <div className="full" key={index}>
                        <Total title={"kcal"} kcal={result.kcal}/>
                        <div className="bzu">
                            <Num title={"proteins"} num={result.proteins}/>
                            <Num title={"fats"} num={result.fat}/>
                            <Num title={"carbs"} num={result.carb}/>
                        </div>
                        <Tip isFullDish={result.isFullDish}/>
                    </div>
                )
            })}
        </>
    )
}

function calculate(sp, options) {
    let result = []
    let objectStruct = {
        kcal: 0,
        proteins: 0,
        fat: 0,
        carb: 0,
        isFullDish: false
    }

    let totalWeight = 0
    let defaults = {
        count: 1,
        weight: 1
    }

    var calcTotal = Object.assign({}, objectStruct)
    var calcPartly = Object.assign({}, objectStruct)

    sp.forEach((item) => {
        let search = options.indexOf(options.find(s => s.id === item.id))
        let opts = options[search]

        if (search !== -1) {
            defaults = {
                count: opts.count,
                weight: opts.weight
            }
        }

        totalWeight += defaults.count * defaults.weight

        calcTotal.kcal = roundTo((calcTotal.kcal + ((item.kcal_100g * defaults.weight * defaults.count) / 100)), 2)
        calcTotal.proteins = roundTo((calcTotal.proteins + ((item.proteins_100g * defaults.weight * defaults.count) / 100)), 2)
        calcTotal.fat = roundTo((calcTotal.fat + ((item.fats_100g * defaults.weight * defaults.count) / 100)), 2)
        calcTotal.carb = roundTo((calcTotal.carb + ((item.carb_100g * defaults.weight * defaults.count) / 100)), 2)
        calcTotal.isFullDish = true
    })

    if (calcTotal.kcal !== 0 && calcTotal.proteins !== 0 && calcTotal.fat !== 0 && calcTotal.carb !== 0) {
        calcPartly.kcal = roundTo(100 * calcTotal.kcal / totalWeight, 2)
        calcPartly.proteins = roundTo(100 * calcTotal.proteins / totalWeight, 2)
        calcPartly.fat = roundTo(100 * calcTotal.fat / totalWeight, 2)
        calcPartly.carb = roundTo(100 * calcTotal.carb / totalWeight, 2)
        calcPartly.isFullDish = false

        result.push(calcTotal)
        result.push(calcPartly)

        return result
    }

    return null
}

export default KCAL