import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Contact from '../Shared/Contact/Contact';
import { FaCarSide } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const TopCarDetail = () => {

    const carData = useLoaderData()
    const { _id, img, brand, model, price, color } = carData

    return (
        <>
            <div className='pt-12'>
                <Helmet>
                    <title>Car Store | top car detail</title>
                </Helmet>
                <div className='my-12'>
                    <h1 className='text-center my-4 uppercase underline text-2xl font-semibold'>Top Car <span className='text-blue-500'>{brand}</span> Detail</h1>
                    <img className='mb-12' src={img} alt="" />
                    <div className='md:flex gap-6'>
                        <h3 className='text-2xl bg-gray-300 p-8 uppercase'>
                            <FaCarSide className='text-4xl'></FaCarSide>Car Model: {model}
                        </h3>
                        <h3 className='text-2xl bg-gray-300 p-8 uppercase'>Color: {color}</h3>
                        <h3 className='text-2xl bg-gray-300 p-8 uppercase'>Car Price:   {price}</h3>
                    </div>
                </div>
            </div>
            <Contact></Contact>
        </>
    );
};

export default TopCarDetail;