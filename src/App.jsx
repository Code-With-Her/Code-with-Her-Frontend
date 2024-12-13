import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./Components/Product/Cart";
import Navbar from "./Components/Navbar";
import Button from "./Components/Button";
import Preloader from "./Components/Product/Preloader";
import Products from "./Components/Product/Products";
import Forgetpass from "./Components/Auth/Forgetpass";
import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Signup";
import Home from "./Components/Home/Home";
import Profile from "./Components/Profile/Profile"; // Import the Profile Page
import Productdetails from "./Components/Product/ProductDetails";
import NotFoundPage from "../src/Components/NotFoundPage"; // Import the 404 Page

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                {/* Main routes */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/products" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/preloader" element={<Preloader />} />
                <Route path="/forgetpass" element={<Forgetpass />} />
                <Route path="/button" element={<Button />} />
                <Route path="/productdetails" element={<Productdetails />} />

                {/* Profile Routes */}
                <Route path="/profile" element={<Profile/>} />
                
                {/* 404 route */}
                <Route path="*" element={<NotFoundPage />} /> 
            </Routes>
        </Router>
    );
};

export default App;
