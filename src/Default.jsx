import React from 'react'
import Footer from './Components/Footer/Footer'
import NavigationMenu from './Components/Navigation/NavigationMenu'
import TopBar from './Components/Navigation/TopBar'
import Home from './Components/MainSection/Home/Home'

const Default = () => {
  return (
    <div>
        <NavigationMenu/>
        <TopBar/>
        <Home/>
      <Footer/>
    </div>
  )
}

export default Default
