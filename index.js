import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeClass from './ClassComponent/homeclass';
import ServiceClass from './ClassComponent/serviceclass';
import ContactClass from './ClassComponent/contactclass';
import Homefun from './FunctionComponent/homeFun';
import Servicefun from './FunctionComponent/serviceFun';
import Contactfun from './FunctionComponent/contactFun';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <HomeClass name="Sravanthi" />
    <ServiceClass name="Maturi"/>
    <ContactClass name="Welcome"/>

    <Homefun name="Sravanthi"/>
    <Servicefun name="Maturi"/>
    <Contactfun name="Welcome"/>
  </div>
);

