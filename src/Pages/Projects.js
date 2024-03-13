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
                            <div className="project_details project_4">
                                <h1>E-commerce Website</h1>
                                <p>March 2024</p>
                                <ul>
                                    <li>Developed a full-stact eCommerce Website using HTMl,CSS,Javascript,React js and Redux</li>
                                    <li>Implemented user authentication and authorization functionalities,allowing users to login and access personalized product pages.</li>
                                    <li>Integrated CRUD (Create,Read,Update,Delete) operations for the admin panel,enabling administrators to manage product listings effectively.</li>
                                    <li>Designed intuitive user interfaces for browsing products,adding items to the cart and processing transactions.</li>
                                    <li>Utilized React Router for efficient navigation and routing within the application.</li>
                                    <li>For this project , “Vs Code” is used. </li>
                                    <li>Technologies used : HTML,CSS,Bootstra.Javascript,React Js and Redux.</li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={6} md={12} sm={12} >
                            <div className="project_details project_1">
                                <h1>Convention Hall</h1>
                                <p>Jan 2024</p>
                                <ul>
                                    <li>Developed a dynamic website for a convention hall using HTML, CSS, and JavaScript to facilitate event bookings and reservations.</li>
                                    <li>Implemented form validations to ensure accurate booking requests, allowing users to reserve the hall for specific dates and events such as meetings, birthday parties, marriage ceremonies, and media celebrations.</li>
                                    <li>Designed an intuitive user interface for seamless navigation and enhanced user experience.</li>
                                    <li>Incorporated interactive features such as date pickers and dropdown menus to streamline the booking process.</li>
                                    <li>Demonstrated proficiency in front-end development techniques to create an aesthetically pleasing and functional website for event planning and coordination.</li>
                                    <li>For this project , “Vs Code” is used. </li>
                                    <li>Technologies used : HTML,CSS,Bootstrap,JavaScript.</li>
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
                                    <li>Designed and developed a personal portfolio website using HTML and CSS to showcase skills, projects, and achievements.</li>
                                    <li>Implemented responsive design principles to ensure optimal viewing experience across various devices and screen sizes.</li>
                                    <li>Incorporated a clean and minimalist design aesthetic to highlight content and promote easy navigation.</li>
                                    <li>Demonstrated proficiency in front-end web development techniques to create a professional online presence and showcase abilities to potential employers and clients.</li>
                                    <li>For this portfolio project , “Vs Code” is used. </li>
                                    <li>Technologies used : HTML,CSS,Bootstrap.</li>
                                    <li>GITHUB :https://github.com/sravanthi1606/Portfolio/tree/Portfolio</li>
                                    <li>Deploy Link:  https://portfolio01-website.netlify.app</li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <div className="project_details project_3">
                                <h1>Netflix</h1>
                                <p>Dec 2024</p>
                                <ul>
                                    <li>Replicated the Netflix homepage using HTML, CSS to enhance front-end development skills.</li>
                                    <li>Implemented responsive design principles to ensure compatibility across various devices and screen sizes. </li>
                                    <li>Utilized Flexbox and CSS Grid for layout structuring, optimizing code for maintainability and scalability.</li>
                                    <li>Demonstrated attention to detail by accurately mimicking design elements and user interface components of the original Netflix homepage.</li>
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