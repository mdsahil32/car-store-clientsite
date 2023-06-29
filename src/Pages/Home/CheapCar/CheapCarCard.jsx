import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaCar, FaRoad, } from 'react-icons/fa';


const CheapCarCard = ({ car }) => {
    const { _id, image, year, km, make, price, model } = car
    return (
        <>
            <Link to={`/cheapCarDetail/${_id}`}>
                <div className="card w-full shadow-xl mt-8">
                    <figure><img className='h-60' src={image} alt="" /></figure>
                    <div className="card-body hover:bg-gray-300">
                        <h2 className="flex items-center gap-1 card-title">
                            <FaCar></FaCar> {make}
                        </h2>
                        <h2>Price: ${price}</h2>
                        <p className='flex items-center gap-5'>
                            <span className='flex items-center gap-1'><FaCalendarAlt></FaCalendarAlt>{year}</span>
                            <span className='flex items-center gap-1'> <FaRoad></FaRoad>{km} Km</span>
                        </p>
                        <p className='font-semibold underline mx-auto'></p>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default CheapCarCard;