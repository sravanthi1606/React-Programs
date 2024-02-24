import React, {  useContext } from "react";
import ComponentC from "./ComponentC1";
import {ComponentContext} from ".."


const ComponentB=()=>{
    const {name} =useContext(ComponentContext);
    return(
        <div>
            <h1>Component B {name}</h1>
            <ComponentC />
        </div>
    )
}
export default ComponentB