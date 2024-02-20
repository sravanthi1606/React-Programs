import React, {useEffect,useState}from "react";

const LifeCycleFun=()=>{
    const [count,setCount]=useState(0);
    useEffect(()=>{
        console.log("useeffect");
    },[])
    return (
        <div>
            <button type="submit" onClick={()=>setCount(count+1)}>Increment</button>
            <p>{count}</p>
            <button type="submit" onClick={()=>setCount(count-1)}>Decrement</button>
        </div>
    )
}
export default LifeCycleFun;