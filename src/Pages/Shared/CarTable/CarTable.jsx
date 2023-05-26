import React from 'react';

const CarTable = ({item}) => {
// console.log(item);
    return (
        <>
           <div className='overflow-hidden relative transition duration-200 transform hover:-translate-y-2 '> 
           <img className='w-full h-32 rounded-full ' src={item?.img} alt="" /> 
            <h3 className='text-xl uppercase'>{item?.brand}</h3>

            <div className='bg-black px-6 py-4 bg-opacity-60 opacity-0 hover:opacity-100 text-white absolute inset-0 transition-opacity duration-200 w-full h-32 rounded-full'>
                <h3>See More {item.brand}  Model </h3>
            </div>
            </div>    
        </>
    );
};

export default CarTable;