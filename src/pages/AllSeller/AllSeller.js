import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

const AllSeller = () => {

    const notify = () => toast("Seller Deleted!");
    const { data: users, isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allseller?role=seller')
            const data = await res.json();
            return data;
        }


    })
    const handleDelete = id => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    notify();
                    refetch();

                }
            })
    }

    if (isLoading) {
        return <progress className="progress w-56 "></progress>
    }
    return (
        <div>
            <h3 className='text-3xl mb-4'> All Seller</h3><div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>


                            <th>Role</th>
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
                                    <td>{user.role}</td>

                                    <td><button onClick={() => handleDelete(user._id)} className='btn btn-warning btn-xs'>Delete</button></td>


                                </tr>)
                        }


                    </tbody>
                </table>
            </div>
            <ToastContainer />

        </div>
    );
}


export default AllSeller;