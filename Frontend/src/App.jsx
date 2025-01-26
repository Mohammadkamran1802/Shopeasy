import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './Components/Navbar';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Footer from './components/Footer';
import BarcodeScannerPage from './Pages/BarcodeScannerPage';
import BarcodeScanner from './Components/BarcodeScanner';


const App = () => {
  const [selectedProductId, setSelectedProductId] = useState(null);
  const footerRef = useRef(null);

  const scrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <div>
        {/* Navbar */}
        <Navbar scrollToFooter={scrollToFooter} />
        

        {/* Main Content */}
        <div>
          {selectedProductId ? (
            <ProductDetails
              productId={selectedProductId}
              onClose={() => setSelectedProductId(null)}
            />
          ) : (
            <Routes>
              {/* Product List */}
              <Route
                path="/"
                element={<ProductList onViewDetails={setSelectedProductId} />}
              />
              

              {/* Barcode Scanner */}
              <Route path="/scanner" element={<BarcodeScannerPage/>} />
            </Routes>
          )}
        </div>

        {/* Footer */}
        <Footer ref={footerRef} />
      </div>
    </Router>
  );
};

export default App;
