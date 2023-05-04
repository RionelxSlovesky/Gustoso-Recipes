import React from 'react';
import './Home.css'
import Chef from './Chef/Chef';

const Home = () => {
    return (
        <div>
            <section className='hero text-light'>
                <div className='hero-content-container'>
                    <h1>Italian Cuisine</h1>
                    <h4>The Best In The West</h4>
                    <p>Italian cuisine is a culinary wonderland, with a rich history and regional diversity that makes it unique. From the aromatic herbs and fresh ingredients to the careful preparation and attention to detail, Italian cuisine captures the essence of Mediterranean flavors. The simplicity of dishes like pizza and pasta belies the complex flavors that arise from the use of fresh, quality ingredients.</p>
                </div>
            </section>
            <section className='my-5'>
                <h3 className='text-center mb-4'>Our Chefs: </h3>
                <Chef></Chef>
            </section>
            
        </div>
    );
};

export default Home;