import React from 'react';
import { Container } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

const Blog = () => {
    return (
        <Container>
            <h1 className='text-center mt-5 mb-4'>Questions</h1>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <h5>Q1) Tell us the differences between uncontrolled and controlled components.</h5>
                    <p>A: A controlled component is a component whose value is controlled by React, whereas an uncontrolled component's value is controlled b the DOM</p>
                </ListGroup.Item>
                <ListGroup.Item>
                    <h5>Q2) How to validate React props using PropTypes?</h5>
                    <p>A: The PropTypes library provides us with a way to define the types of our props to ensure that they are the expected data types. First we need to import PropTypes, and then define the prop types of our components by adding a 'propTypes' object to our component. </p>
                </ListGroup.Item>
                <ListGroup.Item>
                    <h5>Q3) Tell us the difference between nodejs and expressjs.</h5>
                    <p>A: Nodejs is a runtime environment for executing JS code, whereas expressjs is a framework built on top of nodejs (specifically for building web applications). Therefore, if we are using expressjs, then it also means that we are using nodejs; expressjs just makes it easier and faster to develop robust and scalable web applications.</p>
                </ListGroup.Item>
                <ListGroup.Item>
                    <h5>Q4) What is a custom hook, and why will you create a custom hook?</h5>
                    <p>A: A custom hook is a reusable function that encapsulates the logic and state of a component, which can be shared across multiple components. Custom hooks are a way to abstract common logic and stateful behavior into a separate, reusable unit of code. We can create a custom hook to abstract out commonly used logic that is not specific to a single component.</p>
                </ListGroup.Item>
            </ListGroup>

        </Container>
    );
};

export default Blog;