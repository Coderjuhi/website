import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());

const products = [
  {
    id: 1,
    name: "Matte Lipstick",
    price: 22,
    brand: "Lakme",
    category: "Makeup",
    img: "/img/product image-1.png",
    description:
      "Smooth matte lipstick with intense color payoff and long-lasting finish, perfect for everyday wear.",
  },
  {
    id: 2,
    name: "Foundation",
    price: 19,
    brand: "Mamaearth",
    category: "Makeup",
    img: "/img/product image-2.png",
    description:
      "Lightweight foundation with natural coverage, enriched with aloe vera for skin nourishment.",
  },
  {
    id: 3,
    name: "Lip Balm",
    price: 3,
    brand: "Plum",
    category: "Makeup",
    img: "/img/product image-3.png",
    description:
      "Hydrating lip balm with fruity flavor and SPF protection, keeps lips soft and smooth.",
  },
  {
    id: 4,
    name: "Perfume",
    price: 45,
    brand: "Lakme",
    category: "Body Care",
    img: "/img/product image-4.png",
    description:
      "Elegant perfume with floral and woody notes, ideal for daily wear and special occasions.",
  },
  {
    id: 5,
    name: "Hand Cream",
    price: 50,
    brand: "Mamaearth",
    category: "Skin Care",
    img: "/img/product image-5.png",
    description:
      "Moisturizing hand cream with shea butter and vitamin E, heals dryness and keeps hands soft.",
  },
  {
    id: 6,
    name: "Body Scent",
    price: 67,
    brand: "Plum",
    category: "Body Care",
    img: "/img/product image-6.png",
    description:
      "Refreshing body mist with long-lasting fragrance, suitable for all-day freshness.",
  },
  {
    id: 7,
    name: "Primer",
    price: 78,
    brand: "Lakme",
    category: "Makeup",
    img: "/img/product image-7.png",
    description:
      "Silky smooth primer that blurs pores and gives a flawless base for makeup.",
  },
  {
    id: 8,
    name: "Eyeliner",
    price: 16,
    brand: "Mamaearth",
    category: "Makeup",
    img: "/img/eyeliner.png",
    description:
      "Smudge-proof eyeliner with deep black pigment and long-lasting waterproof formula.",
  },
  {
    id: 9,
    name: "Body Lotion",
    price: 6,
    brand: "Plum",
    category: "Skin Care",
    img: "/img/bodylotion.png",
    description:
      "Lightweight lotion with aloe vera and shea butter for intense skin hydration.",
  },
  {
    id: 10,
    name: "Blush",
    price: 6,
    brand: "Lakme",
    category: "Makeup",
    img: "/img/blush.jpg",
    description:
      "Natural finish blush with buildable color and smooth texture for radiant cheeks.",
  },
  {
    id: 11,
    name: "Highlighter",
    price: 7,
    brand: "Mamaearth",
    category: "Makeup",
    img: "/img/product image-11.png",
    description:
      "Creamy highlighter with light-reflecting pigments for a glowing, luminous look.",
  },
  {
    id: 12,
    name: "Serum",
    price: 8,
    brand: "Plum",
    category: "Skin Care",
    img: "/img/serum-removebg-preview.png",
    description:
      "Vitamin C serum that boosts skin radiance and helps reduce dark spots and dullness.",
  },
];

app.get("/api/products/:id", (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
