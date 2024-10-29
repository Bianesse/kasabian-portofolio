import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TechStack from "../components/techstack.tsx";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className="bg-primary-black pt-10" id="skills">
      <div className="w-full md:w-3/4 mx-auto py-20 px-8">
        <div className="w-min mx-auto text-center">
          <h1
            className="text-5xl md:text-8xl font-bold text-primary-white"
            data-aos="zoom-in"
          >
            Skills
          </h1>
          <h3
            className="text-sm md:text-lg text-primary-blue font-semibold"
            data-aos="zoom-in"
          >
            My Tech Stacks
          </h3>
        </div>
        <TechStack />
      </div>
    </div>
  );
};

export default Skills;
