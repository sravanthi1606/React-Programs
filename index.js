import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './ClassComponent/homeclass';
import Homefun from './FunctionalComponet/Homefun'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Home />
    <Homefun />
  </div>
);

