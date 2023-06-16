import React, { useEffect, useState } from 'react';
import Title from '../../Shared/Title/Title';
import TopCarCard from './TopCarCard';
import axios from 'axios';


const TopCar = () => {
    const [cars, setCars] = useState([])

    useEffect(()=>{
        // fetch('/topCar')
        // .then(res => res.json())
        // .then(data => {
        //     setCars(data);
        // })
        const url = "/topCar"
        axios.get(url).then(res =>{
            setCars(res.data)
        })
    },[])

    return (
        <div className='my-32' id='TopCar'>
            <div className='my-8'>
                <Title
                    subTitle='Check It'
                    title='Latest 2023 Top 4 Car '
                ></Title>
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-6 ' >
               {
                cars.map(car => <TopCarCard
                key={car._id}
                car={car}
                ></TopCarCard>)
               }
              
            </div>
        </div>
    );
};

export default TopCar;