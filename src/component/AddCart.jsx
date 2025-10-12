import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const AddCart = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">  <FaShoppingCart className="text-lg" />
        Your Cart</h1>
        <p className="text-gray-600 mb-6">
          This is your Add to Cart page. You can display the cart items here later.
        </p>
        <button
          onClick={() => window.history.back()}
          className="bg-teal-600 text-white px-5 py-2 rounded-lg hover:bg-[#EAAC8B] transition-all duration-200"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default AddCart;
