import React from "react";
import kukka from "../assets/kukka.JPG";
import F1 from "../assets/F1.JPG";
import vuori from "../assets/vuori.JPG";
import temppeli from "../assets/temppeli.JPG";
import kauppa from "../assets/kauppa.JPG";
import juna from "../assets/juna.JPG";
import kaupunki from "../assets/kaupunki.JPG";
import pari from "../assets/pari.JPG";
import maisema from "../assets/maisema.JPG";


const Projects = () => {
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
      <div className="pl-20"> 
      <div class="relative w-full h-full flex gap-10 snap-x snap-mandatory overflow-x-auto pb14 py-2">
        <div class="snap-center shrink-0">
          <img class="shrink-0 w-80 h-100 rounded-lg shadow-xl bg-white" src={kukka} alt="coding illustration"/>
        </div>
        <div class="snap-center shrink-0">
          <img class="shrink-0 w-80 h-100 rounded-lg shadow-xl bg-white" src={F1} alt="coding illustration"/>
        </div>
        <div class="snap-center shrink-0">
          <img class="shrink-0 w-80 h-100 rounded-lg shadow-xl bg-white" src={vuori} alt="coding illustration"/>
        </div>
        <div class="snap-center shrink-0">
          <img class="shrink-0 w-80 h-100 rounded-lg shadow-xl bg-white" src={kauppa} alt="coding illustration"/>
        </div>
        <div class="snap-center shrink-0">
          <img class="shrink-0 w-80 h-100 rounded-lg shadow-xl bg-white" src={temppeli} alt="coding illustration"/>
        </div>
        <div class="snap-center shrink-0">
          <img class="shrink-0 w-80 h-100 rounded-lg shadow-xl bg-white" src={juna} alt="coding illustration"/>
        </div>
        <div class="snap-center shrink-0">
          <img class="shrink-0 w-80 h-100 rounded-lg shadow-xl bg-white" src={kaupunki} alt="coding illustration"/>
        </div>
        <div class="snap-center shrink-0">
          <img class="shrink-0 w-80 h-100 rounded-lg shadow-xl bg-white" src={pari} alt="coding illustration"/>
        </div>
        <div class="snap-center shrink-0">
          <img class="shrink-0 w-80 h-100 rounded-lg shadow-xl bg-white" src={maisema} alt="coding illustration"/>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Projects;