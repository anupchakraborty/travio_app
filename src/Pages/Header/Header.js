import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand>
                <Nav.Link as={Link} to="/">Travio</Nav.Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/destinations">Destinations</Nav.Link>
            </Nav>
            <Nav className="justify-content-end">
               
                    <NavDropdown title="Name" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">Profile</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>LogOut</NavDropdown.Item>
                    </NavDropdown>:
                    <>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        <Nav.Link as={Link} to="/register">Register</Nav.Link>
                    </>
                
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default Header;