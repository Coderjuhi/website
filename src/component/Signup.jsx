import React, { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import API from "../../beautyglow-server/src/api/api";

export default function Signup({ switchToLogin }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 6) return alert("Password must be at least 6 characters");
    if (password !== confirmPassword) return alert("Passwords do not match");

    try {
      await API.post("/signup", {
        firstName,
        lastName,
        email,
        password,
      });
      alert("Signup successful! Please login.");
      switchToLogin(); // Switch to login modal
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div
      className="w-full max-w-sm bg-white/90 backdrop-blur rounded-2xl shadow-xl border border-[#FFD9B8] overflow-hidden h-auto relative z-10 p-5"
    >
      {/* Logo + Title */}
      <div className="flex flex-col items-center gap-1 mb-3">
        <h1 className="text-2xl font-semibold bg-gradient-to-r from-[#EAAC8B] to-[#423127] bg-clip-text text-transparent">
          BeautyGlow
        </h1>
        <h2 className="text-lg font-medium text-gray-700">Create Your Account</h2>
        <p className="text-xs text-gray-500 text-center">
          It's free and only takes a minute
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-2">
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">First Name</label>
          <input
            type="text"
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFD9B8]"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">Last Name</label>
          <input
            type="text"
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFD9B8]"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFD9B8]"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full rounded-lg border border-gray-200 px-3 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFD9B8]"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <IoEyeOutline /> : <FaRegEyeSlash />}
            </button>
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">Confirm Password</label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              className="w-full rounded-lg border border-gray-200 px-3 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFD9B8]"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showConfirmPassword ? <IoEyeOutline /> : <FaRegEyeSlash />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#EAAC8B] hover:bg-[#FFD899] text-white hover:text-gray-800 rounded-lg py-2 font-medium text-sm shadow-sm transition"
        >
          Sign Up
        </button>
      </form>

      {/* Footer */}
      <div className="mt-3 text-center text-xs text-gray-600">
        <p>
          Already have an account?{" "}
          <button
            onClick={switchToLogin}
            className="text-[#EAAC8B] font-medium underline"
          >
            Login here
          </button>
        </p>
      </div>
    </div>
  );
}
