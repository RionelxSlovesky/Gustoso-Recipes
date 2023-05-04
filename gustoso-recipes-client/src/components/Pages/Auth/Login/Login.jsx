import React, { useContext } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../providers/AuthProvider';

const Login = () => {

    const { signIn, signInWithGoogle, signInWithGitHub } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleOnSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value

        signIn(email, password)
            .then(res => {
                const loggedUser = res.user
                console.log(loggedUser)
                navigate('/')
            })
            .catch(err => {
                console.log(err.message)
            })

    }

    const handleGoogleSignIn = () => {
        event.preventDefault()
        signInWithGoogle()
            .then(res => {
                const loggedUser = res.user
                console.log(loggedUser)
                navigate('/')
            }).catch(err => {
                console.log(err.message)
            });
    }

    const handleGitHubSignIn = () => {
        event.preventDefault()
        signInWithGitHub()
            .then(res => {
                const loggedUser = res.user
                console.log(loggedUser)
                navigate('/')
            }).catch(err => {
                console.log(err.message)
            });
    }



    return (

        <Container>
            <h2 className='text-center mt-5'>Login Here</h2>
            <Form className='w-50 mx-auto' onSubmit={handleOnSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button><br />
                <Form.Text className="text-muted">
                    Don't have an account? <Link to='/auth/register'>Register!</Link>
                </Form.Text>

                <br></br>

                <Button variant="outline-danger my-3" onClick={handleGoogleSignIn}>
                    Login With Google
                </Button><br />

                <Button variant="outline-secondary" onClick={handleGitHubSignIn}>
                    Login With Github
                </Button><br />
            </Form>
        </Container>

    );
};

export default Login;