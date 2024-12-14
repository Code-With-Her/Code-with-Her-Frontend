// Import React and Tailwind CSS
import React from "react";
const ProductCard = ({ image, title, category, price, discount, description }) => {
  return (
    <div className="w-full p-4 bg-white rounded-lg shadow-md sm:w-80">
      <img src={image} alt={title} className="object-cover w-full h-40 mb-3 rounded-md" />
      <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      <p className="mb-2 text-sm text-gray-500">{category}</p>
      <div className="flex items-center justify-between mb-2">
        <span className="text-xl font-bold text-green-600">Rs. {price}</span>
        <span className="px-2 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded">
          {discount}% OFF
        </span>
      </div>
      <p className="mb-4 text-sm text-gray-600">{description}</p>
      <div className="flex space-x-2">
        <button className="px-3 py-3 rounded pybg-green-500 tex3t-white hover:bg-green-600">BUY</button>
        <button className="px-3 py-1 text-gray-700 bg-gray-200 rounded hover:bg-gray-300">Add to Cart</button>
      </div>
    </div>
  );
};

const App = () => {
  const bestProducts = [
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjojVOlA6BioXbeDIt4A-NaozYgMfhh_vlQg&s",
      title: "Potatoes",
      category: "Red potato",
      price: 50,
      discount: 40,
      description: "High-quality potatoes with great taste and nutrients."
    },
    {
      image: "https://image.shutterstock.com/image-photo/fresh-tomatoes-top-view-260nw-2490424193.jpg",
      title: "Tomatoes",
      category: "Red tomato",
      price: 25,
      discount: 20,
      description: "Fresh tomatoes perfect for salads and cooking."
    },
    
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8-A9SQ9QnuMs2SMcFkY85THxvQ5nieaz18A&s",
      title: "cabbages",
      category: "cabbage",
      price: 25,
      discount: 20,
      description: "Fresh tomatoes perfect for salads and cooking."
    },
    {
      image: "https://www.skorganicfarms.com/cdn/shop/products/bitter-gourd1_800x.jpg?v=1596341934",
      title: "Bitter gaurd",
      category: "Bitter Gaurd",
      price: 25,
      discount: 20,
      description: "Fresh tomatoes perfect for salads and cooking."
    }
  ];

  const bestSellers = [
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQW7-aAJENmiznbqnQftzp5vCP4GYEiOOFUg&s",
      title: "Onion",
      category: "Red onion",
      price: 80,
      discount: 20,
      description: "Great quality onions with rich flavor."
    },
    {
      image: "https://foodcare.in/cdn/shop/files/lemonsmall.jpg?v=1725364576",
      title: "Lemon",
      category: "Hybrid",
      price: 10,
      discount: 50,
      description: "Juicy lemons with excellent freshness."
    },
    {
      image: "https://images.ctfassets.net/4f3rgqwzdznj/69J2Y3FEmjaSxSRzf5KU53/2e798fa8702971ef0916794d2faa8ef7/GettyImages-183852454.jpg",
      title: "Ginger",
      category: "Ginger",
      price: 10,
      discount: 50,
      description: "Juicy lemons with excellent freshness."
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLDWodgwBpIvDh2RctIagebuTteixhSq0Cnw&s",
      title: "Garlic",
      category: "Hybrid",
      price: 10,
      discount: 50,
      description: "Juicy lemons with excellent freshness."
    },
    
  ];
  return (
    <div className="min-h-screen p-8 bg-blue-50">
      <h1 className="mb-6 text-2xl font-bold text-gray-800">Best Products</h1>
      <div className="flex flex-wrap gap-4 mb-10">
        {bestProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>

      <h1 className="mb-6 text-2xl font-bold text-gray-800">Best Sellers</h1>
      <div className="flex flex-wrap gap-4">
        {bestSellers.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default App;

 
