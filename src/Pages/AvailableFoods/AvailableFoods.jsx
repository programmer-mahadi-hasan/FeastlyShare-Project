import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import FoodCard from '../../Components/FoodCard';

const AvailableFoods = () => {
    const loadedFoods = useLoaderData();
    const availableFoods = loadedFoods.filter((food) => food.foodStatus === 'available');
    const [foods, setFoods] = useState(availableFoods);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOrder, setSortOrder] = useState('ascending');
    const [isThreeColumnLayout, setIsThreeColumnLayout] = useState(true);

    // handle search by food name
    const handleSearch = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);

        const filteredFoods = availableFoods.filter((food) =>
            food.foodName.toLowerCase().includes(query)
        );
        setFoods(filteredFoods);
    };

    // handle sort order change and sort foods 
    useEffect(() => {
        const sortedFoods = [...foods].sort((a, b) => {
            if (sortOrder === 'ascending') {
                return new Date(a.expiryDateTime) - new Date(b.expiryDateTime);
            }
            return new Date(b.expiryDateTime) - new Date(a.expiryDateTime);
        });
        setFoods(sortedFoods);
    }, [sortOrder]);

    // handle sort order change
    const handleSortOrderChange = (event) => {
        setSortOrder(event.target.value);
    };

    // handle layout toggle
    const handleLayoutToggle = () => {
        setIsThreeColumnLayout((prev) => !prev);
    };

    return (
        <div className="py-12 px-6 ">
            <h2 className="text-4xl font-bold text-center text-orange-500 mb-8">All Available Foods</h2>

            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                <input
                    type="text"
                    placeholder="Search by food name..."
                    value={searchQuery}
                    onChange={handleSearch}
                    className="px-4 py-2 border border-gray-300 rounded w-full sm:w-1/2"
                />

                <select
                    value={sortOrder}
                    onChange={handleSortOrderChange}
                    className="px-4 py-2 border border-gray-300 rounded bg-white"
                >
                    <option value="ascending">Sort by Expiry Date (Ascending)</option>
                    <option value="descending">Sort by Expiry Date (Descending)</option>
                </select>

                <button
                    onClick={handleLayoutToggle}
                    className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
                >
                    {isThreeColumnLayout ? 'Switch to 2-Column Layout' : 'Switch to 3-Column Layout'}
                </button>
            </div>

            <div
                className={`grid gap-6 ${isThreeColumnLayout ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2'
                    }`}
            >
                {foods.map((food) => (
                    <FoodCard key={food._id} food={food} />
                ))}
            </div>
        </div>
    );
};

export default AvailableFoods;
