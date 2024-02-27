import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form, Button } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Contact = () => {

    const [userName, setUserName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [emailText, setEmailText] = useState("");
    const [message, setMessage] = useState("");
    // const [erroMsg,setErrorMsg] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (userName.trim() === "") {
            alert("enter username");
            return
        } else if (!isValidusername(userName)) {
            alert("enter valid username");
            return;
        }



        if (phoneNumber.trim() === "") {
            alert("Please enter your contact number");
            return;
        } else if (!isValidContact(phoneNumber)) {
            alert("Please enter a valid 10-digit contact number");
            return;
        }

        if (message === "") {
            alert("Enter Message")
            return;
        }

        setUserName('');
        setEmailText('');
        setPhoneNumber('');
        setMessage('');


        var details = `Username : ${userName} \n Phone number : ${phoneNumber} \n Email : ${emailText} \n Message : ${message} `;
        alert(details);
    }


    function isValidusername(userName) {
        var userRegex = /^[a-zA-Z]{3,15}$/;
        return userRegex.test(userName);
    }
    function isValidContact(phoneNumber) {
        var contactRegex = /^\d{10}$/;
        return contactRegex.test(phoneNumber);
    }


    // return (
    //     <>
    //         <section id="contact">
    //             <div className="container contact_info">
    //                 <Row>
    //                     <Col lg={4}>
    //                         <div className="contact_items">
    //                             <h1>Contact Me</h1>
    //                             <h5><FaPhoneAlt />  <a href="7893406998">7893406998</a></h5>
    //                             <h5><MdEmail />  <a href="maturisravanthi788@gmail.com">maturisravanthi788@gmail.com</a></h5>
    //                             <div className="social_Links">
    //                                 <h3>Follow Me</h3>
    //                                 <p> <FaLinkedin /> LinkedIn</p>
    //                                 <p><FaGithub /> Github</p>
    //                             </div>
    //                         </div>
    //                     </Col>
    //                     <Col lg={8}>
    //                         <div className="contact_items1">
    //                             <h1>Message Me</h1>
    //                             <Form onSubmit={handleSubmit} id="loginform">
    //                                 <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    //                                     <Form.Label>Name</Form.Label>
    //                                     <Form.Control type="text" placeholder="Name" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
    //                                 </Form.Group>
    //                                 <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    //                                     <Form.Label>Contact</Form.Label>
    //                                     <Form.Control type="text" placeholder="Mobile Number" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>
    //                                 </Form.Group>
    //                                 <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    //                                     <Form.Label>Email address</Form.Label>
    //                                     <Form.Control type="email" placeholder="name@example.com" value={emailText} onChange={(e)=>setEmailText(e.target.value)} />
    //                                 </Form.Group>
    //                                 <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    //                                     <Form.Label>Message</Form.Label>
    //                                     <Form.Control as="textarea" rows={3} value={message} onChange={(e)=>setMessage(e.target.value)} />
    //                                 </Form.Group>
    //                                 <Button type="submit" style={{backgroundColor:"#e0063a", border:"#e0063a"}}>submit</Button>
    //                                 {/* {erroMsg && <h3>{erroMsg}</h3>} */}
    //                             </Form>
    //                         </div>
    //                     </Col>
    //                 </Row>
    //             </div>
    //         </section>
    //     </>
    // )

    return (
        <>
            <section id="contact">
                <div className="container contact_info">
                    <Row>
                        <Col lg={6} md={6}>
                            <div className="contact_items">
                                <h1>Contact Me</h1>
                                <h5><FaPhoneAlt />  <a href="7893406998">7893406998</a></h5>
                                <h5><MdEmail />  <a href="maturisravanthi788@gmail.com">maturisravanthi788@gmail.com</a></h5>
                            </div>
                        </Col>
                        <Col lg={6} md={6}>
                            <div className="social_Links contact_items">
                                <h1>Follow Me</h1>
                                <p> <FaLinkedin /> LinkedIn</p>
                                <p><FaGithub /> Github</p>
                            </div>

                        </Col>
                        <Col lg={2}></Col>
                        <Col lg={8}>
                            <div className="contact_items1">
                                <h1>Message Me</h1>
                                <Form onSubmit={handleSubmit} id="loginform">
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="Name" value={userName} onChange={(e) => setUserName(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Contact</Form.Label>
                                        <Form.Control type="text" placeholder="Mobile Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="name@example.com" value={emailText} onChange={(e) => setEmailText(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control as="textarea" rows={3} value={message} onChange={(e) => setMessage(e.target.value)} />
                                    </Form.Group>
                                    <Button type="submit" style={{ backgroundColor: "#e0063a", border: "#e0063a" }}>submit</Button>
                                    {/* {erroMsg && <h3>{erroMsg}</h3>} */}
                                </Form>
                            </div>
                        </Col>
                        <Col lg={2}></Col>
                    </Row>
                </div>
            </section >
        </>
    )
}
export default Contact;