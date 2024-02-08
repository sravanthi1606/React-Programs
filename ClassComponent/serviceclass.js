import React from "react";

class ServiceClass extends React.Component{
    constructor(){
        super();
        console.log(this);
    }
    
    render(){
        const h2ele = {color:"red"};
        return(
            <div>
            <h1>Service Class Component</h1>
            <h2 style={h2ele}>
                {this.props.name}
                </h2>
        </div>
        )
    }
}
export default ServiceClass