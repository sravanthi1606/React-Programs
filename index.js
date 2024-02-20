import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LifeCycleClass from './ClassComponent/LifecycleClass';
import LifeCycleFun from './FunctionComponent/LifecycleFun';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <LifeCycleClass name="Maturi"/>
    <LifeCycleFun/>
  </div>
);

