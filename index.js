import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import FormClass from './ClassComponent/FormClass';
// import FormFun from './FunctionComponent/FormFun';
// import LoginForm from './FunctionComponent/login';
import Signup from './FunctionComponent/SignUp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    {/* <FormClass/> */}
    {/* <FormFun/> */}
    {/* <LoginForm/> */}
    <Signup/>
  </div>
);

