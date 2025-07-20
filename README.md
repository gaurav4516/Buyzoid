# Trailed: MERN Stack Project

## Overview

Trailed is a luggage, backpack and duffle e-commerce application built using the MERN stack (MongoDB, Express.js, React, and Node.js). This project is designed to provide users with a seamless shopping experience while offering admins a secure platform to manage inventory efficiently.

## Features

### User Features

- **Product Browsing**: Explore a wide range of available bags.
- **Cart Management**: Add or remove items easily from the cart.
- **Checkout System**: Place orders securely with a cash-on-delivery option.
- **User Authentication**: Secure login and registration using Firebase.
- **Google Authentication**: Easy login using Google OAuth via Firebase.
- **Private Routes**: Restrict access to checkout and order display pages for non-logged-in users.

### Admin Features

- **Admin Dashboard**: Accessible with secure authentication, allowing admins to manage the platform.
  - **Pages in Dashboard**:
    1. Home
    2. Add Bag
    3. Edit Bag
    4. Manage Bags/Display Bags
    5. Admin Login
- **Product Management**: Upload new products, update existing product details, and delete products.
- **Inventory Management**: Keep track of stock levels and ensure availability.
- **Secure Admin Routes**: Admin dashboard access is restricted to users with admin rights.

## Technologies Used

### Frontend

- **React**: For building a dynamic and responsive user interface.
- **Tailwind CSS**: To style the application with minimal effort.
- **Redux & RTK Query Toolkit**: For state management and API calls.
- **Firebase**: For user authentication and Google OAuth.

### Backend

- **Node.js**: As the runtime environment.
- **Express.js**: For building the RESTful API.
- **Nodemon**: For development server auto-restart.

### Database

- **MongoDB**: For storing and managing data.

### Additional Libraries & Tools

- **JWT (JSON Web Tokens)**: For secure authentication.
- **Bcrypt**: For encrypting passwords.
- **Mongoose**: For object data modelling (ODM) with MongoDB.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/saam-rgb/Trailed-v2.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Trailed-v2
   ```

3. Install dependencies for both client and server:

   ```bash
   cd client
   npm install

   cd ../server
   npm install
   ```

4. Set up environment variables:

   - Create a `.env` file in the `server` directory and add the following:
     ```env
     PORT=5001
     MONGO_URI=your_mongo_db_connection_string
     JWT_SECRET=your_jwt_secret
     ```
   - Create a `.env.local` file in the `client` directory and add the Firebase details:
     ```env
     VITE_FIREBASE_API_KEY=your_firebase_api_key
     VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
     VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
     VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
     VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
     VITE_FIREBASE_APP_ID=your_firebase_app_id
     ```

5. Run the application:

   ```bash
   # Start the backend server
   cd server
   npm run dev

   # Start the frontend server
   cd ../client
   npm run dev
   ```

6. Open your browser and navigate to `http://localhost:5173` to access the application.

## Folder Structure

### Frontend

- **src/components**: Reusable React components.
- **src/pages**: Page-level components.
- **src/context**: React context for global state management.
- **src/routers**: App routing configuration.
- **src/utils**: Utility functions.
- **assets**: Images of bags.
- **public**: Static images and assets.
- **.env.local**: Environment variables for Firebase configuration.

#### Pages:

1. Login
2. Register
3. Home/Product
4. Single Product Page
5. Orders Display Page
6. Cart Page
7. Checkout Page

### Backend

- **bags**: Contains routes, controllers, and models for bag-related operations.
- **user**: Handles user-related functionalities with routes, controllers, and models.
- **admin**: Admin-specific routes, controllers, and models.
- **orders**: Manages order-related functionalities with routes, controllers, and models.
- **middlewares**: Authentication and error handling.
- **utils**: Utility functions.

## APIs

### User Routes

- **POST** `/api/users/login`: Authenticate user.
- **POST** `/api/users/register`: Register a new user.
- **GET** `/api/products`: Fetch all products.
- **POST** `/api/orders`: Place an order.

### Admin Routes

- **POST** `/api/admin/login`: Admin authentication and return JWT.
- **POST** `/api/admin/products`: Add a new product.
- **PUT** `/api/admin/products/:id`: Update product details.
- **DELETE** `/api/admin/products/:id`: Delete a product.

## Future Enhancements

- Implement payment gateway for online transactions.
- Add order tracking functionality.
- Introduce user reviews and ratings for products.
