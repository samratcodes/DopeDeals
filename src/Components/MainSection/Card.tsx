import React from 'react';
import { Link } from 'react-router-dom';
import Loader from './Loader';

interface Product {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  brand: string;
}

interface CardProps {
  loading: boolean;
  result: Product[];
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <div className="flex justify-between flex-wrap">
      {props.loading ? (
        <Loader />
      ) : (
        props.result.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <div
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className="my-2"
            >
              <div className="p-1 w-36 h-60 overflow-hidden border bg-white transition-all duration-100 ease-in-out sm:w-56 sm:h-80 hover:border-green-500 hover:shadow-lg">
                <div className="overflow-hidden border-green-500 border-b-2 h-2/4 sm:h-3/5">
                  <img
                    className="object-cover w-full h-full"
                    src={product.thumbnail}
                    alt={product.title}
                  />
                </div>
                <div className="h-2/5 flex flex-col justify-between" id="Description">
                  <div className="text-black text-xs font-bold sm:text-lg">
                    {product.title.length > 15 ? product.title.slice(0, 15) + '...' : product.title}
                  </div>
                  <div className="text-black text-sm">
                    {product.description.length > 30
                      ? product.description.slice(0, 30) + '...'
                      : product.description}
                  </div>
                  <div className="flex items-center">
                    <div className="text-green-500 text-base sm:text-lg font-bold">
                      $ {product.price}
                    </div>
                    <div className="text-red-300 text-xs font-bold">
                      (-{product.discountPercentage}% ) off
                    </div>
                  </div>
                  <div className="flex items-center text-yellow-600 text-sm font-bold">
                    {Array.from({ length: Math.floor(product.rating) }, (_, index) => (
                      <i key={index} className="fas fa-star"></i>
                    ))}
                    {product.rating % 1 > 0.25 && <i className="fas fa-star-half-alt"></i>}
                    <div className="text-gray-400">({product.rating})</div>
                  </div>
                  <div className="text-gray-500 text-sm font-bold">{product.brand}</div>
                </div>
              </div>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default Card;
