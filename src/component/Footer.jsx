import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaArrowUp, FaArrowDown } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 text-center mt-8 w-full relative">
      {/* Footer Container */}
      <div className="flex flex-wrap justify-center gap-10 w-full px-4">
        
        {/* Company Info */}
        <div className="max-w-sm text-center">
          <a href="#" className="text-xl font-bold text-gray-800 hover:text-black transition">
            Contact Us
          </a>
          <p className="text-gray-600 mt-2">123 Fifth Avenue, New Delhi</p>

          <div className="flex justify-center mt-3 space-x-3 text-gray-700 text-xl">
            <a href="#" className="hover:text-[#3b5998]"><FaFacebookF /></a>
            <a href="#" className="hover:text-[#E4405F]"><FaInstagram /></a>
            <a href="#" className="hover:text-[#1DA1F2]"><FaTwitter /></a>
            <a href="#" className="hover:text-[#FF0000]"><FaYoutube /></a>
          </div>
        </div>

        {/* Main Links */}
        <div className="max-w-[200px] text-center">
          <strong className="block mb-3 text-lg text-gray-800">Main Links</strong>
          <ul className="list-none space-y-2">
            <li><a href="index.html" className="text-gray-600 hover:text-black transition">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black transition">About</a></li>
            <li><a href="contact.html" className="text-gray-600 hover:text-black transition">Contact</a></li>
            <li><a href="Product.html" className="text-gray-600 hover:text-black transition">Products</a></li>
          </ul>
        </div>

        {/* External Links */}
        <div className="max-w-[200px] text-center">
          <strong className="block mb-3 text-lg text-gray-800">External Links</strong>
          <ul className="list-none space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-black transition">Our Products</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black transition">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black transition">Disclaimer</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black transition">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Product Links */}
        <div className="max-w-[200px] text-center">
          <strong className="block mb-3 text-lg text-gray-800">Our Products</strong>
          <ul className="list-none space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-black transition">Skin Care</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black transition">Hair Care</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black transition">Nail Polish</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black transition">Eye Liner</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-6 text-sm text-gray-500">
        © Copyright 2024 @BeautyGlow ~ Juhi Gupta
      </div>

      {/* Arrow Up */}
      <div className="fixed bottom-20 right-5">
        <div className="w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center hover:bg-blue-100 transition">
          <a href="#home"><FaArrowUp className="text-gray-700" /></a>
        </div>
      </div>

      {/* Arrow Down */}
      <div className="fixed bottom-5 right-5">
        <div className="w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center hover:bg-blue-100 transition">
          <a href="#"><FaArrowDown className="text-gray-700" /></a>
        </div>
      </div>

      {/* Help Circle */}
      <div className="fixed bottom-5 left-5">
        <div className="w-10 h-10 rounded-full bg-[#205b4f] text-white flex justify-center items-center shadow-md hover:bg-[#3d5f58] cursor-pointer">
          <p className="text-[10px] font-medium">Help?</p>
        </div>
      </div>
    </footer>
  );
}
