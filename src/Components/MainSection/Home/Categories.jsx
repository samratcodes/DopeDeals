import React from 'react'
import { MdOutlineSmartphone } from "react-icons/md";
import { GiWatch } from "react-icons/gi";
import { Link } from 'react-router-dom';
const Categories = () => {
    const categories = [
                        {name:'Smartphones',icon:<MdOutlineSmartphone className='sm:text-3xl text-xl'/>},
                        {name:'furniture',icon:<i class="sm:text-3xl text-xl fa-solid fa-chair"></i>},
                        {name:'Mens-Shirt',icon:<i class="sm:text-3xl text-xl fa-solid fa-shirt"></i>},
                        {name:'Sunglasses',icon:<i class="sm:text-3xl text-xl fa-solid fa-glasses"></i>},
                        {name:'Womens Bag',icon:<i class="sm:text-3xl text-xl fa-solid fa-bag-shopping"></i>},
                        {name:'Laptops',icon:<i class="sm:text-3xl text-xl fa-solid fa-laptop"></i>},
                        {name:'MoterCycle',icon:<i class="sm:text-3xl text-xl fa-solid fa-motorcycle"></i>},
                        {name:'Watches',icon:<GiWatch className='sm:text-3xl text-xl'/>}
                       ]
  return (
    <div className=' pt-4 w-4/5 '>
      <div className='flex justify-between ml-2'>
       <div className=' text-lg font-bold text-green-500'>
        Categories
       </div>
       <div className=' text-slate-600'>
        
       </div>
      </div>
      <div className=' flex overflow-x-auto  '>
      {categories.map((category,index)=>(
         <Link key={index} to='/category/smartphones'>
         <div  className=' text-gray-700 rounded-xl text-xs sm:text-lg p-4 m-2 w-20 h-16 sm:w-32 sm:h-32 border-3 flex flex-col justify-center 
         items-center hover:border-green-400 border-2' id='Home_Category'>
            {category.icon}
         {category.name}
         </div>
         </Link>
      ))
      }
      </div>
    </div>
  )
}

export default Categories
