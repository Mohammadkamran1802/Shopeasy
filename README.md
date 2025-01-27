# Shopeasy

Shopeasy is a responsive and user-friendly e-commerce application that simplifies shopping with an integrated Barcode Scanner feature. Users can browse products, view detailed product information, and add items to their cart effortlessly. The project is built using React and is designed to enhance the shopping experience with a modern interface.

## Features

1. **Navbar**

A navigation bar that provides seamless access to different pages of the application.

Includes links to the product list, barcode scanner, and other sections.

2. **Product List**

Displays a list of available products.

Allows users to view product details by clicking on a product.

3. **Product Details**

Shows detailed information about a selected product.

Users can add the product to their cart.

4. **Barcode Scanner**

Users can scan product barcodes to quickly fetch product information from the database.

If the scanned product exists in the database, its details are displayed.

Users can add the scanned product directly to their cart.

5. **Cart**

Displays a list of items added to the cart.

Provides a simple way for users to keep track of their selected items.

6. **Footer**

A responsive footer that includes helpful links and additional information.

## Technologies Used

* Frontend: React, React Router DOM
* Backend: Mongodb,Mongoose,NodeJs

* Barcode Scanning: Quagga.js (JavaScript-based barcode reader)

* Styling: CSS (responsive design)


## Installation and Setup

**Clone the repository**:

https://github.com/Mohammadkamran1802/Shopeasy

**Navigate to the project directory**:

cd shopeasy

**Install the dependencies for backend**

cd backend

npm install

**Install the dependencies for Frontend**:
cd frontend

npm install

# Running the Project

## Start the backend

1.**Ensure MongoDB is running locally**:

mongod

2.**Start the backend server**:

cd backend

nodemon server.js

## Start the Frontend
1.**Start the frontend development server**:

cd frontend

npm start

2.**Open your browser and navigate to**:

http://localhost:3000


## How to Use

**Browse Products**: Start at the homepage to view a list of products.

**View Product Details**: Click on any product to see detailed information.

**Scan Barcode**: Navigate to the barcode scanner page and use your device's camera to scan product barcodes.

**Add to Cart**: Add products (either from the list or via barcode scanning) to your cart.

**View Cart**: Scroll down to see the list of items added to the cart.

