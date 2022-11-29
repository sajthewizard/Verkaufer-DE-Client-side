import React, { useState } from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';



import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useQuery } from '@tanstack/react-query';
import Pro from './Pro/Pro';
import BookingModal from '../../BookingModal/BookingModal';

const Product = () => {

    const notify = () => toast("Booking Confirmed!");
    const [product, setProduct] = useState(null);
    const thing = useLocation();
    console.log(thing)
    const path = thing.pathname;

    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000${path}`);
                const data = await res.json();
                return data;

            } catch (error) {

            }
        }
    })
    console.log(products);


    return (

        <div>
            <div className='flex mx-16 my-24 gap-4'>


                {
                    products.map(product => <Pro key={product.price}
                        product={product}
                        setProduct={setProduct}
                    ></Pro>)
                }

            </div>
            {
                product && <BookingModal>
                    product={product}
                    setProduct={setProduct}
                    notify={notify}

                </BookingModal>
            }




        </div>

    );
};

export default Product;