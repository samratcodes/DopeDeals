import React from 'react'
import Logo from '../../assets/Logo.png'

const NavigationMenu = () => {
  return (
    <>
    <div 
    className='flex w-full pt-2 justify-between  items-center'
    id='NavigationBar'
    >
    <div 
    className='hidden sm:flex  w-1/6 flex-col justify-center items-center'
    >
    <img 
    className=' w-10 rounded-lg' 
    src={Logo}alt=""
    />
    <h1 className=' text-base text-green-500 font-semibold font-mono '>
        Dope Deals
    </h1>
    </div>
    <div 
    className='flex w-48 rounded-full p-2 bg-white sm:w-96' 
    id='SearchSection'
    >
        <input 
        className=' w-full bg-white focus:outline-none' 
        type="text" 
        placeholder='Search some dope shit...'
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
    className='flex sm:w-1/6 justify-around items-center'
    id='NavDetailsSection'
    >
      <div className='hidden flex-col justify-center items-center sm:flex'>
      <i className="fa-solid fa-question"></i>
      </div>
     <i className="fa-regular fa-bell sm:flex hidden"></i>
     <i className="fa-solid fa-cart-shopping"></i>
     <img className=' flex ' src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
    </div>
    </div>
    </>
  )
}

export default NavigationMenu
