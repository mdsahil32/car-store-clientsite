import React from 'react';
import { Link } from 'react-router-dom';

const TopCarCard = ({ car }) => {
    const { _id, img, brand } = car
    return (
        <Link to={`/topCarDetail/${_id}`}>
            <div className="card h-96  bg-base-100 shadow-lg hover:border-4  ">
                <div className="card-body text-center bg-white ">
                    <h2 className="card-title mx-auto border-b-4">{brand}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laudantium maxime dicta quis in perspiciatis!</p>
                    <figure className='overflow-hidden relative transition duration-200 transform'><img src={img} />
                        <div className='bg-black px-6 pt-24 bg-opacity-60 opacity-0 hover:opacity-100 text-white absolute inset-0 transition-opacity duration-200 w-full text-xl'>
                            <h3>Click {brand} Car & check more detail  </h3>
                        </div>
                    </figure>


                </div>
            </div>
        </Link>
    );
};

export default TopCarCard;