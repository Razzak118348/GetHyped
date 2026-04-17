import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const Layout = () => {
    return (
        <div className='px-4'>
            <Navbar></Navbar>
            <Outlet></Outlet>

        </div>
    );
};

export default Layout;