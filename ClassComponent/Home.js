import React from "react";
// import Contact from './FunctionComponent/Contact';
import PropTypes from "prop-types";


class Home extends React.Component{
    constructor(){
        super()
        console.log(this);
        this.state={
            bgcolor:"red",
            btncolor:"blue",
        }
    }
    handleChangeColor=()=>{
        this.setState({
            bgcolor:`#${Math.random().toString().slice(-6)}`,
            btncolor:`#${Math.random().toString().slice(-6)}`
        })
    }

    render(){
        return(
            <div style={{backgroundColor : this.state.bgcolor,color:"white"}}>
                <h1>Class Component</h1>
                <h2>{this.props.name}</h2>
                 <button style={{backgroundColor : this.state.btncolor,color:"white"}} 
                    type="submit" onClick={this.handleChangeColor}>
                    Change Color</button> 
                 {/* <Contact name="Maturi" age="21"/>  */}
            </div>

        )
    }
}
Home.defaultProps={
    name :"sravanthi",
}
Home.propTypes={
    name:PropTypes.string.isRequired,
}
export default Home;