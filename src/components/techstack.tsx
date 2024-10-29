import { useEffect } from "react";
import FrontEnd from "./frontEnd";
import FrontEndFramework from "./frontEndFramework.tsx";
import BackEnd from "./backEnd.tsx";
import BackEndFramework from "./backEndFramework.tsx";
import AOS from "aos";
import "aos/dist/aos.css";

const TechStack = () => {
  useEffect(() => {
    AOS.init({ duration: 500, once: false });
  }, []);
  return (
    <div className="w-full md:w-3/4 mx-auto py-20 px-8">
      <h1 className="text-2xl md:text-3xl font-bold text-primary-white">
        Front End
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <FrontEnd />
      </div>
      <hr className="w-4/5 mx-auto my-5" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <FrontEndFramework />
      </div>
      <h1 className="text-2xl md:text-3xl font-bold text-primary-white">
        Back End
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <BackEnd />
      </div>
      <hr className="w-4/5 mx-auto my-5" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <BackEndFramework />
      </div>
    </div>
  );
};

export default TechStack;
