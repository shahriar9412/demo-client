
import { useLoaderData } from 'react-router-dom'
import { useState } from 'react';
import ProductCard from './components/ProductCard';

const Home = () => {
  const loadedProducts = useLoaderData();
  const [products, setProducts] = useState(loadedProducts);

  return (
    <div className='m-20'>
      
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