import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className='md:flex bg-gradient-to-r from-cyan-500 to-blue-500 my-24 '>
            <div className='px-12 md:py-24'>
                <h2 className='text-4xl font-semibold pb-4'>Contact With Us</h2>
                <p><small>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi.</small></p>
                <div className='flex py-4 gap-x-2'>
                    <FaPhoneAlt></FaPhoneAlt>
                    <p>+88 01750 14 14 14</p>
                </div>
                <div className='flex gap-x-2'>
                    <FaMapMarkerAlt></FaMapMarkerAlt>
                    <p>Dhanmondi, Dhaka, Bangladesh</p>
                </div>
            </div>
            {/*  */}
            <div className="hero  py-4">
                <div className="hero-content ">
                    <div className="card w-full max-w-sm ">
                        <div className="card-body ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered w-72" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Mobile Number</span>
                                </label>
                                <input type="number" placeholder="mobile number" className="input input-bordered" />
                            </div>
                           
                        </div>
                        <div className="form-control mt-2">
                                <button className="btn btn-info">Book</button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;