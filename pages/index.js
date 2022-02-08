import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>sourabh.xyz</title>
        <meta name="description" content="About Sourabh" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          🚧 <br></br>Work in progress 💎
        </h1>
        <p className={styles.description}>
          <em>ETA 〜 20/Feb</em>
        </p>
      </main>
    </div>
  );
}
