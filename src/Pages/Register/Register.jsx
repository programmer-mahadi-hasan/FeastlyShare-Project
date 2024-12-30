import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Register = () => {
    return (
        <div className="flex flex-col md:flex-row h-screen">
            <div className="flex-1 flex items-center justify-center bg-background p-6">
                <div className="max-w-md w-full">
                    <h1 className="text-3xl font-bold mb-6">Sign up</h1>
                    <form>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-muted-foreground">Full Name</label>
                            <input
                                type="text"
                                placeholder="Enter Your Name"
                                className="mt-1 block w-full p-2 border border-border rounded-lg bg-muted text-muted-foreground"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-muted-foreground">Photo Url</label>
                            <input
                                type="url"
                                placeholder="Enter your photo url"
                                className="mt-1 block w-full p-2 border border-border rounded-lg bg-muted text-muted-foreground"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-muted-foreground">Email Address</label>
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                className="mt-1 block w-full p-2 border border-border rounded-lg bg-muted text-muted-foreground"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-muted-foreground">Password</label>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                className="mt-1 block w-full p-2 border border-border rounded-lg bg-muted text-muted-foreground"
                            />
                        </div>
                        <div className="flex items-center mb-4">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-sm text-muted-foreground">
                                I agree to the <a href="#" className="text-primary">Terms</a> and <a href="#" className="text-primary">Privacy Policy</a>.
                            </span>
                        </div>
                        <button className="w-full bg-black text-white hover:bg-black/80 p-2 rounded-lg">
                            Sign Up
                        </button>
                    </form>
                    <div className="mt-4 text-center">
                        <span className="text-sm text-muted-foreground">Or continue with</span>
                        <div className="flex justify-between">
                            <button className="bg-white text-black border border-zinc-300 rounded py-2 px-4 flex items-center">
                                <FaGoogle className='mr-2' /> Google
                            </button>
                            <button className="bg-white text-black border border-zinc-300 rounded py-2 px-4 flex items-center">
                                <FaGithub className='mr-2' /> GitHub
                            </button>
                        </div>
                    </div>
                    <div className="mt-4 text-center">
                        <span className="text-sm text-muted-foreground">Already a member? <Link to={'/login'} className="text-primary">Sign in now</Link></span>
                    </div>
                </div>
            </div>
            <div className="flex-1 bg-card flex items-center justify-center p-6">
                <div className="max-w-md text-center">
                    <h1 className='text-3xl font-bold text-foreground'>FeastlyShare</h1>
                    <h2 className="text-2xl font-bold text-foreground">Join the largest Food-Sharing community in the world.</h2>
                </div>
            </div>
        </div>
    );
};

export default Register;

/**
 * 
 * 
 */