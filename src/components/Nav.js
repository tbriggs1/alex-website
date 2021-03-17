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
          <Link to="/">About Me</Link>
          <Link to="/work">My Work</Link>
          <Link to="/contact">Contact Me</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
     
    
    )
};

export default NavSection;


