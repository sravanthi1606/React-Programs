import React from "react";
import ComponentC from "./ComponentC";
const ComponentB=({name1})=>{
    return(
        <div>
            <h1>Component B</h1>
            <ComponentC name2={name1 }/>
        </div>
    )
}
export default ComponentB