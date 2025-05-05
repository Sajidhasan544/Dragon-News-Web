import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const { creatUser, setUser, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const url = e.target.url.value;
        const password = e.target.password.value;

        creatUser(email, password)
            .then(res => {
                const user = res.user;
                updateUser({ displayName: name, photoURL: url })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: url });
                        navigate('/');
                    })
                    .catch(err => {
                        console.log(err.message);
                        setUser(user);
                    });
            })
            .catch(err => {
                alert(err.message);
            });
    };

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleRegister} className="fieldset">
                        <label className="label">Name</label>
                        <input type="text" className="input" name="name" placeholder="Name" />
                        <label className="label">Photo URL</label>
                        <input type="text" className="input" name="url" placeholder="Photo URL" />
                        <label className="label">Email</label>
                        <input type="email" className="input" name="email" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input" name="password" placeholder="Password" />
                        <button type="submit" className="btn btn-neutral mt-4">Register</button>
                        <p className='font-semibold text-center pt-5'>
                            Already have an account? Please <Link className='text-secondary' to='/auth/login'>Login</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
