import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../Context/AuthContext/AuthContext';
import Loading from '../Loading/Loading';

const FoodRequest = () => {
    const { user, loading, setLoading } = useContext(AuthContext);
    const loggedInUserEmail = user?.email || '';
    const [requestedFoods, setRequestedFoods] = useState([]);

    useEffect(() => {
        if (loggedInUserEmail) {
            fetch(`https://feastly-share-server.vercel.app/foods/requested?userEmail=${encodeURIComponent(loggedInUserEmail)}`)
                .then((res) => res.json())
                .then((data) => {
                    console.log('Requested Foods:', data);
                    setRequestedFoods(data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error('Error fetching requested foods:', error);
                    setLoading(false);
                });
        }
    }, [loggedInUserEmail]);

    if (loading) {
        return <Loading />;
    }

    return (
        <div>
            <h1 className="text-2xl font-bold text-orange-400 text-center">Requested Foods</h1>
            {requestedFoods.length === 0 ? (
                <p className="text-center text-muted-foreground">No requested foods found.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Donor Name</th>
                                <th>Additional Notes</th>
                                <th>Expire Date</th>
                                <th>Requested Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {requestedFoods.map((food) => (
                                <tr key={food._id}>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img src={food.foodImage} alt={food.foodName} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{food.donatorName}</div>
                                                <div className="text-sm opacity-50">{food.pickupLocation}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{food.additionalNotes}</td>
                                    <td>{new Date(food.expiryDateTime).toLocaleDateString()}</td>
                                    <td>{new Date(food.requestDate).toLocaleDateString()}</td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>Donor Name</th>
                                <th>Additional Notes</th>
                                <th>Expire Date</th>
                                <th>Requested Date</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            )}
        </div>
    );
};

export default FoodRequest;
