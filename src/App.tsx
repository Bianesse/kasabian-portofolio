import Header from "./Layout/header.tsx";
import Navbar from "./components/navbar.tsx";
import AboutMe from "./Layout/aboutme.tsx";
import Skills from "./Layout/skills.tsx";
import ContactMe from "./Layout/contactme.tsx";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <Skills />
      <ContactMe />
    </>
  );
}

export default App;
