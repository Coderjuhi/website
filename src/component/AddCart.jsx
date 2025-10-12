import React from "react";
import { useCart } from "./CartContext";
import { FaShoppingCart, FaTrash } from "react-icons/fa";

const AddCart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-lg">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <FaShoppingCart /> Your Cart
        </h1>

        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <>
            <ul className="divide-y divide-gray-200 mb-4">
              {cartItems.map((item, index) => (
                <li key={index} className="flex justify-between items-center py-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div>
                      <h2 className="font-medium text-gray-800">{item.name}</h2>
                      <p className="text-sm text-gray-500">
                        ₹{item.price} × {item.quantity}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.name)}
                    className="text-red-500 hover:text-red-700 transition"
                  >
                    <FaTrash />
                  </button>
                </li>
              ))}
            </ul>

            <div className="flex justify-between items-center">
              <button
                onClick={clearCart}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
              >
                Clear Cart
              </button>
              <p className="font-semibold text-gray-800">
                Total: ₹
                {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}
              </p>
            </div>
          </>
        )}

        <button
          onClick={() => window.history.back()}
          className="mt-6 bg-teal-600 text-white px-5 py-2 rounded-lg hover:bg-[#EAAC8B] transition-all duration-200 w-full"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default AddCart;
