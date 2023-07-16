import React from 'react';

const BugattiCard = ({ bugatti }) => {
    // console.log(bugatti);
    const { model, img, manufacturer, engine, horsepower, top_speed, acceleration } = bugatti
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-xl font-bold">
                    Model: {model}
                    <div className="badge badge-info">{manufacturer}</div>
                </h2>
                <p>Engine: {engine}</p>
                <p>Horsepower: {horsepower}</p>
                <p>Top Speed: {top_speed}</p>
                <p>Acceleration: {acceleration}</p>
            </div>
        </div>
    );
};

export default BugattiCard;