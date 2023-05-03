import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        
            <Container>
                <h2 className='text-center mt-5'>Login Here</h2>
                <Form className='w-50 mx-auto'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="" required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="" required/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Login
                    </Button><br />
                    <Form.Text className="text-muted">
                        Don't have an account? <Link to='/auth/register'>Register!</Link>
                    </Form.Text>
                </Form>
            </Container>
        
    );
};

export default Login;