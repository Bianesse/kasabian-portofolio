const frontEnd = () => {
    const frontEnd = [
        { name: "HTML", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg" },
        { name: "CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg" },
        { name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" },
        { name: "TypeScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg" },
      ];

      return (
        <>  
        {frontEnd.map((skill, index) => (
          <div key={index} className="w-full lg:w-3/4 mx-auto py-10 px-8" data-aos="fade-right">
            <img src={skill.image} alt={skill.name} className="hover:rotate-6" />
            <h1 className="text-md text-center text-primary-white font-semibold pt-2">{skill.name}</h1>
          </div>
        ))}
        </>
      )
}

export default frontEnd