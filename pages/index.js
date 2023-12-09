import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to RENTNZOOM" />
        <p className="description">
          Get ready for Exciting Experiences <code>Thank You.</code>
        </p>
      </main>

      <Footer />
    </div>
  );
}
