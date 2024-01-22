import React from 'react'

const TopBar = () => {
 
  return (
    <div id='TopBar' className='w-1/2 py-2 flex justify-around items-center text-white text-base font-semibold '>
    <div>
      Home
    </div>
    <div className=" group">
  <div >
    Shops <i className="fa-solid fa-caret-down  group-hover:rotate-180"></i>
  </div>
  

  <div className="hidden absolute  bg-white border-l-4 border-green-600 py-2 px-4 rounded-lg group-hover:flex flex-col">
 
    <a href="#" className=" text-green-600">Submenu Item 1</a>
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
  )
}

export default TopBar
