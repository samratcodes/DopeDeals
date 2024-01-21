import React, { useState, useEffect } from 'react';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';

const MainSlider = () => {
  const slides = [
    "src/assets/Slider3.png",
    "src/assets/Slider1.png",
    "src/assets/Slider2.png",
    "src/assets/Slider4.png",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (current === slides.length - 1) setCurrent(0);
      else setCurrent(current + 1);
    }, 3000);

    return () => {
      clearInterval(interval); // Clear the interval on component unmount
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
    <div className="w-2/3 rounded-lg mt-2 overflow-hidden relative">
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
  );
};

export default MainSlider;
