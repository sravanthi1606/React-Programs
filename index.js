import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Pages/Home';
import About from './Pages/AboutUs';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import SingIn from './Pages/SignUp';
import NoPage from './Pages/NoPage';
import Navbar from './Pages/Navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/sign' element={<SingIn/>}></Route>
      <Route path='*' element={<NoPage/>}></Route>
    </Routes>
  </BrowserRouter>

);
