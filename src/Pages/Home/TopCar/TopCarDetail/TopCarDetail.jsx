import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TopCarDetail = () => {
    const carData = useLoaderData()
    const { _id, img, brand, model, price, color } = carData

    return (
        <>
            <div className='pt-12'>
                <div className='my-12'>
                    <h1 className='text-center my-4 uppercase underline text-2xl font-semibold'>Top Car <span className='text-blue-500'>{brand}</span> Detail</h1>
                    <img src={img} alt="" />
                    <h3>Car Model: {model}</h3>
                    <h3>Color: {color}</h3>
                    <h3>Car Price: ${price}</h3>
                </div>
            </div>

        </>
    );
};

export default TopCarDetail;