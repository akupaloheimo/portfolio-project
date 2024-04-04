import React, {useState} from "react";
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
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const openImage = (image) => {
    if (fullscreenImage === image) {
      setFullscreenImage(null);
    } else {
      setFullscreenImage(image);
    }
  };

  return (
    <section className="bg-primary text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-fit border-[#B85042] pb-2">
            Pictures
          </h2>

          <p className="pb-5">
            These are some of my favorite pictures I've taken.
          </p>
        </div>

        <div className="about-img"></div>
      </div> 
      <div className="pl-5 mx-auto md:justify-between"> 
      <div class="relative w-full h-full flex gap-10 snap-x snap-mandatory overflow-x-auto pb14 py-2">
        <div class="snap-center shrink-0">
          <button onClick={() => openImage(kukka)}>
          <img class="shrink-0 w-80 h-100 rounded-lg shadow-xl bg-white" src={kukka} alt="coding illustration"/>
          </button>
        </div>
        <div class="snap-center shrink-0">
          <button onClick={() => openImage(F1)}>
          <img class="shrink-0 w-80 h-100 rounded-lg shadow-xl bg-white" src={F1} alt="coding illustration"/>
          </button>
        </div>
        <div class="snap-center shrink-0">
          <button onClick={() => openImage(vuori)}>
          <img class="shrink-0 w-80 h-100 rounded-lg shadow-xl bg-white" src={vuori} alt="coding illustration"/>
          </button>
        </div>
        <div class="snap-center shrink-0">
          <button onClick={() => openImage(kauppa)}>
          <img class="shrink-0 w-80 h-100 rounded-lg shadow-xl bg-white" src={kauppa} alt="coding illustration"/>
          </button>
        </div>
        <div class="snap-center shrink-0">
          <button onClick={() => openImage(temppeli)}>
          <img class="shrink-0 w-80 h-100 rounded-lg shadow-xl bg-white" src={temppeli} alt="coding illustration"/>
          </button>
        </div>
        <div class="snap-center shrink-0">
          <button onClick={() => openImage(juna)}>
          <img class="shrink-0 w-80 h-100 rounded-lg shadow-xl bg-white" src={juna} alt="coding illustration"/>
          </button>
        </div>
        <div class="snap-center shrink-0">
          <button onClick={() => openImage(kaupunki)}>
          <img class="shrink-0 w-80 h-100 rounded-lg shadow-xl bg-white" src={kaupunki} alt="coding illustration"/>
          </button>
        </div>
        <div class="snap-center shrink-0">
          <button onClick={() => openImage(pari)}>
          <img class="shrink-0 w-80 h-100 rounded-lg shadow-xl bg-white" src={pari} alt="coding illustration"/>
          </button>
        </div>
        <div class="snap-center shrink-0">
          <button onClick={() => openImage(maisema)}>
          <img class="shrink-0 w-80 h-100 rounded-lg shadow-xl bg-white" src={maisema} alt="coding illustration"/>
          </button>
        </div>
      </div>
    </div>
    {fullscreenImage && (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50">
        <img
          className="max-h-full max-w-full"
          src={fullscreenImage}
          alt="fullscreen"
          onClick={() => setFullscreenImage(null)}
        />
      </div>
    )}
    </section>
  );
};

export default Projects;