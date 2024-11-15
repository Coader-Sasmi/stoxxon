import Head from "next/head";
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
  title = "Welcome To YardCRM",
  description,
  ogImage,
}: Props) {
  return (
    <>
      <Head>
        <meta property="og:url" content="https://yardcrm.vercel.app/" />
        <meta property="og:type" content="website" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:image" content={ogImage} />
      </Head>
      <main>
        <Navbar />
        {children}
        <Footer />
      </main>
    </>
  );
}
