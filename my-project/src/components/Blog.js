import React from "react";

const Skills = () => {
  const post = [
    {
      desc: "I've worked on JavaScript projects both independently and through web development courses.",
      title: "JavaScript",
    },
    {
      desc: "My first-year CS studies focused heavily on Scala, including courses like O1, O2, OS1, and OS2.",
      title: "Scala",
    },
    {
      desc: "During my exchange at SUTD, I built a game from scratch in a diverse team using C#.",
      title: "C#",
    },
    {
      desc: "I developed a Web3 marketplace using Ethereum and React as part of a blockchain course at SUTD.",
      title: "React",
    },
    {
      desc: "As a board member of Aalto Tennis, I organized coaching and balanced responsibilities with studies.",
      title: "Aalto Tennis",
    },
    {
      desc: "I completed my Bachelor's degree in 2024, focusing on low-latency live streaming protocols in my thesis.",
      title: "Bachelor's Degree",
    },
  ];

  return (
    <section className="bg-primary text-white px-6 py-32" id="skills">
      <div className="container mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-white text-4xl font-bold mb-6 border-b-4 w-fit border-accent pb-2">
            Experience
          </h2>
          <p className="text-white text-lg">
            Some of the programming languages and skills I have experience with.
          </p>
        </div>
      </div>

      <div className="container mx-auto grid md:grid-cols-2 gap-6 mt-10">
        {post.map((item, index) => (
          <div
            key={index}
            className="border border-accent rounded-lg p-6 shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
            <p className="bg-secondary text-white p-4 rounded-lg">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
