import Head from "next/head";
import Navbar from "./navbar";
export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Ajai Chemmanam - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="h-full p-6 text-gray-400 bg-gray-900 body-font">
        {children}
      </main>
    </div>
  );
}
