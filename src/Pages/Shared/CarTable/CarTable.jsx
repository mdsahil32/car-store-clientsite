import React from 'react';
import { Link } from 'react-router-dom';

const CarTable = ({ item }) => {
    const { _id } = item
    // console.log(item);
    return (
        <Link to={`/expensiveCar/${_id}`}>
            <div className='overflow-hidden relative transition duration-200 transform hover:-translate-y-2'>
                <img className='w-full h-32 rounded-full ' src={item?.img} alt="" />
                <h3 className='text-xl uppercase'>{item?.brand}</h3>
                <div className='bg-black px-6 py-4 bg-opacity-60 opacity-0 hover:opacity-100 text-white absolute inset-0 transition-opacity duration-200 w-full h-32 rounded-full'>
                    <h3>See More {item.brand}  Model </h3>
                </div>
            </div>
        </Link>
    );
};

export default CarTable;