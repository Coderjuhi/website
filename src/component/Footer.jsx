import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaArrowUp, FaArrowDown } from "react-icons/fa";

export default function Footer() {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [upClicked, setUpClicked] = useState(false);
  const [downClicked, setDownClicked] = useState(false);

  // Chat send handler
  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: "user", text: input }]);
    // Example bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: "bot", text: "Hi! How can I help you today?" }]);
    }, 500);
    setInput("");
  };

  // Scroll handlers
  const scrollToTop = () => {
    setUpClicked(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => setUpClicked(false), 200);
  };

  const scrollToBottom = () => {
    setDownClicked(true);
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    setTimeout(() => setDownClicked(false), 200);
  };

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
        <div
          onClick={scrollToTop}
          className={`w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center
                      hover:bg-blue-100 transition-transform duration-150 cursor-pointer
                      ${upClicked ? "scale-110" : "scale-100"}`}
        >
          <FaArrowUp className="text-gray-700 hover:text-blue-600 transition-colors duration-150" />
        </div>
      </div>

      {/* Arrow Down */}
      <div className="fixed bottom-5 right-5">
        <div
          onClick={scrollToBottom}
          className={`w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center
                      hover:bg-blue-100 transition-transform duration-150 cursor-pointer
                      ${downClicked ? "scale-110" : "scale-100"}`}
        >
          <FaArrowDown className="text-gray-700 hover:text-blue-600 transition-colors duration-150" />
        </div>
      </div>

      {/* Chatbot Help */}
      <div className="fixed bottom-5 left-5">
        <div 
          className="w-12 h-12 rounded-full bg-[#205b4f] text-white flex justify-center items-center shadow-md 
                     hover:bg-[#3d5f58] hover:scale-110 transition-transform duration-300 cursor-pointer"
          onClick={() => setChatOpen(!chatOpen)}
        >
          <p className="text-[10px] font-medium">Help?</p>
        </div>

        {/* Chat Window */}
        {chatOpen && (
          <div className="absolute bottom-16 left-0 w-72 h-96 bg-white shadow-lg rounded-lg flex flex-col overflow-hidden">
            {/* Chat Header */}
            <div className="bg-[#205b4f] text-white p-3 font-semibold flex justify-between items-center">
              <span>Chat with us</span>
              <button onClick={() => setChatOpen(false)}>X</button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-3 overflow-y-auto space-y-2">
              {messages.length === 0 && (
                <p className="text-gray-400 text-sm">Say hi 👋</p>
              )}
              {messages.map((msg, i) => (
                <div 
                  key={i} 
                  className={`p-2 rounded-md text-sm ${msg.sender === "user" ? "bg-blue-100 self-end" : "bg-gray-100 self-start"}`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-2 border-t flex gap-2">
              <input 
                type="text" 
                value={input} 
                onChange={e => setInput(e.target.value)} 
                placeholder="Type a message..." 
                className="flex-1 border rounded-md p-2 text-sm"
                onKeyDown={e => e.key === "Enter" && handleSend()}
              />
              <button onClick={handleSend} className="bg-[#205b4f] text-white px-3 rounded-md">Send</button>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
}
