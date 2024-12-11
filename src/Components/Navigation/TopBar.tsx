import React from 'react'
import { Link } from 'react-router-dom'
const TopBar = () => {
  return (
 
<div className='w-full bg-slate-600 flex justify-center'  id='TopBar'>
<div className='w-full sm:w-1/2 py-2 flex  justify-around items-center text-white text-sm sm:text-base font-semibold '>
    <div>
      <Link to='/'>Home</Link>
    </div>
    <div className=" group">
  <div className=' flex items-center' >
    Brands <i className="fa-solid fa-caret-down  group-hover:rotate-180"></i>
  </div>
  <div className="hidden absolute  bg-white border-l-4 border-green-600 py-2 px-4 rounded-lg group-hover:flex flex-col">
 
   <Link to='/Brands/Apple' className=" text-green-600"> Apple</Link>
   <Link to='/Brands/Samsung' className=" text-green-600">Samsung </Link>
   <Link to='/Brands/Bracelet' className=" text-green-600">Bracelet</Link>
   <Link to='/Brands/Sneakers' className=" text-green-600">Sneakers </Link>
   <Link to='/Brands/LouisWill' className=" text-green-600">LouisWill </Link>
   
  </div>
</div>
<div className='group'>
    <div className=' flex items-center'>
     Categories <i className="fa-solid fa-caret-down group-hover:rotate-180"></i>
    </div>
    <div className="hidden absolute  bg-white border-l-4 border-green-600 py-2 px-4 rounded-lg group-hover:flex flex-col">
 
 <Link to='/category/smartphones' className=" text-green-600"> Smartphones</Link>
 <Link to='/category/laptops ' className=" text-green-600">Laptops </Link>
 <Link to='/category/fragrances ' className=" text-green-600">Fragrances </Link>
 <Link to='/category/skincare ' className=" text-green-600">Skincare  </Link>
 <Link to='/category/groceries ' className=" text-green-600">Groceries  </Link>
 
</div>
    </div>
    <div>
    <Link to='/DopeDeals'> Dopest Deals</Link> 
    </div>
    <div>
      <Link to='/Blogs'>Blogs</Link>
    </div>

    </div>
</div>

  )
}

export default TopBar
