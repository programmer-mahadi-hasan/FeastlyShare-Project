import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext/AuthContext';
import { toast } from 'react-toastify';

const Login = () => {
    const { loginUser, googleLogin } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then(result => {
                console.log(result.user)
                result.user && toast.success('Successfully loged in')
                navigate(location.state ? location.state : "/")
            })
            .catch(error => {
                console.log(error.message)
                toast.error(error.message)
            })
    }
    const handleGoogleLogin = async () => {
        try {
            await googleLogin()
            toast.success('successfully login with Google')
            navigate('/')
        } catch (error) {
            toast.error('Google login error!')
        }
    }
    return (
        <div className="flex flex-col md:flex-row h-screen">
            <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8">
                <h1 className="text-3xl font-bold mb-6">Sign in</h1>
                <form onSubmit={handleLogin} className="w-full max-w-sm">
                    <div className="mb-4">
                        <label className="block text-zinc-700 text-sm font-bold mb-2" htmlFor="email">Email Address</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter Your Email" name='email' required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-zinc-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter Password" name='password' required />
                    </div>
                    <div className="flex items-center justify-between mb-4">
                        <label className="inline-flex items-center">
                            <input type="checkbox" className="form-checkbox text-blue-600" checked />
                            <span className="ml-2 text-zinc-700">Remember Me</span>
                        </label>
                        <a className="text-blue-500 text-sm" href="#">Forgot Password?</a>
                    </div>
                    <button className="bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="submit">
                        Sign in
                    </button>
                    <hr className="my-4" />
                </form>
                <div>
                    <button onClick={handleGoogleLogin} className="bg-white text-black border border-zinc-300 rounded py-2 px-4 flex items-center">
                        <FaGoogle className='mr-2' /> Google
                    </button>
                </div>
                <p className="mt-4 text-sm text-zinc-600">Not a member? <Link to={'/register'} className="text-blue-500">Sign up now</Link></p>
            </div>
            <div className="hidden md:flex justify-center items-center w-1/2">
                <div className="text-center">
                    <h2 className="text-4xl font-bold">Join the largest Food-sharing community in the world.</h2>
                </div>
            </div>
        </div>
    );
};

export default Login;
