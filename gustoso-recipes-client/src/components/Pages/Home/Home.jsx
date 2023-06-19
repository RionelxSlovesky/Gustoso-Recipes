
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
                    <div className='hero-contents'>
                        <h1 className='mt-5 fs-1 '>Squisite Ricette Italiane</h1>
                        <h4 className='mb-4 fs-5 text-uppercase text-warning'>The Best In The West</h4>
                        <p className=''>Italian cuisine is a culinary wonderland, with a rich history and regional diversity that makes it unique. From the aromatic herbs and fresh ingredients to the careful preparation and attention to detail, Italian cuisine captures the essence of Mediterranean flavors.</p>
                    </div>
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