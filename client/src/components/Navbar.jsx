import React, { useState } from "react";
import { IoSearch, IoCartOutline } from "react-icons/io5";
import { PiHandbagFill } from "react-icons/pi";
import { HiOutlineUser } from "react-icons/hi2";
import { FaRegHeart, FaUserAstronaut } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "/logo.png";
import dp from "/catDP.png";
import { useAuth } from "../context/AuthContext";

const dropdown = [
  { name: "Orders", href: "/orders" },
  { name: "Cart", href: "/cart" },
  { name: "Checkout", href: "/checkout" },
];

export const Navbar = () => {
  const [selectDropdown, setSelectDropdown] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const { currentUser, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="mx-auto max-w-screen-2xl  py-4 md:px-8 px-2">
      <nav className="flex items-center justify-between">
        {/* left section icon and search bar*/}
        <div className="flex justify-between items-start md:gap-16 gap-1">
          <Link to="/" className="flex justify-center items-end gap-2 ">
            <img src={logo} alt="" className="size-7" />

            <p className="leading-none text-xl font-semibold font-primary sm:block hidden">
              Trailed
            </p>
          </Link>
          <div className="relative md:w-72 w-40 space-x-2">
            <IoSearch className="absolute inline-block left-3 inset-y-2" />
            <input
              type="text"
              className="py-1 md:px-8 px-6 bg-gray-200 rounded-md text-black focus:outline-none w-full"
              placeholder="Search bags"
            />
          </div>
        </div>
        {/* Right section */}
        <div className="flex gap-3 items-center justify-center">
          {currentUser ? (
            <div className="relative">
              <a onClick={() => setSelectDropdown(!selectDropdown)}>
                <img
                  src={dp}
                  className="size-8 items-center rounded-full  ring-2 ring-gray-600 hover:ring-primary cursor-pointer"
                />
              </a>
              {selectDropdown && (
                <div className="absolute right-0 bg-white mt-4 z-40 w-44 rounded-md border border-gray-300">
                  <ul className="py-2">
                    {dropdown.map((item) => (
                      <li
                        onClick={() => setSelectDropdown(false)}
                        key={item.name}
                        className="hover:bg-gray-100 py-1 px-4">
                        <Link to={item.href} className="text-sm block">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                    <li
                      onClick={() => handleLogout()}
                      className="hover:bg-gray-100 py-1 px-4">
                      <Link to="/login" className="text-sm block">
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <Link>
              <HiOutlineUser className="size-6" />
            </Link>
          )}
          <button className="md:block hidden">
            <FaRegHeart className="size-6" />
          </button>

          <Link
            to="/cart"
            className="flex bg-primary gap-2 font-medium rounded px-2 py-1 sm:px-4 focus:outline-none text-gray-800 hover:bg-accentYellow ">
            <IoCartOutline className="size-6" />
            <span className="">
              {cartItems.length > 0 ? cartItems.length : 0}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};
