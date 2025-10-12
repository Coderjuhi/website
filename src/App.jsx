// App.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import LayoutWithoutFooter from "./LayoutWithoutFooter";
import Home from "./component/Home";
import Product from "./component/Product";
import ProductDetail from "./component/productDetail";
import About from "./component/About";
import Contact from "./component/Contact";
import Login from "./component/Login";
import Signup from "./component/Signup";
import AddCart from "./component/AddCart";
import { CartProvider } from "./component/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          {/* ✅ Pages with Navbar + Footer */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="product" element={<Product />} />
            <Route path="product/:id" element={<ProductDetail />} /> {/* ✅ Product details page */}
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>

          {/* ✅ Pages with Navbar only */}
          <Route element={<LayoutWithoutFooter />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>

          {/* ✅ Page without Navbar + Footer */}
          <Route path="add-cart" element={<AddCart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
