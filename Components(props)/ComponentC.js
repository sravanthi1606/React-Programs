import React from "react";
import ComponentD from "./ComponentD";

const ComponentC=({name2})=>{
    return(
        <div>
            <h1>Component C</h1>
            <ComponentD name3={name2 }/>
        </div>
    )
}
export default ComponentC;