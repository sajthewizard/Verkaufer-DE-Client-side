import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Signup = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handlesignup = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;
        const photoUrl = form.photoUrl.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                const userInfo = {
                    displayName: name,
                    photoURL: photoUrl,
                }
                updateUser(userInfo)
                    .then(() => { })
                    .catch(err => console.log(err));
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
                navigate(from, { replace: true });


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
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input name="photoUrl" type="text" placeholder="PhotoURL" className="input input-bordered" required />
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
                                <input className="btn btn-primary" type="submit" value="SignUp" />

                            </div>


                            <p>Already have an Account? <Link className='text-primary' to="/login"> Login</Link></p>
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