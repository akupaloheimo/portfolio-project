import React from "react";
import HeroImg from "../assets/profile/Hero.jpg";
import Aalto from "../assets/aalto_university.png"

import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiFillPhone,
} from "react-icons/ai";

const Hero = () => {
  return (
    <section className="bg-primary px-5 text-white py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl">
            Hi, <br />My name is <span className="text-accent">Aku</span> <br />
            Computer Science student
          </h1>
          <img
            src={Aalto}
            alt="logo"
            width="120"
            height="100"
          />

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

        <div className="hero-img">
          <img
            src={HeroImg}
            alt="coding illustration"
            className="lgw-[80%] ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;