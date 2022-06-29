import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => (
    <div className={styles.container}>
      <Head>
        <title>Michael Ballos</title>
        <meta name="description" content="A Software Developer Portfolio" />
      </Head>
      <main className={styles.main}>
        <p>
          Hello from Next.js
        </p>
      </main>
    </div>
);

export default Home;
