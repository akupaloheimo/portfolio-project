import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Resume from "../assets/CV_Aku_Paloheimo.docx.pdf"


const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  const closeNav = () => setToggle(false);

  return (
    <header className="flex justify-between px-5 py-2 bg-primary text-white fixed w-full z-10">
      <a href="/#about" className="logo text-2xl font-bold text-accent">
        Aku
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex">
          <li>
            <a href="/#about" className="no-underline hover:underline font-bold">About</a>
          </li>
          <li>
            <a href="/#blog" className="no-underline hover:underline font-bold">Skills</a>
          </li>
          <li>
            <a href="/#projects" className="no-underline hover:underline font-bold">Pictures</a>
          </li>
          <li>
            <a href="/#contact" className="no-underline hover:underline font-bold">Contact</a>
          </li>
          <li>
            <a href={Resume} target="_blank" rel="noreferrer" className="no-underline hover:underline font-bold">
              Resume
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav
        className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}
      >
        <ul className="flex flex-col font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-#B85042 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-500 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <a href="/#about" onClick={closeNav}>About</a>
          </li>
          <li>
            <a href="/#blog" onClick={closeNav}>Skills</a>
          </li>
          <li>
            <a href="/#projects" onClick={closeNav}>Pictures</a>
          </li>
          <li>
            <a href="/#contact" onClick={closeNav}>Contact</a>
          </li>
          <li>
          <a href={Resume} target="_blank" rel="noreferrer" onClick={closeNav}>Resume</a>
          </li>
        </ul>
      </nav>

      {/* Toggle button */}
      <button onClick={handleToggle} className="block md:hidden">
        {!toggle ? <AiOutlineMenu size={30} color="#B85042"/> : <AiOutlineClose size={30} color="#B85042"/>}
      </button>
    </header>
  );
};

export default Header;