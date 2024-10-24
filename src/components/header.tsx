import MyImage from "../components/myimage.tsx";

const Header = () => {
  return (
    <div className="bg-primary-black mt-16" id="home">
      <div className="text-start w-full md:w-3/4 mx-auto py-5 md:py-20 px-8">
        <div className="flex flex-col-reverse md:flex-row">
          <div className="w-full md:w-2/3 md:py-20 mt-5 md:mt-0 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-white">
              I'm Kasabian
            </h1>
            <h2 className="text-2xl md:text-4xl text-primary-blue font-semibold opacity-90">
              Web Developer,
            </h2>
            <h2 className="text-xl md:text-3xl text-primary-blue font-semibold opacity-80">
              Fullstack Developer,
            </h2>
            <h2 className="text-lg md:text-2xl text-primary-blue font-semibold opacity-70">
              Thinking Enthusiast,
            </h2>
          </div>

          <div className="w-full md:w-1/2 mt-8 ml-4 md:mt-0">
            <MyImage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
