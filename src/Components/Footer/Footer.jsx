import React from 'react'

const Footer = () => {
  return (
    <div className=' bg-slate-700 text-slate-300 flex justify-center'>
    <div className='p-4 w-4/5 flex flex-col sm:flex-row justify-around'>
      <div>
      <h1 className='flex items-center text-2xl font-bold text-green-500'><img 
    className=' w-10 rounded-lg' 
    src="src\assets\Logo.png" alt=""
    /> Dope Deals</h1>
    <div>Samrat Sapkota</div>
    <div>8216361297</div>
    <div>Samratcodess@gmail.com</div>
      </div>
    <div className=''>
        <h1 className=' text-white text-2xl font-bold'>About DD</h1>
        <div> About us</div>
        <div> Career</div>
        <div> New Products</div>
      </div>
      <div className=''>
        <h1 className=' text-white text-2xl font-bold'>Supports</h1>
        <div>Term of Use</div>
        <div>FAQ</div>
        <div>Term of Use</div>
        <div>Documents</div>
        <div>Customer Support</div>
      </div>
    </div>
    </div>
  )
}

export default Footer
