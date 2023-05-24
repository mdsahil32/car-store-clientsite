import React from 'react';

const BannerTitle = ({title}) => {
    return (
        <div>
            <h2 className='text-3xl font-bold p-6 text-white bg-black bg-opacity-30'>{title}</h2>
        </div>
    );
};

export default BannerTitle;