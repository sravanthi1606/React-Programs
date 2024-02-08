import React from "react";
import './contact.css';

class ContactClass extends React.Component{
    constructor(){
        super();
        console.log(this);
    }
    render(){
        return(
            <div>
            <h1>Contact Class Component</h1>
            <h2 className="h2style">{this.props.name}</h2>
        </div>
        )
    }
}
export default ContactClass