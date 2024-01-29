import React from 'react'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { useData } from '../../../Context/DataContext'
import Card from '../Card'
import Recommended from '../Home/Recommended'
const Brands = () => {
const { results, loading } = useData();
const {brand}=useParams();
const [current, setCurrent] = useState([{id:1000000,title:'Loading...', description:'Loading...',rating:'Loading' ,price:'Loading...', discountPercentage:'Loading...', thumbnail:'Loading...'}]);
 useEffect(() => {
    if(!loading ){
        const dopeProducts = results.products.filter((product)=>product.brand===brand)
        setCurrent(dopeProducts)
    }
  }, [loading,brand]);
  return (
    <div className='flex flex-col items-center '>
    <div className='w-4/5 flex flex-col '>
    <h1 className=' flex justify-center my-6 items-center text-3xl text-green-500 font-bold'>{brand} Products</h1>
     <Card loading= {loading} result={current}  />
    </div>
    <Recommended/>
    </div>
  )
}

export default Brands
