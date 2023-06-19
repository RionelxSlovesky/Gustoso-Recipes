import React from 'react';
import Row from 'react-bootstrap/Row';
import ChefCard from '../ChefCard/ChefCard';
import Container from 'react-bootstrap/esm/Container';

const Chef = ({chefs}) => {
    return (
        <Container>
            <div className='d-flex flex-wrap justify-content-center gap-5'>
            {
                chefs.map(chef => <ChefCard key={chef.id} chef={chef}></ChefCard>)
            }
            </div>
        </Container>
    );
};

export default Chef;