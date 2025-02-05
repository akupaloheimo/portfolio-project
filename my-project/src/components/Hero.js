import React from "react";
import Aalto from "../assets/aalto_university.png";
import { AiOutlineGithub, AiFillLinkedin, AiFillPhone } from "react-icons/ai";

const Hero = () => {
  return (
    <section className="bg-hero text-white py-32 px-6">
      <div className="container mx-auto grid md:grid-cols-2 items-center">
        {/* Left Side - Text */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl lg:text-6xl font-semibold leading-tight">
            Hi, <br /> My name is{" "}
            <span className="font-bold">
              <a href="/#about">Aku</a>
            </span>{" "}
            <br />I am a Computer Science student at
          </h1>

          <a href="https://www.aalto.fi/fi" className="inline-block mt-4">
            <img
              src={Aalto}
              alt="Aalto University"
              width="120"
              height="100"
              className=" rounded mx-auto md:mx-0"
            />
          </a>

          <p className="bg-secondary rounded px-5 py-5 text-xl max-w-lg mx-auto md:mx-0">
            I am eager to learn more about software development.
            {/* Social Links */}
            <div className="flex justify-center md:justify-start space-x-6 mt-6">
              <a
                href="https://github.com/akupaloheimo"
                className="text-black hover:text-white transition"
              >
                <AiOutlineGithub size={44} />
              </a>
              <a
                href="https://www.linkedin.com/in/aku-paloheimo-315aa019b"
                className="text-black hover:text-white transition"
              >
                <AiFillLinkedin size={44} />
              </a>
              <a
                href="/#contact"
                className="text-black hover:text-white transition"
              >
                <AiFillPhone size={44} />
              </a>
            </div>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
