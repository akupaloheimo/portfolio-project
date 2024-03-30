import React from "react";

import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiFillPhone,
} from "react-icons/ai";

const Blog = () => {
  const showItemBtn = document.getElementById('showItem');
  const modal = document.getElementById('modal');

  function showModal() {
    modal.classList.add('active');
  }

  const post = [
    {
      img: "",
      title: "JavaScript",
    },
    {
      img: "",
      title: "Scala",
    },
    {
      img: "",
      title: "C#",
    },
    {
      img: "",
      title: "React",
    },
  ];

  return (
    <section className="bg-primary text-white px-5 py-32" id="blog">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[100px] border-indigo-600 pb-2">
            Skills
          </h2>

          <p className="pb-5">Some of my best skills.</p>
        </div>

        <div></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-2 gap-10">
        {post.map((item) => {
          return (
            <div>
              <img src={item.img} alt={item.title} />
              <h3 className="py-5 text-2xl">{item.title}</h3>
              <a
                href={item.url}
                className="block relative btn bg-accent  border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent"
                onclick="showModal(); return false;"
              >
                Read More
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Blog;