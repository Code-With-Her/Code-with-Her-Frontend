import React from "react";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import productData from "./productData.json";

const Products = () => {
  const categories = ["Vegetables", "Fruits", "Spices"];

  return (
    <div className="p-6 bg-bgColor">
      <h2 className="mb-8 text-2xl sm:text-3xl font-bold text-center text-textColor">
        Our Products
      </h2>

      {categories.map((category) => (
        <div key={category} className="mb-12">
          <h3 className="mb-6 text-xl sm:text-2xl font-bold text-center text-gray-800">
            {category}
          </h3>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="relative"
          >
            {productData
              .filter((product) => product.category === category)
              .map((product) => (
                <SwiperSlide key={product.id}>
                  <ProductCard {...product} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      ))}
    </div>
  );
};

export default Products;