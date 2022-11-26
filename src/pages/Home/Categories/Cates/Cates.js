import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cate from '../Cate/Cate';

const Cates = () => {
    const { products, type } = useLoaderData();

    return (

        <div>
            <div className='text-center text-4xl'>




                <p>{type}</p>
            </div>
            <div className='flex mx-16 my-24 gap-4'>


                {
                    products.map(product => <Cate key={product.price}
                        product={product}
                    ></Cate>)
                }

            </div>
        </div>

    );
};

export default Cates;