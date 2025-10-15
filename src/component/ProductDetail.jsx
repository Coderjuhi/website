import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Simulate API call
    fetch(`http://localhost:5000/api/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Product not found");
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false); // Stop loading
      })
      .catch((err) => {
        console.error(err);
        setProduct(null);
        setLoading(false); // Stop loading even on error
      });
  }, [id]);

  if (loading)
    return (
      <div className="text-center mt-20 text-gray-500 text-xl">
        Loading product details...
      </div>
    );

  if (!product)
    return (
      <div className="text-center mt-20 text-gray-500 text-xl">
        Product not found 😢
      </div>
    );

  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen p-8 bg-white">
      {/* Product Image */}
      <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
        <img
          src={product.img}
          alt={product.name}
          className="rounded-2xl shadow-md w-80 h-80 object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="w-full md:w-1/2 max-w-md">
        <h2 className="text-3xl font-bold mb-3">{product.name}</h2>
        <p className="text-gray-600 mb-2">Brand: {product.brand}</p>
        <p className="text-gray-600 mb-2">Category: {product.category}</p>
        <p className="text-teal-600 font-semibold text-xl mb-6">
          ₹{product.price}
        </p>

        <div className="flex gap-4">
          <button
            onClick={() => {
              addToCart(product);
              navigate("/add-cart");
            }}
            className="bg-teal-600 text-white px-5 py-2 rounded-lg hover:bg-[#EAAC8B] transition-all"
          >
            Add to Cart
          </button>
          <button
            onClick={() => navigate(-1)}
            className="bg-gray-200 px-5 py-2 rounded-lg hover:bg-gray-300 transition-all"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
