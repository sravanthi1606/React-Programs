import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
// import Parent from './parent';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Pages/Home';
import About from './Pages/AboutUs';
import Career from './Pages/career';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import SingIn from './Pages/SignUp';
import NoPage from './Pages/NoPage';
import Navbar from './Pages/Navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>  
  {/* <Parent/> */}
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/career' element={<Career/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/sign' element={<SingIn/>}></Route>
      <Route path='*' element={<NoPage/>}></Route>
    </Routes>
  </BrowserRouter>
  </>

);


