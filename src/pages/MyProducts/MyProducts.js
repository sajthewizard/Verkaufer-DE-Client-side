import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    const notify = () => toast("Product Deleted!");
    const { data: products, isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/sachenall/${user.email}`);
                const data = await res.json();
                return data;

            } catch (error) {

            }
        }
    })
    const handleDelete = id => {
        fetch(`http://localhost:5000/sachen/${id}`, {
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
            <h1 className='text-3xl my-4'>My Products</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Put on Add</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            products.map((product, i) =>
                                <tr key={product._id}>
                                    <th>{i + 1}</th>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>Unsold</td>
                                    <td><button className='btn btn-xs btn-error'>Add post</button></td>
                                    <td><button onClick={() => handleDelete(product._id)} className='btn btn-xs btn-error'>Delete</button></td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
            <ToastContainer />

        </div>
    );
};

export default MyProducts;