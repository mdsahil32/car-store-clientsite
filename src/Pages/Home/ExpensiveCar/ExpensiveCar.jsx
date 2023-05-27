import React, { useEffect, useState } from 'react';
import Title from '../../Shared/Title/Title';
import CarTable from '../../Shared/CarTable/CarTable';

const ExpensiveCar = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/expensiveCar')
        .then(res => res.json())
        .then(data => {
            setData(data);
        })
    },[])
    return (
        <div id='ExpensiveCar'>
            <Title subTitle='best collection' title='expensive & brand new car'></Title>
                <div className='grid md:grid-cols-5 grid-cols-2 text-center my-8 gap-5'>
                    {
                        data.map(item => <CarTable 
                            key={item.id}
                            item={item}
                        ></CarTable>)
                    }
                </div>
        </div>
    );
};

export default ExpensiveCar;