import React from 'react';
import { FaTrashAlt } from "react-icons/fa";

const BookingCarTable = ({ car, index }) => {

    const { _id, image, make, price, year, model, km } = car

    return (
        <>
            <tr>
                <td className='text-xl'>
                    {index + 1}
                </td>
                <td>
                    <div className="flex items-center space-x-6">
                        <div className="avatar">
                            <div className="mask mask-squircle w-24 h-24">
                                <img src={image} alt="car image" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{make}</div>
                        </div>
                    </div>
                </td>
                <td> Model: {model}</td>
                <td>Year: {year} KM: {km}</td>
                <td>${price}</td>
                <td></td>
                <td><button className='rounded-full p-3 hover:bg-gray-300'>
                    <FaTrashAlt></FaTrashAlt>
                </button></td>
            </tr>
        </>
    );
};

export default BookingCarTable;