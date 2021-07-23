import { useSelector } from "react-redux";

function Welcome() {
    const SearchInputFocus = useSelector((state) => state.SearchInputFocus.value)

    return (
        <>
            <div className={SearchInputFocus ? 'welcome welcome-hidden' : 'welcome'}>
                <h2>
                    Start by searching the products you need
                </h2>
                <h3>
                    Just enter a name, for example "carrot"
                </h3>
            </div>
        </>
    )
}

export default Welcome