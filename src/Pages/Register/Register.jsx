import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
    const [error, setError] = useState('')
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleRegister = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        // console.log(email, password);
        setError('')
        createUser(email, password)
            .then(result => {
                const logged = result.user;
                console.log(logged);
                Swal.fire('Your Account Create Successfully')
                navigate('/')
                updateUserProfile(name, photo)
                    .then(() => {
                        // console.log('user profile update');
                    }).catch((error) => {
                        setError(error.message)
                    });
            })
            .catch(error => {
                setError(error.message);
            })
        form.reset()

    }
    return (
        <>
            <div className="hero min-h-screen  bg-gradient-to-r from-cyan-500 to-blue-500">
                <div className="hero-content flex-col my-12">
                    <div className="text-center">
                        <h1 className="text-5xl text-white font-bold mt-4">Register now!</h1>
                    </div>
                    <form onSubmit={handleRegister} className="card flex-shrink-0  max-w-sm shadow-2xl bg-black bg-opacity-80 w-full">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Name</span>
                                </label>
                                <input name='name' type="text" placeholder="name" className="input input-bordered w-80" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Photo Url</span>
                                </label>
                                <input name='photo' type="text" placeholder="photo url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label text-white">
                                    <p>Already have an account? <Link className="text-blue-500" to='/login'>Login now</Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn  bg-gradient-to-r from-cyan-500 to-blue-500 border-0" type="submit" value="Register" />
                            </div>
                            <p className='text-red-600'><small>{error}</small></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;