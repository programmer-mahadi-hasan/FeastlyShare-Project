import React from 'react';

const Register = () => {
    return (
        <div className="flex min-h-screen my-8">
            <div className="w-1/2 bg-gradient-to-br from-red-500 to-yellow-500 flex flex-col justify-center items-center text-white p-10">
                <h1 className="text-4xl font-bold mb-4">WELCOME TO FeastlyShare</h1>
                <p className="text-lg mb-6 text-center">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
                </p>
                <div className="flex space-x-4">
                    <button className="bg-white text-red-500 p-2 rounded-full">F</button>
                    <button className="bg-white text-blue-500 p-2 rounded-full">T</button>
                    <button className="bg-white text-red-500 p-2 rounded-full">G</button>
                    <button className="bg-white text-blue-500 p-2 rounded-full">L</button>
                </div>
            </div>

            <div className="w-1/2 bg-zinc-100 flex flex-col justify-center p-10">
                <h2 className="text-3xl font-semibold mb-4">FeastlyShare</h2>
                <h3 className="text-xl mb-6">Create An Account</h3>
                <form className="space-y-4">
                    <input type="text" placeholder="Full Name" className="w-full p-3 border border-zinc-300 rounded" />
                    <input type="email" placeholder="Email Address" className="w-full p-3 border border-zinc-300 rounded" />
                    <input type="password" placeholder="Password" className="w-full p-3 border border-zinc-300 rounded" />
                    <div className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <label className="text-zinc-700">I agree to the terms of service</label>
                    </div>
                    <button className="w-full bg-orange-500 text-white p-3 rounded hover:bg-orange-400">Login</button>
                </form>
                <p className="mt-4 text-center text-zinc-600">
                    Already a member? <a href="#" className="text-orange-500">Login here</a>
                </p>
            </div>
        </div>
    );
};

export default Register;
