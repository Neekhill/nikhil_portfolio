import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero
        title="HEY, I'M NIKHIL"
        desc=" A Software Engineer building Full Stack Websites and Web Applications
          that lead to the success of the overall product."
        btnTitle="PROJECTS"
      />
      <AboutMe />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
