import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutMe = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className="bg-primary-blue" id="about">
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
      <svg xmlns="http://www.w3.org/2000/svg" className="-mb-1" viewBox="0 0 1440 320">
        <path
          fill="#021526"
          fill-opacity="1"
          d="M0,64L30,80C60,96,120,128,180,138.7C240,149,300,139,360,122.7C420,107,480,85,540,96C600,107,660,149,720,144C780,139,840,85,900,69.3C960,53,1020,75,1080,106.7C1140,139,1200,181,1260,181.3C1320,181,1380,139,1410,117.3L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default AboutMe;
