import React, { useState, useEffect } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import Signup from "./Signup"; // import your Signup component

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  // Disable scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = showSignup ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [showSignup]);

  function handleSubmit(e) {
    e.preventDefault();
    if (password.length < 6) {
      alert("Password must be at least 6 characters for demo");
      return;
    }
    alert(`Demo sign in with ${email}`);
  }

  return (
    <>
      {/* Login Box */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white/90 backdrop-blur rounded-2xl shadow-xl border border-[#FFD9B8]">
          <div className="p-8">
            {/* Logo + Title */}
            <div className="flex flex-col items-center gap-3 mb-4">
              <h1 className="text-2xl font-semibold bg-gradient-to-r from-[#EAAC8B] to-[#423127] bg-clip-text text-transparent">
                BeautyGlow
              </h1>
              <h2 className="text-xl font-medium text-gray-700">Welcome Back</h2>
              <p className="text-sm text-gray-500 text-center">
                Sign in to your BeautyGlow account to explore our products
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FFD9B8]"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-[#FFD9B8]"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  >
                    {showPassword ? <IoEyeOutline /> : <FaRegEyeSlash />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#EAAC8B] hover:bg-[#FFD899] text-white hover:text-gray-800 rounded-lg py-3 font-medium shadow-sm transition"
              >
                Sign In
              </button>
            </form>

            {/* Footer */}
            <div className="mt-5 text-center text-sm text-gray-600">
              <p>
                Don't have an account?{" "}
                <button
                  onClick={() => setShowSignup(true)}
                  className="text-[#EAAC8B] font-medium underline"
                >
                  Create New Account
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Signup Modal */}
      {showSignup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Background blur */}
          <div
            className="absolute inset-0 bg-blue-300/30 backdrop-blur-md"
            onClick={() => setShowSignup(false)}
          ></div>

          {/* Signup form */}
          <div className="relative z-10 max-h-[90vh] overflow-y-auto">
            <Signup
              switchToLogin={() => setShowSignup(false)} // pass prop to switch back
            />
          </div>
        </div>
      )}
    </>
  );
}
