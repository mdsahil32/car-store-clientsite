import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BookingCarTable from './BookingCarTable';

const BookingCar = () => {
    const [bookingCars, setBookingCars] = useState([])

    useEffect(() => {
        const url = 'https://car-store-server-mdsahil32.vercel.app/bookingCar'
        axios.get(url).then(res => setBookingCars(res.data))
    }, [])

    return (
        <div className="overflow-x-auto my-12 ">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <td>
                            #
                        </td>
                        <th>Car & Make</th>
                        <th>Model</th>
                        <th>Year & km</th>
                        <th>Price</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {bookingCars.map((car, index) => <BookingCarTable
                    key={car._id}
                    index={index}
                    car={car}
                    bookingCars={bookingCars}
                    setBookingCars={setBookingCars}
                    ></BookingCarTable>)}
                    
                </tbody>
                

            </table>
        </div>
    );
};

export default BookingCar;