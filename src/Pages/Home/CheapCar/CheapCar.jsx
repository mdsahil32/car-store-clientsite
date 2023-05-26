import React, { useEffect, useState } from 'react';
import CheapCarCard from './CheapCarCard';
import Title from '../../Shared/Title/Title';

const CheapCar = () => {
    const [cars, setCars] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/cheapCar')
            .then(res => res.json())
            .then(data => {
                setCars(data);
            })
    }, [])
    return (
        <div className='my-32'>
            <Title subTitle='Portable Check It' title='Less Or Cheap Car'></Title>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-8'>
                {
                    cars.map(car => <CheapCarCard
                        key={car._id}
                        car={car}
                    ></CheapCarCard>)
                }
            </div>
        </div>
    );
};

export default CheapCar;