import React from 'react';
import './Home.css'
import Chef from './Chef/Chef';
import { useLoaderData } from 'react-router-dom';
import History from './History/History';
import ContactUs from './ContactUs/ContactUs';

const Home = () => {

    const chefs = useLoaderData();

    return (
        <div>
            <section className='hero text-light'>
                <div className='hero-content-container'>
                    <h1>Italian Cuisine</h1>
                    <h4>The Best In The West</h4>
                    <p>Italian cuisine is a culinary wonderland, with a rich history and regional diversity that makes it unique. From the aromatic herbs and fresh ingredients to the careful preparation and attention to detail, Italian cuisine captures the essence of Mediterranean flavors. The simplicity of dishes like pizza and pasta belies the complex flavors that arise from the use of fresh, quality ingredients.</p>
                </div>
            </section>
            <section className='mb-5 text-center bg-warning text-dark p-5'>
                <History></History>
            </section>
            <section className='my-5'>
                <h3 className='text-center mb-4'>Meet our Chefs </h3>
                <Chef chefs={chefs}></Chef>
            </section>
            <section className='bg-warning py-5'>
                <ContactUs></ContactUs>
            </section>
            
        </div>
    );
};

export default Home;