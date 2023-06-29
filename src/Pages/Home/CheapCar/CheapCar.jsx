import React, { useEffect, useState } from 'react';
import CheapCarCard from './CheapCarCard';
import Title from '../../Shared/Title/Title';
import axios from 'axios';

const CheapCar = () => {
    const [cars, setCars] = useState([])
    useEffect(() => {
        // fetch('/cheapCar')
        //     .then(res => res.json())
        //     .then(data => {
        //         setCars(data);
        //     })
        const url = "/cheapCar"
        axios.get(url).then(res => {
            setCars(res.data);
        })
    }, [])
    return (
        <div className='my-32'>
            <Title subTitle='Portable Check It' title='Less Or Cheap Car'></Title>
            <div className='grid md:grid-cols-4 grid-cols-1 gap-8 ' id='CheapCar'>
                {
                    cars.map(car => <CheapCarCard
                        key={car.make}
                        car={car}
                    ></CheapCarCard>)
                }
            </div>
        </div>
    );
};

export default CheapCar;