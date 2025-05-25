"use client";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";


function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="py-10 relative">
      <button
        onClick={toggleMenu}
        className="md:hidden absolute top-4 right-10 bg-stone-800 p-4 rounded-xl hover:bg-stone-700 transition-all duration-300 cursor-pointer"
      >
        <GiHamburgerMenu size={30} />
      </button>

      <div className="flex justify-end items-center">
        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row justify-end gap-12 items-center capitalize text-xl font-bold font-mono absolute md:relative left-0 right-0 top-20 md:top-0 bg-stone-900 md:bg-transparent p-4 md:p-0 rounded-lg`}
        >
          <li className="hover:text-stone-500 transition-all duration-300 cursor-pointer">
            <a href="#inicio">inicio</a>
          </li>
          <li className="hover:text-stone-500 transition-all duration-300 cursor-pointer">
            <a href="#proyectos">proyectos</a>
          </li>
          <li className="hover:text-stone-500 transition-all duration-300 cursor-pointer">
            <a href="#experiencia">experiencia</a>
          </li>
          <li className="hover:text-stone-500 transition-all duration-300 cursor-pointer">
            <a href="#contacto">contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
