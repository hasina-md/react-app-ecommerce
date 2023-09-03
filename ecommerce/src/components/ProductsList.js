import React from 'react'
import ProductCard from './ProductCard'

export default function ProductsList({products}) {
  
  return (
    <>
     <h3>ProductsList</h3>
    <div className='product-list'>
      {products.map(product => <ProductCard key={product.id} product={product} /> )}
  </div>
   </>
  ) 
}
