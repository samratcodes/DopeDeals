import React from 'react'

const TopBar = () => {
  return (
    <div className='w-1/2  p-5 flex justify-around items-center text-white text-base font-semibold '>
    <div>
      Home 
    </div>
    <div class=" group">
  <div >
    Shop <i class="fa-solid fa-caret-down  group-hover:rotate-180"></i>
  </div>
  

  <div class="hidden absolute mt-0 bg-white border border-green-600 py-2 px-4 rounded-lg group-hover:block">
 
    <a href="#" class="block hover:text-blue-500">Submenu Item 1</a>
    <a href="#" class="block hover:text-blue-500">Submenu Item 2</a>
   
  </div>
</div>
    {/* <div >
    Shop <i class="fa-solid fa-caret-down transform origin-center transition-transform hover:rotate-90"></i>

    </div> */}
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
