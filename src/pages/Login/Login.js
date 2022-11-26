import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Login = () => {
    const { createSignIn, signwithG } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();

    const from = location.state?.from?.pathname || '/';
    const handleSignin = () => {
        signwithG(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });

            })
            .catch(error => {
                console.error(error)
            }
            )

    };
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createSignIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error))
        form.reset();

    }
    return (
        <div className="hero min-h-screen bg-base-200">

            <div className="hero-content flex-col ">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className='text-4xl mt-4 text-center'>Login</div>
                    <form onSubmit={handleLogin}>
                        <div className="card-body">

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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />

                            </div>
                            <p>New to Verkaufer-DE? <Link className='text-primary' to="/signup"> Create New Account</Link></p>
                        </div></form>

                    <div className="divider">OR</div>
                    <button onClick={handleSignin} className='btn btn-outline w-full mb-4 '> Login with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;