function Tip(props) {
    const {isFullDish} = props

    return (
        <div className="info">
            when calculating<br/>
            {isFullDish ? 'for the whole dish' : 'per 100 grams'}
        </div>
    )
}

export default Tip