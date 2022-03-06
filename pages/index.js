import About from "./about";
import Contact from "./contact";
import Skills from "./skills";
import Testimonials from "./testimonials";
import { ProjectsView } from "./projects";
// import HomeNavbar from "../components/homenavbar";
import Layout from "../components/layout";
import Head from "next/head";

export default function Home() {
  return (
    <div className="App">
      <Layout>
        <Head>
          <title>Home - Ajai Chemmanam</title>
          <meta
            name="description"
            content={`Get to know more about Ajai Chemmanam`}
          />
          <meta property="og:title" content={`Home - Ajai Chemmanam`} />
          <meta
            property="og:description"
            content={`Get to know more about Ajai Chemmanam`}
          />
          <meta
            property="og:url"
            content={`https://ajaichemmanam.vercel.app/`}
          />
          <meta property="og:type" content="website" />
        </Head>
        {/* <HomeNavbar /> */}
        <About />
        <ProjectsView />
        <Skills />
        <Testimonials />
        <Contact />
      </Layout>
    </div>
  );
}
