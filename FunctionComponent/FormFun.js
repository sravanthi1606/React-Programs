import React ,{useState} from "react";

const FormFun=()=>{
    const [emailText,setEamiltext]=useState("");
    const [password,setPassword]=useState("");
    const [errormsg,setErroMsg]=useState("");

    const handleEmail=(event)=>{
        setEamiltext(event.target.value);
    }
    const handlePassword=(event)=>{
        setPassword(event.target.value);
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        if(emailText===""||password===""){
            setErroMsg("Please Provide Both Email and Password");
        }
        else{
            setErroMsg(`username:${emailText} and password:${password}`);
        }
    }

    return(
        <form onSubmit={handleSubmit} className="formConatiner">
            <label htmlFor="emailText">Email</label>
            <input type="email" id="emailText" value={emailText} onChange={handleEmail}></input>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={handlePassword}></input>
            <button type="submit" id="submitbtn">Login</button>
            {errormsg && <h1>{errormsg}</h1>}

        </form>
    )
}
export default FormFun