import Head from 'next/head';
import HomePage from "../components/organisms/HomePage/HomePage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="Landing page containing Michael Ballos' experience and skillset"
        />
      </Head>
      <HomePage />
   </>
);
}