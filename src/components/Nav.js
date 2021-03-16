import React from 'react';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const NavSection = () => {
  
    return(               

        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Navbar.Brand href="/">Alex Harrison</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
        
          </Nav>
          <Nav>
            <Nav.Link href="/">About Me</Nav.Link>
            <Nav.Link href="work">My Work</Nav.Link>
            <Nav.Link href="contact">Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
     
    
    )
};

export default NavSection;


