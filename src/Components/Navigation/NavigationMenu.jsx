import React from 'react'


const NavigationMenu = () => {
  return (
    <>
    <div 
    className='flex w-full pt-2 justify-between  items-center'
    id='NavigationBar'
    >
    <div 
    className='flex  w-1/6 flex-col justify-center items-center'
    >
    <img 
    className=' w-10 rounded-lg' 
    src='https://document-export.canva.com/OrTVg/DAF5xYOrTVg/20/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20240123%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240123T183131Z&X-Amz-Expires=44144&X-Amz-Signature=c4c598fd92f10c4744e42ff9dd543f559e77ae7c3b377ffcbd1bd10ed3568884&X-Amz-SignedHeaders=host&response-expires=Wed%2C%2024%20Jan%202024%2006%3A47%3A15%20GMT'alt=""
    />
    <h1 className=' text-base text-green-500 font-semibold font-mono'>
        Dope Deals
    </h1>
    </div>
    <div 
    className='flex w-96 rounded-full p-2 bg-white' 
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
    className='flex w-1/6 justify-around items-center'
    id='NavDetailsSection'
    >
      <div className='flex flex-col justify-center items-center'>
      <i className="fa-solid fa-question"></i>
      </div>
     <i className="fa-regular fa-bell"></i>
     <i className="fa-solid fa-cart-shopping"></i>
     <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
    </div>
    </div>
    </>
  )
}

export default NavigationMenu
