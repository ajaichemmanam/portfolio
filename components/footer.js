import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 md:sticky bottom-0 z-10">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center justify-end">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="/" className="ml-3 text-sm">
            &#169; 2022 Copyright : Ajai Chemmanam
          </a>
        </a>
        {/*
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <div className="mr-5">
            <Link href="/">
              <a className="text-white">Home</a>
            </Link>
          </div>
          <div className="mr-5">
            <Link href="/blogs">
              <a className="text-white">My Blogs</a>
            </Link>
          </div>
          <div className="mr-5">
            <Link href="/projects">
              <a className="text-white"> Projects</a>
            </Link>
          </div>
          <div className="mr-5">
            <Link href="/research">
              <a className="text-white"> Research</a>
            </Link>
          </div>
        </nav> */}
      </div>
    </footer>
  );
};

export default Footer;
