import React, { useContext, useState } from 'react';
import AuthContext from '../../Context/AuthContext/AuthContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddFoods = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        foodName: "",
        foodImage: "",
        foodQuantity: "",
        pickupLocation: "",
        expiryDateTime: "",
        additionalNotes: "",
        donatorName: `${user?.displayName}`,
        donatorEmail: `${user?.email}`,
        donatorImage: `${user?.photoURL}`,
        foodStatus: "available",
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        fetch('http://localhost:5000/foods', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.info('You have added a food');
                    navigate('/')
                    console.log(data);
                }
            });
    };

    return (
        <section className="bg-gray-50 py-10 px-5">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl text-orange-500 font-bold mb-6 text-center">Add Food</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Food Name */}
                    <div>
                        <label className="block text-sm font-medium mb-1 text-orange-500">Food Name</label>
                        <input
                            type="text"
                            name="foodName"
                            value={formData.foodName}
                            onChange={handleChange}
                            className="w-full border border-orange-400 rounded-lg p-2"
                            placeholder="Enter food name"
                            required
                        />
                    </div>

                    {/* Food Image */}
                    <div>
                        <label className="block text-sm font-medium mb-1 text-orange-500">Food Image URL</label>
                        <input
                            type="url"
                            name="foodImage"
                            value={formData.foodImage}
                            onChange={handleChange}
                            className="w-full border border-orange-400 rounded-lg p-2"
                            placeholder="Enter image URL"
                            required
                        />
                    </div>

                    {/* Food Quantity */}
                    <div>
                        <label className="block text-sm font-medium mb-1 text-orange-500">Food Quantity</label>
                        <input
                            type="number"
                            name="foodQuantity"
                            value={formData.foodQuantity}
                            onChange={handleChange}
                            className="w-full border border-orange-400 rounded-lg p-2"
                            placeholder="Enter quantity (e.g., 2 plates)"
                            required
                        />
                    </div>

                    {/* Pickup Location */}
                    <div>
                        <label className="block text-sm font-medium mb-1 text-orange-500">Pickup Location</label>
                        <input
                            type="text"
                            name="pickupLocation"
                            value={formData.pickupLocation}
                            onChange={handleChange}
                            className="w-full border border-orange-400 rounded-lg p-2"
                            placeholder="Enter pickup location"
                            required
                        />
                    </div>

                    {/* Expiry Date/Time */}
                    <div>
                        <label className="block text-sm font-medium mb-1 text-orange-500">Expiry Date/Time</label>
                        <input
                            type="datetime-local"
                            name="expiryDateTime"
                            value={formData.expiryDateTime}
                            onChange={handleChange}
                            className="w-full border border-orange-400 rounded-lg p-2"
                            required
                        />
                    </div>

                    {/* Additional Notes */}
                    <div>
                        <label className="block text-sm font-medium mb-1 text-orange-500">Additional Notes</label>
                        <textarea
                            name="additionalNotes"
                            value={formData.additionalNotes}
                            onChange={handleChange}
                            className="w-full border border-orange-400 rounded-lg p-2"
                            placeholder="Add any notes about the food (e.g., allergies, storage instructions)"
                        />
                    </div>

                    {/* Food Status */}
                    <div>
                        <label className="block text-sm font-medium mb-1 text-orange-500">Food Status</label>
                        <select
                            name="foodStatus"
                            value={formData.foodStatus}
                            onChange={handleChange}
                            className="w-full border border-orange-400 rounded-lg p-2"
                        >
                            <option value="available">Available</option>
                            <option value="unavailable">Unavailable</option>
                        </select>
                    </div>

                    {/* Donator Info */}
                    <div className="flex border border-orange-400 items-center space-x-4 bg-gray-100 p-4 rounded-lg">
                        <img
                            src={formData.donatorImage}
                            alt={formData.donatorName}
                            className="w-16 h-16 rounded-full"
                        />
                        <div>
                            <h3 className="text-lg font-medium">{formData.donatorName}</h3>
                            <p className="text-sm text-gray-600">{formData.donatorEmail}</p>
                        </div>
                    </div>

                    {/* Add Food Button */}
                    <button
                        type="submit"
                        className="w-full bg-orange-500 text-white font-medium py-2 rounded-lg hover:bg-orange-700 transition"
                    >
                        Add Food
                    </button>
                </form>
            </div>
        </section>
    );
};

export default AddFoods;
