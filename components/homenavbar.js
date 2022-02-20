import Link from "next/link";

export default function HomeNavbar() {
  return (
    <header className="bg-gray-800 md:sticky top-12 z-1">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="text-white text-xl pr-2">Home</div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <Link href="#about">
            <a className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
              About Me
            </a>
          </Link>
          <Link href="#projects">
            <a className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
              Past Work
            </a>
          </Link>
          <Link href="#skills">
            <a className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
              Skills
            </a>
          </Link>
          <Link href="#testimonials">
            <a className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
              Testimonials
            </a>
          </Link>
          <Link href="#contact">
            <a className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
              Contact
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
