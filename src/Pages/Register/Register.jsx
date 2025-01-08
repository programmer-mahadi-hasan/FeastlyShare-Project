import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import AuthContext from '../../Context/AuthContext/AuthContext';
import { toast } from 'react-toastify';

const Register = () => {
    const { createUser, googleLogin } = useContext(AuthContext);
    const [passwordError, setPasswordError] = useState("");
    const navigate = useNavigate();
    const handleRegister = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;

        // Password validation
        const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

        if (!regex.test(password)) {
            setPasswordError(
                "Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
            );
            return;
        }
        setPasswordError("");

        try {
            await createUser(email, password, name, photoUrl);
            toast.success("You have successfully created an account");
            navigate("/");
        } catch (error) {
            console.error("Error during registration:", error.message);
            toast.error(error.message);
        }
    };

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
            <div className="flex-1 flex items-center justify-center bg-background p-6">
                <div className="max-w-md w-full">
                    <h1 className="text-3xl font-bold mb-6">Sign up</h1>
                    <form onSubmit={handleRegister}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-muted-foreground">Full Name</label>
                            <input
                                type="text"
                                placeholder="Enter Your Name"
                                name="name"
                                className="mt-1 block w-full p-2 border border-border rounded-lg bg-muted text-muted-foreground"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-muted-foreground">Photo Url</label>
                            <input
                                type="url"
                                placeholder="Enter your photo url"
                                name="photoUrl"
                                className="mt-1 block w-full p-2 border border-border rounded-lg bg-muted text-muted-foreground"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-muted-foreground">Email Address</label>
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                name="email"
                                className="mt-1 block w-full p-2 border border-border rounded-lg bg-muted text-muted-foreground"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-muted-foreground">Password</label>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                name="password"
                                className="mt-1 block w-full p-2 border border-border rounded-lg bg-muted text-muted-foreground"
                                required
                            />
                            {/* Error message */}
                            {passwordError && (
                                <p className="text-red-500 text-sm mt-1">[{passwordError}]</p>
                            )}
                        </div>
                        <button className="w-full bg-black text-white hover:bg-black/80 p-2 rounded-lg">
                            Sign Up
                        </button>
                    </form>
                    <div className="mt-4 text-center">
                        <span className="text-sm text-muted-foreground">Or continue with</span>
                        <div className='flex justify-center mt-2'>
                            <button onClick={handleGoogleLogin} className="bg-white text-black border border-zinc-300 rounded py-2 px-4 flex items-center">
                                <FaGoogle className="mr-2" /> Google
                            </button>
                        </div>
                    </div>
                    <div className="mt-4 text-center">
                        <span className="text-sm text-muted-foreground">
                            Already a member? <Link to={"/login"} className="text-primary">Sign in now</Link>
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex-1 bg-card flex items-center justify-center p-6">
                <div className="max-w-md text-center">
                    <h1 className="text-3xl font-bold text-foreground">FeastlyShare</h1>
                    <h2 className="text-2xl font-bold text-foreground">
                        Join the largest Food-Sharing community in the world.
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Register;
