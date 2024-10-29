const backEnd = () => {
    const backEnd = [
        { name: "PHP", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
        { name: "Go", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg" },
        { name: "MySQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
        { name: "JSON", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-plain.svg" },
        { name: "JWT", image: "./images/jwt.svg" },
    ]

    return (
        <>  
        {backEnd.map((skill, index) => (
          <div key={index} className="w-full lg:w-3/4 mx-auto py-10 px-8" data-aos="fade-right">
            <img src={skill.image} alt={skill.name} className="hover:rotate-6" />
            <h1 className="text-md text-center text-primary-white font-semibold pt-2">{skill.name}</h1>
          </div>
        ))}
        </>
      )
}

export default backEnd
