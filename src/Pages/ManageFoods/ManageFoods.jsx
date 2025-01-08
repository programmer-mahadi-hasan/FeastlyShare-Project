import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../Context/AuthContext/AuthContext';
import Loading from '../Loading/Loading';
import Swal from 'sweetalert2';

const ManageFoods = () => {
    const { user, loading, setLoading } = useContext(AuthContext);
    const loggedInUserEmail = user?.email;
    const [addedFoods, setAddedFoods] = useState([]);
    const [selectedFood, setSelectedFood] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (loggedInUserEmail) {
            fetch(`http://localhost:5000/foods/added-foods?donatorEmail=${encodeURIComponent(loggedInUserEmail)}`)
                .then((res) => res.json())
                .then((data) => {
                    setAddedFoods(data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error('Error fetching foods:', error);
                    setLoading(false);
                });
        }
    }, [loggedInUserEmail]);

    if (loading) {
        return <Loading />;
    }

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/foods/${id}`, {
                    method: 'DELETE',
                })
                    .then((res) => res.json())
                    .then(() => {
                        setAddedFoods((prevFoods) => prevFoods.filter((food) => food._id !== id));
                    })
                    .catch((error) => console.error('Error deleting food:', error));
                Swal.fire({
                    title: "Deleted!",
                    text: "Your food has been deleted.",
                    icon: "success"
                });
            }
        });
    };

    const handleUpdate = (food) => {
        setSelectedFood(food);
        setShowModal(true);
    };

    const handleSaveUpdate = (e) => {
        e.preventDefault()
        fetch(`http://localhost:5000/foods/${selectedFood._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(selectedFood),
        })
            .then((res) => res.json())
            .then(() => {
                setAddedFoods((prevFoods) =>
                    prevFoods.map((food) => (food._id === selectedFood._id ? selectedFood : food))
                );
                setShowModal(false);
            })
            .catch((error) => console.error('Error updating food:', error));
    };

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
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img src={food.foodImage} alt={food.foodName} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{food.foodName}</div>
                                                <div className="text-sm opacity-50">{food.pickupLocation}</div>
                                            </div>
                                        </div>
                                    </td>
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
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Additional Notes</span>
                                </label>
                                <input
                                    type="text"
                                    value={selectedFood?.additionalNotes || ''}
                                    onChange={(e) =>
                                        setSelectedFood({ ...selectedFood, additionalNotes: e.target.value })
                                    }
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Expiry Date</span>
                                </label>
                                <input
                                    type="date"
                                    value={selectedFood?.expiryDateTime?.split('T')[0] || ''}
                                    onChange={(e) =>
                                        setSelectedFood({
                                            ...selectedFood,
                                            expiryDateTime: new Date(e.target.value).toISOString(),
                                        })
                                    }
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Food Image URL</span>
                                </label>
                                <input
                                    type="text"
                                    value={selectedFood?.foodImage || ''}
                                    onChange={(e) =>
                                        setSelectedFood({ ...selectedFood, foodImage: e.target.value })
                                    }
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="flex justify-end mt-4">
                                <button type="submit" className="btn btn-primary mr-2">
                                    Save
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={() => setShowModal(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}


        </div>
    );
};

export default ManageFoods;
