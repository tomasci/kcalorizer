import Welcome from "./Welcome";
import Search from "./Search/Search";
import Suggest from "./Search/Suggest";

function Demo() {
    return (
        <>
            <div className="demo">
                <div className="container">
                    <Welcome/>
                    <Search/>
                    <Suggest/>
                </div>
            </div>
        </>
    )
}

export default Demo