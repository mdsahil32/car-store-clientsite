import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import { FaCalendarAlt, FaRoad, FaCarBattery } from "react-icons/fa";
import Contact from '../Shared/Contact/Contact';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';

const CheapCarDetail = () => {
    const car = useLoaderData([])
    const { _id, image, make, price, year, model, km } = car

    const handleBooking = car => {
        const bookingCar = {_id, image, make, price, year, model, km}
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
            <Helmet>
                <title>Car Store | cheap car detail</title>
            </Helmet>
            <h1 className='text-4xl mt-8 font-semibold underline'>{make}</h1>
            <div className='md:flex justify-center items-center gap-5'>
                <div className='w-1/3 bg-gray-200 p-20'>
                    <h4 className='text-2xl uppercase mb-3'>Our Price: <span className='font-bold'>${price}</span></h4>
                    <a href='#contact' className='bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold  p-2 rounded'>Contact Information</a>
                    <button onClick={() => handleBooking(car)} className='bg-gradient-to-r from-cyan-500 to-blue-500 my-3 p-2 rounded font-semibold'>Booking Now</button>
                </div>
                <div className='w-1/2 '>
                    <div className=''>
                        <Swiper
                            pagination={{
                                dynamicBullets: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide><img src={image} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={image} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={image} alt="" /></SwiperSlide>

                        </Swiper>
                    </div>
                </div>
            </div>

            <div className='grid md:grid-cols-3 gap-6 mt-12 text-white'>
                <div className='text-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto px-24 py-6'>
                    <span className='text-4xl text-center'><FaRoad></FaRoad></span>
                    <span>Mileage</span>
                    <br />
                    <span>{km} km</span>
                </div>

                <div className='text-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto px-24 py-6 text-center'>
                    <span className='text-4xl text-center'><FaCalendarAlt></FaCalendarAlt></span>
                    <span>Year</span>
                    <br />
                    <span>{year}</span>
                </div>

                <div className='text-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto px-24 py-6'>
                    <span className='text-4xl'>
                        <FaCarBattery></FaCarBattery>
                    </span>
                    <span>0-60 mph</span>
                    <br />
                    <span>8.4s</span>
                </div>
            </div>
            <Contact></Contact>
            <p className='underline my-4 '><Link className='font-semibold text-xl' to='/'>Back To Home</Link></p>
        </>
    );
};

export default CheapCarDetail;