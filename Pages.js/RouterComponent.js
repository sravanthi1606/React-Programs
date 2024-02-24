import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import SignUp from "./SignUp";
import NoPage from './NoPage'
import Navbar from "./Navbar";

export const NavUserContext = createContext(null);

const RouterComponent = () => {
    const isLoggedIn = localStorage.getItem("username") !== null;
    const [isAuth, setIsAuth] = useState(isLoggedIn ?? false);
    const usercontext = { isAuth, setIsAuth };
    
    return (
        <>
            <NavUserContext.Provider value={usercontext}>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Home />}></Route>
                        {
                            isAuth && (
                                <>
                                    <Route path='/about' element={<About />}></Route>
                                    <Route path='/contact' element={<Contact />}></Route>
                                </>
                            )
                        }
                        {
                            !isAuth && (
                                <>
                                    <Route path='/signup' element={<SignUp />}></Route>
                                </>
                            )
                        }
                        <Route path='/login' element={<Login />}></Route>
                        <Route path="*" element={<NoPage />}></Route>
                    </Routes>
                </BrowserRouter>
            </NavUserContext.Provider>

        </>
    )

}
export default RouterComponent;