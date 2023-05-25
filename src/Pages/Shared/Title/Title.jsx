import React from 'react';

const Title = ({title, subTitle}) => {
    return (
        <div className='text-center'>
            <p className='text-blue-600 uppercase'>--- {subTitle} ---</p>
            <hr className='w-1/2 mx-auto border-2' />
            <h3 className='text-4xl font-semibold  uppercase my-2'>{title}</h3>
            <hr className='w-1/2 mx-auto border-2' />
        </div>
    );
};

export default Title;