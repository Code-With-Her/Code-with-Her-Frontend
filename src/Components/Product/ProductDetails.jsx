import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const { id } = useParams(); // Get the product ID from the URL
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/products/${id}`); // Fetch product by ID
                const data = await response.json();

                console.log("Fetched product data:", data);

                if (response.ok) {
                    setProduct(data);
                } else {
                    setError(data.message);
                }
            } catch (error) {
                setError("Failed to fetch product");
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]); // The effect runs when the product ID changes

    if (loading) return <div className="text-center py-20 text-gray-500">Loading...</div>;
    if (error) return <div className="text-center py-20 text-red-500">{error}</div>;

    return (
        <div className="container mx-auto py-12 px-6 mt-16">
            {product && (
                <div className="bg-white rounded-lg shadow-lg max-w-4xl mx-auto">
                    {/* Product Image */}
                    <div className="relative h-96 rounded-t-lg overflow-hidden">
                        <img
                            src={product.images}
                            alt={product.productName}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Product Content */}
                    <div className="p-6 space-y-6">
                        {/* Product Name */}
                        <h1 className="text-3xl font-bold text-gray-800">{product.productName}</h1>

                        {/* Product Description */}
                        <p className="text-gray-600 leading-relaxed">{product.description}</p>

                        {/* Product Info */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <h4 className="text-lg font-semibold text-gray-800">Price:</h4>
                                <p className="text-gray-600 text-lg">${product.price}</p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-800">Stock:</h4>
                                <p className="text-gray-600 text-lg">{product.stock} units</p>
                            </div>
                        </div>

                        {/* Seller Information */}
                        <div>
                            <h4 className="text-lg font-semibold text-gray-800">Seller Information:</h4>
                            <p className="text-gray-600 text-sm">Email: {product.seller.email}</p>
                        </div>

                        {/* Action Button */}
                        <button
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-all"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetails;
