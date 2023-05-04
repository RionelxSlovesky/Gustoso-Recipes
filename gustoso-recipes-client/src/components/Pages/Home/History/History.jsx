import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Carousel from 'react-bootstrap/Carousel';

const History = () => {
    return (
        <Container>
            <h4>The Rich Tradition of Italian Cuisine</h4>
            <Carousel className='w-50 mx-auto'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/HdGt1tK/istockphoto-1086934358-612x612.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        
                        <p className='text-warning bg-dark p-2'>An family in an Italian restaurant in the '60s'.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/vzd1Gxd/cannoli-italy-scaled.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        
                        <p className='text-warning bg-dark p-2'>Can you find such cheap cannoli elsewhere?</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/DL70cx8/download.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        
                        <p className='text-warning bg-dark p-2'>
                            These stalls can be found in any street in Italy
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <p>Italian cuisine is one of the most popular and cherished culinary traditions in the world. With its diverse flavors, unique ingredients, and rich history, it has captured the hearts and palates of food lovers all over the globe. Italian cuisine is known for its use of fresh, high-quality ingredients and its emphasis on simple, yet delicious cooking techniques that allow those ingredients to shine. From classic pasta dishes like spaghetti carbonara and lasagna to regional specialties like pizza napoletana and risotto alla milanese, Italian cuisine is a true feast for the senses. Its rich culinary heritage is deeply rooted in the country's history and culture, making it not just a cuisine, but a way of life.</p>
        </Container>
    );
};

export default History;