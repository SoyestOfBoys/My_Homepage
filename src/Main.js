import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";

const Main = () => {
return(
    <main>
        <Routes>
            <Route path='/' element={<App />} />
        </Routes>
    </main>


)
}

export default Main;