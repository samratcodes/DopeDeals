import React from 'react'
import MainSlider from './MainSlider'
import Categories from './Categories'
import DopestDeals from './DopestDeals'
import Shops from './Shops'
import TopRated from './TopRated'



const Home = () => {
  return (
    <div className=' flex flex-col justify-center items-center' id='Home'>
<MainSlider/>
<Categories/>
<DopestDeals/>
<TopRated/>
<Shops/>
    </div>
  )
  }

export default Home
