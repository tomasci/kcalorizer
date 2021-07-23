function Num(props) {
    const { title, num } = props

    return (
        <div className="num">
            <span>
                {num}
            </span>
            <br/>
            {title}
        </div>
    )
}

export default Num