import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../providers/AuthProvider';

const Main_Navbar = () => {

    const {user} = useContext(AuthContext)

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">Gustoso Recipes</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/" >Home</Nav.Link>
                            <Nav.Link as={Link} to="/blog" >Blog</Nav.Link>
                            {
                                user ? <p>{user.displayName}</p> : <Nav.Link as={Link} to="/auth/login" >Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Main_Navbar;