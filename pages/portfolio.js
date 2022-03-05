import { BookOpenIcon } from "@heroicons/react/solid";
import Layout from "../components/layout";

export function PortfolioView() {
  return (
    <div
      className="
      p-6
      page
      mx-auto
      max-w-5xl
      print:max-w-letter
      md:max-w-letter md:h-letter
      xsm:p-8
      sm:p-9
      md:p-16
        "
    >
      <header
        className="
            flex
            row-gap-5
            flex-row flex-wrap
            items-center
            mb-5
            md:mb-2
            border-b-2 border-opacity-50 border-gray-400
          "
      >
        {/* <div className="initials-container mr-5 text-base leading-none pb-3 pt-3 text-white bg-purple-400 font-medium px-3">
          <div className="text-center text-2xl initial">A</div>
          <div className="text-center text-2xl initial">J</div>
          <div className="text-center text-2xl initial">C</div>
        </div> */}
        <h1 className="print:text-6xl lg:text-6xl md:text-5xl mr-auto text-3xl font-semibold text-white pb-px">
          Ajai Chemmanam
        </h1>
        <h2
          id="industry-title"
          className="print:text-3xl text-green-400 font-sans self-center md:text-3xl text-2xl font-hairline pb-px"
        >
          Researcher in AI and ML
        </h2>
      </header>
      <section className="mb-10 first:mt-0" id="contact">
        <h2 className="mb-2 md:mb-0 font-bold tracking-widest text-sm2 text-white">
          CONTACT
        </h2>
        <ul className="print:flex-row flex flex-wrap flex-col sm:flex-row justify-between gap-2 list-inside pr-7">
          <li className="mt-1.5 leading-normal text-md">
            <a
              href="mailto:ajaichemmanam@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="far fa-envelope"></i>
              ajaichemmanam@gmail.com
            </a>
          </li>
          <li className="mt-1.5 leading-normal text-md">
            <a href="tel:+918129646590">
              <i className="fas fa-mobile-alt"></i>
              +91-8129646590
            </a>
          </li>
          <li className="mt-1.5 leading-normal text-md">
            <a
              href="https://www.linkedin.com/in/ajaichemmanam/"
              className="group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
              linkedin.com/ajaichemmanam
            </a>
          </li>
          <li className="mt-1.5 leading-normal text-md">
            <a
              href="https://www.github.com/ajaichemmanam"
              className="group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
              github.com/ajaichemmanam
            </a>
          </li>
        </ul>
      </section>
      <div className="grid grid-cols-3 gap-10">
        <section className="print:col-span-2 col-span-3 md:col-span-2 mt-8 first:mt-0">
          <section className="col-span-3 mt-8 first:mt-0" id="experience">
            <h2 className="mb-4 font-bold tracking-widest text-sm2 text-purple-700">
              EXPERIENCE
            </h2>
            <section className="mb-5">
              <header>
                <h3
                  id="job-title"
                  className="text-lg font-semibold text-white leading-snugish"
                >
                  AI Consultant
                  <span
                    id="company-name"
                    className="pl-4 text-white font-semibold"
                  >
                    @ Vuelogix Technologies Pvt. Ltd.
                  </span>
                </h3>
                <p
                  id="work-date-location"
                  className="leading-normal text-sm text-white mt-1"
                >
                  August 2020 – Present // Kochi, India
                </p>
              </header>
              <ul id="work-description-bullets" className="">
                <li className="mt-2.1 ml-1.5 text-sm leading-normal">
                  <span className="-ml-2 select-none">›</span>
                  Trained a variety of AI based Machine Learning models for
                  various computer vision business usecases with frameworks like
                  Tensorflow, Pytorch, Pytorch lightning, Openvino, Onnx.
                </li>
                <li className="mt-2.1 ml-1.5 text-sm leading-normal">
                  <span className="-ml-2 select-none">›</span>
                  Developed models with novel architectures and highly optimised
                  for various edge devices like Nvidia GPUS, Jetson Devices,
                  Corel Board, Raspberry Pi etc.
                </li>
                <li className="mt-2.1 ml-1.5 text-sm leading-normal">
                  <span className="-ml-2 select-none">›</span>
                  Created production ready and scalable AI products, which are
                  currently being deployed at more than 1500 sites of banking,
                  retail and logistic clients.
                </li>
                <li className="mt-2.1 ml-1.5 text-sm leading-normal">
                  <span className="-ml-2 select-none">›</span>
                  Rapid prototyping and development of Proof of Concept AI
                  solutions with streamlit/dash/react webapps.
                </li>
              </ul>
            </section>
            <section className="mb-5">
              <header>
                <h3
                  id="job-title"
                  className="text-lg font-semibold text-white leading-snugish"
                >
                  Senior Research Assistant
                  <span
                    id="company-name"
                    className="pl-4 text-white font-semibold"
                  >
                    @ C3I Center, IIT Kanpur.
                  </span>
                </h3>
                <p
                  id="work-date-location"
                  className="leading-normal text-sm text-white mt-1"
                >
                  May 2019 – July 2019 // Kanpur, India
                </p>
              </header>
              <ul id="work-description-bullets" className="">
                <li className="mt-2.1 ml-1.5 text-sm leading-normal">
                  <span className="-ml-2 select-none">›</span>
                  Trained AI models for monitoring plant growth and disease
                  identification on leaves.
                </li>
                <li className="mt-2.1 ml-1.5 text-sm leading-normal">
                  <span className="-ml-2 select-none">›</span>
                  Developed an automated hydroponics system using various IoT
                  sensors and actuators.
                </li>
                <li className="mt-2.1 ml-1.5 text-sm leading-normal">
                  <span className="-ml-2 select-none">›</span>
                  Developed webapps for visualising the results using ReactJS.
                </li>
                <li className="mt-2.1 ml-1.5 text-sm leading-normal">
                  <span className="-ml-2 select-none">›</span>
                  Studied about potential threats to neural network models and
                  potential methods to mitigate them like adversarial training
                  etc.
                </li>
              </ul>
            </section>
            <section className="mb-5">
              <header>
                <h3
                  id="job-title"
                  className="text-lg font-semibold text-white leading-snugish"
                >
                  Consultant
                  <span
                    id="company-name"
                    className="pl-4 text-white font-semibold"
                  >
                    @ ITC Infotech India Ltd.
                  </span>
                </h3>
                <p
                  id="work-date-location"
                  className="leading-normal text-sm text-white mt-1"
                >
                  May 2017 – May 2019 // Bangalore, India
                </p>
              </header>
              <ul id="work-description-bullets" className="">
                <li className="mt-2.1 ml-1.5 text-sm leading-normal">
                  <span className="-ml-2 select-none">›</span>
                  Hands on experience with cutting edge technologies like AI,
                  ML, AR-VR, IoT etc.
                </li>
                <li className="mt-2.1 ml-1.5 text-sm leading-normal">
                  <span className="-ml-2 select-none">›</span>
                  Developed and deployed NLP based chatbots using Microsoft
                  LUIS, Microsft QNA Maker, Google Dialogflow etc.
                </li>
                <li className="mt-2.1 ml-1.5 text-sm leading-normal">
                  <span className="-ml-2 select-none">›</span>
                  Developed IoT device simulators for remote monitoring, control
                  and automation. Integrated the solution with Microsoft IoT
                  Hub, Mosquito MQTT Broker etc.
                </li>
                <li className="mt-2.1 ml-1.5 text-sm leading-normal">
                  <span className="-ml-2 select-none">›</span>
                  Developed webapps for monitoring and controlling IoT devices,
                  fleet management etc. using ReactJS.
                </li>
                <li className="mt-2.1 ml-1.5 text-sm leading-normal">
                  <span className="-ml-2 select-none">›</span>
                  Developed Face Recognition, Attrubutes and Emotion based
                  solutions for better customer engagement, targeted
                  advertisement etc.
                </li>
              </ul>
            </section>
          </section>
        </section>
        <section className="print:col-span-1 col-span-3 md:col-span-1">
          <section className="col-span-1 mt-8 first:mt-0" id="skills">
            <h2 className="mb-4 font-bold tracking-widest text-sm2 text-purple-700">
              ACHIEVEMENTS
            </h2>
            <section className="mb-1.5" id="fellowships">
              <header>
                <h3 className="text-lg font-semibold text-white leading-snugish">
                  Fellowships
                </h3>
              </header>
              <div className="my-2.5 last:pb-1.5">
                <ul className="flex flex-wrap text-md leading-relaxed -mr-1.6 -mb-2">
                  <li className="px-2.5 mr-1.6 mb-2 text-xs print:bg-white print:border-inset">
                    <span className="-ml-2 select-none">›</span>
                    Prime Minister's Fellowship for Doctoral Research (October
                    2020 - Present)
                  </li>
                  <li className="px-2.5 mr-1.6 mb-2 text-xs print:bg-white print:border-inset">
                    <span className="-ml-2 select-none">›</span>
                    MHRD Gate Fellowship for Post Graduation studies (May 2016 -
                    March 2018)
                  </li>
                </ul>
              </div>
            </section>
            <section className="mb-1.5" id="publications">
              <header>
                <h3 className="text-lg font-semibold text-white leading-snugish">
                  Publications
                </h3>
              </header>
              <div className="my-2.5 last:pb-1.5">
                <ul className="flex flex-wrap text-md leading-relaxed -mr-1.6 -mb-2">
                  <li className="px-2.5 mr-1.6 mb-2 text-xs print:bg-white print:border-inset">
                    <span className="-ml-2 select-none">›</span>
                    Presented research findings in 4 International Conferences
                  </li>
                  <li className="px-2.5 mr-1.6 mb-2 text-xs print:bg-white print:border-inset">
                    <span className="-ml-2 select-none">›</span>
                    Published detailed research analysis and findings in 3
                    prestigious science journals
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-1.5" id="events">
              <header>
                <h3 className="text-lg font-semibold text-white leading-snugish">
                  Events
                </h3>
              </header>
              <div className="my-2.5 last:pb-1.5">
                <ul className="flex flex-wrap text-md leading-relaxed -mr-1.6 -mb-2">
                  <li className="px-2.5 mr-1.6 mb-2 text-xs print:bg-white print:border-inset">
                    <span className="-ml-2 select-none">›</span>
                    Winner of Make-A-Ton 2.0 Hackathon conducted by CITTIC,
                    CUSAT. Developed AR Navigation solution by identifying
                    buildings and landmarks with AI.
                  </li>
                  <li className="px-2.5 mr-1.6 mb-2 text-xs print:bg-white print:border-inset">
                    <span className="-ml-2 select-none">›</span>
                    First Runners Up in Embedded Systems Challenge conducted by
                    C3I Center, IIT Kanpur as part of Cyber Security Awareness
                    Week (CSAW) 2019
                  </li>
                </ul>
              </div>
            </section>
            <section className="mb-1.5" id="exams">
              <header>
                <h3 className="text-lg font-semibold text-white leading-snugish">
                  Qualifications
                </h3>
              </header>
              <div className="my-2.5 last:pb-1.5">
                <ul className="flex flex-wrap text-md leading-relaxed -mr-1.6 -mb-2">
                  <li className="px-2.5 mr-1.6 mb-2 text-xs print:bg-white print:border-inset">
                    <span className="-ml-2 select-none">›</span>
                    Qualified Graduate Aptitude Test in Engineering (GATE) in
                    2016 and 2017
                  </li>
                  <li className="px-2.5 mr-1.6 mb-2 text-xs print:bg-white print:border-inset">
                    <span className="-ml-2 select-none">›</span>
                    Passed Common Admission Test (CAT Exam) with 86.71
                    percentile in 2015
                  </li>
                </ul>
              </div>
            </section>
          </section>
          <section className="col-span-1 mt-8 first:mt-0" id="skills">
            <h2 className="mb-4 font-bold tracking-widest text-sm2 text-purple-700">
              SKILLS
            </h2>
            <section className="mb-1.5" id="programming-languages">
              <header>
                <h3 className="text-lg font-semibold text-white leading-snugish">
                  Programming & Languages
                </h3>
              </header>
              <div className="my-2.5 last:pb-1.5">
                <ul className="flex flex-wrap text-md leading-relaxed -mr-1.6 -mb-2">
                  <li className="px-2.5 mr-1.6 mb-2 text-xs print:bg-white print:border-inset">
                    Python
                  </li>
                  <li className="px-2.5 mr-1.6 mb-2 text-xs print:bg-white print:border-inset">
                    TypeScript
                  </li>
                  <li className="px-2.5 mr-1.6 mb-2 text-xs print:bg-white print:border-inset">
                    JavaScript
                  </li>
                  <li className="px-2.5 mr-1.6 mb-2 text-xs print:bg-white print:border-inset">
                    GraphQL - Hasura
                  </li>
                  <li className="px-2.5 mr-1.6 mb-2 text-xs print:bg-white print:border-inset">
                    SQL
                  </li>
                  <li className="px-2.5 mr-1.6 mb-2 text-xs print:bg-white print:border-inset">
                    HTML and CSS
                  </li>
                </ul>
              </div>
            </section>
          </section>
        </section>
      </div>
    </div>

    // <section id="portfolio" className="text-gray-400 bg-gray-900 body-font">
    //   <div className="container px-5 py-10 mx-auto text-center lg:px-40">
    //     <div className="flex flex-row w-full justify-center">
    //       <BookOpenIcon className="inline-block w-10 mb-4" />
    //       <h1 className="sm:text-4xl text-3xl font-medium title-font ml-4 mb-4 text-white">
    //         My Portfolio
    //       </h1>
    //     </div>

    //     {/* <div className="grid">
    //       <h2 className="lg:w-2/3 mx-auto mb-20 leading-relaxed text-base">
    //         Work Experience
    //       </h2>
    //       <h2 className="lg:w-2/3 mx-auto mb-20 leading-relaxed text-base">
    //         Education
    //       </h2>
    //       <h2 className="lg:w-2/3 mx-auto mb-20 leading-relaxed text-base">
    //         Achievements
    //       </h2>
    //       <h2 className="lg:w-2/3 mx-auto mb-20 leading-relaxed text-base">
    //         Certifications
    //       </h2>
    //     </div> */}
    //   </div>
    // </section>
  );
}
export default function Portfolio() {
  return (
    <div className="App">
      <Layout>
        <PortfolioView />
      </Layout>
    </div>
  );
}
