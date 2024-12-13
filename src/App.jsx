import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Cart from "./Components/Product/Cart";
import Navbar from "./Components/Navbar";
import Button from "./Components/Product/Button";
import Preloader from "./Components/Product/Preloader";
import Products from "./Components/Product/Products";
import Forgetpass from "./Components/Auth/Forgetpass";
import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Signup";
import Home from "./Components/Home/Home";
import Productdetails from "./Components/Product/ProductDetails";

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
                <Route path="/Navbar" element={<Navbar/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/products" element={<Products/>} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/preloader" element={<Preloader/>} />
                <Route path="/Forgetpass" element={<Forgetpass/>} />
                <Route path="/Button" element={<Button/>} />
                <Route path="/ProductDetails" element={<Productdetails/>} />
                


            </Routes>
        </Router>
    );
};

export default App;