import React, { useEffect, useState } from 'react';
import './ProductList.css';  // Importing the external CSS file

const ProductList = ({ onViewDetails }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="product-list-container">
      {products.map(product => (
        <div key={product._id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <h4 className="product-name">{product.name}</h4>
          <p className="product-brand">{product.brand}</p>
          <p className="product-price">${product.price}</p>
          <button className="view-details-btn" onClick={() => onViewDetails(product._id)}>
            View Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
