import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home'
import GenCon2022 from './Pages/Marketing/MarketingPages/GenCon2022'

const Main = () => {
return(
    <main>
            <Routes>
                <Route  path='/' element={<Home />} />
                <Route path='GC22' element={<GenCon2022 />} />
            </Routes>
    </main>


)
}

export default Main;