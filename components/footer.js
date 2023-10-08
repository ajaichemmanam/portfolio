import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 md:sticky bottom-0 z-10">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center justify-center">
        <Link href="/" className="title-font text-sm font-medium text-gray-800 dark:text-white ">
          &#169; 2023 Copyright : Ajai Chemmanam
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
