import React from 'react'
import MainSlider from './MainSlider'
import Categories from './Categories'
import DopestDeals from './DopestDeals'



const Home = () => {
  return (
    <div className=' flex flex-col justify-center items-center' id='Home'>
<MainSlider/>
<Categories/>
<DopestDeals/>
    </div>
  )
  }

export default Home
