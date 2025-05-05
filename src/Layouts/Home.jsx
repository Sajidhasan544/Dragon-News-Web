import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../Component/Header';
import LatestNews from '../Component/LatestNews';
import Navbar from '../Component/Navbar';
import LeftAside from '../Component/HomeLayout/LeftAside';
import RightSide from '../Component/HomeLayout/RightSide';

const Home = () => {
    const {state} = useNavigation();
    return (
        <div>
            <header>
                <Header></Header>
                {import.meta.env.VITE_name}
                <section className='w-11/12 mx-auto my-3'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='w-11/12 mx-auto my-3'>
                    <Navbar></Navbar>
                </nav>
            </header>

            <main className='w-11/12 mx-auto my-3 grid grid-cols-12 gap-4'>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='main col-span-6'>
                    {state=='loading'?(<div className="flex justify-center items-center"><span className="loading loading-bars loading-xl"></span></div>):<Outlet></Outlet>}
                </section>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <RightSide></RightSide>
                </aside>
            </main>
        </div>
    );
};

export default Home;