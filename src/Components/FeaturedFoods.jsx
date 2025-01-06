import React from 'react';
import { Link } from 'react-router-dom';
import featured1 from '../assets/Rice_Bowls.jpeg';
import featured2 from '../assets/Vegetable_Curry.jpeg';
import featured3 from '../assets/Chicken_Biryani.jpeg';
import featured4 from '../assets/Fruits_Salads.jpeg';
import featured5 from '../assets/Pasta.jpeg';
import featured6 from '../assets/Kacchi_Biryani.jpeg';

const FeaturedFoods = () => {
    const foods = [
        { id: 1, name: 'Rice Bowls', description: 'Freshly cooked rice bowls for sharing.', quantity: '150 servings', image: featured1 },
        { id: 2, name: 'Vegetable Curry', description: 'Delicious and healthy curry.', quantity: '120 servings', image: featured2 },
        { id: 3, name: 'Chicken Biryani', description: 'Aromatic biryani perfect for sharing.', quantity: '80 servings', image: featured3 },
        { id: 4, name: 'Fruit Salads', description: 'A mix of seasonal fruits.', quantity: '200 servings', image: featured4 },
        { id: 5, name: 'Pasta', description: 'Creamy pasta ready to serve.', quantity: '100 servings', image: featured5 },
        { id: 6, name: 'Kacchi Biryani', description: 'Aromatic Kacchi biryani perfect for sharing.', quantity: '50 servings', image: featured6 },
    ];

    return (
        <div className="py-12 px-6 bg-gray-100">
            <h2 className="text-4xl font-bold text-center text-orange-500 mb-8">Featured Foods</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {foods.map(food => (
                    <div key={food.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img src={food.image} alt={food.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-orange-500">{food.name}</h3>
                            <p className="text-gray-600 mb-2">{food.description}</p>
                            <p className="text-gray-700 font-bold">Quantity: {food.quantity}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-8">
                <Link to="/available-foods">
                    <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded">
                        Show All
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default FeaturedFoods;
