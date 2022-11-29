import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../../Contexts/AuthProvider';

const AddAProduct = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();
    const notify = () => toast("Product Added!");
    const handleProducts = event => {

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const condition = form.condition.value;
        const photourl = form.photourl.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const category = form.category.value;
        const info = form.info.value;
        const time = form.phone.value;
        const email = user.email;
        const data = {
            name,
            price,
            condition,
            photourl,
            phone,
            location,
            category,
            info,
            time,
            email
        }
        fetch('http://localhost:5000/sachen', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    notify();
                }


                navigate('/dashboard/myproducts')


            })
        form.reset();




    }
    return (
        <div>
            <div className="card mx-auto my-8 flex-shrink-0 w-full max-w-md shadow-2xl bg-accent">
                <div className='text-4xl mt-4 text-center'>Add a Product</div>
                <form onSubmit={handleProducts}>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input name="price" type="text" placeholder="Price" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Condition</span>
                            </label>
                            <input name="condition" type="text" placeholder="condition" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input name="photourl" type="text" placeholder="PhotoURL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Mobile Number</span>
                            </label>
                            <input name="phone" type="text" placeholder="Mobile" className="input input-bordered" required />

                        </div>
                        <ToastContainer />
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input name="location" type="text" placeholder="Location" className="input input-bordered" required />

                        </div><div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Category</span>
                            </label>
                            <input name="category" type="text" placeholder=" Write according : Cars/Trucks/Cycles" className="input input-bordered" required />

                        </div><div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input name="info" type="text" placeholder="Details" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Year of Purchase</span>
                            </label>
                            <input name="time" type="text" placeholder="Year" className="input input-bordered" required />

                        </div>
                    </div>


                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Submit" />

                    </div>

                </form>


            </div >



        </div >
    );
};

export default AddAProduct;