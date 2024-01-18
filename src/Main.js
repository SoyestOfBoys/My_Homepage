import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import GenCon22 from "./Pages/Marketing/MarketingPages/GenCon22";

const Main = () => {
return(
    <main>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/GenCon22' element={<GenCon22 />} />
        </Routes>
    </main>


)
}

export default Main;