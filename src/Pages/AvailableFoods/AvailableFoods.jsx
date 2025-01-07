import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FoodCard from '../../Components/FoodCard';
const AvailableFoods = () => {
    const loadedFoods = useLoaderData()
    return (
        <div className="py-12 px-6 bg-gray-100">
            <h2 className="text-4xl font-bold text-center text-orange-500 mb-8">All Available Foods</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {loadedFoods.map(food => <FoodCard key={food._id} food={food}></FoodCard>)}
            </div>
        </div>
    );
};

export default AvailableFoods;