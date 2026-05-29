import "./App.css";
import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/Header.js";
import About from "./components/About.js";
import Projects from "./components/Projects.js";
import Skills from "./components/Blog.js";
import Footer from "./components/Footer.js";

function App() {
  const layerRef = useRef(null);

  useEffect(() => {
    const layer = layerRef.current;

    const ua = layer.querySelector(".ua");
    const size = layer.querySelector(".size");
    const coor = layer.querySelector(".coor");
    const scrollText = layer.querySelector(".scroll");
    const timer = layer.querySelector(".timer");
    const click = layer.querySelector(".click");

    ua.textContent = navigator.userAgent;

    function updateSize() {
      size.textContent = `${window.innerWidth}px ${window.innerHeight}px`;
    }

    function handleMouseMove(e) {
      coor.textContent = `${e.clientX}px, ${e.clientY}px`;
    }

    function handleScroll() {
      scrollText.textContent = `${Math.floor(window.scrollY)}px`;

      layer.style.top = `${270 - window.scrollY * 0.1}px`;
    }

    function handleClick(e) {
      click.textContent = e.target.className || e.target.tagName;
    }

    updateSize();

    window.addEventListener("resize", updateSize);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClick);

    const sessionStart = Date.now();

    const interval = setInterval(() => {
      const now = new Date();

      const realtime = now.toLocaleTimeString();

      const elapsed = Math.floor((Date.now() - sessionStart) / 1000);

      const h = String(Math.floor(elapsed / 3600)).padStart(2, "0");

      const m = String(Math.floor((elapsed % 3600) / 60)).padStart(2, "0");

      const s = String(elapsed % 60).padStart(2, "0");

      timer.textContent = `${realtime} | session ${h}:${m}:${s}`;
    }, 1000);

    return () => {
      window.removeEventListener("resize", updateSize);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClick);

      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="app">
        <Router>
          <NavBar />

          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Skills />} />
            <Route path="/portfolio" element={<Projects />} />
            <Route path="/blog" element={<Skills />} />
          </Routes>
        </Router>

        <div className="data-layer" ref={layerRef}>
          <span className="ua"></span>
          <span className="size"></span>
          <span className="coor"></span>
          <span className="scroll"></span>
          <span className="timer"></span>
          <span className="click"></span>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
