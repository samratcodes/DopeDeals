import React, { useEffect, useState } from 'react';
import { useData } from '../../../Context/DataContext';
import Card from '../Card';

const DopestDeals = () => {
  const { results, loading } = useData();
  const [current, setCurrent] = useState([{id:1000000,title:'Loading...', description:'Loading...',rating:'Loading' ,price:'Loading...', discountPercentage:'Loading...', thumbnail:'Loading...'}]);
  

useEffect(() => {
 if(!loading){
    const dopeProducts = results.products.filter((product)=>product.discountPercentage >17).slice(0,10)
    setCurrent(dopeProducts)
  }
}, [loading]);
  return (
    <div className='  w-4/5 '>
      <div className='my-4 text-green-500 text-3xl flex justify-center items-center font-bold '>
      <img className=' w-10 rounded-md' src="src/assets/Logo.png" alt="" /> &nbsp; Dopest Deals 
      </div>
      {/* <div className=' flex justify-between flex-wrap'>
      {loading? <div className='text-2xl bg-green-500 text-white text-center'>Loading...</div> :
        current.map((product) => (
          <div 
          className='my-2 '
          key={product.id}
          >
                  <div className=' p-1 w-36 h-60  overflow-hidden border bg-white transition-all duration-100 ease-in-out sm:w-56 sm:h-80  hover:border-green-500 hover:shadow-lg ' >
          <div className=' overflow-hidden border-green-500 border-b-2 h-2/4 sm:h-3/5'>
          <img className='object-cover w-full h-full' src={product.thumbnail} alt="" />
          </div>
         <div className='h-2/5 flex flex-col justify-between' id='Description'>
          <div className='text-black  text-xs font-bold sm:text-lg'>{product.title.length>15?product.title.slice(0,15)+'...':product.title}</div>
          <div className='text-black text-sm'>{product.description.length>30?product.description.slice(0,30)+'...':product.description}</div>
          <div className='flex  items-center'>
            <div className='text-green-500 text-base sm:text-lg font-bold'>$ {product.price}</div>
            <div className=' text-red-300 text-xs font-bold'>(-{product.discountPercentage}% )off</div>
            </div>
            <div className='flex items-center text-yellow-600 text-sm font-bold'>
              {Array.from({ length: product.rating }, (_, index) => (
              <i key={index} className="fas fa-star"></i>))}
              {product.rating % 1 > 0.25 && <i className="fas fa-star-half-alt"></i>}
              <div className=' text-gray-400 '>({product.rating})</div>
            </div>
            
            <div className='text-gray-500 text-sm font-bold'>{product.brand}</div>
         </div>
        </div>
          </div>

          
        )
      )}
      </div> */}
      <Card loading= {loading} result={current}  />
    </div>
  );
};

export default DopestDeals;
