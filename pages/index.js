import About from "./about";
import Contact from "./contact";
import Skills from "./skills";
import Testimonials from "./testimonials";
import Projects from "./projects";
import HomeNavbar from "../components/homenavbar";
import Layout from "../components/layout";

export default function Home() {
  return (
    <div className="App">
      <Layout>
        <HomeNavbar />
        <About />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
      </Layout>
    </div>
  );
}
