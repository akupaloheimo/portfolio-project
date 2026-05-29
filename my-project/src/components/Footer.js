import React from "react";

const Footer = () => {
  return (
    <>
      <div className="py-4 text-center bg-primary text-white position-fixed w-full bottom-0 z-10 pt-32">
        {" "}
        &copy; Copyright 2026 Aku Paloheimo.
      </div>
      <div className="pb-4 text-center bg-primary text-white position-fixed w-full bottom-0 z-10">
        Last Updated: {new Date().toLocaleDateString()}
      </div>
    </>
  );
};

export default Footer;
