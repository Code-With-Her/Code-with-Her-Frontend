import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const categories = [
    {
      id: 1,
      name: "Carrot",
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.MAIgGI6xRjMVX4mHIl_GtgHaFY%26pid%3DApi&f=1&ipt=ebbeb55b40112bb955f69bca14f48e9d3d09ceebee36b1c9a8ab6432cab293d7&ipo=images",
    },
    {
      id: 2,
      name: "Cabbage",
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F030%2F657%2F553%2Flarge_2x%2Fcabbage-with-transparent-background-high-quality-ultra-hd-free-photo.jpg&f=1&nofb=1&ipt=6ea08521764335705bd6d002ea70fb32623d059abcdc430aefa4eca60a6833c0&ipo=images",
    },
    {
      id: 3,
      name: "Garlic",
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.4mZ_dfdienfeVPwvMhXsrAHaEK%26pid%3DApi&f=1&ipt=cfc674ee97f29f16f49edf1e99f7b6bcdf3d50d69b9caf7426c737b7c0a33854&ipo=images",
    },
    {
      id: 4,
      name: "Capsicum",
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.kpadQepa0rdVegYOf7F_5wAAAA%26pid%3DApi&f=1&ipt=2ce467b60eb55441b58e5f3de4866ca5b9449e4e14eb5ef30568f2d85c2db767&ipo=images",
    },
    {
      id: 5,
      name: "Cucumber",
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.lQO_IQRGVbE4REX89ddTXwHaFP%26pid%3DApi&f=1&ipt=9ab9a2fe97e8f428e440803e08025e5447c808fb59aeb4f19b6df75cc9bbf944&ipo=images",
    },
    {
      id: 6,
      name: "Broccoli",
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.ApNPeVz5kCK5apHIAsud5AHaFj%26pid%3DApi&f=1&ipt=3ce5fca5abb7c9c095fdf4b674e7a51f1dd582c4cd64a64e1fd4b2999669ab09&ipo=images",
    },
    {
      id: 7,
      name: "Beans",
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.1PwQPqVrsbq0srUvZD-bpQHaEz%26pid%3DApi&f=1&ipt=66e0c23cac3413a216763c06baff859f2375a4f737edfcc0d58fa2749dada89b&ipo=images",
    },
    {
      id: 8,
      name: "Tomato",
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.jEX4JOCimX4xQE8-g8yXiQHaHa%26pid%3DApi&f=1&ipt=552f5e575b22459b75184eafe8585a9c8caa2df2296e673865f97a075b0067b3&ipo=images",
    },
    {
      id: 9,
      name: "Onion",
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.gFx6NiKHARprKWoPaUasoQHaFd%26pid%3DApi&f=1&ipt=4b3af963ea7a3d37e298e005c0c360f0f75066e72b7cc850f30abec42d81e6fe&ipo=images",
    },
  ];


  const imageUrls = [
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.MAIgGI6xRjMVX4mHIl_GtgHaFY%26pid%3DApi&f=1&ipt=ebbeb55b40112bb955f69bca14f48e9d3d09ceebee36b1c9a8ab6432cab293d7&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.MAIgGI6xRjMVX4mHIl_GtgHaFY%26pid%3DApi&f=1&ipt=ebbeb55b40112bb955f69bca14f48e9d3d09ceebee36b1c9a8ab6432cab293d7&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.jEX4JOCimX4xQE8-g8yXiQHaHa%26pid%3DApi&f=1&ipt=552f5e575b22459b75184eafe8585a9c8caa2df2296e673865f97a075b0067b3&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F030%2F657%2F553%2Flarge_2x%2Fcabbage-with-transparent-background-high-quality-ultra-hd-free-photo.jpg&f=1&nofb=1&ipt=6ea08521764335705bd6d002ea70fb32623d059abcdc430aefa4eca60a6833c0&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.lQO_IQRGVbE4REX89ddTXwHaFP%26pid%3DApi&f=1&ipt=9ab9a2fe97e8f428e440803e08025e5447c808fb59aeb4f19b6df75cc9bbf944&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.ApNPeVz5kCK5apHIAsud5AHaFj%26pid%3DApi&f=1&ipt=3ce5fca5abb7c9c095fdf4b674e7a51f1dd582c4cd64a64e1fd4b2999669ab09&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.gFx6NiKHARprKWoPaUasoQHaFd%26pid%3DApi&f=1&ipt=4b3af963ea7a3d37e298e005c0c360f0f75066e72b7cc850f30abec42d81e6fe&ipo=images",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-10 bg-bgColor text-textColor">
      <div className="container px-6 mx-auto lg:px-12">
        {/* Categories Slider */}
        <div className="mb-10">
          <h2 className="mt-20 mb-4 text-2xl font-semibold lg:mt-18">Browse Categories</h2>
          <div className="relative overflow-hidden">
            <div className="flex py-4 space-x-8 animate-slide-slow lg:pt-6 sm:pt-20">
              {categories.concat(categories).map((category, index) => (
                <div key={`${category.id}-${index}`} className="flex flex-col items-center flex-shrink-0 w-24 h-24 space-y-2">
                  <a href={category.url} target="_blank" rel="noopener noreferrer">
                    <img
                      src={category.img}
                      alt={category.name}
                      className="object-cover w-16 h-16 transition-transform duration-300 border border-gray-300 rounded-full"
                    />
                  </a>
                  <p className="text-sm text-gray-700">{category.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Header Section */}
        <div className="flex flex-col items-center justify-between space-y-8 lg:flex-row lg:space-y-0">
          <div className="lg:w-1/2">
            <h1 className="mb-4 text-4xl font-bold leading-tight">
              Fresh from the <span className="text-green-700">Farm</span>,<br />
              Delivered to Your <span className="text-green-700">Doorstep</span>
            </h1>
            <p className="mb-6 text-lg text-gray-600">
              Connecting farmers and consumers for better pricing, fresher
              produce, and a stronger local economy.
            </p>
            <button className="px-6 py-3 text-white transition-transform rounded-lg bg-buttonGreen hover:bg-green-700 hover:scale-105">
              Explore Products
            </button>
          </div>

          <div className="lg:w-1/2 lg:pl-28 sm:pl-2">
            <a href={imageUrls[currentImageIndex]} target="_blank" rel="noopener noreferrer">
              <img
                src={imageUrls[currentImageIndex]}
                alt="Fresh Produce"
                className="transition-transform duration-300 rounded-lg shadow-lg h-80 w-80 hover:scale-105"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
