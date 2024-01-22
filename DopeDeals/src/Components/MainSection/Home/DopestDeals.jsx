import React, { useEffect, useState } from 'react';
import { useData } from '../../../Context/DataContext';

const DopestDeals = () => {
  const { results, loading } = useData();
  console.log(results);

  const [current, setCurrent] = useState([{id:1000000,title:'Loading...'}]);
  

useEffect(() => {
 if(!loading){
    const dopeProducts = results.products.filter((product)=>product.discountPercentage >15).slice(0,4)
    setCurrent(dopeProducts)
  }
}, [loading]);
  return (
    <div>
      <div className='text-green-400 text-3xl font-bold'>
        Dopest Deals
      </div>
      {/* {
        current.map((product) => (
          <div key={product.id}>{product.title}</div>

          
        )
      )} */}
      <div className="" id='productCard'>
        <div>
          <img src="https://images.pexels.com/photos/2167039/pexels-photo-2167039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
      </div>
    </div>
  );
};

export default DopestDeals;
