import React, { useEffect ,useState} from 'react'
import { useData } from '../../../Context/DataContext'
import Card from '../Card';
import Logo from '../../../assets/Logo.png'
const TopRated = () => {
    const { results, loading } = useData();
    const [rating,setRating] = useState([{id:1000,title:'Loading...', description:'Loading...',rating:'Loading' ,price:'Loading...', discountPercentage:'Loading...', thumbnail:'Loading...'}]);
  useEffect(() => {
    if(!loading){
      const  topRated = results.products.filter((product)=>product.rating > 4.9).slice(0,10)
      setRating(topRated)
     }
      }, [loading]);
   
  return (
    <div className='w-full flex justify-center py-8'>
<div className='w-4/5 '>
<div className=' text-green-500 my-8 text-xl font-bold flex sm:text-3xl justify-center'>
      <img className=' w-10 rounded-md' src={Logo} alt="" /> &nbsp;Top Rated Products
      </div> 

      <Card loading= {loading} result={rating}/>
</div>
    </div>
  )
}

export default TopRated
