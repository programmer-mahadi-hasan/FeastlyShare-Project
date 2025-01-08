import React, { useEffect, useState } from 'react';

const FoodRequest = () => {
    const [requestedFoods, setRequestedFoods] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/foods/requested')
            .then((res) => res.json())
            .then((data) => {
                console.log('Requested Foods:', data);
                setRequestedFoods(data)
            })
            .catch((error) => console.error('Error fetching requested foods:', error));

    }, [])
    console.log(requestedFoods)
    return (
        <div>
            <h1 className='text-2xl font-bold text-orange-400 text-center'>Requested Foods</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Donar Name</th>
                            <th>Additional Notes</th>
                            <th>Expire Date</th>
                            <th>Requested Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row  */}
                        {
                            requestedFoods.map(food =>
                                <tr key={food._id}>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={food.foodImage}
                                                        alt={food.foodName} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{food.donatorName}</div>
                                                <div className="text-sm opacity-50">{food.pickupLocation}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {food.additionalNotes}
                                    </td>
                                    <td>{food.expiryDateTime.slice(0, 10)}</td>
                                    <td>
                                        {food.requestDate.slice(0, 8)}
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr>
                            <th>Donar Name</th>
                            <th>Additional Notes</th>
                            <th>Expire Date</th>
                            <th>Requested Date</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default FoodRequest;