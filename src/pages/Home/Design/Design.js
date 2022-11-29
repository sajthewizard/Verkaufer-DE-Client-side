import React from 'react';
import Testimonial from '../Testimonial/Testimonial';

const Design = () => {

    const testimonials = [{
        id: 1,
        name: "Kalam Stiffler",
        text: "Easy,sustainable,Long streatagy",
        location: "Bremen",
        rating: "5/5"


    }, {
        id: 2,
        name: "Rahim Tarek",
        text: "Very user friendly, trustable",
        location: "Frankfurt",
        rating: "4.5/5"


    }, {
        id: 3,
        name: "Abul Hoffmann",
        text: "Could be better",
        location: "Brembarg",
        rating: "3/5"


    }



    ]
    return (
        <div className='  justify-center'>
            <div>
                <h1 className='text-3xl text-center mt-5 text-dark'>Feedbacks of our Customers</h1>

            </div>
            <div className='flex justify-center sm:grid-col-1 lg:grid-col-3 gap-4 my-8 '>
                {
                    testimonials.map(testimonial => <Testimonial
                        testimonial={testimonial}
                        key={testimonial.id}>

                    </Testimonial>)
                }


            </div>
        </div>

    );
};

export default Design;