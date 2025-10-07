import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen"> {/* spacing for fixed navbar */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
