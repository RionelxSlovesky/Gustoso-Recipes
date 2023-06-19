
import Navbar from '../../Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom'
import Footer from '../../Shared/Footer/Footer';

const Main = () => {
    return (
        <div className='d-flex flex-column' style={{minHeight:'100vh'}}>
            <Navbar></Navbar>
            <div className='flex-grow-1'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;