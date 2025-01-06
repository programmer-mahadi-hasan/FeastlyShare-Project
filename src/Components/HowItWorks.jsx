import React from 'react';

const HowItWorks = () => {
    return (
        <section className="bg-gray-100 py-10 px-5">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">How It Works</h2>
                <p className="text-lg text-gray-600 mb-8">
                    Making food sharing simple and impactful!
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Step 1 */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">1. Browse Available Foods</h3>
                        <p className="text-gray-700">
                            Explore a wide range of food items in the <strong>Available Foods</strong> section. Each food card displays details like title, description, quantity, and origin.
                        </p>
                    </div>
                    {/* Step 2 */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">2. Sign Up or Log In</h3>
                        <p className="text-gray-700">
                            Create an account or log in to unlock full access and start sharing or requesting food.
                        </p>
                    </div>
                    {/* Step 3 */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">3. Add Food</h3>
                        <p className="text-gray-700">
                            Share surplus food by adding details like title, description, quantity, and origin in the <strong>Add Food</strong> section.
                        </p>
                    </div>
                    {/* Step 4 */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">4. Manage Your Foods</h3>
                        <p className="text-gray-700">
                            Update, edit, or remove food you’ve shared at any time using the <strong>Manage Foods</strong> section.
                        </p>
                    </div>
                    {/* Step 5 */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">5. Request Foods</h3>
                        <p className="text-gray-700">
                            Find food you need? Request it directly through the platform. Your contribution to reducing food waste begins here!
                        </p>
                    </div>
                    {/* Join Us */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Join Us Today!</h3>
                        <p className="text-gray-700">
                            Whether you're sharing or receiving, every action helps create a better community.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;