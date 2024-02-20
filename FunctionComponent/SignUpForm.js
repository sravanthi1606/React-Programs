import React,{useEffect, useState} from "react";

const SignUpForm=()=>{
    const [formData,setFormData] = useState({
        firstName:"",
        lastName:"",
        password:"",
        gender:"",
        agreeterms:false,
    });

    const [isFormFilled,setFormFilled] = useState(true);
    console.log(isFormFilled);
    const handleChange=(event)=>{
        const {name,value,type,checked}=event.target;
        const newValue= type === "checkbox" ? checked : value;
        setFormData({...formData,[name]:newValue});
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(formData);
    }

    useEffect(()=>{
        const {firstName,lastName,gender,password,agreeterms}=FormData;
        setFormFilled(firstName && lastName && password && gender && agreeterms)
    },[formData]);

    return(
        <div>
            <h1>Sign Up Form</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    /><br></br>

                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Create Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    /><br></br>
                </div>
                <div className="form-group">
                    <input type="radio"
                        id="female" 
                        name="gender" 
                        value="female"
                        checked={formData.gender==="female"}
                        onChange={handleChange}>
                    </input>
                    <label htmlFor="female">Female</label>

                    <input type="radio"
                        id="male" 
                        name="gender" 
                        value="male"
                        checked={formData.gender==="male"}
                        onChange={handleChange}>
                    </input>
                    <label htmlFor="male">Male</label>
                </div>
                <div className="form-group">
                <input type="checkbox" 
                        id="agreeterms"
                        name="agreeterms"
                        checked={formData.agreeterms}
                        onChange={handleChange}>
                    </input>
                    <label htmlFor="agreeterms">I am agree with you trems & conditions</label>
                </div>
                <button disabled={!isFormFilled} type="submit">Sign Up</button>
            </form>
        </div>
    )
}
export default SignUpForm;