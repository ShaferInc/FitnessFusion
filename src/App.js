import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import Login from './components/auth/Login';
import ProductPage from './components/product/ProductPage';
import ShoppingCart from './components/cart/ShoppingCart';
import SocialMediaPage from './components/socials/SocialPage';
import AboutUs from './components/about/AboutUs';
import AdminDashboard from './components/admin/AdminDashboard';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/socials" element={<SocialMediaPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
