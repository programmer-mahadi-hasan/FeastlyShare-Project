import React, { useContext, useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthContext from '../../Context/AuthContext/AuthContext';
import Loading from '../Loading/Loading';

const fetchFoods = async (email) => {
    const response = await fetch(`http://localhost:5000/foods/added-foods?donatorEmail=${encodeURIComponent(email)}`);
    if (!response.ok) throw new Error('Failed to fetch foods');
    return response.json();
};

const ManageFoods = () => {
    const { user } = useContext(AuthContext);
    const loggedInUserEmail = user?.email;
    const queryClient = useQueryClient();
    const [selectedFood, setSelectedFood] = useState(null);
    const [showModal, setShowModal] = useState(false);

    // Fetching foods
    const { data: addedFoods = [], isLoading, isError } = useQuery(
        ['addedFoods', loggedInUserEmail],
        () => fetchFoods(loggedInUserEmail),
        {
            enabled: !!loggedInUserEmail,
        }
    );

    // Mutation for updating food
    const updateFoodMutation = useMutation(
        (updatedFood) =>
            fetch(`http://localhost:5000/foods/${updatedFood._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedFood),
            }),
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['addedFoods']); // Refetch foods
                toast.success('Food updated successfully!');
                setShowModal(false);
            },
            onError: () => {
                toast.error('Failed to update food. Please try again.');
            },
        }
    );

    // Mutation for deleting food
    const deleteFoodMutation = useMutation(
        (id) =>
            fetch(`http://localhost:5000/foods/${id}`, {
                method: 'DELETE',
            }),
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['addedFoods']);
                toast.success('Food deleted successfully!');
            },
            onError: () => {
                toast.error('Failed to delete food.');
            },
        }
    );

    const handleUpdate = (food) => {
        setSelectedFood(food);
        setShowModal(true);
    };

    const handleSaveUpdate = (event) => {
        event.preventDefault();
        updateFoodMutation.mutate(selectedFood);
    };

    const handleDelete = (id) => {
        deleteFoodMutation.mutate(id);
    };

    if (isLoading) return <Loading />;
    if (isError) return <p className="text-red-500">Failed to load foods.</p>;

    return (
        <div>
            <h1 className="text-2xl font-bold text-orange-400 text-center">Food you have added</h1>
            {addedFoods.length === 0 ? (
                <p className="text-center text-muted-foreground">Please add some Food..</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Food Name</th>
                                <th>Additional Notes</th>
                                <th>Expire Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {addedFoods.map((food) => (
                                <tr key={food._id}>
                                    <td>{food.foodName}</td>
                                    <td>{food.additionalNotes}</td>
                                    <td>{new Date(food.expiryDateTime).toLocaleDateString()}</td>
                                    <td>
                                        <button
                                            className="btn btn-primary btn-sm"
                                            onClick={() => handleUpdate(food)}
                                        >
                                            Update
                                        </button>
                                        <button
                                            className="btn btn-danger btn-sm ml-2"
                                            onClick={() => handleDelete(food._id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                        <h3 className="font-bold text-lg">Update Food</h3>
                        <form onSubmit={handleSaveUpdate}>
                            {/* Form Fields Here */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Food Name</span>
                                </label>
                                <input
                                    type="text"
                                    value={selectedFood?.foodName || ''}
                                    onChange={(e) =>
                                        setSelectedFood({ ...selectedFood, foodName: e.target.value })
                                    }
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            {/* Other fields */}
                            <div className="flex justify-end mt-4">
                                <button type="submit" className="btn text-white bg-orange-500 hover:bg-orange-700 mr-2">
                                    Save
                                </button>
                                <button
                                    type="button"
                                    className="btn bg-slate-400"
                                    onClick={() => setShowModal(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            <ToastContainer />
        </div>
    );
};

export default ManageFoods;
