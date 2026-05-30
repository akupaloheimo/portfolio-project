import React from "react";
import HeroImg from "../assets/profile/Hero.jpg";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import aaltoLogo from "../assets/aalto_university.png";

const About = () => {
  return (
    <section
      className="bg-secondary text-white px-auto py-auto pt-24"
      id="about"
    >
      <div className="container mx-auto grid md:grid-cols-2 items-center">
        <div className="about-img flex margin-top-0 grid md:grid-cols-1 gap-6 justify-items-center">
          <img src={HeroImg} alt="Profile" className="shadow-lg max-w-lg" />
          <img
            src={aaltoLogo}
            alt="Aalto University"
            className="max-w-sm p-0 m-0"
          />
        </div>

        <div className="about-info">
          <h2 className="text-4xl font-bold mb-6 border-b-4 w-fit border-accent pb-2">
            About
          </h2>

          <p className="pb-4 text-lg">
            I am a human computer interaction student at Aalto University with a
            strong interest in software engineering and interaction design. I am
            passionate about learning and expanding my skills in these areas. My
            technical expertise includes C, C#, JavaScript, Python, React, SQL,
            and Scala. Additionally, I am proficient in using prototyping tools
            like Figma. You can explore my projects on my{" "}
            <a href="https://github.com/akupaloheimo" className="underline">
              GitHub
            </a>
            .
          </p>
          <p className="pb-4 text-lg">
            I have gained valuable experience through working as a software
            developer at Bonwal Oy. This experience has allowed me to apply my
            skills in software that people use daily. Additionally, I have
            worked as a teacher in multiple settings and have ahd the
            opportynity to teach all ages, from children to adults. These
            experiences have enhanced my communication and interpersonal skills
            .
          </p>
          <p className="pb-4 text-lg">
            I finished my bachelor's degree in 2025 and am currently pursuing a
            master's. I have also completed my exhange studies in Singapore
            University of Technology and Design (SUTD).I am eager to continue
            learning and growing in my field, and I am excited about the
            opportunities that lie ahead.
          </p>

          <h2 className="text-xl font-bold mb-6 border-b-4 w-fit border-accent pb-2 pt-10">
            Languages
          </h2>
          <p className="pb-4 text-lg">
            Finnish (Native), English (Fluent), Swedish (Basic)
          </p>
        </div>
      </div>
      <div className="text-center md:w-[60%] mx-auto text-white mt-24">
        <h2 className="text-3xl font-bold mb-5 border-b-[5px] w-fit mx-auto pb-2">
          Contact Info
        </h2>

        <p className="flex justify-center items-center gap-6 mt-6">
          <a
            href="https://github.com/akupaloheimo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition"
          >
            <AiOutlineGithub size={44} />
          </a>

          <a
            href="https://www.linkedin.com/in/aku-paloheimo-315aa019b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition"
          >
            <AiFillLinkedin size={44} />
          </a>
        </p>
      </div>
    </section>
  );
};

export default About;
