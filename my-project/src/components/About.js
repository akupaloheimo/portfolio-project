import React from "react";
import HeroImg from "../assets/profile/Hero.jpg";

const About = () => {
  return (
    <section className="bg-secondary text-white px-6 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center gap-12">
        <div className="about-img flex justify-center">
          <img
            src={HeroImg}
            alt="Profile"
            className="rounded-lg shadow-lg w-full max-w-sm"
          />
        </div>

        <div className="about-info">
          <h2 className="text-4xl font-bold mb-6 border-b-4 w-fit border-accent pb-2">
            About Me
          </h2>

          <p className="pb-4 text-lg">
            Hi, my name is <span className="font-semibold">Aku Paloheimo</span>,
            and I am a Computer Science student at Aalto University.
          </p>
          <p className="pb-4 text-lg">
            I am very interested in software engineering and have a strong
            passion for learning more. My technical skills include C, C#,
            JavaScript, Python, React, SQL, and Scala. You can explore my
            projects on my{" "}
            <a
              href="https://github.com/akupaloheimo"
              className="underline hover:text-accent font-bold"
            >
              GitHub
            </a>
            .
          </p>
          <p className="pb-4 text-lg">
            I have experience as a mathematics teacher and have been an active
            board member of Aalto Tennis. Additionally, I studied abroad at the
            Singapore University of Technology and Design (SUTD).
          </p>
          <p>
            In my free time, I enjoy photography, which I also use to showcase
            my web development skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
