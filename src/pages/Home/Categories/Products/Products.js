import React from 'react';
import { Link } from 'react-router-dom';


const Products = ({ maal }) => {
    const { name } = maal;

    return (
        <div className='mx-auto my-8'>
            <button className='btn btn-outline text-base'> <Link to={`sachen/${name}`}>{name}</Link></button>

        </div>

    );
};

export default Products;