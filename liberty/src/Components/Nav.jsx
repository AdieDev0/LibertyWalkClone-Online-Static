import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import logo from "../assets/logo.jpg";
import { IoIosCloseCircle } from "react-icons/io";
import { ImMenu } from "react-icons/im";

const Nav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <div className="relative">
        <div className="lg:hidden">
          {/* Logo Above Menu Button */}
          <img src={logo} alt="Logo" className="w-8 mx-auto mt-4" />
          <button
            className="w-full bg-black text-white py-4 mt-2 flex items-center justify-center"
            onClick={() => setMenuOpen(true)}
          >
            <span className="mr-2 font-Oswald">SEARCH</span>
            <ImMenu size={19} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed top-0 left-0 w-screen h-96 bg-white z-50 lg:hidden">
            <div className="lg:hidden">
              <img src={logo} alt="Logo" className="w-8 mx-auto mt-4" />
              {/* Close Button */}
              <button
                className="w-full bg-black text-white py-4 mt-2 flex items-center justify-center"
                onClick={() => setMenuOpen(false)}
              >
                <span className="mr-2 font-Oswald">SEARCH</span>
                <IoIosCloseCircle size={19} />
              </button>
              {/* Menu Items */}
              <ul className="flex flex-col items-center justify-center h-full uppercase">
                <li className="py-3 px-4 text-lg cursor-pointer hover:bg-black hover:text-white w-full font-Oswald">
                  Shop
                </li>
                <li className="py-3 px-4 text-lg cursor-pointer hover:bg-black hover:text-white w-full font-Oswald">
                  About
                </li>
                <li className="py-3 px-4 text-lg cursor-pointer hover:bg-black hover:text-white w-full font-Oswald">
                  <Link to="/install">Installs</Link> {/* Link to Install page */}
                </li>
                <li className="py-3 px-4 text-lg cursor-pointer hover:bg-black hover:text-white w-full font-Oswald">
                <Link to="/Gallery">Gallery</Link>
                </li>
                <li className="py-3 px-4 text-lg cursor-pointer hover:bg-black hover:text-white w-full font-Oswald">
                  Support
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex justify-between w-full px-44 border-b-2 border-black">
        <div>
          <img src={logo} alt="" className="size-9 cursor-pointer mt-1"/>
        </div>
        <div className="flex font-Oswald text-lg lg:text-md md:text-lg uppercase overflow-hidden">
          <li className="cursor-pointer border-l-2 border-black px-7 py-2 hover:bg-black hover:text-white">
            Shop
          </li>
          <li className="cursor-pointer border-l-2 border-black px-7 py-2 hover:bg-black hover:text-white">
            About
          </li>
          <li className="cursor-pointer border-l-2 border-black px-7 py-2 hover:bg-black hover:text-white ">
            <Link to="/install">Installs</Link> {/* Link to Install page */}
          </li>
          <li className="cursor-pointer border-l-2 border-black px-7 py-2 hover:bg-black hover:text-white">
          <Link to="/Gallery">Gallery</Link> {/* Link to Install page */}
          </li>
          <li className="cursor-pointer border-l-2 border-black px-7 py-2 hover:bg-black hover:text-white">
            Support
          </li>
          <li className="cursor-pointer border-l-2 border-black px-7 py-2 hover:bg-black hover:text-white">
            LB ★ WORLD
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Nav;
