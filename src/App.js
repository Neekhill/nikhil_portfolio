import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero
        title="HEY, I'M NIKHIL YADAV"
        desc=" A Software Engineer building Full Stack Websites and Web Applications
          that lead to the success of the overall product."
        btnTitle="PROJECTS"
      />
      <AboutMe />
      <ContactMe />
    </>
  );
}

export default App;
