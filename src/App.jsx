import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout"; // with Navbar + Footer
import LayoutWithoutFooter from "./LayoutWithoutFooter"; // Navbar only
import Home from "./component/Home";
import Product from "./component/Product";
import About from "./component/About";
import Contact from "./component/Contact";
import Login from "./component/Login";
import Signup from "./component/Signup";

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

        {/* Pages with Navbar only (no Footer) */}
        <Route element={<LayoutWithoutFooter />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
