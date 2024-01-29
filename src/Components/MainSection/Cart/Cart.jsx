import React, { useState } from 'react'
import { useData } from '../../../Context/DataContext'

const Cart = () => {

   const {cart,setCart}= useData();
    const [Data,setData]=useState([{
        id:1,
        price:95,
        title:'Product 1',
        "discountPercentage":4.15,
        "brand":"Samsung",
        thumbnail:"https://cdn.dummyjson.com/product-images/1/1.jpg",
      stock:10
    },
    {"id":7,
    "title":"Samsung Galaxy Book S "
    ,"description":"Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
    "price":1499,
    "discountPercentage":4.15,
    "rating":4.25,
    "stock":50,"brand":"Samsung",
    "category":"laptops",
    "thumbnail":"https://cdn.dummyjson.com/product-images/7/thumbnail.jpg",
    "images":["https://cdn.dummyjson.com/product-images/7/1.jpg",
    "https://cdn.dummyjson.com/product-images/7/2.jpg",
    "https://cdn.dummyjson.com/product-images/7/3.jpg",
    "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg"]}
  ]);
  const [total,setTotal]=useState(90);
  return (
    <div className='my-4 flex justify-center'>
      <div className='w-4/5 flex flex-col items-center'>
        <h1 className='text-3xl font-bold text-green-500'>Products in the Cart</h1>
       <div className='w-full '>
        {
          Data.map((product,index)=>(
        <div>
           <div key={index} className='flex bg-slate-100 justify-around items-center my-4 '>
          <input type="checkbox" name="" id="" />
          <div className=' w-32 h-24 bg-slate-200 border border-gray-300 '>
          <img className='w-full h-full object-contain ' src={product.thumbnail} alt="" /> 
          </div>
          <div className=' w-32 text-lg font-semibold '>
           <h1 className='text-green-500'> {product.title}</h1>
           <h1 className='text-base font-normal text-black'> {product.brand}</h1>
           </div>
           <div className='flex flex-col items-center'>
           <div className='text-2xl text-green-600'> ${(product.price-product.price*(product.discountPercentage/100)).toFixed(2)}</div>
            <div className='text-base line-through' >${product.price}</div>
            <div className=' text-xs text-red-500'>-{product.discountPercentage}% </div>
           </div>
           <div className=' flex  items-center justify-between'>
              <input type="number"  name="" id="" className='w-16 h-8 border border-gray-300' />

           </div>
           <div className='text-2xl'>
           <i class="fa-solid fa-trash"></i>
           </div>
          
         </div>
        
        </div>
       ))
        }
         <div>
          
         </div>
        </div>  
      </div>
    </div>
  )
}

export default Cart
