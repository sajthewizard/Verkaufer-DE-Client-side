import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../../../BookingModal/BookingModal';
import Cate from '../Cate/Cate';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Cates = () => {
    const notify = () => toast("Booking Confirmed!");
    const { products, type } = useLoaderData();
    const [product, setProduct] = useState(null);


    return (

        <div>
            <div className='text-center text-4xl'>




                <p>{type}</p>
            </div>
            <div className='flex mx-16 my-24 gap-4'>


                {
                    products.map(product => <Cate key={product.price}
                        product={product}
                        setProduct={setProduct}
                    ></Cate>)
                }

            </div>
            {product &&
                <BookingModal product={product}
                    setProduct={setProduct}
                    notify={notify}
                ></BookingModal>
            }
            <ToastContainer />
        </div>

    );
};

export default Cates;