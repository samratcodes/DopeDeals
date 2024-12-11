import React, { useEffect, useState } from 'react';
import { useData } from '../../../Context/DataContext';
import Card from '../Card';
import { Product } from '../../../types'; // Import shared Product interface

interface Results {
  products: Product[];
}

const Recommended: React.FC = () => {
  const { results, loading } = useData() as { results: Results; loading: boolean };

  const [current, setCurrent] = useState<Product[]>([
    {
      id: 1000000,
      title: 'Loading...',
      description: 'Loading...',
      rating: 0,
      price: 0,
      discountPercentage: 0,
      thumbnail: 'Loading...',
      brand: 'Loading...', // Add the brand property to the default product
    },
  ]);

  useEffect(() => {
    if (!loading && results?.products?.length > 0) {
      setCurrent(results.products);
    }
  }, [loading, results]);

  return (
    <div className="w-4/5">
      <div className="my-2 sm:my-8 text-green-500 text-3xl flex justify-start items-center font-bold">
        Recommended Products:
      </div>
      <Card loading={loading} result={current} />
    </div>
  );
};

export default Recommended;
