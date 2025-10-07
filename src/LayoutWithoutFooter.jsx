// LayoutWithoutFooter.jsx
import { Outlet } from "react-router-dom";
import Navbar from "./component/Navbar"; // assuming you have a separate Navbar component

export default function LayoutWithoutFooter() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
