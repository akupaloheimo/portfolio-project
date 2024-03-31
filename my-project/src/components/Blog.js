import React from "react";

const Blog = () => {

  const post = [
    {
      desc: "I have done this project on my own time and a few web related applications using Javascript relating to some school courses.",
      title: "JavaScript",
    },
    {
      desc: "The first year of Computer Science studies we were learning Scala, courses like O1, O2, OS1, and OS2 used only Scala.",
      title: "Scala",
    },
    {
      desc: "I've done a game development course while I was on exchange in Singapore University of Technology and Design. You can see one of the games that we made in my GitHub. We also made a game from ground up in a group of multitalented people.",
      title: "C#",
    },
    {
      desc: "While on exchange in Singapore (SUTD) I did a curse on blockchains and web3 applications. On that course we also had a group project where we made a web3 application online, i had to learn React for that project. The application was a marketplace where you could use Etherium to buy goods in a safe manner.",
      title: "React",
    },
  ];

  return (
    <section className="bg-primary text-white px-5 py-32" id="blog">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-fit border-[#B85042] pb-2">
            Languages
          </h2>

          <p className="pb-5">Some of the programming languages I know.</p>
        </div>

        <div></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-2 gap-10">
        {post.map((item) => {
          return (
            <div className="border-2 rounded p-5">
              <h3 className="py-5 text-2xl">{item.title}</h3>
              <p className="bg-accent rounded text-white px-6 py-3">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Blog;