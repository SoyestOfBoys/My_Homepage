import React, { useReducer } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from './Pages/Home/Home'

const Main = () => {
return(
    <main>
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
    </main>


)
}

export default Main;