import React, { useState } from "react";
import { FaShoppingCart, FaBars } from "react-icons/fa";

const Product = () => {
  const [filterOpen, setFilterOpen] = useState(false);

  const toggleFilter = () => setFilterOpen(!filterOpen);

  const products = [
    { name: "Matte Lipstick", price: "$22.00", img: "/img/product image-1.png" },
    { name: "Foundation", price: "$19.00", img: "/img/product image-2.png" },
    { name: "Blush", price: "$3.00", img: "/img/product image-3.png" },
    { name: "Nail Polish", price: "$45.00", img: "/img/product image-4.png" },
    { name: "Hand Cream", price: "$50.00", img: "/img/product image-5.png" },
    { name: "Body Lotion", price: "$67.00", img: "/img/product image-6.png" },
    { name: "Eyeliner", price: "$78.00", img: "/img/product image-7.png" },
    { name: "Mascara", price: "$26.00", img: "/img/product image-8.png" },
    { name: "Mascara", price: "$26.00", img: "/img/product image-8.png" },
    { name: "Mascara", price: "$26.00", img: "/img/product image-8.png" },
    { name: "Mascara", price: "$26.00", img: "/img/product image-8.png" },
    { name: "Mascara", price: "$26.00", img: "/img/product image-8.png" },
  ];

  return (
    <div className="relative min-h-screen bg-white ">
      {/* Filter Toggle Button */}
      <button
  onClick={toggleFilter}
  className="fixed top-16 left-3 bg-teal-600 text-white px-3 py-1.5 
  rounded-full shadow-md text-base md:text-lg 
  md:top-20 md:left-4 md:px-4 md:py-2 z-50"

>
  ☰ Filters
</button>


      {/* Sidebar Filter */}
      <div
        className={`fixed top-27 left-0 h-full bg-white border-r border-gray-300 overflow-y-auto transition-all duration-300 z-40 ${
          filterOpen ? "w-64" : "w-0"
        }`} >
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold">Filters</h3>
          <button onClick={toggleFilter} className="text-2xl font-bold">
            &times;
          </button>
        </div>

        {/* Brand Filter */}
        <div className="p-4 border-b border-gray-100">
          <h4 className="font-semibold mb-2">Brand</h4>
          <label className="block"><input type="checkbox" className="mr-2" /> Lakme</label>
          <label className="block"><input type="checkbox" className="mr-2" /> Mamaearth</label>
          <label className="block"><input type="checkbox" className="mr-2" /> Plum</label>
        </div>

        {/* Price Filter */}
        <div className="p-4 border-b border-gray-100">
          <h4 className="font-semibold mb-2">Price</h4>
          <label className="block"><input type="radio" name="price" className="mr-2" /> ₹0 - ₹500</label>
          <label className="block"><input type="radio" name="price" className="mr-2" /> ₹500 - ₹1000</label>
          <label className="block"><input type="radio" name="price" className="mr-2" /> ₹1000+</label>
        </div>

        {/* Category Filter */}
        <div className="p-4 border-b border-gray-100">
          <h4 className="font-semibold mb-2">Category</h4>
          <label className="block"><input type="checkbox" className="mr-2" /> Skin Care</label>
          <label className="block"><input type="checkbox" className="mr-2" /> Hair Care</label>
          <label className="block"><input type="checkbox" className="mr-2" /> Makeup</label>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`transition-all duration-300 p-6 ${
          filterOpen ? "ml-64" : "ml-0"
        }`}
      >
        {/* Heading */}
        <div className="text-center mb-8">
        <strong className="bg-[#EAAC8B] text-white px-6 py-2 text-lg rounded-md ">
                        Our Products
                    </strong>        
                      <p className="text-gray-600 mt-4">We provide you safest organic products</p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {products.map((product, idx) => (
            <div key={idx} 
            className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition w-full max-w-[220px] mx-auto"
            ><div className="relative w-full h-48 overflow-hidden rounded-md">
<img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-md"
                />
                <button className="absolute top-2 right-2 bg-teal-600 text-white p-2 rounded-full hover:bg-[#EAAC8B]">
                  <FaShoppingCart />
                </button>
              </div>
              <h4 className="mt-3 font-semibold">{product.name}</h4>
              <p className="text-gray-600">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
