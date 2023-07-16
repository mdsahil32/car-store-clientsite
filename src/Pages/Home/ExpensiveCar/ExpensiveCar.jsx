import React from 'react';
import Title from '../../Shared/Title/Title';
import { Link } from 'react-router-dom';

const ExpensiveCar = () => {

    return (
        <div id='ExpensiveCar'>
            <Title subTitle='best collection' title='expensive & brand new car'></Title>
           
            <div className='tabs grid md:grid-cols-5 grid-cols-2 text-center my-8 gap-5'>
                <Link to={'/bugatti'} className="tab tab-bordered text-xl">Bugatti</Link>
                <Link className="tab tab-bordered text-xl">Lamborghini</Link>
                <Link className="tab tab-bordered text-xl">Rolls-Royce</Link>
                <Link className="tab tab-bordered text-xl">Koenigsegg</Link>
                <Link className="tab tab-bordered text-xl">Ferrari</Link>
                <Link className="tab tab-bordered text-xl">Pagani</Link>
                <Link className="tab tab-bordered text-xl">McLaren</Link>
                <Link className="tab tab-bordered text-xl">Aston Martin</Link>
                <Link className="tab tab-bordered text-xl">Porsche</Link>
                <Link className="tab tab-bordered text-xl">Bentley</Link>
            </div>
        </div>
    );
};

export default ExpensiveCar;