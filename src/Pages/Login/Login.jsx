import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
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
    const handleGoogle = () => {
        signInWithGoogle()
        .then(result => {
            const logged = result.user
            navigate(from, { replace: true })
        })
        .catch(error => {
            setError(error.message)
        })
    }

    return (
        <>
            <div className="hero  min-h-screen  bg-gradient-to-r from-cyan-500 to-blue-500">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl text-white font-bold">Login now!</h1>
                    </div>
                    <form onSubmit={handleLogin} className="card flex-shrink-0 w-full  max-w-sm shadow-2xl bg-black bg-opacity-80">
                        <div className="card-body ">
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered w-80" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label text-white">
                                    <p>you are new to here? <Link className="text-blue-500" to='/register'>Register now</Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-gradient-to-r from-cyan-500 to-blue-500 border-0" type="submit" value="Login" />
                            </div>
                            <button onClick={handleGoogle}>Google</button>
                            <p className='text-red-600'><small>{error}</small></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;