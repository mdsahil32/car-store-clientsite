import React from 'react';
import { FaBusinessTime, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const ExtraSection = () => {
    return (
        <div className='grid md:grid-cols-3 gap-x-6 gap-y-3'>
            <div className='flex gap-2 bg-blue-600 p-12 text-black rounded-lg'>
                <div>
                    <FaBusinessTime className='w-12 h-8'></FaBusinessTime>
                </div>
                <div>
                    <h3 className='text-xl'>Opening Hours</h3>
                    <p><small>Open 9.00 am to 1.00pm Everyday</small></p>
                </div>
            </div>
            <div className='flex gap-2 bg-blue-500 p-12 text-black rounded-lg'>
                <div>
                    <FaMapMarkerAlt className='w-12 h-8'></FaMapMarkerAlt>
                </div>
                <div>
                    <h3 className='text-xl'>Our Locations</h3>
                    <p><small>Dhanmondi 17, Dhaka -1200, Bangladesh</small></p>
                </div>
            </div>
            <div className='flex gap-2 bg-blue-600 p-12 text-black rounded-lg'>
                <div>
                    <FaPhoneAlt className='w-12 h-8'></FaPhoneAlt>
                </div>
                <div>
                    <h3 className='text-xl'>Contact Us</h3>
                    <p >+88 01750 00 00 00
                        <br />
                        +88 01750 00 00 00</p>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;