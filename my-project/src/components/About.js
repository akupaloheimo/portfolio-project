import React from "react";
import AboutImg from "../assets/profile/aku_kirifuri-03.jpg";

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-img">
          <img 
            src={AboutImg}
            alt="coding illustration"
            width="1000"
            height="1000"
          />
        </div>

        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-fit border-[#B85042] pb-2">
            About Me
          </h2>

          <p className="pb-5">
            Hi, My Name Is Aku Paloheimo and I am a Computer Sceince Student at Aalto University
            
          </p>
          <p className="pb-5">
            I am very interested about software engineering and have a lot of energy to learn more about this field.
            I posses skills in C, C#, JavaScript, Python, React, SQL and Scala. You can see examples of thees skills from my <span><a href="https://github.com/akupaloheimo" className="underline hover:font-bold">github</a></span>.
          </p>

          <p>
            I have experience as a mathematics teacher and 
            I have been an active board member of Aalto tennis
          </p>

          <p>
            In my spare time I have a passion for photography.
            I wanted to use my photography hobby to display my development skills.
          </p>
        </div>

        
      </div>
    </section>
  );
};

export default About;