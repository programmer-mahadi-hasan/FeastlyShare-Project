import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext/AuthContext';
import { toast } from 'react-toastify';

const FoodDetails = () => {
    const food = useLoaderData();
    const { user } = useContext(AuthContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const currentDate = new Date().toLocaleString();
    const [formData, setFormData] = useState({
        foodName: `${food.foodName}`,
        foodImage: `${food.foodImage}`,
        foodQuantity: `${food.foodQuantity}`,
        pickupLocation: `${food.pickupLocation}`,
        expiryDateTime: `${food.expiryDateTime}`,
        additionalNotes: "",
        donatorName: `${food.donatorName}`,
        donatorEmail: `${food.donatorEmail}`,
        donatorImage: `${food.donatorImage}`,
        requestDate: `${currentDate}`,
        foodStatus: "requested",
    });
    // Handle note input changes
    const handleNoteChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const loggedInUserEmail = `${user?.email}`;

    const handleRequestButtonClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };


    // handle request food
    const handleRequestFood = e => {
        e.preventDefault();
        console.log('request food data:', formData)
        toast.success('Food added to the request food list')
        handleCloseModal()
    }

    return (
        <div className="max-w-3xl mx-auto bg-card rounded-lg shadow-lg overflow-hidden p-6 my-6">
            <div className="flex items-start space-x-4">
                <img src={food.foodImage} alt={food.foodName} className="w-1/2 rounded-lg object-cover" />
                <div className="w-1/2 flex flex-col space-y-4">
                    <h1 className="text-2xl text-orange-400 font-semibold text-foreground">{food.foodName}</h1>
                    <p className="text-muted-foreground text-sm">{food.additionalNotes}</p>
                    <p className="text-muted-foreground text-sm">Quantity: {food.foodQuantity} Servings</p>
                    <p className="text-muted-foreground text-sm">Pickup Location: {food.pickupLocation}</p>
                    <p className="text-muted-foreground text-sm">Expiry: {new Date(food.expiryDateTime).toLocaleString()}</p>
                    <p className={`text-sm font-semibold ${food.foodStatus === 'available' ? 'text-green-600' : 'text-red-600'}`}>Status: {food.foodStatus}</p>
                    <button
                        onClick={handleRequestButtonClick}
                        className="mt-4 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Request Food
                    </button>
                </div>
            </div>

            <div className="mt-6 border-t pt-4">
                <h2 className="text-lg font-semibold text-foreground">Donator Information</h2>
                <div className="flex items-center space-x-4 mt-2">
                    <img src={food.donatorImage} alt={food.donatorName} className="w-12 h-12 rounded-full" />
                    <div>
                        <p className="text-foreground font-medium">{food.donatorName}</p>
                        <p className="text-muted-foreground text-sm">{food.donatorEmail}</p>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-auto">
                        <h2 className="text-lg font-semibold mb-4">Food Request</h2>
                        <form onSubmit={handleRequestFood} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium">Food Name</label>
                                    <input type="text" value={food.foodName} readOnly className="w-full border rounded px-3 py-2" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Food Image</label>
                                    <input type="text" value={food.foodImage} readOnly className="w-full border rounded px-3 py-2" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Food ID</label>
                                    <input type="text" value={food._id} readOnly className="w-full border rounded px-3 py-2" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Donator Email</label>
                                    <input type="text" value={food.donatorEmail} readOnly className="w-full border rounded px-3 py-2" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">User Email</label>
                                    <input type="text" value={loggedInUserEmail} readOnly className="w-full border rounded px-3 py-2" />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium">Donator Name</label>
                                    <input type="text" value={food.donatorName} readOnly className="w-full border rounded px-3 py-2" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Request Date</label>
                                    <input type="text" value={currentDate} readOnly className="w-full border rounded px-3 py-2" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Pickup Location</label>
                                    <input type="text" value={food.pickupLocation} readOnly className="w-full border rounded px-3 py-2" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Expiry Date</label>
                                    <input type="text" value={new Date(food.expiryDateTime).toLocaleString()} readOnly className="w-full border rounded px-3 py-2" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Additional Notes</label>
                                    <textarea className="w-full border rounded px-3 py-2" onChange={handleNoteChange} value={formData.additionalNotes} name="additionalNotes" rows="3" placeholder="Enter any additional notes"></textarea>
                                </div>
                            </div>
                            <div className="mt-6 flex justify-end col-span-2 space-x-4">
                                <button
                                    onClick={handleCloseModal}
                                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Cancel
                                </button>
                                <button type='submit'
                                    className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Submit Request
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

        </div>
    );
};

export default FoodDetails;
