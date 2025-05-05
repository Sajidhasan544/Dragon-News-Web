import React,{use} from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import {AuthContext} from "../Provider/AuthProvider"

const Login = () => {
    const {Login} = use(AuthContext);
    const location = useLocation();
    const navigate= useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        Login(email,password).then(res=>{
            console.log(res.user);
            if(location.state){
                navigate(location.state)
            }else{
                navigate('/')
            }
        }).catch(er=>{
            console.log(er)
        })
    
    };
 
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleLogin} className="fieldset">
                        <label className="label">Email</label>
                        <input name="email" type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input name="password" type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type="submit" className="btn btn-neutral mt-4">Login</button>
                        <p className='font-semibold text-center pt-5'>
                            Don't have an account? Please <Link className='text-secondary' to='/auth/reg'>Register</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
