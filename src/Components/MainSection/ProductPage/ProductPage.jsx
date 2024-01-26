import React, { useEffect ,useState } from 'react'
import { useData } from '../../../Context/DataContext'
const ProductPage = () => {
    const {results,loading}=useData();
    const [activeImage,setActiveImage]=useState("https://cdn.dummyjson.com/product-images/6/thumbnail.png","images")
    const [activeProduct,setActiveProduct]= useState([{"id":1,
                                                      title:"iPhone 9",
                                                      description:"An apple mobile which is nothing like apple",
                                                      price:549,
                                                      discountPercentage:12.96,
                                                      rating:4.69,
                                                      stock:94,
                                                      brand:"Apple",
                                                      category:"smartphones",
                                                      thumbnail:"https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
                                                      images:["https://cdn.dummyjson.com/product-images/1/1.jpg",
                                                      "https://cdn.dummyjson.com/product-images/1/2.jpg",
                                                      "https://cdn.dummyjson.com/product-images/1/3.jpg",
                                                      "https://cdn.dummyjson.com/product-images/1/4.jpg",
                                                      "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"]}
                                                        ])
  return (
   < div className='flex justify-center'>
    {activeProduct.map((product) => (
     <div  key={product.id}  className='w-4/5  flex  flex-col sm:flex-row'>
     <div className='w-full sm:w-1/2'>
        
    <div className='w-full '>
        <div className='w-full'>
        <img className=' w-full' src={activeImage} alt="" />
        </div>
        <div className='flex justify-between h-14 sm:h-20' id='imageOptions'>
  {product.images.map((image, index) => (
    <img key={index} className='h-full border-2 border-white' src={image} alt="" style={{ width: `${100 / product.images.length}%` }} />
  ))}
</div>

    </div>

 </div>
   <div className='w-full sm:w-1/2 flex flex-col justify-around items-center'>
  <h1>{product.title}</h1>
  <p>{product.description}</p>
  <div>Remaining : {product.stock}</div>
   </div>
    </div>
    ))}
   </div>
  )
}

export default ProductPage
