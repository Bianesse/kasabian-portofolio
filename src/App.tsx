import Header from "./Layout/header.tsx";
import Navbar from "./components/navbar.tsx";
import AboutMe from "./Layout/aboutme.tsx";
import Skills from "./Layout/skills.tsx";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <Skills />
    </>
  );
}

export default App;
