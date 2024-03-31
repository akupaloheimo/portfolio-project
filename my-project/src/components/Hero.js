import React from "react";
import Aalto from "../assets/aalto_university.png"

import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiFillPhone,
} from "react-icons/ai";

const Hero = () => {
  return (
    <section className="bg-primary px-5 text-white py-40">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl">
            Hi, <br />My name is <span className="text-accent"><a href="/#about">Aku</a></span> <br />
            I am a Computer Science student at 
          </h1>
          <a href="https://www.aalto.fi/fi">
          <img
            src={Aalto}
            alt="logo"
            width="120"
            height="100"
          />
          </a>

          <p className="py-5">
            I am eager to learn more about software development
          </p>

          <div className="flex py-5 ">
            <a
              href="https://github.com/akupaloheimo"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineGithub size={40} />{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/aku-paloheimo-315aa019b"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiFillLinkedin size={40} />{" "}
            </a>
            <a
              href="/#contact"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiFillPhone size={40} />{" "}
            </a>
          </div>

          
        </div>

        
      </div>
    </section>
  );
};

export default Hero;