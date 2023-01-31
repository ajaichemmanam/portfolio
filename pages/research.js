import { AcademicCapIcon } from "@heroicons/react/solid";
import Layout from "../components/layout";
import Head from "next/head";
import Image from "next/image";
var research_projects = [
  {
    title:
      "Detecting Anomalies in Power Consumption of an Internet of Things Network Using Statistical Techniques",
    subtitle: "Edwin Jose, Ajai John Chemmanam, Bijoy A. Jose, Asif Mooppan",
    description:
      "Published in Artificial Intelligence Driven Circuits and Systems",
    image:
      "/static/researchImages/artificial_intelligence_driven_circuits_and_systems.png",
    objectPosition: "center",
    objectFit:"fill",
    link: "https://link.springer.com/chapter/10.1007/978-981-16-6940-8_13",
  },
  {
    title: "Book Chapter: Joint Learning for Multi Tasking Models",
    subtitle: "Ajai John Chemmanam, Bijoy A. Jose",
    description:
      "Responsible Data Science. Lecture Notes in Electrical Engineering, vol 940. Springer, Singapore",
    image: "/static/researchImages/responsibledatascience.jpg",
    objectPosition: "center",
    objectFit:"fill",
    link: "https://doi.org/10.1007/978-981-19-4453-6_11",
  },
  {
    title: "Joint Learning for Multi Tasking Models",
    subtitle: "Ajai John Chemmanam, Bijoy A. Jose",
    description:
      "Published in International Conference on Data Science and Engineering (ICDSE 2021), IIT Patna",
    image: "/static/researchImages/joint_learning.png",
    objectFit:"cover",
    objectPosition: "top",
    link: "#",
  },
  {
    title: "A multi tasking model for Object Detection, Image Segmentation and Keypoint Estimation tasks",
    subtitle: "Ajai John Chemmanam, Bijoy A. Jose, Asif Mooppan",
    description:
      "Published in Journal of Information Science and Engineering (JISE)",
    image: "/static/researchImages/jise_multitasking.png",
    objectFit:"cover",
    objectPosition: "top",
    link: "https://www.airitilibrary.com/Publication/alDetailedMesh?docid=10162364-202305-202212270003-202212270003-549-560",
  },
  {
    title: "Improved multi object tracking with Locality Sensitive Hashing",
    subtitle: "Ajai John Chemmanam, Bijoy A. Jose, Asif Moopan",
    description: "Available in Elsevier SSRN",
    image: "/static/researchImages/lsh.png",
    objectPosition: "top",
    link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4070391",
  },
  {
    title: "Fused Features for No Reference Image Quality Assessment",
    subtitle: "Ajai John Chemmanam, Shahanaz N., Bijoy A. Jose",
    description: "Published in Taylor & Francis: The Imaging Science Journal",
    image: "/static/researchImages/niqe.png",
    objectPosition: "top",
    link: "https://www.tandfonline.com/doi/abs/10.1080/13682199.2023.2167267",
  },
  {
    title:
      "Face Tracking Robot testbed for Performance Assessment of Machine Learning Techniques",
    subtitle:
      "P.B. Nithin, Albert Francis, Ajai John Chemmanam, Bijoy A. Jose, Jimson Mathew",
    description:
      "Published in: 2019 7th International Conference on Smart Computing & Communications (ICSCC)",
    image: "/static/researchImages/Face_Tracking_Robot_IEEE.png",
    objectPosition: "top",
    link: "https://ieeexplore.ieee.org/abstract/document/8843628",
  },
  {
    title: "Construction Safety Surveillance Using Machine Learning",
    subtitle:
      "Ruksin Kamal, Ajai John Chemmanam, Bijoy A. Jose, Sunil Mathews, Eldho Varghese",
    description:
      "Published in: 2020 International Symposium on Networks, Computers and Communications (ISNCC)",
    image: "/static/researchImages/construction_safety.png",
    objectPosition: "top",
    link: "https://ieeexplore.ieee.org/abstract/document/9297198",
  },
  {
    title: "Portable E-voting decision system",
    subtitle:
      "Ajai J. Chemmanam, S. Sreelekshmi, K. Salmanul Faris, M. Vasu Sairam, Bijoy A. Jose",
    description:
      "Published in: 2017 International Conference on Computer Communication and Informatics (ICCCI)",
    image: "/static/researchImages/portable_evoting.png",
    objectPosition: "top",
    link: "https://ieeexplore.ieee.org/abstract/document/8117785",
  },
  {
    title:
      "Interactive Robotic Testbed for Performance Assessment of Machine Learning based Computer Vision Techniques",
    subtitle:
      "NITHIN P. B., ALBERT FRANCIS R., AJAI JOHN CHEMMANAM, BIJOY A. JOSE AND JIMSON MATHEW",
    description:
      "Published in: Journal of Information Science and Engineering, Vol. 36 No. 5, pp. 1055-1067",
    image: "/static/researchImages/jise_face_tracking.png",
    objectPosition: "top",
    link: "https://jise.iis.sinica.edu.tw/JISESearch/pages/View/PaperView.jsf?keyId=176_2358",
  },
];

export function ResearchView() {
  return (
    <section
      id="research_projects"
      className="text-gray-400 bg-gray-900 body-font"
    >
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <AcademicCapIcon className="mx-auto inline-block w-20 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            My Research Contributions
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Achievements: Prime Minister's Fellowship for Doctoral Research in
            October 2020.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {research_projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4"
            >
              <div className="flex relative h-72">
                <div className="absolute inset-0 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title + " gallery"}
                    fill={true}
                    style={{
                      objectFit: project.objectFit ? project.objectFit : "cover",
                      objectPosition: project.objectPosition
                    }}
                  />
                </div>
                {/* <img
                  alt="gallery"
                  className={
                    "absolute inset-0 w-full h-full " + project.imageclass
                  }
                  src={project.image}
                /> */}
                <div className="px-8 py-10 relative z-8 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Research() {
  return (
    <div className="App">
      <Layout>
        <Head>
          <title>Research - Ajai Chemmanam</title>
          <meta
            name="description"
            content={`Discusses research findings published by Ajai Chemmanam`}
          />
          <meta property="og:title" content={`Research - Ajai Chemmanam`} />
          <meta
            property="og:description"
            content={`Learn more about research contributions by Ajai Chemmanam`}
          />
          <meta
            property="og:url"
            content={`https://ajaichemmanam.vercel.app/research`}
          />
          <meta property="og:type" content="website" />
        </Head>
        <ResearchView />
      </Layout>
    </div>
  );
}
