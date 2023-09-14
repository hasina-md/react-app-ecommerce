import React from 'react'
import { useAppContext } from './contexts/AppProvider';
import ProductCard from './ProductCard';

export default function ProductDetails({match, ...props}) {
  const { params } = match;
  const { id } = params;

  const {products} = useAppContext();
  const product = products.find(prod => prod.id ==id);

  if(!product) return <h2>PRODUCT IS NOT FOUND HERE....</h2>
  
  return (
    <>
    <div>ProductDetails: {id}
      <ProductCard product={product}/>
    </div>

   </>
     )
}
