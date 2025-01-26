import React, { useState } from "react";
import BarcodeScanner from "../Components/BarcodeScanner";
import axios from "axios";
import "../Pages/BarcodeScannerPage.css";

const BarcodeScannerPage = () => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");
  const [showAddProductForm, setShowAddProductForm] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    brand: "",
    description: "",
    image: "",
    barcode: "",
  });
  const [scannerActive, setScannerActive] = useState(true); // Control scanner state
  const [cart, setCart] = useState([]); // Cart state to hold products

  const handleDetected = async (barcode) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/products/barcode/${barcode}`
      );
      setProduct(response.data); // Set the product details
      setError(""); // Clear any previous errors
      setShowAddProductForm(false); // Hide the add product form
      setScannerActive(false); // Stop scanner after detecting a product
    } catch (err) {
      setProduct(null);
      setError("Product not found. Please add it to the product list.");
      setShowAddProductForm(true); // Show the add product form
      setNewProduct((prevState) => ({ ...prevState, barcode })); // Pre-fill the barcode field
      setScannerActive(true); // Keep scanner active for adding new product
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleAddProduct = async () => {
    try {
      await axios.post("http://localhost:5000/api/products", newProduct);
      alert("Product added successfully!");
      setShowAddProductForm(false);
      setNewProduct({
        name: "",
        price: "",
        brand: "",
        description: "",
        image: "",
        barcode: "",
      });
      setScannerActive(false); // Stop scanner after adding the product
    } catch (err) {
      alert("Error adding product. Please try again.");
    }
  };

  const handleAddToCart = () => {
    if (product) {
      setCart((prevCart) => [...prevCart, product]);
      alert(`${product.name} has been added to the cart.`);
      setProduct(null); // Reset the product display
      setScannerActive(true); // Reactivate scanner for the next scan
    }
  };

  return (
    <div className="barcode-scanner-page">
      {/* Only show the BarcodeScanner if it's active */}
      {scannerActive && (
        <BarcodeScanner onDetected={handleDetected} active={scannerActive} />
      )}

      <div className="product-details">
        {product ? (
          <div>
            <div className="product-details-content">
              <img src={product.image} alt={product.name} width="250" />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p><strong>Price:</strong> ${product.price}</p>
                <p><strong>Brand:</strong> {product.brand}</p>
                <p><strong>Description:</strong> {product.description}</p>
              </div>
            </div>
            {/* Add to Cart button */}
            <div className="add-to-cart-wrapper">
              <button className="add-to-cart" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        ) : (
          <p>{error}</p>
        )}
      </div>

      {showAddProductForm && (
        <div className="add-product-form">
          <h3>Add New Product</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAddProduct();
            }}
          >
            <div>
              <label>Product Name:</label>
              <input
                type="text"
                name="name"
                value={newProduct.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Price:</label>
              <input
                type="number"
                name="price"
                value={newProduct.price}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Brand:</label>
              <input
                type="text"
                name="brand"
                value={newProduct.brand}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Description:</label>
              <textarea
                name="description"
                value={newProduct.description}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Image URL:</label>
              <input
                type="text"
                name="image"
                value={newProduct.image}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Barcode:</label>
              <input
                type="text"
                name="barcode"
                value={newProduct.barcode}
                readOnly
              />
            </div>
            <button type="submit">Add Product</button>
          </form>
        </div>
      )}

      {/* Display Cart */}
      <div className="cart">
        <h3>Cart Items</h3>
        {cart.length > 0 ? (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
        ) : (
          <p>No items in the cart.</p>
        )}
      </div>
    </div>
  );
};

export default BarcodeScannerPage;
