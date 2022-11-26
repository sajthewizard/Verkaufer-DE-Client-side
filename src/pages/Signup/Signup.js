import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Signup = () => {
    const { createUser } = useContext(AuthContext);

    const handlesignup = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error);

            });


    }
    return (
        <div className="hero min-h-screen bg-base-200">

            <div className="hero-content flex-col ">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className='text-4xl mt-4 text-center'>Sign Up</div>
                    <form onSubmit={handlesignup}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name="name" type="text" placeholder="name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="text" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />

                            </div>


                            <p>Already have an Account? <Link className='text-primary' to="/login"> Sign Up</Link></p>
                        </div>


                    </form>

                    <div className="divider">OR</div>
                    <button className='btn btn-outline w-full mb-4 '> Login with Google</button>
                </div>
            </div>
        </div>
    );
};


export default Signup;