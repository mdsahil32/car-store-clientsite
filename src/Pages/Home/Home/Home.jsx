import React from 'react';
import Banner from '../Banner/Banner';
import TopCar from '../TopCar/TopCar';
import CarStore from '../CarStore/CarStore';
import ExpensiveCar from '../ExpensiveCar/ExpensiveCar';
import DiscountOffer from '../DiscountOffer/DiscountOffer';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopCar></TopCar>
            <CarStore></CarStore>
            <ExpensiveCar></ExpensiveCar>
            {/* <DiscountOffer></DiscountOffer> */}
            {/* <h1>this is home</h1> */}
            <Reviews></Reviews>
        </div>
    );
};

export default Home;