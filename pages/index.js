import About from "./about";
import Contact from "./contact";
import Skills from "./skills";
import Testimonials from "./testimonials";
import { ProjectsView } from "./projects";
import HomeNavbar from "../components/homenavbar";
import Layout from "../components/layout";

export default function Home() {
  return (
    <div className="App">
      <Layout>
        <HomeNavbar />
        <About />
        <ProjectsView />
        <Skills />
        <Testimonials />
        <Contact />
      </Layout>
    </div>
  );
}
