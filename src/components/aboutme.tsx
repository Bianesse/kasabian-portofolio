import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutMe = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className="bg-primary-black pt-10" id="about">
      <div className="w-full text-end md:w-3/4 mx-auto py-20 px-8">
        <h1
          className="text-5xl md:text-8xl font-bold text-primary-white"
          data-aos="fade-right"
        >
          About Me
        </h1>
        <h2
          className="text-md md:text-md text-primary-white font-semibold w-3/4 md:w-1/2 ml-auto"
          data-aos="fade-right"
        >
          I'm an aspiring Full Stack Developer specializing in Web Development,
          an enthusiastic thinker, and always looking for new challenges to
          learn and grow.
        </h2>
      </div>
    </div>
  );
};

export default AboutMe;
