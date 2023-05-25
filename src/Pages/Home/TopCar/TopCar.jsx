import React from 'react';
import Title from '../../Shared/Title/Title';


const TopCar = () => {
    return (
        <div className='my-24'>
            <div className='my-8'>
                <Title
                    subTitle='Check It'
                    title='Latest 2023 Top 4 Car '
                ></Title>
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
                {/* 1 */}
                <div className="card h-96  bg-base-100 shadow-xl">
                    <div className="card-body text-white bg-black text-center">
                        <h2 className="card-title mx-auto">AUDI</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                    <figure><img src="https://i.ytimg.com/vi/3Sx4jE4JGNs/maxresdefault.jpg" alt="Shoes" /></figure>
                </div>
                {/* 2 */}
                <div className="card h-96  bg-base-100 shadow-xl">
                    <div className="card-body text-white text-center bg-blue-500">
                        <h2 className="card-title mx-auto">BMW</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                    <figure><img  src="https://imgd.aeplcdn.com/0x0/n/cw/ec/47278/bmw-m8-right-front-three-quarter15.jpeg" alt="Shoes" /></figure>
                </div>
                {/* 3 */}
                <div className="card h-96  bg-base-100 shadow-xl">
                    <div className="card-body text-center bg-cyan-200">
                        <h2 className="card-title mx-auto">MARCEDES</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                    <figure><img src="https://media.ed.edmunds-media.com/mercedes-benz/s-class/2023/oem/2023_mercedes-benz_s-class_sedan_s-580e-4matic_fq_oem_1_1280.jpg" alt="Shoes" /></figure>
                </div>
                {/* 4 */}
                <div className="card h-96  bg-base-100 shadow-xl">
                    <div className="card-body text-center bg-white">
                        <h2 className="card-title mx-auto">TESLA</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                    <figure><img src="https://images.hgmsites.net/hug/tesla_100179532_h.jpg" alt="Shoes" /></figure>
                </div>
            </div>
        </div>
    );
};

export default TopCar;