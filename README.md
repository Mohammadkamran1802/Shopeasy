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

# Screenshot 
 ## Homepage
 <img width="944" alt="HomePage " src="https://github.com/user-attachments/assets/448db8e3-1bd8-42c0-9321-dfbb17be4f65" />
 
 ## Footer:- just click on the Contact on navbar
 <img width="938" alt="Footer " src="https://github.com/user-attachments/assets/508111cd-4bca-40b3-971a-232001748e03" />

 ## Prduct Details :- just click on view details button
 <img width="933" alt="image" src="https://github.com/user-attachments/assets/7afdcc19-2428-4e99-b7da-75db9470ae9a" />


 ## Open BarcodeScanner:-click on Barcode Scanner on navbar and start scanning barcode
 <img width="941" alt="image" src="https://github.com/user-attachments/assets/c47971c2-b2b0-4dba-a7bd-fb586450c36d" />


 ## If Product found:-then show details of product
 <img width="209" alt="Produc Found" src="https://github.com/user-attachments/assets/6ecc3611-4af4-443f-a416-90a6473c31e4" />
 
## Product added to cart:-simply click add to cart button:-
<img width="926" alt="image" src="https://github.com/user-attachments/assets/e03962da-7cef-4612-a8d2-6f2c19815859" />



 


