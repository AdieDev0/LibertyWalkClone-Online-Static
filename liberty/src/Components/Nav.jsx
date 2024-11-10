import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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

  // Animation variants
  const mobileMenuVariants = {
    hidden: { 
      opacity: 0,
      y: "-100%" 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  const dropdownVariants = {
    hidden: { 
      opacity: 0,
      y: -10,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30
      }
    }
  };

  return (
    <div>
      <div className="relative">
        <div className="lg:hidden">
          <Link to="/">
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              src={logo}
              alt="Logo"
              className="w-8 mx-auto mt-4 cursor-pointer"
            />
          </Link>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="w-full bg-black text-white py-4 mt-2 flex items-center justify-center"
            onClick={() => setMenuOpen(true)}
          >
            <span className="mr-2 font-Oswald">SEARCH</span>
            <ImMenu size={20} />
          </motion.button>
        </div>

        {/* Mobile Menu with AnimatePresence */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 left-0 w-screen h-96 bg-white z-50 lg:hidden"
            >
              <div className="lg:hidden">
                <Link to="/hero">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    src={logo}
                    alt="Logo"
                    className="w-8 mx-auto mt-4 cursor-pointer"
                  />
                </Link>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-black text-white py-4 mt-2 flex items-center justify-center"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="mr-2 font-Oswald">SEARCH</span>
                  <IoIosCloseCircle size={19} />
                </motion.button>

                <div className="flex flex-col items-center justify-center h-full uppercase font-medium text-left">
                  <motion.p
                    variants={menuItemVariants}
                    initial="hidden"
                    animate="visible"
                    className="py-3 px-4 text-lg cursor-pointer hover:bg-black hover:text-white w-full font-Oswald"
                  >
                    Shop
                  </motion.p>
                  <Menu as="div" className="relative py-3 px-4 text-lg cursor-pointer hover:bg-black hover:text-white w-full font-Oswald">
                    <MenuButton className="uppercase">About</MenuButton>
                    <AnimatePresence>
                      <MenuItems
                        as={motion.ul}
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
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
                    </AnimatePresence>
                  </Menu>
                  <motion.p
                    variants={menuItemVariants}
                    initial="hidden"
                    animate="visible"
                    className="py-3 px-4 text-lg cursor-pointer hover:bg-black hover:text-white w-full font-Oswald"
                  >
                    <Link to="/install">Installs</Link>
                  </motion.p>
                  <motion.p
                    variants={menuItemVariants}
                    initial="hidden"
                    animate="visible"
                    className="py-3 px-4 text-lg cursor-pointer hover:bg-black hover:text-white w-full font-Oswald"
                  >
                    <Link to="/gallery">Gallery</Link>
                  </motion.p>
                  <Menu as="div" className="py-3 px-4 text-lg cursor-pointer hover:bg-black hover:text-white w-full font-Oswald">
                    <MenuButton className="uppercase">support</MenuButton>
                    <AnimatePresence>
                      <MenuItems
                        as={motion.ul}
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
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
                    </AnimatePresence>
                  </Menu>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex justify-between w-full px-44 border-b-2 border-black">
        <div>
          <Link to="/">
            <motion.img 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              src={logo} 
              alt="Logo" 
              className="size-9 cursor-pointer mt-1" 
            />
          </Link>
        </div>
        <div className="flex font-Oswald text-lg lg:text-md md:text-lg uppercase overflow-hidden font-medium">
          <Menu>
            <MenuButton className="cursor-pointer border-l-2 border-black px-7 py-2 hover:bg-black hover:text-white uppercase">
              SHOP
            </MenuButton>
            <AnimatePresence>
              <MenuItems
                as={motion.div}
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                className="flex-col w-auto origin-top-right border-2 border-black bg-white text-lg font-medium font-Oswald text-black transition duration-200 ease-out focus:outline-none"
              >
                {/* Shop menu items */}
                <MenuItem>
                  <motion.button 
                    whileHover={{ backgroundColor: "black", color: "white" }}
                    className="group flex w-full p-3 items-center gap-2 border-b border-black uppercase"
                  >
                    acura
                  </motion.button>
                </MenuItem>
                <MenuItem>
                  <motion.button 
                    whileHover={{ backgroundColor: "black", color: "white" }}
                    className="group flex w-full p-3 items-center gap-2 border-b border-black uppercase"
                  >
                    audi
                  </motion.button>
                </MenuItem>
                {/* Add other shop menu items similarly */}
              </MenuItems>
            </AnimatePresence>
          </Menu>

          {/* Repeat similar pattern for other desktop menu items */}
          <Menu>
            <MenuButton className="cursor-pointer border-l-2 border-black px-7 py-2 hover:bg-black hover:text-white uppercase">
              About
            </MenuButton>
            <AnimatePresence>
              <MenuItems
                as={motion.div}
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                className="w-52 origin-top-right border-2 border-black bg-white text-lg font-medium font-Oswald text-black transition duration-200 ease-out focus:outline-none"
              >
                {/* About menu items */}
                <MenuItem>
                  <motion.button 
                    whileHover={{ backgroundColor: "black", color: "white" }}
                    className="group flex w-full p-3 items-center gap-2 border-b border-black uppercase"
                  >
                    About Us
                  </motion.button>
                </MenuItem>
                {/* Add other about menu items similarly */}
              </MenuItems>
            </AnimatePresence>
          </Menu>

          <motion.p 
            whileHover={{ backgroundColor: "black", color: "white" }}
            className="cursor-pointer border-l-2 border-black px-7 py-2"
          >
            <Link to="/install">Installs</Link>
          </motion.p>

          <motion.p 
            whileHover={{ backgroundColor: "black", color: "white" }}
            className="cursor-pointer border-l-2 border-black px-7 py-2"
          >
            <Link to="/gallery">Gallery</Link>
          </motion.p>

          {/* Add remaining desktop menu items with similar animation patterns */}
        </div>
      </div>
    </div>
  );
};

export default Nav;