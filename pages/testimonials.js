import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import Head from "next/head";
import Image from "next/image";

var testimonials = [
  {
    quote:
      "I had worked with Ajai during my masters as well as during my Research at Cochin University of Science and Technology. Ajai is a good mentor and a wonderful educator. He is totally dependable, self-driven enthusiastic individual. His passion for research in AI and ML is honorable. We had collaborated on certain research works in the domain of computer vision and time series analysis. His problem-solving skills are exemplary. I am pleased to recommend Ajai, for any job or research in AI/ML. He will be a valuable asset to your Team. I wish him all the best in his future endeavors.",
    image: "/static/testimonialImages/edwinjose.jpeg",
    profileUrl: "https://www.linkedin.com/in/edwinjosechittilappilly",
    name: "Edwin Jose",
    company: "Research Fellow at IIT Palakkad",
  },
  {
    quote:
      "I worked with Ajai during the initial days of his career. I must say that he is a technology enthusiastic and very quick learner. Also his adaptibility with team culture is also a treat to watch. We worked together in some of our task & I closely observed how quickly he understood the customer requirements & start working on them promptly. Also he was always open to feedbacks. I wish Ajai for all his future endeavours. All the very best, Keep growing.",
    image: "/static/testimonialImages/soumya.jpeg",
    profileUrl: "https://www.linkedin.com/in/skd24x365",
    name: "Soumya Kanta Dey",
    company: "Software Engineer at Cisco",
  },
  {
    quote:
      "I have worked with Ajai for two years and together we have implemented many solutions using state of the art technologies including IoT NLP ( chatbots ) and ML. Ajai is knowledgeable, driven and enthusiastic Machine Learning expert in search of excellence.",
    image: "/static/testimonialImages/salman.jpeg",
    profileUrl: "https://www.linkedin.com/in/salmanul",
    name: "Salmanul Faris K",
    company: "Software Engineer at Cisco",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials">
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
        ></link>
      </Head>
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Testimonials
        </h1>
        <div className="flex flex-wrap m-4">
          {testimonials.map((testimonial) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <blockquote className="leading-relaxed relative mb-6 p-5 m-1">
                  {testimonial.quote}
                </blockquote>
                <a
                  href={testimonial.profileUrl}
                  className="inline-flex items-center"
                >
                  <img
                    alt="testimonial"
                    src={testimonial.image}
                    className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {testimonial.name}
                    </span>
                    <span className="text-gray-500 text-sm uppercase">
                      {testimonial.company}
                    </span>
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
