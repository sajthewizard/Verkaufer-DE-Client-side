import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import Category from './Category/Category';
import Products from './Products/Products';

const Categories = () => {
    const maals = [
        {
            "id": 1,
            "name": "Cars"
        }, {
            "id": 2,
            "name": "Trucks"
        }, {
            "id": 3,
            "name": "Cycles"
        }
    ]
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



                </div>
                <div className=' text-center text-3xl my-8'>Products From our Customers </div>
                <div className='flex  gap-4'>
                    {
                        maals.map(maal => <Products key={maal.id}
                            maal={maal}></Products>

                        )

                    }


                </div>


            </div>

        </div>

    );
};

export default Categories;