import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './ClassComponent/Home';
import Contact from './FunctionComponent/Contact';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
const obj={
  name:"sravanthi",
   age:21
}
root.render(
  <div>
  <Home/>
  <Contact obj={obj}/>
  </div>
);


