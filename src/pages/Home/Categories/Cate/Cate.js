import React, { useContext } from 'react';
import { AuthContext } from '../../../../Contexts/AuthProvider';

const Cate = ({ product, setProduct }) => {
    const { user } = useContext(AuthContext);


    const { condition, name, img, location, price } = product;


    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div>
                <figure><img className="w-3/4 h-1/2" src={img} alt="Shoes" /></figure>
            </div>
            <div>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary my-2">Condition: {condition}</div>
                    </h2>
                    <p>Seller: </p>
                    <p>Posted:</p>

                    <div className="card-actions justify-end my-2">
                        <div className="badge badge-outline">{location}</div>
                        <div className="badge badge-outline">Selling at: {price}</div>
                        <div className="badge badge-outline">Bought at: { }</div>


                    </div>
                    <label onClick={() => setProduct(product)} htmlFor="booking" className="btn ">Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default Cate;