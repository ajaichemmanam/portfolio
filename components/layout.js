import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";
export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Ajai Chemmanam - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="p-6 text-gray-300 bg-gray-900 body-font">
        {children}
      </main>
      <Footer />
    </div>
  );
}
