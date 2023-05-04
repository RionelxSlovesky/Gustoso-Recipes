import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../providers/AuthProvider';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/Image';

const Main_Navbar = () => {

    const { user, loading, logOut } = useContext(AuthContext)

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">Gustoso Recipes</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link as={Link} to="/" >Home</Nav.Link>
                        <Nav.Link as={Link} to="/blog" >Blog</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    {
                        loading || (user ?
                            <>

                                <Image style={{ width: '2rem', height: '2rem' }} className='me-3' src={user?.photoURL ? user?.photoURL : 'https://i.ibb.co/Y2dtzKF/default-pic.webp'} title={user.displayName} roundedCircle />

                                <Nav.Link className='text-secondary' as={Link} onClick={logOut}>Logout</Nav.Link>
                            </> :
                            <Nav.Link className='text-secondary' as={Link} to="/auth/login" >Login</Nav.Link>)
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Main_Navbar;