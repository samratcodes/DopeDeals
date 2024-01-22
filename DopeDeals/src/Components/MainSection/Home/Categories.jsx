import React from 'react'
import { MdOutlineSmartphone } from "react-icons/md";
import { GiWatch } from "react-icons/gi";
const Categories = () => {
    const categories = [
                        {name:'Smartphones',icon:<MdOutlineSmartphone className=' text-3xl'/>},
                        {name:'furniture',icon:<i class="text-3xl fa-solid fa-chair"></i>},
                        {name:'Mens-Shirt',icon:<i class=" text-3xl fa-solid fa-shirt"></i>},
                        {name:'Sunglasses',icon:<i class=" text-3xl fa-solid fa-glasses"></i>},
                        {name:'Womens Bag',icon:<i class=" text-3xl fa-solid fa-bag-shopping"></i>},
                        {name:'Laptops',icon:<i class=" text-3xl fa-solid fa-laptop"></i>},
                        {name:'MoterCycle',icon:<i class=" text-3xl fa-solid fa-motorcycle"></i>},
                        {name:'Watches',icon:<GiWatch className=' text-3xl'/>}
                       ]
  return (
    <div className=' pt-4 w-4/5 '>
      <div className='flex justify-between ml-2'>
       <div className=' text-lg font-bold text-green-500'>
        Categories
       </div>
       <div className=' text-slate-600'>
        Show all
       </div>
      </div>
      <div className=' flex overflow-x-auto  '>
      {categories.map((category,index)=>(
         <div key={index} className=' bg-white text-gray-700 rounded-xl p-4 m-2 w-32 border-3 flex flex-col justify-center 
         items-center hover:border-green-400 border-2' id='Home_Category'>
            {category.icon}
         {category.name}
         </div>
      ))
      }
      </div>
    </div>
  )
}

export default Categories
