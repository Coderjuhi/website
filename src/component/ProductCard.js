import React from "react";
import { useCart } from "../component/CartContext";
import { FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white border rounded-lg shadow-md p-4 hover:shadow-lg transition">
      <img src={product.img} alt={product.name} className="rounded-lg mb-4 w-full h-48 object-cover" />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-600 mb-2">₹{product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-[#EAAC8B] transition-all flex items-center gap-2"
      >
        <FaShoppingCart /> Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
