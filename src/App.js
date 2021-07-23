import './App.scss';
import React from "react";
import Demo from "./components/Demo";
import Header from "./components/Header/Header";
import Liability from "./components/Liability";

function App() {
    return (
        <div className="page">
            <Header/>
            <Demo/>
            <Liability/>
        </div>
    )
}

export default App