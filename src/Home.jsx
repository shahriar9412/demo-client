
import { useLoaderData } from 'react-router-dom'
import { useState } from 'react';
import ProductCard from './components/ProductCard';

const Home = () => {
  const loadedProducts = useLoaderData();
  const [products, setProducts] = useState(loadedProducts);

  return (
    <div className='m-20 bg-sky-200 rounded-lg px-8 pb-8'>
      <h1 className='text-4xl text-center py-8 text-purple-600 italic'>Total Products: {products.length}</h1>
      <div className='grid md:grid-cols-3 gap-4'>
        {
          products.map(product => <ProductCard
            key={product._id}
            product={product}
          ></ProductCard>)
        }
      </div>
    </div>
  )
}

export default Home;