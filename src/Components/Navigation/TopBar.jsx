import React from 'react'
import { Link } from 'react-router-dom'
const TopBar = () => {
 
  return (
 
<div className='w-full bg-slate-600 flex justify-center'  id='TopBar'>
<div className='w-1/2 py-2 flex  justify-around items-center text-white text-base font-semibold '>
    <div>
      <Link to='/'>Home</Link>
    </div>
    <div className=" group">
  <div >
    Shops <i className="fa-solid fa-caret-down  group-hover:rotate-180"></i>
  </div>
  

  <div className="hidden absolute  bg-white border-l-4 border-green-600 py-2 px-4 rounded-lg group-hover:flex flex-col">
 
   <Link to='/about' className=" text-green-600">Submenu Item 1</Link>
    <a href="#" className=" text-green-600">Submenu Item 2</a>
   
  </div>
</div>

    <div>
     Categories <i className="fa-solid fa-caret-down"></i>
    </div>
    <div>
      Dopest Deals <i className="fa-solid fa-caret-down"></i>
    </div>
    <div>
      Blogs
    </div>

    </div>
</div>

  )
}

export default TopBar
