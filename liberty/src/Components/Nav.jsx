import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import logo from "../assets/logo.jpg";
import { IoIosCloseCircle } from "react-icons/io";
import { ImMenu } from "react-icons/im";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import {
  ArchiveBoxXMarkIcon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";

const Nav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <div className="relative">
        <div className="lg:hidden">
          {/* Logo Above Menu Button */}
          <Link to="/">
            {" "}
            {/* Link wrapping the logo */}
            <img
              src={logo}
              alt="Logo"
              className="w-8 mx-auto mt-4 cursor-pointer"
            />
          </Link>
          <button
            className="w-full bg-black text-white py-4 mt-2 flex items-center justify-center"
            onClick={() => setMenuOpen(true)}
          >
            <span className="mr-2 font-Oswald">SEARCH</span>
            <ImMenu size={20} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed top-0 left-0 w-screen h-96 bg-white z-50 lg:hidden">
            <div className="lg:hidden">
              <Link to="/hero">
                {" "}
                {/* Link wrapping the logo */}
                <img
                  src={logo}
                  alt="Logo"
                  className="w-8 mx-auto mt-4 cursor-pointer"
                />
              </Link>
              {/* Close Button */}
              <button
                className="w-full bg-black text-white py-4 mt-2 flex items-center justify-center"
                onClick={() => setMenuOpen(false)}
              >
                <span className="mr-2 font-Oswald">SEARCH</span>
                <IoIosCloseCircle size={19} />
              </button>

              {/* Menu Items */}
              <div className="flex flex-col items-center justify-center h-full uppercase font-medium text-left">
                <p className="py-3 px-4 text-lg cursor-pointer hover:bg-black hover:text-white w-full font-Oswald">
                  Shop
                </p>
                {/* HEADLESS UI */}
                <Menu
                  as="div"
                  className="relative py-3 px-4 text-lg cursor-pointer hover:bg-black hover:text-white w-full font-Oswald"
                >
                  <MenuButton className="uppercase">About</MenuButton>
                  <MenuItems
                    as="ul"
                    className="absolute w-52 border-2 border-black bg-white text-lg font-medium font-Oswald text-black transition duration-200 ease-out focus:outline-none origin-top-right"
                  >
                    <MenuItem as="li">
                      <button className="group flex w-full p-3 items-center gap-2 border-b border-black hover:bg-black hover:text-white uppercase">
                        About Us
                      </button>
                    </MenuItem>
                    <MenuItem as="li">
                      <button className="group flex w-full p-3 items-center gap-2 border-b border-black hover:bg-black hover:text-white uppercase">
                        Video
                      </button>
                    </MenuItem>
                    <MenuItem as="li">
                      <button className="group flex w-full p-3 items-center gap-2 border-b border-black hover:bg-black hover:text-white uppercase text-left">
                        LB★WORKS
                        <br />
                        LB★PERFORMANCE
                        <br />
                        LB★NATION
                      </button>
                    </MenuItem>
                  </MenuItems>
                </Menu>
                <p className="py-3 px-4 text-lg cursor-pointer hover:bg-black hover:text-white w-full font-Oswald">
                  <Link to="/install">Installs</Link>{" "}
                  {/* Link to Install page */}
                </p>
                <p className="py-3 px-4 text-lg cursor-pointer hover:bg-black hover:text-white w-full font-Oswald">
                  <Link to="/gallery">Gallery</Link>
                </p>
                <Menu
                  as="div"
                  className="py-3 px-4 text-lg cursor-pointer hover:bg-black hover:text-white w-full font-Oswald"
                >
                  <MenuButton className="uppercase">support</MenuButton>
                  <MenuItems
                    as="ul"
                    className="absolute w-52 border-2 border-black bg-white text-lg font-medium font-Oswald text-black transition du ease-out focus:outline-none origin-top-right"
                  >
                    <MenuItem as="li">
                      <button className="group flex w-full p-3 items-center gap-2 border-b border-black hover:bg-black hover:text-white uppercase">
                        my account / log in
                      </button>
                    </MenuItem>
                    <MenuItem as="li">
                      <button className="group flex w-full p-3 items-center gap-2 border-b border-black hover:bg-black hover:text-white uppercase">
                        cart
                      </button>
                    </MenuItem>
                    <MenuItem as="li">
                      <button className="group flex w-full p-3 items-center gap-2 border-b border-black hover:bg-black hover:text-white uppercase">
                        checkout
                      </button>
                    </MenuItem>
                    <MenuItem as="li">
                      <button className="group flex w-full p-3 items-center gap-2 border-b border-black hover:bg-black hover:text-white uppercase">
                        lost password
                      </button>
                    </MenuItem>
                    <MenuItem as="li">
                      <button className="group flex w-full p-3 items-center gap-2 border-b border-black hover:bg-black hover:text-white uppercase">
                        contact us
                      </button>
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex justify-between w-full px-44 border-b-2 border-black">
        <div>
          <Link to="/">
            {" "}
            {/* Link wrapping the logo */}
            <img src={logo} alt="Logo" className="size-9 cursor-pointer mt-1" />
          </Link>
        </div>
        <div className="flex font-Oswald text-lg lg:text-md md:text-lg uppercase overflow-hidden font-medium">
          <Menu>
            {/* headless ui */}
            <MenuButton className="cursor-pointer border-l-2 border-black px-7 py-2 hover:bg-black hover:text-white uppercase">
              SHOP
            </MenuButton>
            <MenuItems
              transition
              anchor="bottom end"
              className="flex-col w-auto origin-top-right border-2 border-black bg-white text-lg font-medium font-Oswald text-black transition duration-200 ease-out focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
            >
              <MenuItem>
                <button className="group flex w-full p-3 items-center gap-2 border-b border-black hover:bg-black hover:text-white uppercase">
                  acura
                </button>
              </MenuItem>
              <MenuItem>
                <button className="group flex w-full p-3 items-center gap-2 border-b border-black hover:bg-black hover:text-white uppercase">
                  audi
                </button>
              </MenuItem>
              <MenuItem>
                <button className="group flex w-full p-3 items-center gap-2 border-b border-black hover:bg-black hover:text-white uppercase">
                  BMW
                </button>
              </MenuItem>
              <MenuItem>
                <button className="group flex w-full p-3 items-center gap-2 border-b border-black hover:bg-black hover:text-white uppercase">
                  chevrolet
                </button>
              </MenuItem>
              <MenuItem>
                <button className="group flex w-full p-3 items-center gap-2 border-b border-black hover:bg-black hover:text-white uppercase">
                  dodge
                </button>
              </MenuItem>
              <MenuItem>
                <button className="group flex w-full p-3 items-center gap-2 border-b border-black hover:bg-black hover:text-white uppercase">
                  ferrari
                </button>
              </MenuItem>
            </MenuItems>
          </Menu>
          <Menu>
            {/* headless ui */}
            <MenuButton className="cursor-pointer border-l-2 border-black px-7 py-2 hover:bg-black hover:text-white uppercase">
              About
            </MenuButton>
            <MenuItems
              transition
              anchor="bottom end"
              className="w-52 origin-top-right border-2 border-black bg-white text-lg font-medium font-Oswald text-black transition duration-200 ease-out focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
            >
              <MenuItem>
                <button className="group flex w-full p-3 items-center gap-2 border-b border-black hover:bg-black hover:text-white uppercase">
                  About Us
                </button>
              </MenuItem>
              <MenuItem>
                <button className="group flex w-full p-3 items-center gap-2 border-b border-black hover:bg-black hover:text-white uppercase">
                  Video
                </button>
              </MenuItem>
              <MenuItem>
                <button className="w-auto p-3 border-b border-black hover:bg-black hover:text-white text-left uppercase">
                  LB★WORKS LB★PERFORMANCE LB★NATION
                </button>
              </MenuItem>
            </MenuItems>
          </Menu>
          <p className="cursor-pointer border-l-2 border-black px-7 py-2 hover:bg-black hover:text-white">
            <Link to="/install">Installs</Link> {/* Link to Install page */}
          </p>
          <p className="cursor-pointer border-l-2 border-black px-7 py-2 hover:bg-black hover:text-white">
            <Link to="/gallery">Gallery</Link> {/* Link to Gallery page */}
          </p>
          <Menu>
            {/* headless ui */}
            <MenuButton className="cursor-pointer border-l-2 border-black px-7 py-2 hover:bg-black hover:text-white uppercase">
              SUPPORT
            </MenuButton>
            <MenuItems
              transition
              anchor="bottom end"
              className="w-52 origin-top-right border-2 border-black bg-white text-lg font-medium font-Oswald text-black transition duration-200 ease-out focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
            >
              <MenuItem>
                <button className="group flex w-full p-3 items-center gap-2 border-b border-black hover:bg-black hover:text-white uppercase">
                  my account / log in
                </button>
              </MenuItem>
              <MenuItem>
                <button className="group flex w-full p-3 items-center gap-2 border-b border-black hover:bg-black hover:text-white uppercase">
                  cart
                </button>
              </MenuItem>
              <MenuItem>
                <button className="group flex w-full p-3 items-center gap-2 border-b border-black hover:bg-black hover:text-white uppercase">
                  check out
                </button>
              </MenuItem>
              <MenuItem>
                <button className="group flex w-full p-3 items-center gap-2 border-b border-black hover:bg-black hover:text-white uppercase">
                  lost password
                </button>
              </MenuItem>
              <MenuItem>
                <button className="group flex w-full p-3 items-center gap-2 border-b border-black hover:bg-black hover:text-white uppercase">
                  contact us
                </button>
              </MenuItem>
            </MenuItems>
          </Menu>
          <Menu>
            {/* headless ui */}
            <MenuButton className="cursor-pointer border-l-2 border-black px-7 py-2 hover:bg-black hover:text-white uppercase">
              LB ★ WORLD
            </MenuButton>
            <MenuItems
              transition
              anchor="bottom end"
              className="w-52 origin-top-right border-2 border-black bg-white text-lg font-medium font-Oswald text-black transition duration-200 ease-out focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
            >
              <MenuItem>
                <button className="group flex w-full p-3 items-center gap-2 border-b border-black hover:bg-black hover:text-white uppercase">
                  JAPAN
                </button>
              </MenuItem>
              <MenuItem>
                <button className="group flex w-full p-3 items-center gap-2 border-b border-black hover:bg-black hover:text-white uppercase">
                  AUS / NZ
                </button>
              </MenuItem>
              <MenuItem>
                <button className="group flex w-full p-3 items-center gap-2 border-b border-black hover:bg-black hover:text-white uppercase">
                  EUROPE
                </button>
              </MenuItem>
              <MenuItem>
                <button className="group flex w-full p-3 items-center gap-2 border-b border-black hover:bg-black hover:text-white uppercase">
                  MIDDLE EAST
                </button>
              </MenuItem>
              <MenuItem>
                <button className="group flex w-full p-3 items-center gap-2 border-b border-black hover:bg-black hover:text-white uppercase">
                  SOUTH AFRICA
                </button>
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Nav;
