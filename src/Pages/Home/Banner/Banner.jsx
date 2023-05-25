import React from 'react';

import banner1 from '../../../assets/home/banner-1.jpg'
import banner2 from '../../../assets/home/banner-2.jpg'
import banner3 from '../../../assets/home/banner-3.jpg'

const Banner = () => {

  return (
    <>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={banner1} className="w-full bg-black bg-opacity-30" />
          <div className="absolute flex justify-between  transform -translate-y-1/2 left-5 right-5 top-1/2">
            <h1 className="text-5xl bg-black bg-opacity-30 text-white font-bold font-serif p-24 text-start">WELCOME
              <br />
              <span >TO THE</span>
              <br />
              <span>CAR STORE</span>
            </h1>

            <div className=' flex justify-center items-end gap-5 '>
              <a href="#slide4" className="btn btn-circle bg-gradient-to-r from-cyan-500 to-blue-500">❮</a>
              <a href="#slide2" className="btn btn-circle bg-gradient-to-r from-cyan-500 to-blue-500">❯</a>
            </div>

          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={banner2} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <h1 className="text-5xl bg-black bg-opacity-30 text-white font-bold font-serif p-24 text-start">
            This Is <br /> Red Mini             
            </h1>
            <div className=' flex justify-center items-end gap-5 '>
              <a href="#slide1" className="btn btn-circle bg-gradient-to-r from-cyan-500 to-blue-500">❮</a>
              <a href="#slide3" className="btn btn-circle bg-gradient-to-r from-cyan-500 to-blue-500">❯</a>
            </div>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={banner3} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <h1 className="text-5xl bg-black bg-opacity-30 text-white font-bold font-serif p-24 text-start">New <br />Latest Car <br />White Jeep 
            </h1>
            <div className=' flex justify-center items-end gap-5 '>
              <a href="#slide2" className="btn btn-circle bg-gradient-to-r from-cyan-500 to-blue-500">❮</a>
              <a href="#slide4" className="btn btn-circle bg-gradient-to-r from-cyan-500 to-blue-500">❯</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;