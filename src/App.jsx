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
import Profile from "./Components/Profile/Profile";
import Productdetails from "./Components/Product/ProductDetails";  // Correct import for ProductDetails
import NotFoundPage from "./Components/NotFoundPage";
import RegisterSeller from "./Components/Auth/RegisterSeller";
import AddProduct from "./Components/Product/AddProduct";
import ProductDetails from "./Components/Product/ProductDetails";
import Farmers from "./Components/Farmers";
import SellerDetails from "./Components/SellerDetails";

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/products" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/preloader" element={<Preloader />} />
                <Route path="/forgetpass" element={<Forgetpass />} />
                <Route path="/button" element={<Button />} />
                <Route path="/registerseller" element={<RegisterSeller />} />
                <Route path="/productdetails" element={<Products />} />
                <Route path="/productdetails/:id" element={<ProductDetails/>} />  {/* Updated route */}
                <Route path="/profile" element={<Profile />} />
                <Route path="/addproduct" element={<AddProduct />} />
                <Route path="/farmers" element={<Farmers/>} />
                <Route path="/seller/:id" element={<SellerDetails/>} />
                
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
};

export default App;
