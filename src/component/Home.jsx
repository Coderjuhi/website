import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaShippingFast,
  FaHeadphonesAlt,
  FaUndoAlt,
  FaStar,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 2, ease: "easeOut" } },
};


const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const slides = [
      {
        img: "/img/elegant-skin-care-banner-design.jpg",
        title: "Hello Skincare!",
        subtitle: "Ready to glow with Organics",
      },
      {
        img: "/img/Clean-Beauty-Brand-Info-Section_1.webp",
        title: "Clean Beauty for You",
        subtitle: "Naturally glowing skin starts here",
      },
    ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      }, 3000);
      return () => clearInterval(interval);
    }, [slides.length]);
  
    return (
      <div id="home" className="bg-white min-h-screen">
  
        {/* ************ HERO SECTION ************ */}
        <section className="relative flex justify-center items-center text-center min-h-[80vh] px-6 border-b border-gray-200 overflow-hidden">
          
          {/* Background Images */}
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${slide.img})` }}
            ></div>
          ))}
  
          {/* Hero Text */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 max-w-3xl text-left -mt-12"
            >
              <h1 className="text-3xl font-bold text-black">{slides[currentIndex].title}</h1>
              <p className="text-2xl text-[#205b4f] font-semibold mt-4">
                {slides[currentIndex].subtitle}
              </p>
              <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.4 }}>
                <Link
                  to="/product"
                  className="mt-6 inline-block border-2 border-[#205b4f] text-[#205b4f] px-3 py-1 rounded-md text-xl font-semibold hover:bg-[#205b4f] hover:text-white transition-all shadow-md hover:shadow-lg"
                >
                  Shop Now
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </section>
  
  
      {/* ************ RATING SECTION ************ */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center py-12 px-6 border-b border-gray-200 mt-8 bg-white shadow-lg"
      >
        <h2 className="text-2xl font-bold text-gray-700 mb-8">
          Trusted Over 350,000+ Clients Worldwide Since 2024
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            { title: "4M+", text: "Worldwide product sale per year" },
            { title: "3,350+", text: "Ratings Worldwide" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-gray-100 p-6 rounded-lg min-w-[250px]"
            >
              <h3 className="text-3xl font-bold">{stat.title}</h3>
              <div className="flex justify-center text-yellow-400 mt-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="mt-2 text-gray-600">{stat.text}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ************ NEW ARRIVALS ************ */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center py-16 px-6 border-b border-gray-200 mt-8 bg-white shadow-lg"
      >
        <div className="mb-10">
          <strong className="bg-[#EAAC8B] text-white px-4 py-2 text-lg rounded-md">
            New Arrival
          </strong>
          <p className="text-gray-600 mt-4 text-lg">
            We provide you with new and organic skincare products
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          {[
            { name: "Matte Lipstick", price: "22.00", img: "/img/lipstick.png" },
            { name: "Foundation", price: "19.00", img: "/img/foundation.jpg" },
            { name: "Blush", price: "3.00", img: "/img/blush.jpg" },
            { name: "Nail Polish", price: "45.00", img: "/img/nail polish.jpg" },
            { name: "Hand Cream", price: "50.00", img: "/img/product image-5.png" },
            { name: "Body Scent", price: "67.00", img: "/img/product image-6.png" },
            { name: "Primer", price: "78.00", img: "/img/product image-7.png" },
            { name: "Eyeliner", price: "16.00", img: "/img/eyeliner.png" },
            { name: "Body Lotion", price: "6.00", img: "/img/bodylotion.png" },
          ].map((product, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition w-full max-w-[220px] mx-auto flex flex-col items-center"
            >
              <div className="relative w-40 h-44 mb-3">
                <img
                  src={product.img}
                  alt={product.name}
                  className="rounded-md w-full h-full object-cover"
                />
              </div>
              <h4 className="font-semibold text-lg">{product.name}</h4>
              <span className="text-gray-600 mb-3">₹{product.price}</span>
              <motion.div whileHover={{ scale: 1.08 }} transition={{ duration: 0.3 }}>
                <Link
                  to="/add-cart"
                  className="bg-teal-600 text-white font-medium px-4 py-2 rounded-md hover:bg-[#EAAC8B] transform transition-all duration-300 inline-flex items-center justify-center w-full text-center shadow-md hover:shadow-lg"
                >
                  <FaShoppingCart className="text-lg mr-2" />
                  Add to Cart
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ************ VIRTUAL BOX ************ */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-wrap justify-center m-6 p-6 border-b border-gray-200 mt-8 bg-pink-200 text-white"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-8">
          <div className="flex-1 p-4">
            <h1 className="text-3xl font-bold mb-4">NEW Virtual Skin Analysis</h1>
            <p className="text-lg text-white mb-6">
              Our Virtual Skincare Analysis evaluates your skin and gives personalized recommendations.
            </p>
            <div className="text-center">
              <h4 className="text-lg mb-4">
                Scan with your phone to get started <br /> or
              </h4>
              <img src="img/qr code.png" alt="QR code" className="h-32 mx-auto" />
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="img/image 10.png"
              alt="Virtual skin analysis"
              className="max-h-96 rounded-lg"
            />
          </div>
        </div>
      </motion.section>

      {/* ************ BRAND SECTION ************ */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-wrap justify-center m-6 p-6 border-b border-gray-200 mt-8 bg-orange-100"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-8">
          <div className="flex-1 text-gray-800 p-4">
            <h3 className="text-3xl font-semibold mb-4">Our Brand</h3>
            <p className="text-gray-700 mb-6">
              From the very beginning, our founder believed that BeautyGlow could not only disrupt beauty retail
              but also have a positive impact on the world. Our story began in 2023 when our founder, Jane,
              realized there were very few cosmetic brands that catered to her skin type. Encouraged by her
              success, she decided to turn her passion into a sustainable and ethical beauty brand.
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-md"
            >
              Discover more
            </motion.button>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="img/Rectangle 12336.png"
              alt="Our brand"
              className="max-h-96 rounded-lg"
            />
          </div>
        </div>
      </motion.section>

      {/* ************ TESTIMONIALS ************ */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-16 px-6 border-b border-gray-200 m-6 text-center shadow-md"
      >
        <h2 className="text-4xl mb-10 font-semibold text-gray-800">Testimonials</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            {
              img: "img/customer1.jpg",
              text: "I've been using these products for just a week, and my skin has never felt smoother!",
              name: "Sarah P.",
            },
            {
              img: "img/customer2.jpg",
              text: "I love how creamy and long-lasting it is. The color stays vibrant all day.",
              name: "Mia S.",
            },
            {
              img: "img/customer3.jpg",
              text: "After using this hair oil, my hair is shinier and less frizzy. It feels healthier and more manageable — highly recommended!",
              name: "Alex M.",
            },
          ].map((t, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-lg p-6 w-72 text-left"
            >
              <img
                src={t.img}
                alt={t.name}
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
              />
              <p className="text-gray-700 mb-3 text-sm">{t.text}</p>
              <div className="flex justify-center text-yellow-500 mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <h4 className="font-semibold text-gray-800 text-center">{t.name}</h4>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ************ SERVICES ************ */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-wrap justify-center items-center gap-6 p-10 bg-white"
      >
        {[
          {
            icon: <FaShippingFast className="text-green-600 text-3xl mb-3" />,
            title: "Free Shipping",
            desc: "Free Shipping for all US orders",
          },
          {
            icon: <FaHeadphonesAlt className="text-green-600 text-3xl mb-3" />,
            title: "Support 24/7",
            desc: "We support you 24 hours a day",
          },
          {
            icon: <FaUndoAlt className="text-green-600 text-3xl mb-3" />,
            title: "100% Money Return",
            desc: "Return back guaranteed",
          },
        ].map((s, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center border border-gray-200 rounded-2xl p-6 w-full sm:w-64 md:w-72 shadow-sm hover:shadow-md transition"
          >
            {s.icon}
            <span className="font-semibold text-lg mt-2">{s.title}</span>
            <p className="text-gray-500 text-sm mt-2">{s.desc}</p>
          </div>
        ))}
      </motion.section>
    </div>
  );
};

export default Home;
