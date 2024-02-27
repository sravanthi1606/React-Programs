import React from "react";
import { Table } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import img1 from "../Assets/img1.jpg";
// import "bootstrap/dist/css/bootstrap.min.css"

const About = () => {
    return (
        <div>
            <section id="about">
                <div className="container">
                    <div className="row about_top_section">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="about_me">
                                <h1 className="about_me_h1">About Me</h1>
                                <p>
                                    I am front-end web developer. I can provide clean code and pixel perfect design. I also make the website more interactive with web animations. A responsive designs makes your website accessible to all users, regardless of their device.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 about_img">
                            <img src={img1} alt="image"></img>
                        </div>
                    </div>                  

                    <div className="row about_education">
                        <div className="education_heading">
                            <h1>Education</h1>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <Table striped bordered hover variant="dark">
                                <thead >
                                    <tr>
                                        <th>Qualification</th>
                                        <th>School/College</th>
                                        <th>Board/University</th>
                                        <th>Year of Passing</th>
                                        <th>CGPA</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>B.Sc (MPCs)</td>
                                        <td>Chaitanya Deemed To Be University</td>
                                        <td>Chaitanya Deemed To Be University</td>
                                        <td>2023</td>
                                        <td>10</td>
                                    </tr>
                                    <tr>
                                        <td>Intermediate (MPC)</td>
                                        <td>SR Junior College For Girls</td>
                                        <td>Board of Intermediate Education</td>
                                        <td>2020</td>
                                        <td>9.8</td>
                                    </tr>
                                    <tr>
                                        <td>SSC</td>
                                        <td>Rosary High School</td>
                                        <td>Board of Secondary Education</td>
                                        <td>2018</td>
                                        <td>9.8</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>


                    <div className="row skills">
                        <h1 className="col-lg-12 skills_head">Skills</h1>
                        <div className="col-lg-12">
                            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                <Row>
                                    <Col sm={12}>
                                        <Nav variant="pills" className="skills_sub-skills">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first" className="skill_item">Technical Skills</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second" className="skill_item">Soft Skills</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Col>
                                    <Col sm={12}>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    <Col sm={6}>
                                                        <div>
                                                            <h3>Languages</h3>
                                                            <ul>
                                                                <li>Java</li>
                                                                <li>Javascript</li>
                                                            </ul>
                                                        </div>
                                                    </Col>
                                                    <Col sm={6}>
                                                        <div>
                                                            <h3>Technologies</h3>
                                                            <ul>
                                                                <li>HTML5</li>
                                                                <li>CSS3</li>
                                                                <li>MY-SQL</li>
                                                            </ul>
                                                        </div>
                                                    </Col>
                                                    <Col sm={6}>
                                                        <div>
                                                            <h3>Frameworks</h3>
                                                            <ul>
                                                                <li>CSS-Framework-BOOTSTRAP </li>
                                                                <li>React-Js</li>
                                                                <li>React-Redux</li>
                                                            </ul>
                                                        </div>
                                                    </Col>
                                                    <Col sm={6}>
                                                        <div>
                                                            <h3>Tools</h3>
                                                            <ul>
                                                                <li>Git</li>
                                                                <li>Vs Code</li>
                                                            </ul>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <ul>
                                                    <li>Excellent Communication Skills</li>
                                                    <li>Problem Solving</li>
                                                </ul>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}
export default About;



