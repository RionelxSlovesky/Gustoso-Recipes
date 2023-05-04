import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import './ChefCard.css'
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';

const ChefCard = ({chef}) => {
    console.log(chef)
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={chef.img}  className='chef-img'/>
                <Card.Body>
                    <Card.Title>{chef.name}</Card.Title>
                    <Card.Text>
                        {chef.description}
                    </Card.Text>
                    <Card.Text>
                        Experience: {chef.experience}
                    </Card.Text>
                    <Link to={`/chef/${chef.id}`}><Button variant='warning'>View Chef Recipes</Button></Link>
                    <Card.Footer className='d-flex justify-content-between'>
                        <small className="text-muted">Number of Recipes: {chef.recipe_quant}</small>
                        <small className="text-muted">Likes: {chef.likes}</small>
                    </Card.Footer>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ChefCard;