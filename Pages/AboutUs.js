import React from 'react';
import { useLocation } from "react-router-dom";


const About=()=>{
    const location=useLocation();
    return(
        <div>
            <h1>This is About Page {location.state.email}</h1>
        </div>
    )
}
export default About;