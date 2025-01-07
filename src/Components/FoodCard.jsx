import React from 'react';
import { Link } from 'react-router-dom';

const FoodCard = ({ food }) => {
    return (
        <div className="max-w-lg mx-auto bg-card rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            <div className="flex">
                <div className="w-1/2 flex flex-col justify-between p-4">
                    <div className='space-y-2'>
                        <h2 className="text-xl font-semibold text-foreground">{food.foodName}</h2>
                        <p className="text-muted-foreground text-sm mt-2">{food.additionalNotes}..</p>
                        <p className="text-muted-foreground text-sm">Exp Date: {food.expiryDateTime.slice(0, 10)}</p>
                        <p className="text-muted-foreground text-sm">Quantity: {food.foodQuantity} Servings</p>
                    </div>
                    <div className="mt-4">
                        <Link to={`/food/${food._id}`} className="text-orange-400 hover:underline focus:outline-none">
                            See Details
                        </Link>
                    </div>
                </div>
                <div className="w-1/2">
                    <img src={food.foodImage} alt={food.foodName} className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
