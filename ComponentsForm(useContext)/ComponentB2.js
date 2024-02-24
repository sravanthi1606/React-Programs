import React, { useContext } from "react";
import {userContext} from "./ComponentA2";


const ComponentB2=()=>{
    const {name,setName}=useContext(userContext);
    return(
        <div>
            <h1>Component B2 </h1>
            <form>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
            </form>
        </div>
    )
}
export default ComponentB2