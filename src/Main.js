import React, { useReducer } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './Pages/Home/Home'
import GC22 from './Pages/Marketing/MarketingPages/GenCon2022'

const Main = () => {
return(
    <main>
            <Routes>
                <Route  path='/' element={<Home />} />
                <Route path='GC22' element={<GC22 />} />
            </Routes>
    </main>


)
}

export default Main;