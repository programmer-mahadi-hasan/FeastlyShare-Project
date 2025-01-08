import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FoodCard from './FoodCard';

const FeaturedFoods = () => {
    const [loadedFoods, setLoadedFoods] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/foods')
            .then(res => res.json())
            .then(data => setLoadedFoods(data))
    }, [])
    const foods = loadedFoods.sort((a, b) => b.foodQuantity - a.foodQuantity).slice(0, 6);
    const handleShowAllClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <div className="py-12 px-6">
            <h2 className="text-4xl font-bold text-center text-orange-500 mb-8">Featured Foods</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {foods.map(food => <FoodCard key={food._id} food={food}></FoodCard>)}
            </div>
            <div className="text-center mt-8">
                <Link to="/available-foods">
                    <button onClick={handleShowAllClick} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded">
                        Show All
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default FeaturedFoods;
