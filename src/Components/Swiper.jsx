import React from "react";
import firstImg from "../assets/first.jpg";
import secondImg from "../assets/secound.jpg";
import thirdImg from "../assets/third.jpg";

const Swiper = () => {
  const scrollToSlide = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  return (
    <div className="carousel w-full relative overflow-hidden">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src={thirdImg}
          alt="Slide 1"
          className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] object-cover rounded-lg"
        />

        <div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 
             bg-gradient-to-r from-green-700 to-transparent 
             text-white px-6 py-3 rounded-md text-lg font-semibold max-w-md text-center
             grid place-items-center"
        >
          Discover Your Green Thumb: Essential Plant Care Tips for Thriving Indoor Gardens.
        </div>

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <button onClick={() => scrollToSlide("slide3")} className="btn btn-circle">❮</button>
          <button onClick={() => scrollToSlide("slide2")} className="btn btn-circle">❯</button>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src={firstImg}
          alt="Slide 2"
          className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] object-cover rounded-lg"
        />

        <div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 
             bg-gradient-to-r from-green-700 to-transparent 
             text-white px-6 py-3 rounded-md text-lg font-semibold max-w-md text-center
             grid place-items-center"
        >
          Nurture nature, and it will nurture you back.
        </div>

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <button onClick={() => scrollToSlide("slide1")} className="btn btn-circle">❮</button>
          <button onClick={() => scrollToSlide("slide3")} className="btn btn-circle">❯</button>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src={secondImg}
          alt="Slide 3"
          className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] object-cover rounded-lg"
        />

        <div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 
             bg-gradient-to-r from-green-700 to-transparent 
             text-white px-6 py-3 rounded-md text-lg font-semibold max-w-md text-center
             grid place-items-center"
        >
          Transform your space with the calm of green leaves.
        </div>

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <button onClick={() => scrollToSlide("slide2")} className="btn btn-circle">❮</button>
          <button onClick={() => scrollToSlide("slide1")} className="btn btn-circle">❯</button>
        </div>
      </div>
    </div>
  );
};

export default Swiper;
