import React, { useEffect, useState } from 'react';
import BugattiCard from './BugattiCard';

const BugattiCars = () => {
    const [data , setData] = useState([])

    useEffect(() =>{
        fetch('bugatti.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
    }, [])

    return (
        <div className=''>
            <h3 className='text-3xl font-semibold underline text-center my-8 uppercase'>Bugatti Car collection</h3>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-12 justify-center my-12'>
                {
                    data.map(bugatti => <BugattiCard
                        key={bugatti.id}
                    bugatti={bugatti}
                    ></BugattiCard>)
                }
            </div>
        </div>
    );
};

export default BugattiCars;