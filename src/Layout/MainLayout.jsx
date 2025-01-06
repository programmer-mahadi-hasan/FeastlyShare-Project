import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar';
import Footer from '../Pages/Shared/Footer';

const MainLayout = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Navbar />
            <Outlet></Outlet>
            <Footer />
        </div>
    );
};

export default MainLayout;