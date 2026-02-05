# 🛒 MERN Stack E-Commerce Application

A modern, full-stack e-commerce web application built using the **MERN** (MongoDB, Express, React, Node.js) stack. This project features a polished customer-facing storefront and a robust admin dashboard for product management.

## ✨ Features

### 🛍️ Customer Storefront
*   **Modern UI/UX**: Responsive design built with Tailwind CSS, featuring glassmorphism effects and smooth animations (Framer Motion).
*   **Dynamic Product Showcase**:
    *   **Hero Slider**: Auto-playing high-resolution banner.
    *   **Product Sections**: "New Arrivals" and "Best Sellers" with horizontal scrolling.
    *   **Product Cards**: Displays pricing, discounts, and hover effects.
*   **Navigation**:
    *   Responsive Navbar with mobile menu.
    *   Search bar, Wishlist, Cart, and User Profile icons.
*   **Authentication**: Secure User Sign Up and Sign In functionality.

### 🛠️ Admin Dashboard
*   **Product Management**: Add, Edit, and Delete products easily.
*   **Live Previews**: Visual confirmation when adding product images.
*   **Secure Access**: Dedicated login for administrators.

## 🚀 Tech Stack

### Frontend (`/client`)
*   **Framework**: React (Vite)
*   **Styling**: Tailwind CSS, PostCSS
*   **Animations**: Framer Motion
*   **Components**: Swiper.js (Sliders), React Icons
*   **State/Routing**: React Router DOM, Axios

### Backend (`/server`)
*   **Runtime**: Node.js
*   **Framework**: Express.js
*   **Database**: MongoDB (via Mongoose)
*   **File Handling**: Multer (Image Uploads)
*   **Utilities**: CORS, Dotenv

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally.

### 1. Prerequisites
*   Node.js installed
*   MongoDB Atlas URI (or local MongoDB)

### 2. Backend Setup
Navigate to the server directory and install dependencies:
```bash
cd server
npm install
```

Create a `.env` file in the `server/` directory:
```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Start the backend server:
```bash
node server.js
```
*Server runs on: `http://localhost:5000`*

### 3. Frontend Setup
Open a new terminal, navigate to the client directory, and install dependencies:
```bash
cd client
npm install
```

Start the React development server:
```bash
npm run dev
```
*Client runs on: `http://localhost:5173`*

---

## 🔑 Usage Guide

### Admin Access
To access the Admin Dashboard, log in with the following credentials:
*   **Email**: `admin@gmail.com`
*   **Password**: `1234`

### User Access
*   Click the **User Icon** in the top-right corner to Sign In or Register.
*   Once logged in, the icon changes to a **Logout** button.

## 📂 Project Structure
```
e-commerce/
├── client/              # React Frontend
│   ├── src/
│   │   ├── components/  # Reusable UI components (Navbar, Footer, etc.)
│   │   ├── pages/       # Page views (Home, Admin, Login)
│   │   └── App.jsx      # Main routing
├── server/              # Node.js Backend
│   ├── models/          # Mongoose Schemas (Product, User)
│   ├── routes/          # API Endpoints
│   ├── uploads/         # Stored product images
│   └── server.js        # Entry point
└── README.md            # Project Documentation
```

## 🤝 Contributing
Feel free to submit pull requests or open issues to improve the application.

---
*Developed with ❤️ by Techsaint*
