import React from "react";
import ComponentB from "./ComponentB";

const ComponentA=({name})=>{
    return(
        <div>
            <h1>Component A</h1>
            <ComponentB  name1={name }/>
        </div>
    )
}
export default ComponentA