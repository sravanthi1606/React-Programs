import React from "react";
import NavbarCom from "./Pages/Navbar";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Conatct from "./Pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <NavbarCom />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/contact" element={<Conatct/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;
