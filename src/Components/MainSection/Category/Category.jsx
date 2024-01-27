import React from 'react'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../Card'
import { useData } from '../../../Context/DataContext'
const Category = () => {
  
  const { results, loading } = useData();
    const {category}=useParams();
    const [current, setCurrent] = useState([{id:1000000,title:'Loading...', description:'Loading...',rating:'Loading' ,price:'Loading...', discountPercentage:'Loading...', thumbnail:'Loading...'}]);
 useEffect(() => {
    if(!loading ){
        const dopeProducts = results.products.filter((product)=>product.category===category)
        setCurrent(dopeProducts)
    }
  }, [loading,category]);
  return (
    <div className='flex justify-center'>
    <div className='w-4/5 flex flex-col '>
    <h1 className=' flex justify-center my-6 items-center text-3xl text-green-500 font-bold'>{category} </h1>
     <Card loading= {loading} result={current}  />
    </div>
    </div>
  )
}

export default Category
