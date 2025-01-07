import React from 'react';

const FoodCard = ({ food }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={food.foodImage} alt={food.foodName} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-semibold text-orange-500">{food.foodName}</h3>
                <p className="text-gray-600 mb-2">{food.additionalNotes}</p>
                <p className="text-gray-700 font-bold">Quantity: {food.foodQuantity} Servings</p>
            </div>
        </div>
    );
};

export default FoodCard;