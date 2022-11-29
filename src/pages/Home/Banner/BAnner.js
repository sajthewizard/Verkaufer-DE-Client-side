import React from 'react';
import buy from '../../../buy.jpg'

const BAnner = () => {
    return (
        <div className="hero  bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={buy} className=" rounded-lg lg:w-1/2 shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Ride Is Waiting For YOU!</h1>
                    <p className="py-6">Easiest way to get rid of old vahicles and buying the best one from other people.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default BAnner;