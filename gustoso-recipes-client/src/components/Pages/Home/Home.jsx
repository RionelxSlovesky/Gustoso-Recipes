
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
                        <p className='fs-5'>Italian cuisine is a culinary wonderland, with a rich history and regional diversity that makes it unique. It captures the essence of Mediterranean flavors.</p>
                    </div>
                </div>
            </section>
            <section className='text-center bg-warning text-dark px-4' style={{padding:'8em 0'}}>
                <History></History>
            </section>
            <section className='meet-chef' style={{padding:'8em 0', position:'relative'}}>
                <h3 className='text-center fs-2 mb-5' style={{zIndex:'100'}}>Meet Our Chefs</h3>
                    <Chef chefs={chefs}></Chef>
            </section>
            <section className='bg-warning' style={{padding:'8em 0'}}>
                <ContactUs></ContactUs>
            </section>
            
        </div>
    );
};

export default Home;