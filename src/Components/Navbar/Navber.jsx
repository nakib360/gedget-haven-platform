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
    const updateCart = () => {
      const cartList = saveToCart();
      setCartLength(cartList.length);
    };

    const updateWishlist = () => {
      const wishList = saveToWishlist();
      setWishLength(wishList.length);
    };

    // Initial load
    updateCart();
    updateWishlist();

    // Listen to custom events
    window.addEventListener("cartUpdated", updateCart);
    window.addEventListener("wishlistUpdated", updateWishlist);

    // Cleanup
    return () => {
      window.removeEventListener("cartUpdated", updateCart);
      window.removeEventListener("wishlistUpdated", updateWishlist);
    };
  }, []);

  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive ? "bg-black text-white" : "text-white md:text-black"} ${
              [
                "/",
                "/Laptops",
                "/Accessories",
                "/Smart-Watches",
                "/MacBook",
                "/Iphone",
                "/Phones",
              ].includes(location.pathname)
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
            `${isActive ? "bg-black text-white" : "text-white md:text-black"} ${
              [
                "/",
                "/Laptops",
                "/Accessories",
                "/Smart-Watches",
                "/MacBook",
                "/Iphone",
                "/Phones",
              ].includes(location.pathname)
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
            `${isActive ? "bg-black text-white" : "text-white md:text-black"} ${
              [
                "/",
                "/Laptops",
                "/Accessories",
                "/Smart-Watches",
                "/MacBook",
                "/Iphone",
                "/Phones",
              ].includes(location.pathname)
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
        [
          "/",
          "/Laptops",
          "/Accessories",
          "/Smart-Watches",
          "/MacBook",
          "/Iphone",
          "/Phones",
        ].includes(location.pathname)
          ? "mb-0"
          : "mb-10"
      }`}
    >
      <div
        className={`navbar ${
          [
            "/",
            "/Laptops",
            "/Accessories",
            "/Smart-Watches",
            "/MacBook",
            "/Iphone",
            "/Phones",
          ].includes(location.pathname)
            ? "bg-[#9538e2] rounded-t-2xl"
            : "bg-white"
        } shadow-none  px-5 lg:px-20`}
      >
        <div className="navbar-start min-w-50">
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className={`${["/"].includes(location.pathname) ? "text-white" : "text-black"} mx-5 lg:hidden`}>
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
              [
                "/",
                "/Laptops",
                "/Accessories",
                "/Smart-Watches",
                "/MacBook",
                "/Iphone",
                "/Phones",
              ].includes(location.pathname)
                ? "text-white"
                : "text-black"
            }`}
          >
            Gadget Heaven
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">{navItems}</ul>
        </div>

        <div className="navbar-end">
          <div className="flex items-center gap-5">
            <NavLink to={"Dashboard/cart"}>
              <div className="relative inline-block">
                <div
                  className={`bg-white rounded-full p-3 relative ${
                    [
                      "/",
                      "/Laptops",
                      "/Accessories",
                      "/Smart-Watches",
                      "/MacBook",
                      "/Iphone",
                      "/Phones",
                    ].includes(location.pathname)
                      ? ""
                      : "border border-black"
                  }`}
                >
                  <FiShoppingCart className="text-black text-xl" />
                </div>
                <span className="absolute top-0 right-0 flex justify-center items-center w-4 h-4 bg-red-500 rounded-full">
                  <p className="text-[10px] text-black">{cartLength}</p>
                </span>
              </div>
            </NavLink>

            <NavLink to={"Dashboard/wishlist"}>
              <div className="relative inline-block">
                <div
                  className={`bg-white rounded-full p-3 ${
                    [
                      "/",
                      "/Laptops",
                      "/Accessories",
                      "/Smart-Watches",
                      "/MacBook",
                      "/Iphone",
                      "/Phones",
                    ].includes(location.pathname)
                      ? ""
                      : "border border-black"
                  }`}
                >
                  <CiHeart className="text-black text-xl font-bold" />
                </div>
                <span className="absolute top-0 right-0 flex justify-center items-center w-4 h-4 bg-amber-300 rounded-full">
                  <p className="text-[10px] text-black">{wishLength}</p>
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
