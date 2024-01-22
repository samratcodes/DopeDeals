import React, { useEffect, useState } from 'react';
import { useData } from '../../../Context/DataContext';

const DopestDeals = () => {
  const { results, loading } = useData();
  console.log(results);

  const [current, setCurrent] = useState([{id:1000000,title:'Loading...', description:'Loading...',rating:'Loading' ,price:'Loading...', discountPercentage:'Loading...', thumbnail:'Loading...'}]);
  

useEffect(() => {
 if(!loading){
    const dopeProducts = results.products.filter((product)=>product.discountPercentage >15).slice(0,5)
    setCurrent(dopeProducts)
  }
}, [loading]);
  return (
    <div className='  w-4/5 '>
      <div className='my-4 text-green-400 text-3xl flex justify-center font-bold '>
        Dopest Deals
      </div>
      <div className=' flex justify-between flex-wrap'>
      {loading? <div className='text-2xl bg-green-500 text-white text-center'>Loading...</div> :
        current.map((product) => (
          <div 
          className='my-2'
          key={product.id}
          >
                  <div className=' hover:border-2 border-green-500 p-1 w-56 h-80 overflow-hidden bg-white ' >
          <div className=' overflow-hidden  h-2/4'>
          <img className='object-cover w-full h-full' src={product.thumbnail} alt="" />
          </div>
         <div className='h-2/4 flex flex-col justify-between' id='Description'>
          <div className='text-black text-lg font-bold'>{product.title.length>20?product.title.slice(0,20)+'...':product.title}</div>
          <div className='text-black text-sm'>{product.description.length>30?product.description.slice(0,30)+'...':product.description}</div>
          <div className='flex  items-center'>
            <div className='text-green-500 text-lg font-bold'>$ {product.price}</div>
            <div className=' text-red-600 text-xs font-bold'>-{product.discountPercentage}%</div>
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
      </div>
    </div>
  );
};

export default DopestDeals;
