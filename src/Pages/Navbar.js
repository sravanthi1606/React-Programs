import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const NavbarCom = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container className="flex-row">
                    <div>
                        <Link to="/" className='items'>Portfolio</Link>
                    </div>
                    <div>
                        <Nav className="me-auto links">
                            <Link to="/" className='items '>Home</Link>
                            <Link to="/about" className='items '>About</Link>
                            <Link to="/projects" className='items '>Projects</Link>
                            <Link to="/contact" className='items '>Contact</Link>

                        </Nav>
                    </div>
                    <div>
                        <Nav className="me-auto">
                            <Nav.Link href="/" className='items nav_links'><FaLinkedin /></Nav.Link>
                            <Nav.Link href="/" className='items nav_links'><FaGithub /></Nav.Link>
                        </Nav>
                    </div>
                </Container>
            </Navbar>
        </>
    )
}
export default NavbarCom;
