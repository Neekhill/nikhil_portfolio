import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

import ProjectList from "./components/ProjectList";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Hero
          title="HEY, I'M NIKHIL"
          desc=" A Software Engineer building Full Stack Websites and Web Applications
          that lead to the success of the overall product."
          btnTitle="PROJECTS"
        />
        <AboutMe />
        <ProjectList />
        <ContactMe />
        <Footer />
      </Router>
    </>
  );
}

export default App;
