import React, { useState } from "react";
import { AiOutlineExport } from "react-icons/ai";
import ResearchProjectInHCI from "../assets/ResearchProjectInHCI.pdf";
import probeStudy from "../assets/probeStudy.pdf";
import literatureReview from "../assets/literature_review.pdf";
import ScrapStitch from "../assets/ScrapStitch.pdf";
import GDD from "../assets/GDD.pdf";
import photo1 from "../assets/PrototypePhotos/photo1.jpg";
import photo2 from "../assets/PrototypePhotos/photo2.jpg";
import photo3 from "../assets/PrototypePhotos/photo3.jpg";
import RPinHCI from "../assets/PrototypePhotos/RPinHCI.jpg";

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const post = [
    {
      desc: "Research paper exploring how AI can support survey research in HCI. The paper was a part of the last course of my master's degree where we practiced making a CHI style research paper.",
      title: "Research Project in HCI",
      photos: [RPinHCI],
      link: ResearchProjectInHCI,
    },
    {
      desc: "Probe study on grayscale phone use and its effects on screen time and smartphone addiction. The study showed that using a grayscale phone can reduce screen time, but was not effective in reducing smartphone addiction.",
      title: "Probe Study on Grayscale Phone Use",
      photos: [],
      link: probeStudy,
    },
    {
      desc: "Literature review on greenwashing in UI design and the current research gap in the field. The review highlights the need for more research on how to design interfaces without misleading users.",
      title: "Literature Review on Greenwashing in UI Design",
      photos: [],
      link: literatureReview,
    },
    {
      desc: "Prototype for recommending music albums based on user preferences. The prototype was built using Figma and includes interactive elements to demonstrate the user experience.",
      title: "Album Recommendation Prototype",
      photos: [photo1, photo2, photo3],
      link: "https://www.figma.com/proto/UEgjfcnAs7QjNwCaHkN6y8/Album-Recommender?node-id=1-5&page-id=0%3A1&starting-point-node-id=1%3A5&t=Buk2CDKFs3V7RGGO-1",
    },
    {
      desc: "A personal diary prototype focused on simple and reflective journaling. This prototype was designed to encourage users to reflect on their day and express their thoughts in a simple and intuitive way.",
      title: "Personal Diary Prototype",
      photos: [],
      link: ScrapStitch,
    },
    {
      desc: "Game design project focused on gameplay mechanics and user experience. Done during my exchange studies at SUTD.",
      title: "Game Design Project",
      photos: [],
      link: GDD,
    },
  ];

  return (
    <section className="bg-secondary text-white px-6 py-32" id="pictures">
      <div>
        <h2 className="text-white text-4xl font-bold mb-6 border-b-4 w-fit border-accent pb-2">
          Portfolio
        </h2>

        <p className="text-white text-lg">
          Here you can find some of my software development, research, and
          design projects.
        </p>
        <p className="text-white text-lg">
          You can also find more of my projects on my{" "}
          <a
            href="https://github.com/akupaloheimo"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <AiOutlineExport className="inline ml-1" />
        </p>
      </div>

      <div className="container mx-auto grid md:grid-cols-2 gap-6 mt-10">
        {post.map((item, index) => (
          <div
            key={index}
            className="experience-box border border-accent p-6 shadow-lg bg-secondary flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>

              <p className="bg-secondary text-white rounded-lg mb-4">
                {item.desc}
              </p>

              {item.photos.length > 0 && (
                <div className="flex flex-wrap gap-4 mt-4">
                  {item.photos.map((photo, idx) => (
                    <img
                      key={idx}
                      src={photo}
                      alt={`${item.title} ${idx + 1}`}
                      onClick={() => setSelectedImage(photo)}
                      className="w-40 h-40 object-cover rounded-lg border border-accent cursor-pointer transition-transform duration-300 hover:scale-105"
                    />
                  ))}
                </div>
              )}
            </div>

            {item.link && (
              <div className="mt-6">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  Link <AiOutlineExport className="ml-1" />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Enlarged project"
            className="max-w-full max-h-full rounded-xl shadow-2xl"
          />
        </div>
      )}
    </section>
  );
};

export default Projects;
