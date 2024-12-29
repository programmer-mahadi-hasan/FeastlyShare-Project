import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar';

const MainLayout = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Navbar />
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;