import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import RecipesTable from './RecipesTable/RecipesTable';

const ChefDetails = () => {

    const [chef, setChef] = useState({})

    const params = useParams()
    const chefRecipes = useLoaderData()

    useEffect(() => {
        fetch(`https://gustoso-recipes-server-rionelxslovesky.vercel.app/chefs/${params.id}`)
            .then(res => res.json())
            .then(data => setChef(data))
    }, [])

    return (
        <Container>
            <Card style={{ width: '50%', marginInline:'auto' }}>
                <Card.Img variant="top" src={chef.img}/>
                <Card.Body>
                    <Card.Title>{chef.name}</Card.Title>
                    <Card.Text>
                        {chef.description}
                    </Card.Text>
                </Card.Body>
            </Card>
            <h2 className='mt-5 mb-3 text-center'>Chef's Popular Recipes:</h2>
            <RecipesTable recipes={chefRecipes}></RecipesTable>
        </Container>
    );
};

export default ChefDetails;