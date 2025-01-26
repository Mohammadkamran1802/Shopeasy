import React, { useEffect, useState } from 'react';
import './ProductDetails.css'; // Importing the CSS file for styling

const ProductDetails = ({ productId, onClose }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error(err));
  }, [productId]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-details-container">
      <button className="back-button" onClick={onClose}>Back</button>
      <div className="product-details-content">
        <img src={product.image} alt={product.name} className="product-details-image" />
        <div className="product-details-info">
          <h2 className="product-details-name">{product.name}</h2>
          <p className="product-details-brand">Brand: {product.brand}</p>
          <p className="product-details-price">Price: ${product.price}</p>
          <p className="product-details-description">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
