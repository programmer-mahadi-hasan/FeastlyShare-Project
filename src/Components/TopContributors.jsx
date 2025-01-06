import React from 'react';

const TopContributors = () => {
    const contributors = [
        {
            id: 1,
            name: "Sarah Johnson",
            country: "United States",
            region: "California",
            mealsShared: 200,
            description: "Passionate about reducing food waste and helping her community.",
            photo: "https://randomuser.me/api/portraits/women/32.jpg",
        },
        {
            id: 2,
            name: "Ahmed Khan",
            country: "Pakistan",
            region: "Karachi",
            mealsShared: 175,
            description: "Making a difference by sharing fresh meals every week.",
            photo: "https://randomuser.me/api/portraits/men/45.jpg",
        },
        {
            id: 3,
            name: "Maria Gonzalez",
            country: "Spain",
            region: "Barcelona",
            mealsShared: 150,
            description: "Inspired to share her love for homemade food with others.",
            photo: "https://randomuser.me/api/portraits/women/65.jpg",
        },
        {
            id: 4,
            name: "John Smith",
            country: "Australia",
            region: "Sydney",
            mealsShared: 130,
            description: "Believes every shared meal brings joy to someone’s day.",
            photo: "https://randomuser.me/api/portraits/men/30.jpg",
        },
    ];
    return (
        <section className="bg-gray-50 py-10 px-5">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Top Contributors</h2>
                <p className="text-lg text-gray-600 mb-8">
                    Meet the heroes of our community who make a big impact by sharing food.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {contributors.map((user) => (
                        <div
                            key={user.id}
                            className="bg-white rounded-lg shadow-md p-5 text-center"
                        >
                            <img
                                src={user.photo}
                                alt={user.name}
                                className="w-24 h-24 rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold">{user.name}</h3>
                            <p className="text-sm text-gray-500">
                                {user.region}, {user.country}
                            </p>
                            <p className="text-gray-700 mt-2">{user.description}</p>
                            <p className="text-lg font-medium text-green-600 mt-4">
                                Meals Shared: {user.mealsShared}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TopContributors;