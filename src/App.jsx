import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout"; // Navbar + Footer
import LayoutWithoutFooter from "./LayoutWithoutFooter"; // Navbar only
import Home from "./component/Home";
import Product from "./component/Product";
import About from "./component/About";
import Contact from "./component/Contact";
import Login from "./component/Login";
import Signup from "./component/Signup";
import AddCart from "./component/AddCart"; // ✅ New file

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Pages with Navbar + Footer */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* Pages with Navbar only */}
        <Route element={<LayoutWithoutFooter />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>

        {/* ✅ Page with no Navbar and Footer */}
        <Route path="add-cart" element={<AddCart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
