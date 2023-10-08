import About from "../components/sections/About";

import ProjectsView from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import Testimonials from "../components/sections/Testimonials";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <div className="App">
      <About />
      <ProjectsView />
      <Skills />
      <Testimonials />
      <Contact />
    </div>
  );
}
