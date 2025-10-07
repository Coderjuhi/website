import React from "react";

export default function About() {
  return (
    <div className="pt-16"> {/* spacing for fixed navbar */}
      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 bg-yellow-100">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Text */}
          <div className="flex-1 text-gray-800">
            <h1 className="text-4xl font-bold mb-6">About Us</h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              At BeautyGlow, we are passionate about providing high-quality,
              natural beauty products that are safe and effective. Our team of
              experienced beauty professionals is dedicated to creating
              innovative formulations that nourish and enhance your skin. We
              believe in the power of natural ingredients and are committed to
              sustainable practices. Our goal is to empower our customers to
              feel confident and beautiful in their own skin.
            </p>
          </div>

          {/* Image */}
          <div className="flex-1">
            <img
              src="/img/image 85.png"
              alt="About BeautyGlow"
              className="rounded-lg shadow-lg mx-auto bg-white"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
