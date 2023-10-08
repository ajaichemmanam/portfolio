import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-gray-800 sticky top-0 z-10 text-gray-800 dark:text-white">
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="title-font font-medium mb-4 md:mb-0 ml-3 text-xl"
        >
          Ajai Chemmanam
        </Link>

        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <Link className="mr-5" href="/">
            Home
          </Link>

          <Link className="mr-5" href="/portfolio">
            Portfolio
          </Link>

          <Link className="mr-5" href="/blogs">
            Blogs
          </Link>

          <Link className="mr-5" href="/projects">
            {" "}
            Projects
          </Link>

          <Link className="mr-5" href="/research">
            Research
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
