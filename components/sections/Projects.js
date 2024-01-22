import { CodeIcon } from "@heroicons/react/solid";
import Image from "next/image";
import VideoPlayer from "../videoPlayer";

function ProjectCard(project) {
  return (
    <div className="sm:w-1/2 w-100 p-4">
      <div className="flex relative h-72">
        <div className="absolute inset-0 w-full px-8 py-12 border-4 border-gray-800 bg-gray-900">
          <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
            {project.subtitle}
          </h2>
          <h1 className="title-font text-lg font-medium text-white mb-3">
            {project.title}
          </h1>
          <p className="leading-relaxed">{project.description}</p>
        </div>
        <div className="w-full relative z-8 border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
          <VideoPlayer url={project.video} />
        </div>
      </div>
    </div>
  );
}

const projects = [
  {
    title: "Emovere - An Emotion Recognition App",
    subtitle: "C#, Microsoft UWP, Tensorflow, Python, Keras",
    description:
      "A Microsoft UWP app that uses Tensorflow and Keras to detect emotions. The app is able to detect faces and 7 emotions such as anger, disgust, fear, happy, sad, surprise, neutral.",
    image:
      "https://raw.githubusercontent.com/ajaichemmanam/Emovere-ML/master/assets/emovere.png",
    imageFit: "object-contain",
    link: "https://github.com/ajaichemmanam/Emovere-ML",
  },
  {
    title: "Delivery Optimisation App",
    subtitle: "C#, Javascript, Dotnet, React",
    description:
      "A sample app developed for GSoft to show ideal transit type for each product",
    image:
      "https://raw.githubusercontent.com/ajaichemmanam/gsoft_dotnet_react/main/Screenshots/screen1.png",
    imageFit: "object-contain",
    link: "https://github.com/ajaichemmanam/gsoft_dotnet_react",
  },
  {
    title: "React 3D Keypad/ Keyboard",
    subtitle: "ReactJS, react-pressure library",
    description:
      "This web component remembers the touch pressure along with the number/key pressed, ensuring that the user should also know at what pressure the key was pressed during setup to unlock and get access.",
    image:
      "https://raw.githubusercontent.com/ajaichemmanam/react_3D_Keypad/master/assets/screenshot-keypad.png",
    imageFit: "object-contain",
    link: "https://github.com/ajaichemmanam/react_3D_Keypad",
  },
  {
    title: "Simple Bodypix Python",
    subtitle: "Python, Tensorflow, TensorflowJS",
    description: "A python implementation of Google's BodyPix model",
    image:
      "https://raw.githubusercontent.com/ajaichemmanam/simple_bodypix_python/master/assets/singlepose_partheatmaps.png",
    imageFit: "object-cover",
    link: "https://github.com/ajaichemmanam/simple_bodypix_python",
  },
  {
    title: "Simple Posenet Python",
    subtitle: "Python, Tensorflow, TensorflowJS",
    description: "A python implementation of Google's Posenet model",
    image:
      "https://raw.githubusercontent.com/ajaichemmanam/simple_bodypix_python/master/assets/singlepose.png",
    imageFit: "object-cover",
    link: "https://github.com/ajaichemmanam/simple_posenet_python",
  },
  {
    title: "Chatbots UI made with ReactJS",
    subtitle: "ReactJS",
    description:
      "UI for chatbots capable of showing multimedia contents, such as images, videos, and audio.",
    image:
      "https://raw.githubusercontent.com/ajaichemmanam/react_chatbot_ui/master/assets/ui.png",
    imageFit: "object-cover",
    link: "https://github.com/ajaichemmanam/react_chatbot_ui",
  },
  {
    title: "Conversation Systems with RASA",
    subtitle: "Rasa NLP",
    description:
      "Locally hosted conversational chatbot that can be trained and deployed onpremise using RASA NLP Framework.",
    image: "/static/projectImages/rasa.png",
    imageFit: "object-cover",
    link: "https://github.com/ajaichemmanam/rasachatbot",
  },
  {
    title: "Chatbots with Azure Cognitive Services",
    subtitle: "Microsoft Azure, ReactJS",
    description:
      "Intelligent Conversation systems to showcase product features, image and multimedia contents about products to help users make their choices. Source code is private due to Non-Disclosure Agreement.",
    image: "/static/projectImages/chatbot.png",
    imageFit: "object-contain",
    link: "https://github.com/ajaichemmanam/chatbot",
  },
  {
    title: "Intelligent Cab Routing Platform",
    subtitle: "Python, Flask, ReactJS",
    description:
      "Solving the problem of finding the best cab route for a user based on their destination, cab capacity and time of arrival. Source code is private due to Non-Disclosure Agreement.",
    image: "/static/projectImages/cabrouting.png",
    imageFit: "object-contain",
    link: "https://github.com/ajaichemmanam/cabrouting",
  },
  {
    title: "Simulators for IoT Devices",
    subtitle: "Microsoft Azure IoT Hub, ReactJS",
    description:
      "Simulators to showcase the functionality of IoT devices like sensors, actuators, actuator controllers, etc. Source code is private due to Non-Disclosure Agreement.",
    image: "/static/projectImages/Hvac_simulator.png",
    imageFit: "object-cover",
    link: "https://github.com/ajaichemmanam/deviceSimulator_CSharp",
  },
  {
    title: "Remote Monitoring IOT Devices",
    subtitle: "Microsoft Azure IoT Hub, ReactJS",
    description:
      "Remote Monitoring Solution for IoT devices using ReactJS and Azure IoT Hub. Source code is private due to Non-Disclosure Agreement.",
    image: "/static/projectImages/remote_monitoring.png",
    imageFit: "object-contain",
    link: "https://github.com/ajaichemmanam/remoteMonitoring-webui",
  },
  {
    title: "Connected Vehicles",
    subtitle: "Microsoft Azure IoT Hub, ReactJS",
    description:
      "Fleet Monitoring and Management System for connected vehicles. Geo-fencing, speed, traffic based alerts are generated. Source code is private due to Non-Disclosure Agreement.",
    image: "/static/projectImages/connected_vehicles.png",
    imageFit: "object-contain",
    link: "https://github.com/ajaichemmanam/connectedVechicle-webui",
  },
  {
    title: "Identifying and Tracking People ",
    subtitle: "Python, AI/ML",
    description:
      "Detection, Identification and Tracking people has a lot of use cases in retail, manufacturing, and other industries. This project is a proof of concept for tracking employees in a store. Hover here to see the video demo.",
    video: "static/projectVideos/people_tracking.mp4",
    link: "https://github.com/ajaichemmanam",
  },
  {
    title: "Vehicle Tracking",
    subtitle: "Python, AI/ML",
    description:
      "Detection and Tracking of vehicles along with their attributes such as colour, vehicle type etc. This project is a proof of concept for tracking vehicles in a highway. Hover here to see the video demo.",
    video: "static/projectVideos/vehicle_attributes.mp4",
    link: "https://github.com/ajaichemmanam",
  },
  {
    title: "Restaurant Management",
    subtitle: "Python, AI/ML",
    description:
      "Managment of large restaurant chains often find it difficult to verify whether the guidelines and protocols are being followed by all their outlets. This project tries to identify the time for cleaning the table once the customers leave the restaurant.",
    video: "static/projectVideos/table1.demo.mp4",
    link: "https://github.com/ajaichemmanam",
  },
  {
    title: "Parking Lot Managment",
    subtitle: "Python, AI/ML",
    description:
      "This automated system keeps track of the parking lot and the vehicles that are parked in it. It can identify free lots as well as identify the time for which the vehicle is parked in the lot.",
    video: "static/projectVideos/parking_time.mp4",
    link: "https://github.com/ajaichemmanam",
  },
  {
    title: "Kathai - React WebApp",
    subtitle: "ReactJS, Google Firebase",
    description:
      "An email template generation webapp that can generate dynamic mailers customised for the users. Source code is private due to Non-Disclosure Agreement.",
    image: "/static/projectImages/kathai.png",
    imageFit: "object-contain",
    link: "https://github.com/ajaichemmanam/",
  },
  {
    title: "Green Board Dashboard",
    subtitle: "ReactJS",
    description:
      "Frontend Dashboard for Monitoring and Controlling a Hydroponic System, C3I center IIT Kanpur",
    image:
      "https://raw.githubusercontent.com/ajaichemmanam/greenBoard/master/assets/green_board.png",
    imageFit: "object-cover",
    link: "https://github.com/ajaichemmanam/greenBoard",
  },
  {
    title: "Green Board Backend",
    subtitle: "Python, Tensorflow",
    description:
      "Backend code for Monitoring and Controlling a Hydroponic System, C3I center IIT Kanpur",
    image:
      "https://raw.githubusercontent.com/ajaichemmanam/greenServer/master/diagram.jpg",
    imageFit: "object-cover",
    link: "https://github.com/ajaichemmanam/greenServer",
  },
  {
    title: "Google Maps Go Version",
    subtitle: "Android, Java",
    description:
      "A light weight android app to show Google Map built for Android GO devices.",
    image:
      "https://raw.githubusercontent.com/ajaichemmanam/Maps-Go/master/assets/mapgo.jpeg",
    imageFit: "object-cover",
    link: "https://github.com/ajaichemmanam/Maps-Go",
  },
  {
    title: "GraphQL React Image Processing Example",
    subtitle: "ReactJS, Hasura-GraphQL DB, Azure Functions",
    description:
      "This is a simple react app that connects to a hasura graphql and an azure function. This repo was created for learning how to use hasura graphql with react and process information serverless. It can serve as a boiler plate for similar projects.",
    image:
      "https://raw.githubusercontent.com/ajaichemmanam/graphql-react-image/master/assets/output.png",
    imageFit: "object-cover",
    link: "https://github.com/ajaichemmanam/graphql-react-image",
  },
  {
    title: "Super Resolution with Pytorch Lightning",
    subtitle: "Python, Pytorch Lightning",
    description:
      "An image super resolution project that uses pytorch lightning to train a model",
    image:
      "https://raw.githubusercontent.com/ajaichemmanam/SuperResolution/master/output.jpg",
    imageFit: "object-cover",
    link: "https://github.com/ajaichemmanam/SuperResolution",
  },
  {
    title: "Posenet - React WebApp",
    subtitle: "Python, ReactJS, TensorflowJS",
    description:
      "This project uses Posenet Model in TensorflowJS inside a React Webapp. It uses live webcam feed from the browser and runs the posenet model over it.",
    image:
      "https://raw.githubusercontent.com/ajaichemmanam/Posenet-ReactWebapp/master/docs/output.png",
    imageFit: "object-cover",
    link: "https://github.com/ajaichemmanam/Posenet-ReactWebapp",
  },
];

export default function ProjectsView() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-row w-full justify-center">
          <CodeIcon className="inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font ml-4 mb-4 text-white">
            Apps I've Built
          </h1>
        </div>
        <p className="lg:w-2/3 mx-auto mb-20 leading-relaxed text-base">
          A short glimpse of my past works.
          {/* Source code for some of the projects
          are private (NDA Agreement/Client policy). */}
        </p>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) =>
            project.video ? (
              ProjectCard(project)
            ) : (
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
                      className={
                        "object-center rounded-lg " + project.imageFit ||
                        "object-cover"
                      }
                    />
                  </div>
                  <div className="px-8 py-16 w-full relative z-8 border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
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
            )
          )}
        </div>
      </div>
    </section>
  );
}
