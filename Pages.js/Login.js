import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavUserContext } from './RouterComponent';
import { useNavigate } from 'react-router-dom';

const Login=()=> {
    const [emailText,setEmail]=useState("");
    const [password,setPassword] = useState("");
    const [errorMsg,setErrorMsg] = useState("");

    const {setIsAuth}=useContext(NavUserContext);
    const navigate = useNavigate();

    const handleEmail=(event)=>{
        setEmail(event.target.value)
    }

    const handlePassword=(event)=>{
        setPassword(event.target.value)
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        if(emailText === "" || password === ""){
            setErrorMsg("Please enter both Email and Password")
        }
        else{
            setErrorMsg('');
            localStorage.setItem("username",emailText);
            setIsAuth(true);
            navigate('/');
        }
    }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="form-items" controlId="emailText">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={emailText} onChange={handleEmail}/>
      </Form.Group>

      <Form.Group className="form-items" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={handlePassword}/>
      </Form.Group>
      <Button variant="primary" className="form-items" type="submit">
        Submit
      </Button>
      {errorMsg && <h1>{errorMsg}</h1>}

    </Form>
    
  );
}

export default Login;