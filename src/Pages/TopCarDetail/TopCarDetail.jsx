import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Contact from '../Shared/Contact/Contact';
import { FaCarSide } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';

const TopCarDetail = () => {

    const carData = useLoaderData()
    const { _id, img, brand, model, price, color } = carData

    const handleBooking = carData => {
        const bookingCar = { carId: _id, image: img,  price, model, make:brand, color }
        
        fetch('https://car-store-server-mdsahil32.vercel.app/bookingCar', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingCar)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Car Booked',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
            .catch(error => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Car Already Booked',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }

    return (
        <>
            <div className='pt-12'>
                <Helmet>
                    <title>Car Store | top car detail</title>
                </Helmet>
                <h1 className='text-center my-4 uppercase underline text-2xl font-semibold'>Top Car <span className='text-blue-500'>{brand}</span> Detail</h1>
                <div className='my-12 md:flex'>
                    <div>
                        <img className='mb-12 shadow-xl' src={img} alt="" />
                    </div>
                    <div className='space-y-6'>
                        <h3 className='text-2xl bg-gray-300 p-6 uppercase font-semibold'> Model: {model}
                        </h3>
                        <h3 className='text-2xl font-semibold bg-gray-300 p-6 uppercase'>Color: {color}</h3>
                        <h3 className='text-2xl bg-gray-300 p-6 uppercase font-semibold'>Car Price:   {price}</h3>
                        <button onClick={() => handleBooking(carData)} className='bg-gradient-to-r from-cyan-500 to-blue-500  my-3 p-2 rounded font-semibold hover:text-white'>Booking Now</button>
                    </div>
                </div>
            </div>
            <Contact></Contact>
        </>
    );
};

export default TopCarDetail;