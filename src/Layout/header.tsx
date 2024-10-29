import MyImage from "../components/myimage.tsx";

const Header = () => {
  return (
    <>
      <div className="bg-primary-black mt-16" id="home">
        <div className="text-start w-full md:w-3/4 mx-auto py-5 md:py-20 px-8">
          <div className="flex flex-col-reverse lg:flex-row">
            <div className="w-full h-min md:w-2/3 md:py-20 mt-5 md:mt-0 text-center md:text-left">
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

            <div className="w-full lg:w-1/2 mt-8 ml-4 md:mt-0">
              <MyImage />
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" className="-mt-1" viewBox="0 0 1440 320">
        <path
          fill="#021526"
          fill-opacity="1"
          d="M0,224L30,218.7C60,213,120,203,180,218.7C240,235,300,277,360,277.3C420,277,480,235,540,229.3C600,224,660,256,720,266.7C780,277,840,267,900,261.3C960,256,1020,256,1080,240C1140,224,1200,192,1260,197.3C1320,203,1380,245,1410,266.7L1440,288L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
        ></path>
      </svg>
    </>
  );
};

export default Header;
