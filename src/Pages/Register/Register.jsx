import React from 'react';

const Register = () => {
    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            <div className="w-full md:w-1/2 bg-gradient-to-br from-primary to-secondary flex flex-col justify-center items-center text-primary-foreground p-6 md:p-10">
                <h1 className="text-2xl md:text-4xl font-bold mb-4">WELCOME TO FeastlyShare</h1>
                <p className="text-base md:text-lg mb-6 text-center">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
                </p>
                <div className="flex space-x-4">
                    <button className="bg-white text-primary p-2 rounded-full">F</button>
                    <button className="bg-white text-secondary p-2 rounded-full">T</button>
                    <button className="bg-white text-primary p-2 rounded-full">G</button>
                    <button className="bg-white text-secondary p-2 rounded-full">L</button>
                </div>
            </div>

            <div className="w-full md:w-1/2 bg-card flex flex-col justify-center p-6 md:p-10">
                <h2 className="text-xl md:text-3xl font-semibold mb-4">FeastlyShare</h2>
                <h3 className="text-lg md:text-xl mb-6">Create An Account</h3>
                <form className="space-y-4">
                    <input type="text" placeholder="Full Name" className="w-full p-3 border border-card rounded" />
                    <input type="email" placeholder="Email Address" className="w-full p-3 border border-card rounded" />
                    <input type="password" placeholder="Password" className="w-full p-3 border border-card rounded" />
                    <div className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <label className="text-card-foreground">I agree to the terms of service</label>
                    </div>
                    <button className="w-full bg-accent text-accent-foreground p-3 rounded hover:bg-accent/80">Register</button>
                </form>
                <p className="mt-4 text-center text-card-foreground">
                    Already a member? <a href="#" className="text-accent">Login here</a>
                </p>
            </div>
        </div>
    );
};

export default Register;

/**
 * 
 * 
 */