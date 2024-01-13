import React from 'react'
import NavigationMenu from './NavigationMenu'
import TopBar from './TopBar'

const NavigationBar = () => {
  return (
    <div className=' flex flex-col justify-center items-center' id='NavigationBar'>
      <NavigationMenu/>
      <TopBar/>
    </div>
  )
}

export default NavigationBar
