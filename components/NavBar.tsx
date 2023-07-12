"use client";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function NavBar(props: any) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 w-[100vw]">
        <div className=" bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg">
          <div className="container mx-auto flex items-center justify-between p-6">
            <div>
              <a href="#" className="text-white hover:text-gray-200 hover:transition-[color] text-[24px]">
                Dev<span className="font-bold text-blue-500">4</span>Hire
              </a>
            </div>
            <div className="md:hidden">
              <button
                type="button"
                className="text-white hover:text-gray-200 text-[24px]"
                onClick={toggleMenu}
              >
                <FaBars />
              </button>
            </div>
            <ul
              className={`hidden md:flex space-x-4 text-white ${
                isOpen ? "flex flex-col" : ""
              }`}
            >
              <li>
                <a href="#" className="text-white hover:text-gray-200 hover:transition-[color]  text-[24px]">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-200 hover:transition-[color]  text-[24px]">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-200 hover:transition-[color]  text-[24px]">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg ${
            isOpen ? "block" : "hidden"
          } md:hidden`}
        >
          <div className="container mx-auto p-4">
            <ul className="flex flex-col space-y-4 text-white">
              <li>
                <a href="#" className="text-white hover:text-gray-200 hover:transition-[color] text-[24px]">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-200 hover:transition-[color] text-[24px]">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-200 hover:transition-[color] text-[24px]">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
