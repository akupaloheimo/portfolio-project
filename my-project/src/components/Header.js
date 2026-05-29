import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Resume from "../assets/CV.pdf";
import Portfolio from "../assets/Portfolio.pdf";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-9 py-6 bg-primary text-white fixed w-full z-20 shadow-lg">
      <a href="/" className="text-xl">
        Aku Paloheimo
      </a>

      <nav className="hidden md:flex space-x-6 py-3, itmes-center">
        {["About", "Experience", "Portfolio"].map((item) => (
          <a
            key={item}
            href={`/${item.toLowerCase()}`}
            className="font-semibold text-white text-xl hover:text-accent transition-colors"
          >
            {item}
          </a>
        ))}
        <a
          className="font-semibold text-white text-xl hover:text-accent transition-colors"
          href={Resume}
          id="pdfLink"
          target="_blank"
          rel="noopener noreferrer"
        >
          CV
        </a>
      </nav>
    </header>
  );
};

export default Header;
