import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import login from '../assets/login.webp';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("User registered :" , {email,password});
    }
    
    return (
        <div className='flex h-screen'>
            {/* Left column - Form */}
            <div className='w-full md:w-1/2 h-full flex flex-col justify-center items-center p-8 md:p-12'>
                <form
                 onSubmit={handleSubmit} 
                 className='w-full max-w-md bg-white p-8 rounded-lg border shadow-sm'>
                    <div className='flex justify-center mb-6'>
                        <h2 className='text-xl font-medium'>Rabbit</h2>
                    </div>
                    <h2>hii there! 👋</h2>
                    <p className='text-center mb-6'>
                        Enter your username and password to login
                    </p>
                    <div className='mb-4'>
                        <label className='block text-sm font-semibold mb-2 text-left'>Email</label>
                        <input 
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Enter your email address'
                            className='w-full p-2 rounded border border-gray-400 outline-none' 
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-sm font-semibold mb-2 text-left'>Password</label>
                        <input 
                            type="password"  // fixed: should be password type
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Enter your password'
                            className='w-full p-2 rounded border border-gray-400 outline-none' 
                        />
                    </div>
                    <button
                        type='submit'
                        className='w-full bg-black text-white p-2 rounded-lg font-semibold hover:bg-gray-800 transition' 
                    >
                        Sign In
                    </button>
                    <p className='mt-3 text-sm text-left'>
                        Don't have an account <Link to="/register" className='text-blue-500'>Register</Link>
                    </p>
                </form>
            </div>

            {/* Right column - Image */}
            <div className='hidden md:block w-1/2 py-10'>
                <div className='h-[500px] w-full'>
                    <img src={login} alt="Login to Account" className='h-full w-full object-cover' />
                </div>
            </div>
        </div>
    );
}

export default Login;
