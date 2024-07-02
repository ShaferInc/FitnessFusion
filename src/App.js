import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/auth/Login';
import HomePage from './components/home/HomePage';
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
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/socials">Socials</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/cart">Shopping Cart</Link></li>
            <li style={{ float: 'right' }}><Link to="/login">Login</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" component={Login} />
          <Route path="/product/:id" component={ProductPage} />
          <Route path="/cart" component={ShoppingCart} />
          <Route path="/socials" component={SocialMediaPage} />
          <Route path="/about" component={AboutUs} />
          <Route path="/admin" component={AdminDashboard} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
