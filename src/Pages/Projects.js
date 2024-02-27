import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Projects = () => {
    return (
        <div>
            <section id="projects">
                <div className="container project">
                    <Row >
                        <Col lg={6} md={12} sm={12} >
                            <div className="project_details project_1">
                                <h1>Convention Hall</h1>
                                <p>Jan 2024</p>
                                <ul>
                                    <li>This Convention Hall project includes home,about,service,gallery and contact section.</li>
                                    <li>This project designed to conduct meetings/wedding/birthday parties/media promotions etc…</li>
                                    <li>Form validation done so that different user can submit form without any conflicts.</li>
                                    <li>For this project , “Vs Code” is used. </li>
                                    <li>Technologies used : HTML,CSS,Bootstrap.</li>
                                    <li>GITHUB :https://github.com/sravanthi1606/Convention-Hall/tree/Convention-Hall</li> 
                                    <li>Deploy Link: https://convention-hall-website.netlify.app</li> 
                                </ul>
                            </div>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <div className="project_details project_2">
                                <h1>Portfolio</h1>
                                <p>Dec 2024</p>
                                <ul>
                                    <li>This portfolio project contains all about me which includes home,about,service and contact section.</li>
                                    <li>For this portfolio project , “Vs Code” is used. </li>
                                    <li>For this portfolio project , “Vs Code” is used. </li>
                                    <li>Technologies used : HTML,CSS,Bootstrap.</li>
                                    <li>GITHUB :https://github.com/sravanthi1606/Portfolio/tree/Portfolio</li>
                                    <li>Deploy Link:  https://portfolio01-website.netlify.app</li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={12} md={12} sm={12}>
                            <div className="project_details project_3">
                                <h1>Netflix</h1>
                                <p>Dec 2024</p>
                                <ul>
                                    <li>This Netflix project contains home page using HTML and CSS. The project aims to recreate the visual design and layout of the Netflix home page, providing a starting point for creating similar interfaces or learning web development techniques.</li>
                                    <li>The web page adapts to different screen sizes, ensuring a consistent user experience on desktop and mobile devices.</li>
                                    <li>For this project , “Vs Code” is used. </li>
                                    <li>Technologies used : HTML,CSS,Bootstrap.</li>
                                    <li>GITHUB : https://github.com/sravanthi1606/Netflix/tree/Netflix</li> 
                                    <li>Deploy Link:  https://netflix01-app.netlify.app/</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </div>
    )
}
export default Projects;