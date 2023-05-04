import React from 'react';
import Row from 'react-bootstrap/Row';
import ChefCard from '../ChefCard/ChefCard';
import Container from 'react-bootstrap/esm/Container';

const Chef = () => {
    return (
        <Container>
            <Row xs={1} md={2} className="g-4">
                <ChefCard></ChefCard>
                <ChefCard></ChefCard>
                <ChefCard></ChefCard>
                <ChefCard></ChefCard>
                <ChefCard></ChefCard>
                <ChefCard></ChefCard>
            </Row>
        </Container>
    );
};

export default Chef;