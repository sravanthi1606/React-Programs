import React from "react";

class LifeCycleClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"sravanthi"
        };
    }
    handleChange=()=>{
        this.setState({name:"rani"})
    }
    // static getDerivedStateFromProps(props,state){
    //     return {name: props.name};
    // }

    // componentDidMount(){
    //     setTimeout(()=>{
    //         this.setState({
    //             name:"priya"
    //         })
    //     },2000)
    // }

    // shouldComponentUpdate(){
    //     return false
    // }

    componentDidUpdate(){
        setTimeout(()=>{
            this.setState({
                name:"sruthi"
            })
        },2000)
    }
    render(){
        return(
            <div>
                <h1>Hello {this.state.name}</h1>
                <button type="submit" onClick={this.handleChange}>Change User</button>
            </div>
        )
    };
}
export default LifeCycleClass