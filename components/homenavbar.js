import Link from "next/link";

export default function HomeNavbar() {
  return (
    <header className="text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <Link href="/" className="text-xl pr-2">
          Home
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <Link
            href="/about"
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
          >
            About Me
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
          >
            Projects
          </Link>
          <Link
            href="#skills"
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
          >
            Skills
          </Link>
          <Link
            href="#testimonials"
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
          >
            Testimonials
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
