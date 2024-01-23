import React from 'react'

const Shops = () => {
  return (
    <div className='my-4 bg-slate-500 w-full flex flex-col items-center'>
     <div className='w-4/5 bg-red-700'>
     <div className=' text-green-500 text-3xl font-bold flex justify-center'>
      <i className="fa-solid fa-store"></i> Shops
      </div>  
      <div className='flex'>
      <div className='w-1/3 hover:blur-lg'>
        <img className='' src="https://images.pexels.com/photos/434346/pexels-photo-434346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>  
      <div className='w-1/3'>
        <img className='' src="https://images.pexels.com/photos/434346/pexels-photo-434346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>  
      <div className='w-1/3'>
        <img className='' src="https://images.pexels.com/photos/434346/pexels-photo-434346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>   

      </div> 
     </div>
     </div>
  )
}

export default Shops
