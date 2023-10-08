import ProjectsView from "../../components/sections/Projects";
export default function Projects() {
  return (
    <div className="App">
      {/* <Layout>
          <Head>
            <title>Projects - Ajai Chemmanam</title>
            <meta
              name="description"
              content={`Lists some of the projects I've worked on.`}
            />
            <meta property="og:title" content={`Projects - Ajai Chemmanam`} />
            <meta
              property="og:description"
              content={`Learn more about previous works done by Ajai Chemmanam`}
            />
            <meta
              property="og:url"
              content={`https://ajaichemmanam.vercel.app/projects`}
            />
            <meta property="og:type" content="website" />
          </Head>
        </Layout> */}
      <ProjectsView />
    </div>
  );
}
