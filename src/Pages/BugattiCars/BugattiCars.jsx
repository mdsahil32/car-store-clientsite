import axios from 'axios';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BugattiCars = () => {
    const cars = useLoaderData()
    const {_id, brand}= cars

    const url = "/bugattiCar"
    axios.get(url).then(res =>{
        // console.log(res.data);
    })

    return (
        <div>
            <h1>{brand} Cars Collection </h1>
        </div>
    );
};

export default BugattiCars;