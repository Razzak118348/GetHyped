import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';


const Layout = () => {
    return (
        <div >
            <div className='px-4'>
                <Navbar></Navbar>
            <Outlet></Outlet>
            </div>
<Footer></Footer>
        </div>
    );
};

export default Layout;