import React, { useState } from 'react'
import './Products.css'
import { product } from '../../datas'
import { Link } from 'react-router-dom'
export default function Products() {
  const [products, setproducts] = useState(product)
  return (
    <div className='container'>
      {products.map(product => (
        <Link className='Link' to={`/product/${product.id}`}>
          <div className="card">
            <img src={product.img} />
            <div className='content'>
              <h3>{product.name}</h3><hr />
              <h5>
                {product.title}
              </h5>
              <p>{product.content}</p>
            </div>
            <button className='btn'>Buy</button>
          </div>
        </Link>
      ))}
    </div>
  )
}
