import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./components/home/Home";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Cart from "./Components/Product/Cart";
import Preloader from "./components/Product/Preloader";
import Button from "./components/Product/Button";
import Forgetpass from "./components/auth/Forgetpass";
const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
                <Route path="Navbar" element={<Navbar/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/products" element={<Products/>} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/preloader" element={<Preloader/>} />
                <Route path="/Forgetpass" element={<Forgetpass/>} />
                <Route path="/Button" element={<Button/>} />


            </Routes>
        </Router>
    );
};

export default App;