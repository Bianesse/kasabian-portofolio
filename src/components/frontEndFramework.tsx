const frontEndFramework = () => {
    const frontEndFramework = [
        { name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "JQuery", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-plain.svg" },
        { name: "Bootstrap", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
        { name: "Tailwind", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      ];

      return (
        <>
        {frontEndFramework.map((skill, index) => (
          <div key={index} className="w-full lg:w-3/4 mx-auto py-10 px-8" data-aos="fade-right">
            <img src={skill.image} alt={skill.name} className="hover:rotate-6" />
            <h1 className="text-md text-center text-primary-white font-semibold pt-2">{skill.name}</h1>
          </div>
        ))}
        </>
      )
}

export default frontEndFramework
