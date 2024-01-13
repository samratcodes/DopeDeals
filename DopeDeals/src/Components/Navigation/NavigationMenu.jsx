import React from 'react'

const NavigationMenu = () => {
  return (
    <>
    <div 
    className='flex w-full justify-between items-center'
    id='NavTopSection'
    >
    <div 
    className='flex  w-1/6 flex-col justify-center items-center'
    >
    <img 
    className=' w-16 rounded-lg' 
    src="src\assets\Logo.png" alt=""
    />
    <h1 className=' text-base text-gray-400 font-semibold font-mono'>
        Dope Deals
    </h1>
    </div>
    <div 
    className='flex w-96 h-12 rounded-md p-2 bg-white' 
    id='SearchSection'
    >
        <input 
        className=' w-full bg-white focus:outline-none' 
        type="text" 
        name="" 
        id=""
         />
        <button
         className=' bg-white ' 
         type="submit"
         >
        <i className="fa-solid fa-magnifying-glass"></i>
        </button>
    </div>
    <div
    className='flex w-1/6 justify-around items-center'
    id='NavDetailsSection'
    >
     <i className="fa-solid fa-question"></i>
     <i className="fa-regular fa-bell"></i>
     <i className="fa-solid fa-cart-shopping"></i>
     <i className=" fa-solid fa-user"></i>
    </div>
    </div>
    </>
  )
}

export default NavigationMenu
