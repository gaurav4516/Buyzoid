import React from "react";
import logoYellow from "/logoYellow.webp";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="bg-secondary text-white px-10 py-8">
      <footer>
        {/* top section */}
        <div className="container mx-auto flex md:flex-row flex-col justify-between items-center mb-10">
          {/* icon-navigation section */}
          <div className="md:w-1/2 w-full">
            <img src={logoYellow} alt="logo" className="size-24 my-10 " />
            <ul className="flex gap-4 flex-wrap mb-4 md:mb-0 ">
              <li>
                <a
                 
                  className="hover:text-primary">
                  Home
                </a>
              </li>
              <li>
                <a
                 
                  className="hover:text-primary">
                  Top Sellers
                </a>
              </li>
              <li>
                <a
                 
                  className="hover:text-primary">
                  Recommended
                </a>
              </li>
              <li>
                <a
                 
                  className="hover:text-primary">
                  Blogs
                </a>
              </li>
            </ul>
          </div>
          {/* newsletter section */}
          <div className="md:w-1/2 w-full ">
            <p className="mb-4">
              Subscribe to our newsletter to recieve latest updates, news and
              offers.
            </p>
            <div className="flex">
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full py-2 px-4 rounded-l-md focus:outline-none text-black"
              />
              <button className="bg-primary font-medium py-2 px-4 rounded-r-md hover:bg-accentYellow text-gray-800">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        {/* bottom section */}
        <div className="container mx-auto flex md:flex-row flex-col items-center justify-between border-t border-gray-400 pt-6 ">
          {/* privacy section */}
          <div>
            <ul className="flex gap-4 mb-4 md:mb-0 ">
              <li>
                <a
                  
                  className="hover:text-primary">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                 
                  className="hover:text-primary">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          {/* social section */}
          <div className="flex gap-6">
           
            <a
              href="https://www.linkedin.com/in/gaurav-singh-944559253"
              target="blank"
              rel="noopener noreferrer"
              className="hover:text-primary">
              <FaLinkedin size={24} />{" "}
            </a>
            <a
              href="https://www.instagram.com/gaurav.singh.45/"
              target="blank"
              rel="noopener noreferrer"
              className="hover:text-primary">
              <FaInstagram size={24} />{" "}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
