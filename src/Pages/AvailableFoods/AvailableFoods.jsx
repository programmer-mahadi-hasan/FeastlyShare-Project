import React from 'react';
import { useLoaderData } from 'react-router-dom';
const AvailableFoods = () => {
    const loadedFoods = useLoaderData()
    return (
        <div className="py-12 px-6 bg-gray-100">
            <h2 className="text-4xl font-bold text-center text-orange-500 mb-8">All Available Foods</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {loadedFoods.map(food => (
                    <div key={food._id} className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img src={food.foodImage} alt={food.foodName} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-orange-500">{food.foodName}</h3>
                            <p className="text-gray-600 mb-2">{food.additionalNotes}</p>
                            <p className="text-gray-700 font-bold">Quantity: {food.foodQuantity}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AvailableFoods;