import React from "react";

const TechStack = () => {
  const frontEnd = [
    { name: "HTML", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg" },
    { name: "CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg" },
    { name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" },
    { name: "TypeScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg" },
  ];

  const frontEndFramework = [
    { name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Bootstrap", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
    { name: "Tailwind", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  ];

  return (
    <div className="w-full border-2 md:w-3/4 mx-auto py-20 px-8">
      <h1 className="text-2xl md:text-3xl font-bold text-primary-white">Front End</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {frontEnd.map((skill, index) => (
          <div key={index} className="w-full md:w-3/4 mx-auto py-10 px-8">
            <img src={skill.image} alt={skill.name} />
            <h1 className="text-md text-center text-primary-white font-semibold pt-2">{skill.name}</h1>
          </div>
        ))}
      </div>
      <hr className="w-4/5 mx-auto my-5" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {frontEndFramework.map((skill, index) => (
          <div key={index} className="w-full md:w-3/4 mx-auto py-10 px-8">
            <img src={skill.image} alt={skill.name} />
            <h1 className="text-md text-center text-primary-white font-semibold pt-2">{skill.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
