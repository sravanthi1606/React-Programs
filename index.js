import React, { Component, createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import ComponentA1 from './Components(useContext)/ComponentA1';
// import ComponentA from "./Components(props)/ComponentA"
import ComponentA2 from './ComponentsForm(useContext)/ComponentA2';


export const ComponentContext = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <ComponentA name="sravanthi" />
    // <ComponentContext.Provider value={ {name:"sravanthi"}}>
    //     <ComponentA1 />
    // </ComponentContext.Provider>

    <ComponentA2 />

);

