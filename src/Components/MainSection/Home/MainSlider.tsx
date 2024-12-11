import React, { useState, useEffect } from 'react';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import Slider1 from'../../../assets/Slider1.png'
import Slider2 from'../../../assets/Slider2.png'
import Slider3 from'../../../assets/Slider3.png'
import Slider4 from'../../../assets/Slider4.png'
const MainSlider = () => {
  const slides = [
    Slider2,
    Slider3,
    Slider4,
  Slider1,
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (current === slides.length - 1) setCurrent(0);
      else setCurrent(current + 1);
    }, 4000);

    return () => {
      clearInterval(interval); 
    };
  }, [current, slides.length]);

  const previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  const nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className='flex justify-center items-center'>
        <div className='hidden md:flex sm:flex flex-col'>
    <div className="m-4 flex flex-col w-48 h-24  text-green-500 text-xl font-bold rounded-2xl  justify-center items-center" id='SliderCard'>
    <i className="fa-solid fa-arrow-trend-up"></i> Trendy Clothes 
    </div>
    <div className="m-4 w-48 h-24 text-green-500 text-xl font-bold rounded-2xl flex flex-col justify-center items-center" id='SliderCard'>
    <i className="fa-solid fa-percent"></i> Dopest Sales
    </div>
    <div className="m-4 w-48 h-24  text-green-500 text-xl font-bold rounded-2xl flex flex-col justify-center items-center" id='SliderCard'>
    <i className="fa-solid fa-headset"></i> 24/7 Support
    </div>
    <div className="m-4 w-48 h-24  text-green-500 text-xl font-bold rounded-2xl flex flex-col justify-center items-center" id='SliderCard'>
    <i className="fa-solid fa-truck-fast"></i> Fast Delivery
    </div>
   </div>
    <div className=" w-full sm:w-3/5 flex rounded-lg overflow-hidden relative"> 
      <div
        className='flex transition ease-out duration-1000'
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s, index) => (
          <img src={s} alt={`slide-${index}`} key={`slide-${index}`} />
        ))}
      </div>

      <div className="absolute top-0 h-full w-full flex justify-between items-center text-white px-10 text-3xl">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>

      <div className="absolute bottom-0 py-3 flex justify-center gap-3 w-full">
        {slides.map((_, i) => (
          <div
            onClick={() => {
              setCurrent(i);
            }}
            key={"circle" + i}
            className={`rounded-full w-3 h-3 cursor-pointer  ${
              i === current ? "bg-white" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
 
    </div>
  );
};

export default MainSlider;
