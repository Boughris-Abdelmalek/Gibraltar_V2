import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "../pages/Products/Products";
import Layout from "../Layouts/Layout";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Profile from "../pages/Profile/Profile";
import Cart from "../pages/Cart/Cart";
import ProductsDetails from "../pages/ProductDetails/ProductsDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductsDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        {/* private routes */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
};

export default App;
