import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/Product';
import Products from './pages/Products';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import CartPage from './pages/Cart';
import AuthPage from './pages/AuthPage';
import FarmerDashboard from './pages/FarmerDashboard';
import BuyerDashboard from './pages/BuyerDashboard';
import MyordersPage from './pages/MyOrders'
import WistlistPage from './pages/Wishlist'
import Cart from './pages/MyCart'
const DefaultLayout = ({ children }) => (
  <>
    <Navbar />
    <main className="flex-grow">{children}</main>
    <Footer />
  </>
);

const DashboardLayout = ({ children }) => (
  <main>{children}</main>
);

const App = () => {
  return (
    
      <div className="min-h-screen flex flex-col">
        <Routes>
          {/* Routes with Navbar and Footer */}
          <Route path="/" element={
            <DefaultLayout>
              <HomePage />
            </DefaultLayout>
          } />
          <Route path="/products" element={
            <DefaultLayout>
              <ProductsPage />
            </DefaultLayout>
          } />
          <Route path="/about" element={
            <DefaultLayout>
              <AboutPage />
            </DefaultLayout>
          } />
          <Route path="/contact" element={
            <DefaultLayout>
              <ContactPage />
            </DefaultLayout>
          } />
          <Route path="/login" element={
            <DefaultLayout>
              <AuthPage type="login" />
            </DefaultLayout>
          } />
          <Route path="/register" element={
            <DefaultLayout>
              <AuthPage type="register" />
            </DefaultLayout>
          } />
          <Route path="/cart" element={
            <DefaultLayout>
              <CartPage />
            </DefaultLayout>
          } />

          {/* Dashboard routes without Navbar and Footer */}
          <Route path="/farmer-dashboard" element={
            <DashboardLayout>
              <FarmerDashboard />
            </DashboardLayout>
          } />
           <Route path="/farmer-dashboard/products" element={<Products />}/>
       <Route path="/buyer-dashboard" element={<BuyerDashboard />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="orders" element={<MyordersPage />} />
        <Route path="wishlist" element={<WistlistPage />} />
        <Route path="cart" element={<Cart />} />
      </Route>
        </Routes>
   </div>
  );
};

export default App;