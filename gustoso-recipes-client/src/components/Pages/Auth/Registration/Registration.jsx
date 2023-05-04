import React, { useContext, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../providers/AuthProvider';

const Registration = () => {

    const navigate = useNavigate()

    const [error, setError] = useState(null)
    const [termsError, setTermsError] = useState(null)

    const { signUp, updateProf } = useContext(AuthContext)

    const handleOnSubmit = (event) => {
        event.preventDefault()

        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const photoURL = form.photoURL.value ? form.photoURL.value : 'https://i.ibb.co/Y2dtzKF/default-pic.webp'
        const checkbox = form.checkbox.checked

        if (password.length < 6) {
            setError('Password requires at least 6 characters')
        } else if (!checkbox) {
            setTermsError('Please accept terms and conditions')
            setError('')
        } else {
            setError('')
            setTermsError('')

            signUp(email, password)
                .then(res => {
                    const loggedUser = res.user
                    console.log(loggedUser)

                    updateProf(name, photoURL)
                        .then(() => {
                            // Profile updated!
                            // ...
                        }).catch((err) => {
                            console.log(err.message)
                        });
                    
                        navigate('/')

                })
                .catch(err => {
                    setTermsError(err.message)
                })

        }




    }

    return (
        <Container>
            <h2 className='text-center mt-5'>Register Here</h2>
            <Form className='w-50 mx-auto' onSubmit={handleOnSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" required />
                </Form.Group>

                <Form.Text className="text-danger">
                    {error}
                </Form.Text>

                <Form.Group className="mb-3" controlId="formBasicPhotoURL">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name="photoURL" placeholder="(optional)" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" name="checkbox" label="Accept Terms & Conditions" />
                </Form.Group>

                <Form.Text className="text-danger">
                    {termsError}
                </Form.Text><br></br>

                <Button variant="primary" type="submit">
                    Register
                </Button><br />
                <Form.Text className="text-muted">
                    Already have an account? <Link to='/auth/login'>Login!</Link>
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Registration;