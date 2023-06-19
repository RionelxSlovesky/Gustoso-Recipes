import React from 'react';
import { Form, Button, Col, Row, Container } from 'react-bootstrap';

const ContactUs = () => {

    const style = {
        maxWidth:'600px',
        marginInline: 'auto'
    }

    return (
        <Container className='px-5'>
            <h2 className='mb-4 text-center'>Want to Showcase Your Recipes in Our Website?</h2>
            <Form style={style}>
                <Row className='mb-2'>
                    <Col md={6}>
                        <Form.Group controlId="name">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="email">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group controlId="message">
                    <Form.Label>Message:</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="Enter your message"
                    />
                </Form.Group>
                <Button variant="dark" type="submit" className='mt-4'>Submit</Button>
            </Form>
        </Container>
    );
};

export default ContactUs;