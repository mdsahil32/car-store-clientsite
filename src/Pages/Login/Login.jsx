import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import logo from '../../assets/google.png'

const Login = () => {
    const [error, setError] = useState('')
    const { signIn, signInWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);
        setError('')
        signIn(email, password)
            .then(result => {
                const logged = result.user;
                console.log(logged);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
        form.reset()

    }
    const googleLogin = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
            })
    }
    return (
        <>
            <div className="hero min-h-screen bg-base-300">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <p>you are new to here? <Link className="text-blue-500" to='/register'>Register now</Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-blue-700 border-0" type="submit" value="Login" />
                            </div>

                            <button>
                                <img onClick={googleLogin} className='w-1/4 mx-auto mt-3 border' src={logo} alt="" />
                            </button>
                            <p className='text-red-600'><small>{error}</small></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;