import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const Sliders = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: 4,
        slidesToScroll: 1
      };
    const Slides=[
        {url:'https://images.pexels.com/photos/8127035/pexels-photo-8127035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
        {url:'https://images.pexels.com/photos/8127035/pexels-photo-8127035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
        {url:'https://images.pexels.com/photos/8127035/pexels-photo-8127035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
        {url:'https://images.pexels.com/photos/8127035/pexels-photo-8127035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
        {url:'https://images.pexels.com/photos/5107839/pexels-photo-5107839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
    ]
  return (
    <div id='Slider' className=' static w-1/2  bg-slate-900'>
        <Slider {...settings}>
      {Slides.map((slide, index) => (
        <img className='relative w-20 p-2' key={index} src={slide.url} alt="" />
      ))}
      </Slider>
    </div>
  )
}

export default Sliders
