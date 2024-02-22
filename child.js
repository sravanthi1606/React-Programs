import React, { useState } from "react";

const Child=({handleParentCallBack})=>{
  const [name,setName]=useState("");

  const handleValue=(event)=>{
    setName(event.target.value);
    handleParentCallBack(event.target.value);
  }
  return(
    <div>
      <form>
        <input
          type="text" value={name} onChange={handleValue}>
        </input>
      </form>
    </div>
  )
}
export default Child;