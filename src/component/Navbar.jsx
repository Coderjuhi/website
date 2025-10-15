import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes, FaShoppingCart, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [user, setUser] = useState(null);
  const [dropdown, setDropdown] = useState(false);
  const ddRef = useRef();

  // Load user from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  // Lock scroll when login/signup modal open
  useEffect(() => {
    if (showLogin || showSignup) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => (document.body.style.overflow = "auto");
  }, [showLogin, showSignup]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function onDoc(e) {
      if (ddRef.current && !ddRef.current.contains(e.target)) setDropdown(false);
    }
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  function handleLoginSuccess(user) {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  }

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setDropdown(false);
  }

  return (
    <header className="bg-white shadow-md z-50">
      
      {/* 🔹 Logo + Search + Icons */}
      <div className="flex items-center justify-between px-4 md:px-6 py-3 border-b border-gray-200 gap-4 md:gap-6">
        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-700 md:hidden focus:outline-none"
        >
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>

        {/* Logo */}
        <Link to="/" className="flex items-center flex-shrink-0">
          <h2 className="text-2xl md:text-3xl font-playfair bg-gradient-to-r from-[#EAAC8B] to-[#423127] bg-clip-text text-transparent font-semibold">
            BeautyGlow
          </h2>
        </Link>

        {/* Desktop search */}
        <div className="hidden md:flex flex-grow max-w-xl">
          <input
            type="search"
            placeholder="Search for products..."
            className="flex-grow border border-gray-300 rounded-l-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#EAAC8B]"
          />
          <button
            type="submit"
            className="bg-[#EAAC8B] text-white px-5 py-2 rounded-r-md font-semibold hover:bg-[#f6c577] transition"
          >
            Search
          </button>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <Link to="/wishlist" className="relative text-gray-700 hover:text-[#EAAC8B]">
            <FaHeart size={20} />
            <span className="absolute -top-2 -right-2 bg-[#EAAC8B] text-white text-xs rounded-full px-1">0</span>
          </Link>
          <Link to="/cart" className="relative text-gray-700 hover:text-[#EAAC8B]">
            <FaShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-[#EAAC8B] text-white text-xs rounded-full px-1">3</span>
          </Link>

          {user ? (
            <div className="relative" ref={ddRef}>
              <button
                onClick={() => setDropdown(!dropdown)}
                className="w-9 h-9 rounded-full bg-[#EAAC8B] text-white font-semibold flex items-center justify-center"
                title={user.firstName}
              >
                {user.firstName?.[0]?.toUpperCase() || "U"}
              </button>
              {dropdown && (
                <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-md w-44 text-sm">
                  <p className="px-4 py-2 border-b text-gray-700">{user.firstName} {user.lastName || ""}</p>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="hidden sm:flex gap-2">
              <button
                onClick={() => setShowLogin(true)}
                className="bg-[#EAAC8B] px-4 py-1 rounded-md text-white font-semibold hover:bg-[#f6c577] transition"
              >
                Login
              </button>
              <button
                onClick={() => setShowSignup(true)}
                className="bg-white border border-[#EAAC8B] px-4 py-1 rounded-md text-[#EAAC8B] font-semibold hover:bg-[#fff6ef] transition"
              >
                Sign up
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden px-4 py-2 border-b border-gray-200">
        <div className="flex w-full">
          <input
            type="search"
            placeholder="Search for products..."
            className="flex-grow border border-gray-300 rounded-l-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#EAAC8B]"
          />
          <button
            type="submit"
            className="bg-[#EAAC8B] text-white px-5 py-2 rounded-r-md font-semibold hover:bg-[#f6c577] transition"
          >
            Search
          </button>
        </div>
      </div>

      {/* 🔹 Navigation */}
      <nav>
        {/* Mobile menu overlay */}
        {menuOpen && (
          <div className="fixed inset-0 z-50 flex justify-center items-center md:hidden">
            {/* Semi-transparent background */}
            <div className="absolute inset-0 bg-black/30" onClick={() => setMenuOpen(false)}></div>

            {/* Rounded menu box */}
            <div className="relative z-10 bg-white rounded-3xl shadow-xl w-11/12 max-w-sm p-6 flex flex-col gap-4">
              <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-[#EAAC8B] font-medium">Home</Link>
              <Link to="/category" onClick={() => setMenuOpen(false)} className="hover:text-[#EAAC8B] font-medium">Category</Link>
              <Link to="/product" onClick={() => setMenuOpen(false)} className="hover:text-[#EAAC8B] font-medium">Product Details</Link>
              <Link to="/cart" onClick={() => setMenuOpen(false)} className="hover:text-[#EAAC8B] font-medium">Cart</Link>
              <Link to="/checkout" onClick={() => setMenuOpen(false)} className="hover:text-[#EAAC8B] font-medium">Checkout</Link>
              <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-[#EAAC8B] font-medium">About</Link>
              <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-[#EAAC8B] font-medium">Contact</Link>
            </div>
          </div>
        )}

        {/* Desktop nav */}
        <div className="hidden md:flex flex-row justify-center items-center gap-8 py-3 text-gray-700">
          <Link to="/" className="hover:text-[#EAAC8B] font-medium">Home</Link>
          <Link to="/category" className="hover:text-[#EAAC8B] font-medium">Category</Link>
          <Link to="/product" className="hover:text-[#EAAC8B] font-medium">Product Details</Link>
          <Link to="/cart" className="hover:text-[#EAAC8B] font-medium">Cart</Link>
          <Link to="/checkout" className="hover:text-[#EAAC8B] font-medium">Checkout</Link>
          <Link to="/about" className="hover:text-[#EAAC8B] font-medium">About</Link>
          <Link to="/contact" className="hover:text-[#EAAC8B] font-medium">Contact</Link>
        </div>
      </nav>

      {/* 🔹 Login & Signup Modals */}
      {showLogin && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center">
          <div className="absolute inset-0 bg-blue-200/30 backdrop-blur-md" onClick={() => setShowLogin(false)} />
          <div className="relative z-10 rounded-2xl shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <Login onClose={() => setShowLogin(false)} onLoginSuccess={handleLoginSuccess} />
          </div>
        </div>
      )}

      {showSignup && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center">
          <div className="absolute inset-0 bg-blue-200/30 backdrop-blur-md" onClick={() => setShowSignup(false)} />
          <div className="relative z-10 rounded-2xl shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <Signup onClose={() => setShowSignup(false)} />
          </div>
        </div>
      )}
    </header>
  );
}
