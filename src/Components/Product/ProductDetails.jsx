import React from 'react';
import Productdetails from 'Productdetails';

const ProductPage = () => {
  const products = [
    {
      image: 'https://via.placeholder.com/150',
      name: 'Potatoes',
      description: 'Fresh red potatoes from the hills.',
      price: 60,
      originalPrice: 100,
      discount: 40,
      rating: 4,
    },
    {
      image: 'https://via.placeholder.com/150',
      name: 'Tomatoes',
      description: 'Organic tomatoes, full of flavor.',
      price: 50,
      originalPrice: 80,
      discount: 37,
      rating: 5,
    },
    {
      image: 'https://via.placeholder.com/150',
      name: 'Carrots',
      description: 'Crunchy carrots, rich in vitamins.',
      price: 45,
      originalPrice: 70,
      discount: 36,
      rating: 3,
    },
  ];

  return (
    <div className="grid gap-8 mx-auto mt-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl">
      {products.map((product, index) => (
        <Productdetails key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductPage;
