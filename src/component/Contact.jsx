import React from "react";

export default function Contact() {
  return (
    <div className="pt-16 "> {/* spacing for fixed navbar */}
      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-10 ">
          {/* Contact Info */}
          <div className="flex-1 space-y-6 text-gray-800 bg-[#FFD899] px-5 py-10 rounded-md ">
            <h1 className="text-4xl font-bold mb-4">Get in touch</h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              We would love to hear from you! Whether you have questions, feedback, or need assistance, feel free to reach out to us.
            </p>

            <div className="space-y-2 text-gray-600">
              <p>123 Fifth Avenue, New Delhi</p>
              <p><i className="fas fa-envelope mr-2"></i>Email: BeautyGlow123@.com</p>
              <p><i className="fas fa-phone mr-2"></i>Phone: (103) 336-3490</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1 bg-white p-8 rounded-lg shadow-lg ">
            <form className="space-y-4">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#EAAC8B] transition-all"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  required
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#EAAC8B] transition-all"
                />
              </div>

              <input
                type="email"
                placeholder="Your email address..."
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#EAAC8B] transition-all"
              />

              <textarea
                placeholder="Message..."
                rows="6"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#EAAC8B] transition-all"
              ></textarea>

              <button
                type="submit"
                className="bg-[#EAAC8B] hover:bg-[#c17f61] text-white font-semibold px-6 py-2 rounded-lg transition-transform transform hover:scale-105"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
