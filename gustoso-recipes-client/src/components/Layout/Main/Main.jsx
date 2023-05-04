import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom'
import Footer from '../../Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div style={{marginBottom:'60px'}}>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;