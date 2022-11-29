import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ jini }) => {
    const { type, _id } = jini;
    return (
        <div className='mx-auto my-8'>
            <button className='btn btn-outline text-base'> <Link to={`category/${_id}`}>{type}</Link></button>

        </div>
    );
};

export default Category;