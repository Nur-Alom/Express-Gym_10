import React from 'react';
import './Header.css';
import img from '../../images/logo.jpg';
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { users, logOut } = useAuth();
    return (
        <div>
            <Navbar bg="dark" variant="dark fixed-top" expand="lg">
                <Container>
                    <NavbarBrand to="/home">Express GYM <img style={{ width: "20px" }} src={img} alt="" /></NavbarBrand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto nav-options">
                            <NavLink className="nav" to="/home">Home</NavLink>
                            <NavLink className="nav" to="/about">About</NavLink>
                            <NavLink className="nav" to="/contact">Contact</NavLink>
                            {users.email ? <li style={{ color: "white", margin: "5px" }}>| {users.displayName}</li> : ''}
                            {!users.email ?
                                <NavLink className="user-btn bg-success text-white py-1 px-3 rounded-3" to="/login"><i className="fas fa-sign-in-alt"></i> Login</NavLink> :
                                <button onClick={logOut} className="user-btn bg-success text-white py-1 px-3 rounded-3 border-0"><i className="fas fa-sign-out-alt"></i> Logout</button>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;