import React from 'react';
import { Link } from 'react-router-dom';

const CheapCarCard = ({ car }) => {
    const {_id,image, make, price, model} = car
    return (
        <>
        <div className="card w-full bg-gradient-to-r from-cyan-500 to-blue-500 shadow-xl mt-8">
            <figure><img className='h-60' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {make}!
                </h2>
                    <div className="badge badge-accent">model: {model}</div>
                    <h2>Price: ${price}</h2>
                <p>Lorem ipsum dolor sit,  elit. Fugiat, amet. Cumque, dolor.</p>
                <p className='font-semibold underline mx-auto'><Link to={`/cheapCarDetail/${_id}`}>See more</Link></p>
            </div>
        </div>
        </>
    );
};

export default CheapCarCard;