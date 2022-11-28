import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUsers = () => {
    const { data: users = [], } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users')
            const data = await res.json();
            return data;
        }


    })
    const handleMakeAdmin = id => {

        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }
    return (
        <div>
            <h3 className='text-3xl mb-4'> All Users</h3><div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Make Admin</th>
                            <th>Make Seller</th>
                            <th>Make Buyer</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, i) =>
                                <tr key={user._id}>
                                    <th>{i + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-base btn-xs'>Make</button>}</td>
                                    <td><button className='btn btn-base btn-xs'>Make</button></td>
                                    <td><button className='btn btn-base btn-xs'>Make</button></td>
                                    <td><button className='btn btn-warning btn-xs'>Delete</button></td>


                                </tr>)
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllUsers;