import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Login With</h2>
            <div className="space-y-3">
                <button className='btn btn-outline w-full btn-secondary'><FcGoogle  size={25}/>Login With Google</button>
                <button className='btn btn-outline w-full btn-primary'><FaGithub size={25}></FaGithub> Login With GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogin;
