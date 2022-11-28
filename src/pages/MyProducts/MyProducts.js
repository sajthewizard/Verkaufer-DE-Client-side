import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const { data: products, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/sachen/${user.email}`);
                const data = await res.json();
                return data;

            } catch (error) {

            }
        }
    })
    if (isLoading) {
        return <progress className="progress w-56 "></progress>
    }
    return (
        <div>
            my products: {products.length}
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
                                    <td><button className='btn btn-xs btn-error'>Delete</button></td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyProducts;