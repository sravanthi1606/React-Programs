import React, { useContext } from "react";
import {ComponentContext} from '..'

const ComponentD=()=>{
    const {name} = useContext(ComponentContext);
    return(
        <div>
            <h1>Component D {name}</h1>
        </div>
    )
}
export default ComponentD;