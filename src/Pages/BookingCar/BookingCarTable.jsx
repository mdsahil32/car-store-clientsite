import React from 'react';
import { FaTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2';

const BookingCarTable = ({ car, index, bookingCars, setBookingCars }) => {

    const { _id, image, make, price, year, model, km } = car

    const handleDelete = _id =>{
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`https://car-store-server-mdsahil32.vercel.app/bookingCar/${_id}`, {
                method: 'DELETE',
              })
              .then(res => res.json())
              .then(data => {
                if (data.deletedCount > 0) {
                    Swal.fire(
                        'Deleted!',
                        'Your selected class has been deleted.',
                        'success'
                    )
                    const remaining = bookingCars.filter(Class => Class._id !== _id)
                    setBookingCars(remaining)
                }
            })
            }
          })
          
    }

    
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
                <td><button onClick={() => handleDelete(_id)} className='rounded-full p-3 hover:bg-gray-300'>
                    <FaTrashAlt ></FaTrashAlt>
                </button></td>
            </tr>
        </>
    );
};

export default BookingCarTable;