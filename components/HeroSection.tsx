import React from "react";
const HeroSection = () => {
  return (
    <section className="flex flex-col justify-center items-start py-16">
      <div className="flex flex-row items-center">
        <img
          className="max-w-none rounded-full h-20 w-20 mr-5"
          src={"/headshot.png"}
          alt="headshot"
        />
        <h1 className="text-white text-4xl lg:text-5xl sm:text-4xl font-extrabold whitespace-nowrap">
          Noel Barrera
        </h1>
      </div>
      <p className="flex text-sm text-white justify-start mt-5">
        Full-Stack Developer with a passion for creating interactive and
        responsive web applications. Music Explorer
      </p>
    </section>
  );
};

export default HeroSection;
