import React from "react";

class HomeClass extends React.Component{
    constructor(){
        super();
        console.log(this);
    }
    render(){
        return(
            <div>
            <h1>Home Class Component</h1>
            <h2 style={{color:"blue"}}>{this.props.name}</h2>
        </div>
        )
    }
}
export default HomeClass