import React from 'react';
import { useEffect } from 'react';
import { FaCar, FaHandHoldingUsd, FaShoppingCart } from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';

function Number({ n }) {
    const { number } = useSpring({
        from: { number: 0 },
        number: n,
        delay: 200,
        config: { mass: 1, tension: 20, friction: 10 },
    })
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
}

const Dashboard = () => {

    return (
        <div>
            <div className='flex gap-4 ml-6 text-center items-center'>
                <div className='border-l-4 py-6 px-4 flex gap-2 items-center border-l-red-600  shadow-2xl'>
                    <h1 className=' text-2xl font-semibold uppercase '>Total-Car <span><FaCar></FaCar></span></h1>
                    <h1 className='text-2xl font-bold text-red-600'><Number n={348} /></h1>
                </div>

                <div className='border-l-4 py-6 px-4 flex gap-2 items-center border-l-green-600  shadow-2xl'>
                    <h1 className=' text-2xl font-semibold uppercase '>Total-Sells <span><FaHandHoldingUsd></FaHandHoldingUsd></span></h1>
                    <h1 className='text-2xl font-bold text-green-600'><Number n={91} /></h1>
                </div>
                <div className='border-l-4 py-6 px-4 flex gap-2 items-center border-l-yellow-500  shadow-2xl'>
                    <h1 className=' text-2xl font-semibold uppercase '>SALES ORDERS <span><FaHandHoldingUsd></FaHandHoldingUsd></span></h1>
                    <h1 className='text-2xl font-bold text-yellow-500'><Number n={265} /></h1>
                </div>
                <div>box 4</div>
            </div>
        </div>
    );
};

export default Dashboard;