import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Resume from "../assets/CV_Aku_Paloheimo.docx.pdf";
import Portfolio from "../assets/Portfolio.pdf";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);
  const closeNav = () => setToggle(false);

  return (
    <header className="flex justify-between items-center px-6 py-3 bg-primary text-white fixed w-full z-20 shadow-lg">
      <a href="/" className="text-xl">
        Aku Paloheimo
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-6">
        {["About", "Skills", "Pictures", "Contact"].map((item) => (
          <a
            key={item}
            href={`/#${item.toLowerCase()}`}
            className="font-semibold text-white text-xl hover:text-accent transition-colors md:pt-3"
          >
            {item}
          </a>
        ))}
        <a
          href={Resume}
          target="_blank"
          rel="noreferrer"
          className="font-semibold bg-accent px-4 py-2 rounded-lg hover:bg-opacity-80 transition"
        >
          Resume
        </a>
        <a
          href={Portfolio}
          target="_blank"
          rel="noreferrer"
          className="font-semibold bg-accent px-4 py-2 rounded-lg hover:bg-opacity-80 transition"
        >
          Portfolio
        </a>
      </nav>

      {/* Mobile Nav */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 bg-primary text-white transform ${
          toggle ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-30 p-6`}
      >
        <button onClick={closeNav} className="absolute top-4 right-6">
          <AiOutlineClose size={30} className="text-accent" />
        </button>
        <ul className="flex flex-col space-y-6 mt-10 text-lg">
          {["About", "Skills", "Pictures", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`/#${item.toLowerCase()}`}
                onClick={closeNav}
                className="hover:text-accent transition"
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <a
              href={Resume}
              target="_blank"
              rel="noreferrer"
              onClick={closeNav}
              className="bg-accent px-4 py-2 rounded-lg hover:bg-opacity-80 transition"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>

      {/* Toggle Button */}
      <button onClick={handleToggle} className="md:hidden">
        {!toggle ? (
          <AiOutlineMenu size={32} className="text-accent" />
        ) : (
          <AiOutlineClose size={32} className="text-accent" />
        )}
      </button>
    </header>
  );
};

export default Header;
