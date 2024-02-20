// import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";

class FormClass extends React.Component{
    constructor(){
        super();
        this.state={
            emailText:"",
            password:"",
            errormsg:""
        };
    }
    handleEmail=(event)=>{
        this.setState({
            emailText:event.target.value,
        });
    };
    handlePassword=(event)=>{
        this.setState({
            password:event.target.value,
        });
    };
    handlesubmit=(event)=>{
        event.preventDefault();
        const {emailText,password}=this.state;
        if(emailText==="" || password===""){
            this.setState({
                errormsg:"Please provide both email and password",
            });
        }
        else{
            this.setState({
                errormsg:`username:${emailText} and password:${password}`,
            })
        }
    }
    render(){
        return(
            <form onSubmit={this.handlesubmit} className="formConatiner">
                <label htmlFor="emailText">Email</label>
                <input type="email" id="emailText" value={this.state.emailText} onChange={this.handleEmail}></input>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={this.state.password} onChange={this.handlePassword}></input>
                <button type="submit" id="submitbtn">Login</button>
                {this.state.errormsg && <h1>{this.state.errormsg}</h1>}
            </form>
        )
    }
}
export default FormClass;