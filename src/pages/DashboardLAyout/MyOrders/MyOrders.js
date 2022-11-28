import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/bookings?email=${user?.email}`
    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url,
                {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <h3 className='text-3xl mb-4'> My Orders</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Location</th>
                            <th>Meeting</th>

                        </tr>
                    </thead>
                    <tbody>


                        {
                            bookings.map((booking, i) =>
                                <tr key={booking.price}>
                                    <th>{i + 1}</th>
                                    <td>{booking.name}</td>
                                    <td>{booking.price}</td>
                                    <td>{booking.location}</td>
                                    <td>{booking.meeting}</td>
                                </tr>)
                        }



                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyOrders;