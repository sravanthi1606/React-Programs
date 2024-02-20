import React,{useState} from "react";
import PropTypes from "prop-types";

const Contact=({obj})=>{
    const [bgColor,setBgColor]=useState("red");
    const [btnColor,setBtnColor]=useState("blue");

    const handleChangeColor=()=>{
        setBgColor(`#${Math.random().toString().slice(-6)}`);
        setBtnColor(`#${Math.random().toString().slice(-6)}`);

    }
    console.log(obj);
    return (
        <div>
            <h1 style={{backgroundColor:bgColor}}>Function Component</h1>
            <h2>Name : {obj.name} and age :{obj.age}</h2>
            <button style={{backgroundColor :btnColor}} 
                    type="submit" onClick={handleChangeColor}>
                    Change Color</button>
        </div>

    );
};
// Contact.defaultProps={
//     name:"Maturi",
//     age:21
// }
// Contact.propTypes={
//     name:PropTypes.string.isRequired,
//     age:PropTypes.number.isRequired,
// }
export default Contact;