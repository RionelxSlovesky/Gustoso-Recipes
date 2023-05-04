import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const ChefCard = () => {
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>Mr. Mamma Mia</Card.Title>
                    <Card.Text>
                        BEST CHEF IN DE WAAAALD
                    </Card.Text>
                    <Card.Text>
                        Experience: 1000 years
                    </Card.Text>
                    <Card.Footer className='d-flex justify-content-between'>
                        <small className="text-muted">Number of Recipes: 1 millione</small>
                        <small className="text-muted">Likes: 1 millione</small>
                    </Card.Footer>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ChefCard;