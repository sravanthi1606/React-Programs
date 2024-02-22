import React, { useState } from "react";
import Child from "./child";

const Parent=()=>{
    const [name,setName]=useState('');
    const handleParentCallBack=(value)=>{
        console.log(value);
        setName(value);
    }

    return(
        <div>
            <h1>Name of Child Component:{name}</h1>
            <Child handleParentCallBack={handleParentCallBack}/>
        </div>
    )
}
export default Parent;