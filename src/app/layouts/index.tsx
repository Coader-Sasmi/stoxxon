/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import Footer from "./Footer";
import Navbar from "./Navbar";

type Props = {
  children: JSX.Element[] | JSX.Element;
  title?: string;
  description?: string;
  ogImage?: string;
};
export default function PublicLayout({
  children = <></>,
  title = "Stoxxon Research Services",
  description,
  ogImage,
}: Props) {
  return (
    <>
      <Head>
        <meta property="og:url" content="https://www.stoxxon.com/" />
        <meta property="og:type" content="website" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:image" content={ogImage} />
      </Head>
      <main>
        <Navbar />
        <Link
          href="https://api.whatsapp.com/send?phone=919632445616"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-10 right-4 z-50 flex items-center justify-center w-12 h-12 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition"
        >
          <FaWhatsapp className="text-white w-6 h-6" />
        </Link>
        {children}
        <Footer />
      </main>
    </>
  );
}
