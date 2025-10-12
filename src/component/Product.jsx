import React, { useState } from "react";
import { Filter } from "lucide-react";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCart } from "../component/CartContext"; // ✅ Correct path
import products from "../component/productData"; // ✅ Correct path to your data file

const Product = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState("");

  const { addToCart } = useCart(); // ✅ use cart context
  const navigate = useNavigate(); // ✅ for redirect

  const toggleFilter = () => setFilterOpen(!filterOpen);

  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((b) => b !== brand)
        : [...prev, brand]
    );
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handlePriceChange = (range) => setSelectedPrice(range);

  // ✅ Filtering logic
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesBrand =
      selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);

    let matchesPrice = true;
    if (selectedPrice === "0-500") matchesPrice = product.price <= 500;
    if (selectedPrice === "500-1000")
      matchesPrice = product.price > 500 && product.price <= 1000;
    if (selectedPrice === "1000+") matchesPrice = product.price > 1000;

    return matchesSearch && matchesBrand && matchesCategory && matchesPrice;
  });

  return (
    <div className="relative min-h-screen bg-white">
      {/* Filter Toggle Button */}
      <button
        onClick={toggleFilter}
        className="fixed top-16 left-3 bg-teal-600 text-white px-3 py-1.5 rounded-full shadow-md text-base md:text-lg md:top-20 md:left-4 md:px-4 md:py-2 z-50"
      >
        ☰ Filters
      </button>

      {/* Sidebar Filter */}
      <div
        className={`fixed top-30 left-0 h-full bg-white border-r border-gray-300 overflow-y-auto transition-all duration-300 z-40 ${
          filterOpen ? "w-full md:w-64" : "w-0"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold">Filters</h3>
          <button onClick={toggleFilter} className="text-2xl font-bold">
            &times;
          </button>
        </div>

        {/* Brand Filter */}
        <div className="p-4 border-b border-gray-100">
          <h4 className="font-semibold mb-2">Brand</h4>
          {["Lakme", "Mamaearth", "Plum"].map((brand) => (
            <label key={brand} className="block">
              <input
                type="checkbox"
                className="mr-2"
                checked={selectedBrands.includes(brand)}
                onChange={() => handleBrandChange(brand)}
              />
              {brand}
            </label>
          ))}
        </div>

        {/* Price Filter */}
        <div className="p-4 border-b border-gray-100">
          <h4 className="font-semibold mb-2">Price</h4>
          <label className="block">
            <input
              type="radio"
              name="price"
              onChange={() => handlePriceChange("0-500")}
              checked={selectedPrice === "0-500"}
              className="mr-2"
            />{" "}
            ₹0 - ₹500
          </label>
          <label className="block">
            <input
              type="radio"
              name="price"
              onChange={() => handlePriceChange("500-1000")}
              checked={selectedPrice === "500-1000"}
              className="mr-2"
            />{" "}
            ₹500 - ₹1000
          </label>
          <label className="block">
            <input
              type="radio"
              name="price"
              onChange={() => handlePriceChange("1000+")}
              checked={selectedPrice === "1000+"}
              className="mr-2"
            />{" "}
            ₹1000+
          </label>
        </div>

        {/* Category Filter */}
        <div className="p-4 border-b border-gray-100">
          <h4 className="font-semibold mb-2">Category</h4>
          {["Skin Care", "Hair Care", "Makeup", "Body Care"].map((cat) => (
            <label key={cat} className="block">
              <input
                type="checkbox"
                className="mr-2"
                checked={selectedCategories.includes(cat)}
                onChange={() => handleCategoryChange(cat)}
              />
              {cat}
            </label>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`transition-all duration-300 p-6 ${
          filterOpen ? "ml-64 md:ml-64" : "ml-0"
        }`}
      >
        <div className="mb-8 bg-white p-4 rounded-xl mt-5">
          <div className="flex items-center mb-3">
            <Filter className="h-5 w-5 text-emerald-600 mr-2" />
            <h2 className="text-lg font-semibold text-gray-800">
              Search & Filter Products
            </h2>
          </div>
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-3 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {filteredProducts.map((product, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition w-full max-w-[220px] mx-auto flex flex-col items-center"
            >
              <div className="relative w-full h-48 overflow-hidden rounded-md mb-3 cursor-pointer
">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-md"
                  onClick={() => navigate(`/product/${product.id}`)}  // ✅ Correct

                />
              </div>
              <h4 className="font-semibold text-lg">{product.name}</h4>
              <p className="text-gray-600 mb-3">₹{product.price}</p>

              {/* ✅ Add to Cart Button */}
              <button
                onClick={() => {
                  addToCart(product); // ✅ Add to cart
                  navigate("/add-cart"); // ✅ Redirect to cart page
                }}
                className="bg-teal-600 text-white font-medium px-4 py-2 rounded-md hover:bg-[#EAAC8B] hover:scale-105 transform transition-all duration-200 inline-flex items-center justify-center w-full text-center"
              >
                <FaShoppingCart className="text-lg mr-2" />
                Add to Cart
              </button>
            </div>
          ))}

          {/* Message Section */}
          {filteredProducts.length === 0 ? (
            <p className="text-gray-500 col-span-full text-center">
              No products found.
            </p>
          ) : (
            <p className="text-gray-400 col-span-full text-center font-medium">
              {filteredProducts.length} Product
              {filteredProducts.length > 1 ? "s" : ""} found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
