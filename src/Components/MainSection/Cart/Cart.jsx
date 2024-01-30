import React, { useEffect, useState } from 'react'
import { useData } from '../../../Context/DataContext';


const Cart = () => {

const {cart}= useData();
    const [Data,setData]=useState(cart);
  const [total,setTotal]=useState(0);
  const handleCheckboxChange = (index) => {
    const newData = [...Data];
    newData[index].isChecked = !newData[index].isChecked;
    setData(newData);
    updateTotal(newData);
  };

  useEffect(() => {
    updateTotal(Data);
  }, [Data]);

  const updateTotal = (newData) => {
    let totalPrice = 0;
    newData.forEach((product) => {
      if (product.isChecked) {
        totalPrice += product.quantity*(product.price - product.price * (product.discountPercentage / 100));
      }
    });
    setTotal(totalPrice.toFixed(2));
  };
  const handleQuantityChange = (index, value) => {
    const newData = [...Data];
    newData[index].quantity = parseInt(value);
    setData(newData);
    updateTotal(newData);
  };
  const handleDelete = (index) => {
    const newData = [...Data];
    newData.splice(index, 1);
    setData(newData);
    updateTotal(newData);
  };
  return (
    <div className='my-4 flex justify-center'>
      <div className='w-full  sm:w-4/5 flex flex-col items-center'>
        <h1 className='text-3xl font-bold text-green-500'>Products in the Cart</h1>
       <div className='w-full '>
        {
          Data.map((product,index)=>(
        <div key={index}>
           <div  className=' p-2 sm:p-2 flex bg-slate-100 justify-around items-center my-4 '>
          <input type="checkbox"  checked={product.isChecked} onChange={() => handleCheckboxChange(index)} name="" id="" />
          <div className=' w-32 h-24 bg-slate-200 border border-gray-300 '>
          <img className='w-full h-full object-contain ' src={product.thumbnail} alt="" /> 
          </div>
          <div className=' w-32 text-base font-normal sm:text-lg sm:font-semibold '>
           <h1 className='text-green-500'> {product.title}</h1>
           <h1 className=' text-sm sm:text-base font-normal text-black'> {product.brand}</h1>
           </div>
           <div className='flex flex-col items-center'>
           <div className=' text-lg sm:text-2xl text-green-600'> ${(product.price-product.price*(product.discountPercentage/100)).toFixed(2)}</div>
            <div className='text-base line-through' >${product.price}</div>
            <div className=' text-xs text-red-500'>-{product.discountPercentage}% </div>
           </div>
           <div className=' flex  items-center justify-between'>
              <input  type="number" value={product.quantity} 
              onChange={(e) => handleQuantityChange(index, e.target.value)} name="" id="" 
              className='w-9 sm:w-16 h-8 border border-gray-300' />

           </div>
           <div className='text-xl sm:text-2xl' onClick={() => handleDelete(index)}>
           <i class="fa-solid fa-trash"></i>
           </div>
          
         </div>
        
        </div>
       ))
        }
         <div className='p-2 flex flex-col justify-between items-center bg-slate-100'>
          <h1 className='text-2xl font-medium' > Order Summary</h1>
          <div className='flex justify-between w-full sm:w-2/5'>
            <h1 className='text-xl font-semibold'>Items total</h1>
            <h1 className='text-2xl text-green-500 font-semibold'>${total}</h1>
            </div>
            <div className='flex justify-between w-full sm:w-2/5'>
            <h1 className='text-xl font-semibold'>Shipping fees</h1>
            <h1 className='text-2xl text-green-500 font-semibold'>$15</h1>
            </div>
          <div className='flex my-4 w-full justify-center sm:w-2/5'>
              <input className='focus:outline-none' type="text" name="" id="" placeholder='Enter Voucher Code ' />
              <button className='bg-green-400 p-2 font-semibold rounded-lg w-1/5 text-white'>Apply</button>
              </div>
          <div className='flex justify-between w-full sm:w-3/5'>
            <h1 className='text-xl font-semibold'>Total</h1>
            <h1 className='text-3xl text-green-500 font-semibold'>${+total+15}</h1>
            </div>
           
            <button className='bg-green-400 p-2 font-semibold rounded-lg w-2/5 text-white'
            onClick={()=>alert('This is a Demo website for now so you cannot place order')}
            >Place order</button>
         </div>
        </div>  
      </div>
    </div>
  )
}

export default Cart
