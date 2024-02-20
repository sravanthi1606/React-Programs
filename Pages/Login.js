import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

const Login=()=>{
    const [emailText,setEmailText]=useState('');
    const [password,setPassword]=useState('');
    const [errormsg,setErrorMsg]=useState('');
    const navigate=useNavigate();

    const handleEmail=(event)=>{
        setEmailText(event.target.value)
    }
    const handlePassword=(event)=>{
        setPassword(event.target.value)
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        if(emailText==="" || password==="" )
        {
            setErrorMsg ( "Please provide both Email and Password");
        }
        else
        {
            navigate("/",{state :{email:emailText}});
        }
    }

    return(
        <div>  
            <form className="formContainer" onSubmit={handleSubmit}>
                <div className="form-group ">
                <label htmlFor="emailText">Email address</label>
                <input
                    type="email"
                    id="emailText"
                    placeholder="Enter email"
                    value={emailText}
                    onChange={handleEmail}

                />
                </div>
                <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePassword}
                />
                </div>
                <button type="submit" className="btn btn-primary">
                Log in
                </button>
                {errormsg && <h1>{errormsg}</h1>}
        </form>
        </div>
    );
}
export default Login;