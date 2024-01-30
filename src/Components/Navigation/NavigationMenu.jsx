import React, { useState } from 'react'
import Logo from '../../assets/Logo.png'
import{Link} from 'react-router-dom'

const NavigationMenu = () => {
 const [SearchInput,setSearchInput] =useState('')
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
   <form >
   <div 
    className='flex w-48 rounded-full p-2 bg-white sm:w-96' 
    id='SearchSection'
    >
        <input 
        className=' w-full bg-white focus:outline-none' 
        type="text" 
        value={SearchInput}
        onChange={(e)=>setSearchInput(e.target.value)}
        placeholder='Search some dope shit...'
        name="" 
        id=""
         />
        <Link to={`/Search/${SearchInput}`}>
        <button 
         className=' bg-white ' 
         type="submit"
         >
        <i className="fa-solid fa-magnifying-glass"></i>
        </button></Link>
    </div>
   </form>
    <div
    className='flex sm:w-1/6 justify-around items-center'
    id='NavDetailsSection'
    >
      <div className='hidden flex-col justify-center items-center sm:flex'>
      <i className="fa-solid fa-question"></i>
      </div>
      <div className='group' id='Notifications'>
    <div className=' flex items-center'>
    <i className="fa-regular fa-bell sm:flex hidden"></i>
    </div>
    <div className="hidden absolute  bg-white border-2 border-green-600  group-hover:flex flex-col">
    <div className='border border-green-300 p-2 text-xl'>
    <i className="fa-regular fa-bell"></i> Get 60% off 
    </div>
    <div className='border border-green-300 p-2 flex'>
    <i className="fa-regular fa-bell"></i>Get 60% off 
    </div>
 
</div>
    </div>
     
    <Link to='/Cart'> <i className="fa-solid fa-cart-shopping"></i></Link>
     <img className=' flex ' src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
    </div>
    </div>
    </>
  )
}

export default NavigationMenu
