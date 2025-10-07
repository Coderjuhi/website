import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-gray-100 px-6 py-3 shadow-md">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <h2 className="text-4xl font-playfair bg-gradient-to-r from-[#EAAC8B] to-[#423127] bg-clip-text text-transparent font-semibold">
            BeautyGlow
          </h2>
        </Link>
      </div>

      {/* Hamburger Icon */}
      <button
        className="text-2xl text-gray-600 md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Navbar Links */}
      <nav
        className={`${
          menuOpen
            ? "flex flex-col absolute top-full right-6 bg-white border border-gray-200 shadow-lg p-4 gap-3 w-48"
            : "hidden"
        } md:flex md:flex-row md:items-center md:gap-6 md:static md:bg-transparent md:border-0 md:shadow-none`}
      >
        <Link
          to="/"
          className="text-lg text-gray-600 hover:text-[#2b211b]"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/product"
          className="text-lg text-gray-600 hover:text-[#2b211b]"
          onClick={() => setMenuOpen(false)}
        >
          Products
        </Link>
        <Link
          to="/about"
          className="text-lg text-gray-600 hover:text-[#2b211b]"
          onClick={() => setMenuOpen(false)}
        >
          About Us
        </Link>
        <Link
          to="/contact"
          className="text-lg text-gray-600 hover:text-[#2b211b]"
          onClick={() => setMenuOpen(false)}
        >
          Contact Us
        </Link>

        {/* Search + Login Button */}
        <div className="flex mt-2 md:mt-0 gap-2 items-center">
          {/* Search visible only on md+ */}
          <div className="hidden md:flex gap-2">
            <input
              type="search"
              placeholder="Search..."
              className="border border-gray-300 rounded-l-md px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-[#EAAC8B]"
            />
            <button
              type="submit"
              className="border border-gray-300 rounded-r-md px-3 py-1 text-sm text-gray-700 hover:bg-[#EAAC8B] hover:text-white transition"
            >
              Search
            </button>
          </div>
          {/* Login button always visible */}
          <Link
            to="/login"
            className="bg-[#EAAC8B] px-4 py-1 rounded-md text-white font-semibold hover:text-white hover:bg-[#f6c577] transition"
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}
