import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Cart from "./Components/Product/Cart";
import Navbar from "./Navbar";
import Button from "./components/Product/Button";
import Preloader from "./components/Product/Preloader";
import Forgetpass from "./components/auth/Forgetpass";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./components/home/Home";
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