import React from 'react';
import { Link } from 'react-router-dom';

const CheapCarCard = ({ car }) => {
    const {_id,image, make, price, model} = car
    return (
        <>
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {make}!
                    <div className="badge badge-secondary">model: {model}</div>
                </h2>
                    <h2>Price: ${price}</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, amet. Cumque, dolor.</p>
                <p className='text-blue-700 underline mx-auto'><Link to={`/cheapCarDetail/${_id}`}>See more</Link></p>
            </div>
        </div>
        </>
    );
};

export default CheapCarCard;