import React, { useEffect, useState } from 'react';
import { useData } from '../../../Context/DataContext';
import Card from '../Card';

const DopestDeals = () => {
  const { results, loading } = useData();
  const [current, setCurrent] = useState([{id:1000000,title:'Loading...', description:'Loading...',rating:'Loading' ,price:'Loading...', discountPercentage:'Loading...', thumbnail:'Loading...'}]);
  
console.log(results.products)
useEffect(() => {
 if(!loading){
    const dopeProducts = results.products.filter((product)=>product.discountPercentage >17).slice(0,10)
    setCurrent(dopeProducts)
  }
}, [loading]);
  return (
    <div className='  w-4/5 '>
      <div className=' my-2 sm:my-8 text-green-500 text-3xl flex justify-center items-center font-bold '>
      <img className=' w-10 rounded-md' src="src/assets/Logo.png" alt="" /> &nbsp; Dopest Deals 
      </div>
      
      <Card loading= {loading} result={current}  />
    </div>
  );
};

export default DopestDeals;
