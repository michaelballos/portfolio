import { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Michael Ballos</title>
        <meta name="description" content="A Software Developer Portfolio" />
      </Head>

      <main className={styles.main}>
        <p>
          Hello Next.js
        </p>
      </main>
    </div>
  )
}

export default Home
