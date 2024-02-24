import React, { createContext, useState } from "react";
import ComponentB2 from "./ComponentB2";

export const userContext = createContext(null);
const ComponentA2=()=>{
    const [name,setName]=useState('');
    const userContextValue ={name,setName}
    return(
        <userContext.Provider value={userContextValue} >
            <div>
                <h1>ComponentA2{name} </h1>
                <ComponentB2/>
            </div>
        </userContext.Provider>
    )
}
export default ComponentA2;