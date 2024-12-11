import React from 'react'
import { SiSamsung } from "react-icons/si";
import { SiSony } from "react-icons/si";
const Shops = () => {
 const brands =[
  {brand: "Apple", icon: <i className=" fa-brands fa-apple"></i>},
  {brand: "Microsoft", icon: <i className="fa-brands fa-microsoft"></i>},
  {brand: "Google", icon:<i className="fa-brands fa-google"></i>},
  {brand: "Samsung", icon: <SiSamsung />},
  {brand: "Sony", icon:<SiSony />},
  {brand: "X-box", icon: <i className="fa-brands fa-xbox"></i>},
  {brand: "Steam", icon: <i className="fa-brands fa-square-steam"></i>},
]

  return (
    <div className='my-2  w-full flex flex-col items-center'>
     <div className='w-4/5 bg-white'>
     <div className=' text-green-500 text-3xl font-bold flex my-2 justify-center'>
     Associated  Brands
      </div>  
      <div className='flex flex-wrap justify-between'>
     {brands.map((brand,index)=>(
       <div key={index} className='p-2 text-3xl duration-300 ease-in-out hover:blur-sm
       hover:duration-700 overflow-hidden sm:text-7xl sm:p-5'>
     {brand.icon}
       <div className='text-base sm:text-2xl font-bold'>
       {brand.brand}
       </div>
       </div>
     ))}
     
      </div> 
     </div>
     </div>
  )
}

export default Shops
