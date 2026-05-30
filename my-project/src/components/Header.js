import React, { useState } from "react";
import Resume from "../assets/CV.pdf";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-white fixed w-full z-20 shadow-lg">
      <div className="flex justify-between items-center px-4 md:px-9 py-6">
        <a href="/" className="text-xl">
          Aku Paloheimo
        </a>

        <nav className="hidden md:flex space-x-6 items-center">
          {["About", "Experience", "Portfolio"].map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase()}`}
              className="font-semibold text-xl hover:text-accent transition-colors"
            >
              {item}
            </a>
          ))}

          <a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-xl hover:text-accent transition-colors"
          >
            CV
          </a>
        </nav>

        <button
          className="md:hidden text-3xl "
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden flex flex-col px-4 pb-4 space-y-4 bg-primary">
          {["About", "Experience", "Portfolio"].map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase()}`}
              className="font-semibold text-xl hover:text-accent transition-colors"
            >
              {item}
            </a>
          ))}

          <a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-xl hover:text-accent transition-colors"
          >
            CV
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
