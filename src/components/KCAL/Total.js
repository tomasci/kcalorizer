function Total(props) {
    const {title, kcal} = props

    return (
        <div className="total">
            {kcal}<br/>
            {title}
        </div>
    )
}

export default Total