import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import usr from "../assets/user.png"
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {

    const {user,LogOut} =use(AuthContext);


    const handelLogout=()=>{
        LogOut().then(res=>{
            alert("You Logged Out")
            console.log(res)
        }).catch(er=>{
            console.log(er.message);
        })
    }

    return (
        <div className='flex justify-between items-center'>
            <div className=''></div>
            <div>{user && user.email}</div>
            <div className='flex gap-4 text-accent'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className='flex gap-4'>
                <img className='w-12 rounded-full' src={user?user.photoURL:usr } alt="" />
                {user?<button onClick={handelLogout} className='btn btn-primary px-10'>Logout</button>:(<Link to='/auth/login' className='btn btn-primary px-10'>Login</Link>)}

                
            </div>
        </div>
    );
};

export default Navbar;