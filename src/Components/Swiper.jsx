import React from 'react';
import firstImg from '../assets/first.jpg'
import secondImg from '../assets/second.jpg'
import thirdImg from '../assets/trird.jpg' 
const Swiper = () => {
  return (
    <div className="carousel w-full relative">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src={firstImg}
          className="w-full h-48 md:h-72 lg:h-96 object-cover"
          alt="Slide 1"
        />
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 
             bg-gradient-to-r from-green-700 to-transparent 
             text-white px-6 py-3 rounded-md text-lg font-semibold max-w-md text-center
             grid place-items-centere">
          Green is not just a color, it’s a lifestyle.
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full">
        <img
          src={secondImg}
          className="w-full h-48 md:h-72 lg:h-96 object-cover"
          alt="Slide 2"
        />
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 
             bg-gradient-to-r from-green-700 to-transparent 
             text-white px-6 py-3 rounded-md text-lg font-semibold max-w-md text-center
             grid place-items-centere">
          Nurture nature, and it will nurture you back.
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>

      <div id="slide3" className="carousel-item relative w-full">
        <img
          src={thirdImg}
          className="w-full h-48 md:h-72 lg:h-96 object-cover"
          alt="Slide 3"
        />
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 
             bg-gradient-to-r from-green-700 to-transparent 
             text-white px-6 py-3 rounded-md text-lg font-semibold max-w-md text-center
             grid place-items-centere">
          Transform your space with the calm of green leaves.
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>

      
    </div>
  );
};

export default Swiper;
