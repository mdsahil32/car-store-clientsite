import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";
import Title from '../../Shared/Title/Title';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [])
    return (
        <div className='my-24'>
            <Title subTitle='What Our Clients Say' title='Review'></Title>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review =>
                        <SwiperSlide
                            key={review._id}>
                            <div className="flex flex-col items-center mx-24">
                                <p>{review.details}</p>
                                <h3 className="text-2xl font-semibold text-yellow-600 mt-2">{review.name}</h3>
                            </div>
                        </SwiperSlide>
                    )
                }


            </Swiper>
        </div>
    );
};

export default Reviews;