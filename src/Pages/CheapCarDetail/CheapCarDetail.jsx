import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

const CheapCarDetail = () => {
    const car = useLoaderData([])
    const { _id, image, make, price, model } = car
    return (
        <>
            <div className='md:flex  py-24'>
                <div className='w-1/2  mr-4'>
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
                <div className='border-l-8 w-1/2 ps-8'>
                    <h3 className='text-xl'>Brand: {make}</h3>
                    <h3 className='text-xl'>Model: {model}</h3>
                    <h3 className='text-xl'>Price: {price}</h3>
                </div>
            </div>
            <Link to='/'>
            <p  className='underline'>Back to home</p>
            </Link>
        </>
    );
};

export default CheapCarDetail;