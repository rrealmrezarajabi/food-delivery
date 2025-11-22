import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const NavBar = ({ setShowLogin }) => {
  const navLinkStyles = ({ isActive }) =>
    `transition font-medium ${
      isActive
        ? "text-orange-500 border-b-2 border-orange-500 pb-1"
        : "text-gray-700 hover:text-orange-400"
    }`;

  return (
    <nav className="flex items-center justify-between px-6 py-3 shadow-md bg-white">
      <div className="flex items-center">
        <img src={assets.logo} alt="logo" className="h-10 w-auto" />
      </div>

      <ul className="hidden md:flex gap-6 text-lg">
        <li>
          <NavLink to="/" className={navLinkStyles}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/menu" className={navLinkStyles}>
            Menu
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" className={navLinkStyles}>
            Contact Us
          </NavLink>
        </li>
      </ul>

      <div className="flex items-center gap-6">
        <img
          src={assets.search_icon}
          alt="search"
          className="cursor-pointer hover:scale-110 transition"
        />
        <img
          src={assets.basket_icon}
          alt="basket"
          className="cursor-pointer hover:scale-110 transition"
        />

        <button onClick={()=>setShowLogin(true)} className="border rounded-lg px-4 py-1 bg-orange-500 text-white hover:bg-orange-600 transition">
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
