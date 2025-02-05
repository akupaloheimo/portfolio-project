import React from "react";

const Contact = () => {
  return (
    <section className="bg-hero px-5 py-32" id="contact">
      <div className="text-center md:w-[60%] mx-auto text-white">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-fit mx-auto border-[#B85042] pb-2">
          Contact Me
        </h2>
        <p>
          Here are my contact info. Feel free to email me or call me about
          summer jobs or internships.
        </p>

        <p className="py-2">
          <span className="font-bold">Email:</span> aku.paloheimo@gmail.com
        </p>
        <p className="py-2">
          <span className="font-bold">Phone:</span> +358 40 1736644
        </p>
      </div>
    </section>
  );
};

export default Contact;
