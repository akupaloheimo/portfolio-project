import React, { useState } from "react";
import kukka from "../assets/kukka.jpg";
import F1 from "../assets/F1.jpg";
import vuori from "../assets/vuori.jpg";
import temppeli from "../assets/temppeli.jpg";
import kauppa from "../assets/kauppa.jpg";
import juna from "../assets/juna.jpg";
import kaupunki from "../assets/kaupunki.jpg";
import pari from "../assets/pari.jpg";
import maisema from "../assets/maisema.jpg";

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: kukka, alt: "Flower" },
    { src: F1, alt: "F1 Race" },
    { src: vuori, alt: "Mountain" },
    { src: temppeli, alt: "Temple" },
    { src: kauppa, alt: "Market" },
    { src: juna, alt: "Train" },
    { src: kaupunki, alt: "City" },
    { src: pari, alt: "Couple" },
    { src: maisema, alt: "Landscape" },
  ];

  return (
    <section className="bg-secondary text-white px-6 py-32" id="pictures">
      <div className="container mx-auto text-center">
        <h2 className="text-white text-4xl font-bold mb-6 border-b-4 w-fit mx-auto border-accent pb-2">
          Pictures
        </h2>
        <p className="text-white text-lg mb-8">
          These are some of my favorite pictures I've taken. Click to enlarge.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="rounded-lg shadow-lg w-full hover:opacity-80 transition"
              />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative p-4">
            <button
              className="absolute top-1 right-1 bg-white text-black px-4 py-2 rounded-full text-lg"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              ✕
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] rounded-lg shadow-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
