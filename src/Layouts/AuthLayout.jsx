import React from 'react';
import Navbar from '../Component/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div>
            <header className='bg-base-200'>
                <div >
                <Navbar></Navbar>
                </div>
                <main>
                    <Outlet></Outlet>
                </main>
            </header>
        </div>
    );
};

export default AuthLayout;