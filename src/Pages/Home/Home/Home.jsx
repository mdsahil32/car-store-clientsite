import React from 'react';
import Banner from '../Banner/Banner';
import TopCar from '../TopCar/TopCar';
import CarStore from '../CarStore/CarStore';
import ExpensiveCar from '../ExpensiveCar/ExpensiveCar';
import DiscountOffer from '../DiscountOffer/DiscountOffer';
import Reviews from '../Reviews/Reviews';
import CheapCar from '../CheapCar/CheapCar';
import ExtraSection from '../ExtraSection/ExtraSection';
import Contact from '../../Shared/Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopCar></TopCar>
            <ExtraSection></ExtraSection>
            <CarStore></CarStore>
            <ExpensiveCar></ExpensiveCar>
            <CheapCar></CheapCar>
            {/* <DiscountOffer></DiscountOffer> */}
            {/* <h1>this is home</h1> */}
            <Reviews></Reviews>
            <Contact></Contact>
        </div>
    );
};

export default Home;