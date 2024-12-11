import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useDataFetching from '../../Hooks/useDataFetching';
import Card from '../MainSection/Card';
import Loader from '../MainSection/Loader';

const Search = () => {
    const { search } = useParams();
    const { loading, results, error } = useDataFetching(`https://dummyjson.com/products/search?q=${search}`);
    const [current, setCurrent] = useState([{id: 1000000, title: 'Loading...', description: 'Loading...', rating: 'Loading', price: 'Loading...', discountPercentage: 'Loading...', thumbnail: 'Loading...'}]);

    useEffect(() => {
        if (!loading) {
            setCurrent(results.products);
            console.log(results);
            if(results.products.length===0){
                setCurrent([{id: 1000000, title: 'No Results Found',
                 description: 'No Results Found', rating: 'Loading', price: 'Loading...', discountPercentage: 'Loading...', thumbnail: ''}]);
            }
        }
    }, [loading, results]);


    return (
        <div className='flex justify-center'>
        
            <div className='w-4/5'>
            <div className=' flex justify-center py-4 text-3xl font-semibold text-green-500'>
            Search Result for {search} ...
         </div>
         
       {loading?<Loader/>:
       <div>
       {results.products.length===0?<div className=' flex justify-center items-center py-4 text-3xl font-semibold text-slate-950'>
       <i className="fa-solid fa-circle-exclamation"></i>  No Results Found
            </div>:<Card loading={loading} result={current} />}
       </div>
       }
          
            </div>
        </div>
    );
};

export default Search;
