import React, { useEffect ,useState } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import  useDataFetching  from '../../../Hooks/useDataFetching'
import Loader from '../Loader';
import Recommended from '../Home/Recommended';
const ProductPage = () => {
  const {id}=useParams();
    const {results,loading}=useDataFetching(`https://dummyjson.com/products/${id}`);

    const [activeProduct,setActiveProduct]= useState({"id":1,
                                                      title:"iPhone 9",
                                                      description:"An apple mobile which is nothing like apple",
                                                      price:549,
                                                      discountPercentage:12.96,
                                                      rating:4.69,
                                                      stock:94,
                                                      brand:"Apple",
                                                      category:"smartphones",
                                                      thumbnail:"https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
                                                      images:[
                                                      ""]}
                                                        )
      useEffect(() => {
      if(!loading){
        setActiveProduct(results)
        setPrice((results.price - (results.price * results.discountPercentage) / 100).toFixed(2))
        setActiveImage(results.images[0])
      }
    }, [loading,id,results]);                                                      
const [Price,setPrice] = useState((activeProduct.price - (activeProduct.price * activeProduct.discountPercentage) / 100).toFixed(2));
const [activeImage,setActiveImage]=useState(activeProduct.images[0]);
const changeActiveImage=(image)=>{
  setActiveImage(image);
}
  return (
   < div className='flex flex-col items-center p-4' id='ProductPage'>
{loading?<Loader/>:
 
 <div   className=' w-11/12 sm:w-4/5  flex  flex-col sm:flex-row'>
 <div className='w-full sm:w-1/2 border-r-2 border-slate-200'>
    
<div className='w-full '>
    <div className='w-full bg-white'>
    <img className=' w-full h-80 object-contain sm:h-96' src={activeImage} alt="" />
    </div>
    <div className='flex justify-between h-14 sm:h-20' id='imageOptions'>
{activeProduct.images.map((image, index) => (
<img key={index} onClick={()=>changeActiveImage(image)} className={`h-full border-4 bg-white object-contain ${activeImage===image?'border-green-500':'border-white'} `} src={image} alt="" style={{ width: `${100 / activeProduct.images.length}%` }} />
))}
</div>

</div>

</div>
<div className='w-full p-2 sm:w-1/2 bg-white flex flex-col justify-around '>
<div className='flex flex-col justify-center items-center'>
<h1 className='text-lg sm:text-2xl text-green-500 font-bold'>{activeProduct.title}</h1>
<h1 className=' text-sm sm:text-lg'>{activeProduct.description}</h1>
</div>
<div className=' flex items-end justify-center'>
<h1 className=' text-2xl sm:text-4xl font-bold' >${Price}</h1> &nbsp;
<div className=' line-through text-lg '>${activeProduct.price}</div>
<div className=' text-red-500'>-{activeProduct.discountPercentage}%</div>
</div>
<div className=' flex flex-col items-center justify-center text-lg'>

<div className='flex items-center text-yellow-500 text-2xl font-bold'>
        {Array.from({ length: activeProduct.rating }, (_, index) => (
        <i key={index} className="fas fa-star"></i>))}
        {activeProduct.rating % 1 > 0.25 && <i className="fas fa-star-half-alt"></i>}
        <div className=' text-gray-400 '>({activeProduct.rating})</div>

</div>
<div>Category: <Link to='/Category' className=' text-blue-400'> {activeProduct.category}</Link></div>
<div className=' text-base sm:text-2xl font-semibold'>Brand:  {activeProduct.brand}</div>
<div className=' text-green-500'>Stocks: {activeProduct.stock}</div>
</div>
<div className='w-full'>
<div className='flex justify-around'>
<button className=' w-52 h-10 bg-green-500 text-white text-xl font-semibold'>Buy Now</button>
<button className='w-52 h-10 bg-slate-400 text-white text-xl font-semibold'> <i class="fa-solid fa-plus"></i> Add to cart </button>
</div>
</div>

</div>
</div>
}
<Recommended/>
   </div>
  )
}

export default ProductPage
