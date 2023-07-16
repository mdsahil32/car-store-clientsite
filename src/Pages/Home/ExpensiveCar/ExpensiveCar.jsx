import React from 'react';
import Title from '../../Shared/Title/Title';
import { Link } from 'react-router-dom';
import { FaCar, FaCarSide } from 'react-icons/fa';

const ExpensiveCar = () => {

    return (
        <div id='ExpensiveCar'>
            <Title subTitle='best collection' title='expensive & brand new car'></Title>
           
            <div className='tabs grid md:grid-cols-5 grid-cols-2 text-center my-8 gap-5'>
                <Link to={'/bugatti'} className="tab tab-bordered text-xl"><FaCar></FaCar> Bugatti</Link>
                <Link className="tab tab-bordered text-xl"><FaCar></FaCar>Lamborghini</Link>

                <Link className="tab tab-bordered text-xl"><FaCar></FaCar>Rolls-Royce</Link>

                <Link className="tab tab-bordered text-xl"><FaCar></FaCar>Koenigsegg</Link>

                <Link className="tab tab-bordered text-xl"><FaCar></FaCar>Ferrari</Link>

                <Link className="tab tab-bordered text-xl"><FaCar></FaCar>Pagani</Link>

                <Link className="tab tab-bordered text-xl"><FaCar></FaCar>McLaren</Link>

                <Link className="tab tab-bordered text-xl"><FaCar></FaCar>Aston Martin</Link>

                <Link className="tab tab-bordered text-xl"><FaCar></FaCar>Porsche</Link>

                <Link className="tab tab-bordered text-xl"><FaCar></FaCar>Bentley</Link>
                
            </div>
        </div>
    );
};

export default ExpensiveCar;