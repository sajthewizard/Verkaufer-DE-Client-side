import React from 'react';

const Testimonial = ({ testimonial }) => {

    const { name, text, rating, location } = testimonial;
    return (
        <div className="card w-96 bg-dark-100 shadow-xl">
            <div className="card-body text-dark">
                <h2 className="card-title">{name}</h2>
                <p>Review: {text}</p>
                <p>Location: {location}</p>
                <p>Rating: {rating}</p>


            </div>
        </div>
    );
};

export default Testimonial;