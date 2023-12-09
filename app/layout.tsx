import type { Metadata, Viewport } from "next";
import "../styles/global.css";
import HomeNavbar from "../components/homenavbar";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
export const metadata: Metadata = {
  title: {
    default: "Home - Ajai Chemmanam",
    template: `%s - Ajai Chemmanam`,
  },
  description: "Know more about Ajai Chemmanam",
  metadataBase: new URL("https://ajaichemmanam.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ajaichemmanam.vercel.app/",
    title: "Ajai Chemmanam",
    description: "Know more about Ajai Chemmanam",
    siteName: "Ajai Chemmanam",
    images: [
      {
        url: "https://ajaichemmanam.vercel.app/static/testimonialImages/ajai.jpeg",
        width: 800,
        height: 600,
        alt: "Ajai Chemmanam",
      },
    ],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="../static/github-markdown.module.css"
        ></link>
      </head>
      <body>
        {/* <HomeNavbar /> */}
        <Navbar />
        <main className="text-gray-300 bg-gray-900 body-font h-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
