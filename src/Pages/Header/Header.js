import React from 'react';
import './Header.css'
import { Button, Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark fixed-top">
                <Container>
                    <NavbarBrand to="/home">Express Gym <i className="fas fa-dumbbell"></i></NavbarBrand>
                    <Nav className="ms-auto">
                        <NavLink className="nav" to="/home">Home</NavLink>
                        <NavLink className="nav" to="/allservices">Services</NavLink>
                        <NavLink className="nav" to="/about">About</NavLink>
                        <NavLink className="nav" to="/contact">Contact</NavLink>
                        <Button variant="success text-white"><i className="fas fa-sign-in-alt"></i> Login</Button>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;