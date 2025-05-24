import { NavLink, useLocation } from "react-router";
import { FiShoppingCart } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import HeaderContent from "../Header-Content/HeaderContent";
import { saveToCart } from "../Js Scripts/SaveToCart";
import { saveToWishlist } from "../Js Scripts/SaveToWishlist";
import { useEffect, useState } from "react";

const Navber = () => {
  const location = useLocation();
  const [cartLength, setCartLength] = useState(0);
  const [wishLength, setWishLength] = useState(0);

  useEffect(() => {
    const cartList = saveToCart();
    setCartLength(cartList.length);

    const wishList = saveToWishlist();
    setWishLength(wishList.length);
  }, []);

  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive ? "bg-black text-white" : ""} ${
              location.pathname === "/" ||
              location.pathname === "/Laptops" ||
              location.pathname === "/Accessories" ||
              location.pathname === "/Smart-Watches" ||
              location.pathname === "/MacBook" ||
              location.pathname === "/Iphone" ||
              location.pathname === "/Phones"
                ? " text-white"
                : "hover:bg-[#9538e2] text-black"
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/Statistics"
          className={({ isActive }) =>
            `${isActive ? "bg-black text-white" : ""} ${
              location.pathname === "/" ||
              location.pathname === "/Laptops" ||
              location.pathname === "/Accessories" ||
              location.pathname === "/Smart-Watches" ||
              location.pathname === "/MacBook" ||
              location.pathname === "/Iphone" ||
              location.pathname === "/Phones"
                ? " text-white"
                : "hover:bg-[#9538e2] text-black"
            }`
          }
        >
          Statistics
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/Dashboard"
          className={({ isActive }) =>
            `${isActive ? "bg-black text-white" : ""} ${
              location.pathname === "/" ||
              location.pathname === "/Laptops" ||
              location.pathname === "/Accessories" ||
              location.pathname === "/Smart-Watches" ||
              location.pathname === "/MacBook" ||
              location.pathname === "/Iphone" ||
              location.pathname === "/Phones"
                ? " text-white"
                : "hover:bg-[#9538e2] text-black"
            }`
          }
        >
          Dashboard
        </NavLink>
      </li>
    </>
  );

  return (
    <div
      className={`${
        location.pathname === "/" ||
        location.pathname === "/Laptops" ||
        location.pathname === "/Accessories" ||
        location.pathname === "/Smart-Watches" ||
        location.pathname === "/MacBook" ||
        location.pathname === "/Iphone" ||
        location.pathname === "/Phones"
          ? "mb-0"
          : "mb-10"
      }`}
    >
      <div
        className={`navbar ${
          location.pathname === "/" ||
          location.pathname === "/Laptops" ||
          location.pathname === "/Accessories" ||
          location.pathname === "/Smart-Watches" ||
          location.pathname === "/MacBook" ||
          location.pathname === "/Iphone" ||
          location.pathname === "/Phones"
            ? "bg-[#9538e2] rounded-t-2xl"
            : "bg-white"
        } shadow-none  px-5 lg:px-20`}
      >
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <a
            className={`font-bold text-xl ${
              location.pathname === "/" ||
              location.pathname === "/Laptops" ||
              location.pathname === "/Accessories" ||
              location.pathname === "/Smart-Watches" ||
              location.pathname === "/MacBook" ||
              location.pathname === "/Iphone" ||
              location.pathname === "/Phones"
                ? "text-white"
                : "text-black"
            } `}
          >
            Gadget Heaven
          </a>
        </div>

        {/* Center: Nav items for large devices */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">{navItems}</ul>
        </div>

        {/* End: Icons */}
        <div className="navbar-end">
          <div className="flex items-center gap-5">
            {/* cart */}
            <NavLink to={"Dashboard/cart"}>
              <div className="relative inline-block">
                <div
                  className={`bg-white rounded-full p-3 relative ${
                    location.pathname === "/" ||
                    location.pathname === "/Laptops" ||
                    location.pathname === "/Accessories" ||
                    location.pathname === "/Smart-Watches" ||
                    location.pathname === "/MacBook" ||
                    location.pathname === "/Iphone" ||
                    location.pathname === "/Phones"
                      ? ""
                      : "border border-black"
                  }`}
                >
                  <FiShoppingCart className="text-black text-xl" />
                </div>
                <span className="absolute top-0 right-0 flex justify-center items-center w-4 h-4 bg-red-500 rounded-full">
                  <p className="text-[10px] text-black">{0 + cartLength}</p>
                </span>
              </div>
            </NavLink>
            {/* favourite */}
            <NavLink to={"Dashboard/wishlist"}>
              <div className="relative inline-block">
                <div
                  className={`bg-white rounded-full p-3 ${
                    location.pathname === "/" ||
                    location.pathname === "/Laptops" ||
                    location.pathname === "/Accessories" ||
                    location.pathname === "/Smart-Watches" ||
                    location.pathname === "/MacBook" ||
                    location.pathname === "/Iphone" ||
                    location.pathname === "/Phones"
                      ? ""
                      : "border border-black"
                  }`}
                >
                  <CiHeart className="text-black text-xl font-bold" />
                </div>
                <span className="absolute top-0 right-0 flex justify-center items-center w-4 h-4 bg-amber-300 rounded-full">
                  <p className="text-[10px] text-black">{0 + wishLength}</p>
                </span>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
      <HeaderContent />
    </div>
  );
};

export default Navber;
