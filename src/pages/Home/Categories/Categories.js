import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import Category from './Category/Category';

const Categories = () => {
    const { user } = useContext(AuthContext)
    const [jinish, setJinish] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => setJinish(data))

    }, [])

    return (
        <div>
            <div className=' text-center text-3xl my-8'>Select What You are Looking For

                <div className='flex  gap-4'>
                    {
                        jinish.map(jini => <Category
                            key={jini._id}
                            jini={jini}
                        ></Category>)
                    }



                </div></div>

        </div>

    );
};

export default Categories;