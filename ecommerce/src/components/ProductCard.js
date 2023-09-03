import React from 'react'

export default function ProductCard({product}) {
  return (
    <div className='product-card'>
    <img src={product.images[0]} alt={product.title}/> 
    <h3>{product.title}</h3>
    <p>{product.price}</p>
    </div>)}      
  


