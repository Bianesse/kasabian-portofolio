const backEndFramework = () => {

    const backEndFramework = [
        { name: "Laravel", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },

    ]

    return(
        <>  
        {backEndFramework.map((skill, index) => (
          <div key={index} className="w-full lg:w-3/4 mx-auto py-10 px-8" data-aos="fade-right">
            <img src={skill.image} alt={skill.name} className="hover:rotate-6" />
            <h1 className="text-md text-center text-primary-white font-semibold pt-2">{skill.name}</h1>
          </div>
        ))}
        </>
    )
}

export default backEndFramework