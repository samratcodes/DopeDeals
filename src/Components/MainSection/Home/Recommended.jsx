import React, { useEffect, useState } from 'react';
import { useData } from '../../../Context/DataContext';
import Card from '../Card';
const Recommended = () => {
    const { results, loading } = useData();
    const [current, setCurrent] = useState([{id:1000000,title:'Loading...', description:'Loading...',rating:'Loading' ,price:'Loading...', discountPercentage:'Loading...', thumbnail:'Loading...'}]);
    
  
  useEffect(() => {
   if(!loading){
      const dopeProducts = results.products
      setCurrent(dopeProducts)
    }
  }, [loading]);
  return (
          <div className='  w-4/5 '>
      <div className=' my-2 sm:my-8 text-green-500 text-3xl flex justify-start items-center font-bold '>
       Recommended Products:
      </div>
      
      <Card loading= {loading} result={current}  />
    </div>
  
  )
}

export default Recommended
